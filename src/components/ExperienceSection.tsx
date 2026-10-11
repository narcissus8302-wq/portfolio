export function ExperienceSection() {
  return (
    <section id="experience" className="w-full bg-abyss">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8 py-20 md:py-24 flex flex-col items-center gap-12">
        <div className="flex flex-col items-center text-center gap-4">
          <span className="eyebrow">Experience</span>
          <h2 className="display text-heading-lg text-bone">
            Where I've <em>built</em>.
          </h2>
          <p className="font-light text-subheading text-mist max-w-[560px]">
            Founding-engineer work on a legal education platform — from architecture to
            analytics.
          </p>
        </div>

        <article className="w-full bg-graphite border border-line rounded-card p-6 md:p-8 flex flex-col gap-4">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="display text-[26px] leading-tight text-bone">ClatQuest</h3>
            <span className="label text-sage">Founding Engineer</span>
          </div>
          <p className="text-body text-mist max-w-[760px]">
            Designed backend architecture, recommendation systems, learner analytics
            pipelines, and adaptive learning workflows for a legal education platform.
          </p>
          <a
            href="https://www.clatquest.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-body font-medium text-sage hover:text-bone transition-colors w-fit"
          >
            clatquest.com <span aria-hidden="true">↗</span>
          </a>
        </article>
      </div>
    </section>
  );
}