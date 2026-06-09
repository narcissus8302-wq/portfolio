export function ContactSection() {
  return (
    <section className="flex flex-col gap-6" id="contact">
      <div className="text-secondary-fixed-dim font-bold">vedant@portfolio: ~/contact</div>
      <div className="pl-4">
        <span className="text-primary-container">vedant@portfolio :~/contact$</span>{' '}
        <span className="text-pure-white">cat ./links.txt</span>
        <div className="mt-4 flex flex-col gap-4 text-primary-container pl-4 border-l border-outline-variant">
          <div className="text-outline italic">// Let's connect</div>
          <ul className="flex flex-col gap-2">
            <li>
              GITHUB →{' '}
              <a
                href="https://github.com/vnparmane"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-fixed hover:text-pure-white transition-colors"
              >
                [/vnparmane]
              </a>
            </li>
            <li>
              LINKEDIN →{' '}
              <a
                href="https://linkedin.com/in/vedantparmane"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-fixed hover:text-pure-white transition-colors"
              >
                [/in/vedantparmane]
              </a>
            </li>
            <li>
              EMAIL →{' '}
              <a
                href="mailto:vedantparmane@gmail.com"
                className="text-primary-fixed hover:text-pure-white transition-colors"
              >
                [vedantparmane@gmail.com]
              </a>
            </li>
          </ul>
          <div className="text-outline italic mt-4">// Open to internships and collaborations</div>
          <p>PROJECTS → Available on GitHub</p>
        </div>
        <div className="mt-6">
          <span className="text-primary-container">vedant@portfolio :~/contact$</span>{' '}
          <span className="terminal-blink font-bold text-pure-white">_</span>
        </div>
      </div>
    </section>
  );
}
