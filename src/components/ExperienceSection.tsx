export function ExperienceSection() {
  return (
    <section id="experience" className="w-full bg-abyss">
      <div className="max-w-[1200px] mx-auto px-8 py-20 flex flex-col items-center gap-12">
        <div className="flex flex-col items-center text-center gap-6">
          <span className="pill-chip">Experience</span>
          <h2 className="display text-heading-lg text-pure">
            Where I've <em>built</em>.
          </h2>
          <p className="font-light text-subheading text-ash max-w-[560px]">
            Founding-engineer work on a legal education platform — from architecture to
            analytics.
          </p>
        </div>

        <article className="w-full bg-graphite rounded-card p-8 md:p-10 flex flex-col gap-5">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h3 className="display text-heading-lg text-pure">ClatQuest</h3>
            <span className="font-mono text-[12px] uppercase tracking-[0.02em] leading-[2] text-fog">
              Founding Engineer
            </span>
          </div>
          <p className="text-body text-ash max-w-[760px]">
            Designed backend architecture, recommendation systems, learner analytics
            pipelines, and adaptive learning workflows for a legal education platform.
          </p>
          <a
            href="https://www.clatquest.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-body text-pure hover:text-cloud transition-colors w-fit"
          >
            clatquest.com <span aria-hidden="true">→</span>
          </a>
        </article>
      </div>
    </section>
  );
}