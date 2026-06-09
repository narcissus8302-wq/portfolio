import { ProjectCard } from './ProjectCard';

const projects = [
  {
    tag: 'cern-jet-physics',
    title: 'CERN Jet Physics Research',
    description:
      'Built machine learning workflows for jet classification using CERN Open Data particle collision datasets. Developed preprocessing pipelines, feature engineering workflows, and evaluated models using physics-aware validation approaches.',
    tech: 'Python, Machine Learning, Data Analysis',
    role: 'Research Project',
    github: 'https://github.com/vnparmane/cern_jet_physic',
  },
  {
    tag: 'blue-carbon-mrv',
    title: 'MRV System for Blue Carbon',
    description:
      'Developed an end-to-end monitoring, reporting, and verification platform for carbon credit validation using geospatial imagery, computer vision workflows, and blockchain-backed verification concepts.',
    tech: 'Python, Geospatial AI, Computer Vision',
    role: 'Developer',
    github: 'https://github.com/vnparmane/MRV_blue_carbon',
  },
  {
    tag: 'nyay-ai',
    title: 'Nyay AI',
    description:
      'Built a legal AI platform using Retrieval-Augmented Generation (RAG) for legal document retrieval and case-law analysis. Implemented document chunking, embeddings, retrieval pipelines, and FastAPI backend services.',
    tech: 'Python, LangChain, FastAPI, RAG, MongoDB',
    role: 'Developer',
    github: 'https://github.com/vnparmane/Nyay-Ai',
  },
  {
    tag: 'adaptive-learning',
    title: 'Adaptive Learning Platform',
    description:
      'Developed backend services for personalized learning recommendations, adaptive difficulty adjustment, learner analytics, and AI-assisted educational workflows.',
    tech: 'Django, Python, Gemini API',
    role: 'Developer',
  },
];

export function ProjectsSection() {
  return (
    <section className="flex flex-col gap-8" id="projects">
      <div className="text-secondary-fixed-dim font-bold">vedant@portfolio: ~/projects</div>
      <div className="pl-4">
        <span className="text-primary-container">vedant@portfolio :~/projects$</span>{' '}
        <span className="text-pure-white">ls -la</span>
        <p className="mt-2 text-outline">total 4 featured projects</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-4 mt-4">
        {projects.map((project) => (
          <ProjectCard key={project.tag} {...project} />
        ))}
      </div>
    </section>
  );
}
