import express from 'express';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { validateSecret } from './session.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function startServer(session, bridge) {
  const app = express();
  const server = createServer(app);
  const wss = new WebSocketServer({ noServer: true });

  const clients = new Set();
  const outputBuffer = [];
  const MAX_BUFFER = 1000;

  app.use(express.static(join(__dirname, '..', 'public')));

  app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  server.on('upgrade', (request, socket, head) => {
    const url = new URL(request.url, `http://${request.headers.host}`);
    const secret = url.searchParams.get('s');

    if (!validateSecret(secret, session.secret)) {
      socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
      socket.destroy();
      return;
    }

    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request);
    });
  });

  wss.on('connection', (ws) => {
    clients.add(ws);

    // Send buffered output history
    for (const line of outputBuffer) {
      ws.send(JSON.stringify({ type: 'output', data: line }));
    }
    ws.send(JSON.stringify({ type: 'status', data: 'connected' }));

    ws.on('message', (raw) => {
      try {
        const msg = JSON.parse(raw.toString());
        if (msg.type === 'input' && msg.data) {
          bridge.write(msg.data + '\n');
        } else if (msg.type === 'command' && msg.action === 'interrupt') {
          bridge.kill('SIGINT');
        }
      } catch {
        // ignore malformed messages
      }
    });

    ws.on('close', () => {
      clients.delete(ws);
    });
  });

  function broadcast(data) {
    outputBuffer.push(data);
    if (outputBuffer.length > MAX_BUFFER) {
      outputBuffer.shift();
    }
    const msg = JSON.stringify({ type: 'output', data });
    for (const client of clients) {
      if (client.readyState === 1) {
        client.send(msg);
      }
    }
  }

  function broadcastStatus(status) {
    const msg = JSON.stringify({ type: 'status', data: status });
    for (const client of clients) {
      if (client.readyState === 1) {
        client.send(msg);
      }
    }
  }

  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => {
      const port = server.address().port;
      resolve({ server, port, broadcast, broadcastStatus });
    });
  });
}
