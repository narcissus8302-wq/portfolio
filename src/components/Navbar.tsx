export function Navbar() {
  return (
    <nav className="sticky top-0 border-b border-primary-container bg-background w-full z-50">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-[1200px] mx-auto">
        <a href="#" className="font-label-code text-label-code font-bold text-primary-container hover:text-primary-fixed">
          vedant@portfolio:~$
        </a>
        <ul className="flex space-x-8">
          <li>
            <a href="#about" className="text-primary-container font-label-code text-label-code hover:text-primary-fixed transition-colors">
              whoami
            </a>
          </li>
          <li>
            <a href="#experience" className="text-primary-container font-label-code text-label-code hover:text-primary-fixed transition-colors">
              experience
            </a>
          </li>
          <li>
            <a href="#projects" className="text-primary-container font-label-code text-label-code hover:text-primary-fixed transition-colors">
              projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-primary-container font-label-code text-label-code hover:text-primary-fixed transition-colors">
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
