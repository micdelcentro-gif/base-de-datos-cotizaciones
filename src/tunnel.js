import localtunnel from 'localtunnel';

export async function openTunnel(port) {
  const tunnel = await localtunnel({ port });

  tunnel.on('error', (err) => {
    console.error('\n[RC] Tunnel error:', err.message);
  });

  tunnel.on('close', () => {
    console.log('\n[RC] Tunnel closed');
  });

  return {
    url: tunnel.url,
    close() {
      tunnel.close();
    },
  };
}
