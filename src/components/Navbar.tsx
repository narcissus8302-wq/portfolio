interface NavbarProps {
  toggleControls: () => void;
}

export function Navbar({ toggleControls }: NavbarProps) {
  return (
    <nav className="sticky top-0 border-b border-primary-container bg-background w-full z-50">
      <div className="flex justify-between items-center w-full px-8 py-5 max-w-[1200px] mx-auto">
        <a href="#" className="font-label-code text-[18px] font-bold text-primary-container hover:text-primary-fixed transition-colors">
          vedant@portfolio:~$
        </a>
        <div className="flex items-center gap-10">
          <ul className="flex space-x-10">
            <li>
              <a href="#about" className="text-primary-container font-label-code text-body-sm hover:text-primary-fixed transition-colors">
                whoami
              </a>
            </li>
            <li>
              <a href="#experience" className="text-primary-container font-label-code text-body-sm hover:text-primary-fixed transition-colors">
                experience
              </a>
            </li>
            <li>
              <a href="#projects" className="text-primary-container font-label-code text-body-sm hover:text-primary-fixed transition-colors">
                projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-primary-container font-label-code text-body-sm hover:text-primary-fixed transition-colors">
                contact
              </a>
            </li>
          </ul>
          <button
            onClick={toggleControls}
            className="border border-primary-container text-primary-container px-3 py-1 rounded font-label-code text-body-sm hover:bg-primary-container hover:text-background transition-colors cursor-pointer"
          >
            ⚙ CONTROLS
          </button>
        </div>
      </div>
    </nav>
  );
}
