export function ExperienceSection() {
  return (
    <section className="flex flex-col gap-6" id="experience">
      <div className="text-secondary-fixed-dim font-bold">vedant@portfolio: ~/experience</div>
      <div className="pl-4">
        <span className="text-primary-container">vedant@portfolio :~/experience$</span>{' '}
        <span className="text-pure-white">cat ./experience.txt</span>
        <div className="mt-4 flex flex-col gap-6 pl-4 border-l border-outline-variant">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-secondary-fixed font-bold">CLATQUEST</span>
              <span className="text-label-code text-outline">// Founding Engineer</span>
            </div>
            <p className="text-primary-container mt-2">
              Designed backend architecture, recommendation systems, learner analytics pipelines, and adaptive learning workflows for a legal education platform.
            </p>
            <a
              href="https://www.clatquest.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-primary-fixed hover:text-pure-white transition-colors"
            >
              [ → ./open --url ]
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
