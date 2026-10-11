import { useCallback, useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import { categories, type Project, type ProjectKind } from '../data/projects';

interface CategoryMeta {
  title: string;
  blurb: string;
  tileClass: string;
  labelClass: string;
  bodyClass: string;
}

const categoryMeta: Record<ProjectKind, CategoryMeta> = {
  research: {
    title: 'Research',
    blurb: 'Experiments and evaluation-driven machine learning.',
    tileClass: 'bg-iris-gleam text-pure',
    labelClass: 'text-white/80',
    bodyClass: 'text-white/90',
  },
  live: {
    title: 'Live Products',
    blurb: 'Shipped software in production, used by real people.',
    tileClass: 'bg-orchid-bloom text-void',
    labelClass: 'text-void/60',
    bodyClass: 'text-void/80',
  },
  engineering: {
    title: 'Engineering',
    blurb: 'Backend systems, APIs, and developer tooling.',
    tileClass: 'bg-periwinkle text-void',
    labelClass: 'text-void/60',
    bodyClass: 'text-void/80',
  },
};

export function ProjectsSection() {
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const closeProject = useCallback(() => setOpenProject(null), []);

  return (
    <section id="projects" className="w-full">
      <div className="max-w-[1200px] mx-auto px-8 py-20 flex flex-col items-center gap-20">
        <div className="flex flex-col items-center text-center gap-6">
          <span className="pill-chip">Projects</span>
          <h2 className="display text-heading-lg text-pure">
            Selected <em>work</em>.
          </h2>
          <p className="font-light text-subheading text-ash max-w-[560px]">
            Research, products, and engineering — grouped by how they're used.
          </p>
        </div>

        {categories.map((category, index) => {
          const meta = categoryMeta[category.name];
          return (
            <div key={category.name} className="flex flex-col gap-6 w-full">
              <div
                className={`rounded-feature p-8 md:p-10 flex flex-col gap-3 ${meta.tileClass}`}
              >
                <span
                  className={`font-mono text-[11px] uppercase tracking-[0.182em] leading-[1.35] ${meta.labelClass}`}
                >
                  {String(index + 1).padStart(2, '0')} — {category.projects.length}{" "}
                  {category.projects.length === 1 ? 'Project' : 'Projects'}
                </span>
                <h3 className="display text-heading-lg">{meta.title}</h3>
                <p className={`text-body max-w-[560px] ${meta.bodyClass}`}>{meta.blurb}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.projects.map((project) => (
                  <ProjectCard
                    key={project.tag}
                    project={project}
                    onOpen={() => setOpenProject(project)}
                  />
                ))}
              </div>
            </div>
          );
        })}

        {openProject ? (
          <ProjectDetailModal project={openProject} onClose={closeProject} />
        ) : null}
      </div>
    </section>
  );
}