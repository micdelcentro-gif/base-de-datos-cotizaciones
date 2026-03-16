import { createSession } from './session.js';
import { startServer } from './server.js';
import { spawnClaude } from './claude-bridge.js';
import { openTunnel } from './tunnel.js';
import { showQR } from './qr.js';

export async function start() {
  const session = createSession();

  // Create a bridge proxy that we'll wire up after server starts
  const bridgeProxy = {
    write: () => {},
    kill: () => {},
  };

  // Start server
  const { server, port, broadcast, broadcastStatus } = await startServer(session, bridgeProxy);

  // Open tunnel
  console.log('[RC] Abriendo tunnel...');
  const tunnel = await openTunnel(port);

  // Build URL with secret
  const remoteUrl = `${tunnel.url}?s=${session.secret}`;

  // Show QR
  showQR(remoteUrl);

  // Spawn Claude Code
  const bridge = spawnClaude(
    (data) => broadcast(data),
    (exitCode) => {
      broadcastStatus('claude-exited');
      console.log(`\n[RC] Claude terminó (código: ${exitCode})`);
      cleanup();
    }
  );

  // Wire up the proxy
  bridgeProxy.write = (data) => bridge.write(data);
  bridgeProxy.kill = (signal) => bridge.kill(signal);

  // Handle local stdin for direct terminal input too
  if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
  }
  process.stdin.resume();
  process.stdin.on('data', (data) => {
    bridge.write(data.toString());
  });

  function cleanup() {
    tunnel.close();
    server.close();
    process.stdin.pause();
    if (process.stdin.isTTY) {
      process.stdin.setRawMode(false);
    }
    process.exit(0);
  }

  process.on('SIGINT', () => {
    bridge.kill('SIGINT');
  });

  process.on('SIGTERM', cleanup);
}
