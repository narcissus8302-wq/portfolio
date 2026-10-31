import { useEffect, useState } from 'react';
import subjectMask from '../assets/hero-subject-mask.png';

export function HeroSection() {
  const [maskReady, setMaskReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const image = new Image();
    image.onload = () => {
      if (!cancelled) setMaskReady(true);
    };
    image.src = subjectMask;

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="hero" className="hero relative w-full overflow-hidden bg-obsidian">
      <div aria-hidden="true" className="hero-photo hero-background" />
      <div
        aria-hidden="true"
        className={`hero-photo hero-subject${maskReady ? ' hero-subject-ready' : ''}`}
      />

      <div className="hero-content relative max-w-[1120px] mx-auto px-6 md:px-8 min-h-[calc(100svh_-_72px)] flex flex-col items-center justify-center text-center py-24 gap-7">
        <span className="status-chip reveal relative z-30">
          Open to internships — 2026
        </span>

        <h1 className="hero-title display reveal reveal-2 relative z-10 text-bone max-w-[14ch] [text-shadow:0_2px_28px_rgba(0,0,0,0.45)]">
          Building systems that <em>think</em>.
        </h1>

        <p className="reveal reveal-3 relative z-30 font-light text-subheading text-mist max-w-[560px] [text-shadow:0_1px_16px_rgba(0,0,0,0.65)]">
          AI systems, machine learning infrastructure, and software built beyond the
          prototype.
        </p>

        <div className="reveal reveal-4 relative z-30 flex flex-wrap items-center justify-center gap-4">
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
