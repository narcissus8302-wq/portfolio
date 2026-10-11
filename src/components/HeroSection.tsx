import bgImage from '../assets/bg1.jpg';

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full overflow-hidden">
      {/* Photographic hero: sky-atmosphere gradient behind a desaturated cloud photo */}
      <div aria-hidden="true" className="absolute inset-0 sky-atmosphere">
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center saturate-[0.75] brightness-[0.9]"
        />
        {/* Obsidian scrim keeps the whisper headline legible over bright cloud edges */}
        <div className="absolute inset-0 bg-obsidian/50" />
        <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(to_bottom,rgb(15,16,17),rgba(15,16,17,0))]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-[linear-gradient(to_top,rgb(15,16,17),rgba(15,16,17,0))]" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-8 min-h-[calc(100svh_-_80px)] flex flex-col items-center justify-center text-center py-24 gap-8">
        <span className="pill-chip reveal">Open to internships — 2026</span>

        <h1 className="display reveal reveal-2 text-[52px] leading-[0.9] sm:text-[64px] md:text-[80px] md:leading-[1] lg:text-[96px] lg:leading-[0.9] text-pure max-w-[14ch]">
          Building systems that <em>think</em>.
        </h1>

        <p className="reveal reveal-3 font-light text-subheading text-ash max-w-[560px]">
          Vedant Parmane — Computer Engineering student working on AI, machine learning,
          and Python backend systems.
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