export function Footer() {
  return (
    <footer className="border-t border-dashed border-outline-variant bg-background mt-auto relative z-50">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-[1200px] mx-auto text-label-code font-label-code text-outline">
        <div className="text-primary-container font-bold">
          Built with React, TypeScript, Tailwind CSS, and Vite. © 2026 Vedant Parmane
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary-fixed transition-colors cursor-pointer text-primary-container">
            v2.4.0 [STABLE]
          </a>
          <a href="https://github.com/vnparmane" target="_blank" rel="noopener noreferrer" className="hover:text-primary-fixed transition-colors cursor-pointer text-outline">
            github
          </a>
          <a href="https://linkedin.com/in/vedantparmane" target="_blank" rel="noopener noreferrer" className="hover:text-primary-fixed transition-colors cursor-pointer text-outline">
            linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}
