import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onOpen: () => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const { tag, title, description, tech, role, website, pypi, github, preview } = project;

  const link = website
    ? { href: website, label: website.replace(/^https?:\/\//, '') }
    : pypi
      ? { href: pypi, label: 'pip install repo-ser' }
      : github
        ? { href: github, label: './clone --git' }
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
      className="relative flex flex-col border border-outline-variant rounded overflow-hidden bg-surface-container hover:border-primary-fixed focus-visible:border-primary-fixed focus-visible:outline-none transition-colors duration-300 group cursor-pointer"
    >
      <div className="h-32 overflow-hidden bg-terminal-black flex items-center p-4 border-b border-outline-variant/30">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-2">
            <span className="text-green-400 font-label-code text-label-code">$</span>
            <span className="text-primary-fixed font-label-code text-label-code">cd ./{tag}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="text-label-code font-label-code text-primary-container border border-outline-variant/40 px-2 py-0.5 rounded"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-7 flex flex-col gap-4 flex-grow">
        <h3 className="font-bold text-pure-white text-xl">{title}</h3>
        <p className="text-body-lg text-primary-container">{description}</p>
        <div className="text-body-sm text-outline">
          <span className="text-secondary-fixed">Role:</span> {role}
        </div>
        <div className="mt-auto flex items-center justify-between gap-4">
          <span className="text-label-code font-label-code text-primary-fixed">{'[ ▸ open ]'}</span>
          {link ? (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-block text-primary-fixed hover:text-pure-white transition-colors w-fit"
            >
              {`[ → ${link.label} ]`}
            </a>
          ) : null}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded bg-terminal-black/95 border border-primary-fixed flex flex-col gap-3 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-150 group-hover:delay-150 pointer-events-none"
      >
        <h3 className="font-bold text-pure-white text-xl">{title}</h3>
        {problem ? (
          <p className="text-body-md text-primary-container">
            <span className="text-secondary-fixed">Problem</span> — {problem}
          </p>
        ) : null}
        <div className="flex flex-col gap-1.5 mt-1">
          {preview.map((row) => (
            <div key={row.label} className="flex text-body-sm">
              <span className="text-outline min-w-[6.5rem]">{row.label}</span>
              <span className="text-primary-container">{row.value}</span>
            </div>
          ))}
        </div>
        <span className="mt-auto text-label-code font-label-code text-primary-fixed">
          {'[ OPEN PROJECT ]'}
        </span>
      </div>
    </div>
  );
}
