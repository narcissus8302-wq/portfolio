const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  return (
    <header className="glass-nav">
      <div className="flex items-center justify-between w-full max-w-[1120px] mx-auto px-6 md:px-8 py-4 gap-6">
        <a
          href="#hero"
          className="display text-[21px] leading-none text-bone hover:text-sage transition-colors"
        >
          Vedant Parmane
        </a>
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-primary">
          Get in touch <span aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  );
}