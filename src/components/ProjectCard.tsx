import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onOpen: () => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const { title, description, tech, role, website, pypi, github, preview } = project;

  const link = website
    ? { href: website, label: website.replace(/^https?:\/\//, '') }
    : pypi
      ? { href: pypi, label: 'pip install' }
      : github
        ? { href: github, label: 'GitHub' }
        : null;

  const problem = project.readme[0]?.body;

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
      className="group relative flex flex-col bg-graphite hover:bg-steel rounded-card overflow-hidden cursor-pointer transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-pure outline-none"
    >
      <div className="p-8 flex flex-col gap-4 flex-grow">
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] uppercase tracking-[0.02em] text-cloud bg-white/[0.06] border border-white/10 rounded-full px-3 py-1 leading-[1.35]"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-subheading text-pure font-normal">{title}</h3>
        <p className="text-body text-ash">{description}</p>
        <div className="text-body-sm flex gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.02em] text-fog leading-[1.67]">
            Role
          </span>
          <span className="text-ash">{role}</span>
        </div>
        <div className="mt-auto pt-2 flex items-center justify-between gap-4">
          <span className="font-mono text-[12px] uppercase tracking-[0.02em] text-pure">
            Open <span aria-hidden="true">→</span>
          </span>
          {link ? (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-body-sm text-ash hover:text-pure transition-colors w-fit truncate max-w-[60%]"
            >
              {link.label}
            </a>
          ) : null}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-abyss flex flex-col gap-3 p-8 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 group-hover:delay-100 pointer-events-none"
      >
        <h3 className="text-subheading text-pure font-normal">{title}</h3>
        {problem ? (
          <p className="text-body-sm text-ash">
            <span className="font-mono text-[11px] uppercase tracking-[0.02em] text-fog block leading-[1.67]">
              Problem
            </span>
            {problem}
          </p>
        ) : null}
        <div className="flex flex-col gap-1.5 mt-auto">
          {preview.map((row) => (
            <div key={row.label} className="flex gap-4 text-body-sm">
              <span className="font-mono text-[11px] uppercase tracking-[0.02em] text-fog min-w-[6.5rem] leading-[1.67]">
                {row.label}
              </span>
              <span className="text-cloud">{row.value}</span>
            </div>
          ))}
        </div>
        <span className="font-mono text-[12px] uppercase tracking-[0.02em] text-pure mt-3">
          Open project <span aria-hidden="true">→</span>
        </span>
      </div>
    </div>
  );
}