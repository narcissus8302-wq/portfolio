import type { ReactNode } from 'react';

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
}

export function TerminalWindow({ title, children }: TerminalWindowProps) {
  return (
    <div className="terminal-window">
      <div className="terminal-titlebar">
        <div className="terminal-dots">
          <span className="terminal-dot-red" />
          <span className="terminal-dot-yellow" />
          <span className="terminal-dot-green" />
        </div>
        <span className="terminal-title-text">{title}</span>
      </div>
      <div className="terminal-body">
        {children}
      </div>
    </div>
  );
}
