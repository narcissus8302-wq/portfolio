export function ContactSection() {
  return (
    <section id="contact" className="w-full">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8 py-20 md:py-24 flex flex-col items-center text-center gap-7">
        <span className="eyebrow">Contact</span>
        <h2 className="display text-display-sm text-bone">
          Let's <em>talk</em>.
        </h2>
        <p className="font-light text-subheading text-mist max-w-[540px]">
          Open to internships and collaborations. The fastest way to reach me is email.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="mailto:vedantparmane@gmail.com" className="btn btn-primary">
            Email me <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/vnparmane"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body text-stone hover:text-bone transition-colors"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://linkedin.com/in/vedantparmane"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body text-stone hover:text-bone transition-colors"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="label normal-case tracking-[0.08em] text-[12px]">
          vedantparmane@gmail.com
        </p>
      </div>
    </section>
  );
}