import { useCallback, useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import { categories, type Project, type ProjectKind } from '../data/projects';

interface CategoryMeta {
  title: string;
  blurb: string;
}

const categoryMeta: Record<ProjectKind, CategoryMeta> = {
  research: {
    title: 'Research',
    blurb: 'Experiments and evaluation-driven machine learning.',
  },
  live: {
    title: 'Live Products',
    blurb: 'Shipped software in production, used by real people.',
  },
  engineering: {
    title: 'Engineering',
    blurb: 'Backend systems, APIs, and developer tooling.',
  },
};

export function ProjectsSection() {
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const closeProject = useCallback(() => setOpenProject(null), []);

  return (
    <section id="projects" className="w-full">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8 py-20 md:py-24 flex flex-col items-center gap-14">
        <div className="flex flex-col items-center text-center gap-4">
          <span className="eyebrow">Projects</span>
          <h2 className="display text-heading-lg text-bone">
            Selected <em>work</em>.
          </h2>
          <p className="font-light text-subheading text-mist max-w-[560px]">
            Research, products, and engineering — grouped by how they're used.
          </p>
        </div>

        {categories.map((category) => {
          const meta = categoryMeta[category.name];
          return (
            <div key={category.name} className="flex flex-col gap-5 w-full">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line pb-4">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="eyebrow">{meta.title}</span>
                  <span className="text-body-sm text-stone">{meta.blurb}</span>
                </div>
                <span className="label">
                  {String(category.projects.length).padStart(2, '0')}{' '}
                  {category.projects.length === 1 ? 'Project' : 'Projects'}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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