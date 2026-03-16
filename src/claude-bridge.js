import pty from 'node-pty';

export function spawnClaude(onData, onExit) {
  const shell = process.env.SHELL || '/bin/zsh';

  const proc = pty.spawn(shell, ['-c', 'claude'], {
    name: 'xterm-256color',
    cols: 120,
    rows: 40,
    cwd: process.cwd(),
    env: { ...process.env, TERM: 'xterm-256color' },
  });

  proc.onData((data) => {
    process.stdout.write(data);
    onData(data);
  });

  proc.onExit(({ exitCode }) => {
    onExit(exitCode);
  });

  return {
    write(data) {
      proc.write(data);
    },
    kill(signal) {
      proc.kill(signal);
    },
    resize(cols, rows) {
      proc.resize(cols, rows);
    },
    get pid() {
      return proc.pid;
    },
  };
}
