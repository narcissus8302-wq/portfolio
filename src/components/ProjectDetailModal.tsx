import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { Project } from '../data/projects';

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
    ...(project.website ? [{ href: project.website, label: 'Live' }] : []),
    ...(project.pypi ? [{ href: project.pypi, label: 'PyPI' }] : []),
    ...(project.github ? [{ href: project.github, label: 'GitHub' }] : []),
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
        className="terminal-window modal-enter w-full max-w-2xl max-h-[85vh] flex flex-col outline-none"
      >
        <div className="terminal-titlebar">
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="terminal-dot-red cursor-pointer hover:brightness-125 transition-[filter]"
          />
          <span className="terminal-dot-yellow" />
          <span className="terminal-dot-green" />
          <span className="terminal-title-text">~/projects/{project.tag}</span>
          <button
            type="button"
            onClick={onClose}
            className="text-label-code font-label-code text-primary-container hover:text-pure-white transition-colors cursor-pointer"
          >
            {'[ x ]'}
          </button>
        </div>
        <div className="terminal-body terminal-modal-body overflow-y-auto flex flex-col gap-6">
          <div>
            <span>
              <span className="text-secondary-container">vedant</span>
              <span className="text-outline">@</span>
              <span className="text-link-blue">parmane</span>
              <span className="text-secondary-fixed-dim">: ~/projects/{project.tag}</span>
            </span>{' '}
            <span className="text-green-400">$</span> <span className="text-pure-white">cat README.md</span>
          </div>
          <div>
            <h3 id={titleId} className="font-bold text-pure-white text-2xl">
              {project.title.toUpperCase()}
            </h3>
            <div className="text-outline text-body-sm select-none">
              {'──────────────────────────────────────'}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {project.readme.map((section) => (
              <section key={section.heading} className="flex flex-col gap-2">
                <h4 className="font-label-code text-label-code text-primary-fixed">
                  {section.heading}
                </h4>
                <p className="text-body-md text-primary-container whitespace-pre-wrap">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
          {links.length > 0 ? (
            <div className="flex flex-wrap gap-6">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-primary-fixed hover:text-pure-white transition-colors w-fit"
                >
                  {`[ ${link.label} ]`}
                </a>
              ))}
            </div>
          ) : null}
          <div>
            <span className="text-green-400">$</span>{' '}
            <span className="terminal-blink text-primary-fixed">█</span>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
