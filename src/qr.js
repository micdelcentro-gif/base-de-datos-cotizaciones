import qrcode from 'qrcode-terminal';

export function showQR(url) {
  console.log('\n┌─────────────────────────────────────────┐');
  console.log('│  RC - Remote Control para Claude Code   │');
  console.log('└─────────────────────────────────────────┘\n');

  qrcode.generate(url, { small: true }, (code) => {
    console.log(code);
  });

  console.log(`\n  URL: ${url}\n`);
  console.log('  Escaneá el QR con tu celular para conectarte.');
  console.log('  Tu agente aparece abajo ↓\n');
  console.log('─'.repeat(50));
}
