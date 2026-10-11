import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { kindLabels, type Project } from '../data/projects';

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === 'Tab') {
        const focusables = Array.from(
          dialogRef.current?.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
          ) ?? [],
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement;
        if (e.shiftKey && (active === first || active === dialogRef.current)) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  const links = [
    ...(project.website ? [{ href: project.website, label: 'Live site' }] : []),
    ...(project.pypi ? [{ href: project.pypi, label: 'PyPI' }] : []),
    ...(project.github ? [{ href: project.github, label: 'Repository' }] : []),
  ];

  const titleId = `project-dialog-title-${project.tag}`;

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="modal-enter w-full max-w-2xl max-h-[85vh] bg-graphite border border-line rounded-card overflow-hidden flex flex-col outline-none"
      >
        <div className="flex items-center justify-between gap-4 px-6 md:px-8 py-5 border-b border-line">
          <span className="label truncate">
            Projects / {project.tag}
          </span>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="text-bone hover:text-sage transition-colors cursor-pointer text-xl leading-none shrink-0"
          >
            ✕
          </button>
        </div>
        <div className="modal-scroll overflow-y-auto px-6 md:px-8 py-8 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <span className="label text-sage">
              {kindLabels[project.kind]} · {project.role}
            </span>
            <h3 id={titleId} className="display text-heading-lg text-bone">
              {project.title}
            </h3>
            <p className="text-body text-mist">{project.description}</p>
          </div>
          <div className="flex flex-col gap-6">
            {project.readme.map((section) => (
              <section key={section.heading} className="flex flex-col gap-2">
                <h4 className="label">{section.heading}</h4>
                <p className="text-body text-mist whitespace-pre-wrap">{section.body}</p>
              </section>
            ))}
          </div>
          {links.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {links.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={index === 0 ? 'btn btn-primary' : 'btn btn-ghost'}
                >
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>,
    document.body,
  );
}