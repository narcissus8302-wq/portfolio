export function Footer() {
  return (
    <footer className="w-full bg-abyss border-t border-white/10 mt-auto">
      <div className="max-w-[1200px] mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.182em] text-fog leading-[1.35] text-center md:text-left">
          © 2026 Vedant Parmane — React · TypeScript · Tailwind · Vite
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/vnparmane"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.182em] text-ash hover:text-pure transition-colors leading-[1.35]"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/vedantparmane"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.182em] text-ash hover:text-pure transition-colors leading-[1.35]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}