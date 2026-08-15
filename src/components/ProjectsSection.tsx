import { useCallback, useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import { categories, type Project } from '../data/projects';

export function ProjectsSection() {
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const closeProject = useCallback(() => setOpenProject(null), []);

  return (
    <section className="flex flex-col gap-8" id="projects">
      <div className="font-bold mt-2 text-lg"><span className="text-secondary-container">vedant</span><span className="text-outline">@</span><span className="text-link-blue">parmane</span><span className="text-secondary-fixed-dim">: ~/projects</span></div>
      <div className="pl-4">
        <span><span className="text-secondary-container">vedant</span><span className="text-outline">@</span><span className="text-primary-container">parmane :~/projects$</span></span>{' '}
        <span className="text-pure-white">ls -la</span>
        <div className="mt-2 text-primary-container">
          <p className="text-outline">total 3</p>
          {categories.map((category) => (
            <p key={category.name} className="whitespace-pre">drwxr-xr-x  {category.name}</p>
          ))}
        </div>
      </div>
      {categories.map((category) => (
        <div key={category.name} className="flex flex-col gap-8 pl-4 mt-2">
          <div>
            <span><span className="text-secondary-container">vedant</span><span className="text-outline">@</span><span className="text-primary-container">parmane :~/projects/{category.name}$</span></span>{' '}
            <span className="text-pure-white">ls</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {category.projects.map((project) => (
              <ProjectCard
                key={project.tag}
                project={project}
                onOpen={() => setOpenProject(project)}
              />
            ))}
          </div>
        </div>
      ))}
      {openProject ? (
        <ProjectDetailModal project={openProject} onClose={closeProject} />
      ) : null}
    </section>
  );
}
