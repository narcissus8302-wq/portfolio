import { kindLabels, type Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onOpen: () => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const { title, description, tech, kind, website, pypi, github, featured } = project;

  const action = website
    ? { href: website, label: 'Visit site' }
    : pypi
      ? { href: pypi, label: 'View on PyPI' }
      : github
        ? { href: github, label: 'View repository' }
        : null;

  const rows =
    featured && project.highlights
      ? project.highlights
      : project.preview.filter((row) => row.label !== 'Stack');

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Open ${title} details`}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.target !== e.currentTarget) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen();
        }
      }}
      className={`group flex flex-col gap-5 bg-graphite border border-line hover:bg-steel hover:border-stone rounded-card p-6 cursor-pointer transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-bone outline-none ${featured ? 'md:col-span-2' : ''}`}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="label text-sage">
          {featured ? `${kindLabels[kind]} · Featured` : kindLabels[kind]}
        </span>
        {website ? (
          <span className="label inline-flex items-center gap-2 text-sage">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-sage" />
            Live
          </span>
        ) : null}
      </div>

      <div className={featured ? 'grid md:grid-cols-2 gap-6' : 'flex flex-col gap-3'}>
        <div className="flex flex-col gap-3">
          <h3
            className={`display leading-snug text-bone ${featured ? 'text-[30px]' : 'text-[22px]'}`}
          >
            {title}
          </h3>
          <p className={featured ? 'text-subheading text-mist font-light' : 'text-body text-mist'}>
            {description}
          </p>
          {!featured ? (
            <dl className="flex flex-col gap-2.5 border-t border-line pt-4 mt-1">
              {rows.map((row) => (
                <div key={row.label} className="flex gap-4 text-body-sm">
                  <dt className="label shrink-0 min-w-[5.5rem]">{row.label}</dt>
                  <dd className="text-bone">{row.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
        {featured ? (
          <dl className="flex flex-col gap-3 border-t border-line pt-4 md:mt-1 md:border-t-0 md:border-l md:border-line md:pt-0 md:pl-6">
            {rows.map((row) => (
              <div key={row.label} className="flex flex-col gap-0.5">
                <dt className="label">{row.label}</dt>
                <dd className="text-body-sm text-bone">{row.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>

      <div className="mt-auto flex items-end justify-between gap-4 border-t border-line pt-4">
        <span className="label">
          {tech.slice(0, 3).join(' · ')}
          {tech.length > 3 ? ` +${tech.length - 3}` : ''}
        </span>
        {action ? (
          <a
            href={action.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="label text-sage hover:text-bone transition-colors shrink-0"
          >
            {action.label} <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <span className="label text-sage shrink-0">
            Open <span aria-hidden="true">→</span>
          </span>
        )}
      </div>
    </div>
  );
}