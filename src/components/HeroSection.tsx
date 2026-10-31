import bgImage from '../assets/bg1.jpg';

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-obsidian">
      {/* Photographic hero — darkened so the headline owns the first screen */}
      <div aria-hidden="true" className="absolute inset-0">
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[30%_30%] saturate-[0.85] brightness-[0.88]"
        />
        <div className="absolute inset-0 bg-obsidian/30" />
        <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(to_bottom,rgb(16,17,16),rgba(16,17,16,0))]" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-[linear-gradient(to_top,rgb(16,17,16),rgba(16,17,16,0))]" />
      </div>

      <div className="relative max-w-[1120px] mx-auto px-6 md:px-8 min-h-[calc(100svh_-_72px)] flex flex-col items-center justify-center text-center py-24 gap-7">
        <span className="status-chip reveal">Open to internships — 2026</span>

        <h1 className="display reveal reveal-2 text-[clamp(56px,8vw,80px)] leading-[0.9] text-bone max-w-[14ch] [text-shadow:0_2px_28px_rgba(0,0,0,0.45)]">
          Building systems that <em>think</em>.
        </h1>

        <p className="reveal reveal-3 font-light text-subheading text-mist max-w-[560px] [text-shadow:0_1px_16px_rgba(0,0,0,0.65)]">
          AI systems, machine learning infrastructure, and software built beyond the
          prototype.
        </p>

        <div className="reveal reveal-4 flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="btn btn-primary">
            Get in touch <span aria-hidden="true">→</span>
          </a>
          <a href="#projects" className="btn btn-ghost">
            View selected work
          </a>
        </div>
      </div>
    </section>
  );
}