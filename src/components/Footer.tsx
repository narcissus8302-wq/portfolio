export function Footer() {
  return (
    <footer className="w-full bg-abyss border-t border-line">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="label text-center md:text-left">© 2026 Vedant Parmane</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/vnparmane"
            target="_blank"
            rel="noopener noreferrer"
            className="label hover:text-bone transition-colors"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://linkedin.com/in/vedantparmane"
            target="_blank"
            rel="noopener noreferrer"
            className="label hover:text-bone transition-colors"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
}