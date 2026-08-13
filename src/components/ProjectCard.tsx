import { useState } from 'react';

interface ProjectCardProps {
  tag: string;
  title: string;
  description: string;
  tech: string;
  role: string;
  details?: string;
  github?: string;
  pypi?: string;
  website?: string;
}

export function ProjectCard({
  tag,
  title,
  description,
  tech,
  role,
  details,
  github,
  pypi,
  website,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  const link = website
    ? { href: website, label: website.replace(/^https?:\/\//, '') }
    : pypi
      ? { href: pypi, label: 'pip install repo-ser' }
      : github
        ? { href: github, label: './clone --git' }
        : null;

  return (
    <div className="flex flex-col border border-outline-variant rounded overflow-hidden bg-surface-container hover:border-primary-fixed transition-colors duration-300 group">
      <div className="h-32 overflow-hidden bg-terminal-black flex items-center p-4 border-b border-outline-variant/30">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-2">
            <span className="text-green-400 font-label-code text-label-code">$</span>
            <span className="text-primary-fixed font-label-code text-label-code">cd ./{tag}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tech.split(', ').map((t) => (
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
      <div className="p-7 flex flex-col gap-4">
        <h3 className="font-bold text-pure-white text-xl">{title}</h3>
        <p className="text-body-lg text-primary-container">{description}</p>
        {details ? (
          <div id={`details-${tag}`}>
            {expanded ? (
              <p className="text-body-md text-primary-container mt-2">{details}</p>
            ) : null}
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls={`details-${tag}`}
              onClick={() => setExpanded((v) => !v)}
              className="mt-2 inline-block text-primary-fixed hover:text-pure-white transition-colors w-fit cursor-pointer"
            >
              {expanded ? '[ ▾ collapse ]' : '[ ▸ expand ]'}
            </button>
          </div>
        ) : null}
        <div className="text-body-sm text-outline mt-2">
          <span className="text-secondary-fixed">Role:</span> {role}
        </div>
        {link ? (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-block text-primary-fixed hover:text-pure-white transition-colors w-fit"
          >
            {`[ → ${link.label} ]`}
          </a>
        ) : null}
      </div>
    </div>
  );
}