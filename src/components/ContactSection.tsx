export function ContactSection() {
  return (
    <section id="contact" className="w-full">
      <div className="max-w-[1200px] mx-auto px-8 py-24 flex flex-col items-center text-center gap-8">
        <span className="pill-chip">Contact</span>
        <h2 className="display text-[44px] leading-[0.9] md:text-[64px] md:leading-[1] lg:text-display-sm text-pure">
          Let's <em>talk</em>.
        </h2>
        <p className="font-light text-subheading text-ash max-w-[560px]">
          Open to internships and collaborations. The fastest way to reach me is email.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="mailto:vedantparmane@gmail.com" className="btn btn-primary">
            Email me <span aria-hidden="true">→</span>
          </a>
          <a
            href="https://github.com/vnparmane"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/vedantparmane"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            LinkedIn
          </a>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.182em] text-fog leading-[1.35]">
          vedantparmane@gmail.com
        </p>
      </div>
    </section>
  );
}