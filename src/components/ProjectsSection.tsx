import { ProjectCard } from './ProjectCard';

const categories = [
  {
    name: 'research',
    projects: [
      {
        tag: 'cern-jet-physics',
        title: 'CERN Jet Physics Research',
        description:
          'Physics-aware ML for quark/gluon jet discrimination — GSoC 2026 ML4SCI HEPSIM evaluation task.',
        details:
          'Analyzed simulated quark and gluon jets from Pythia8, computed jet observables in the lab frame, Lorentz-boosted them into the rest frame, and trained a Gradient Boosting classifier (AUC 0.815) for quark/gluon discrimination.',
        tech: 'Python, scikit-learn, Jupyter, Physics-aware Features',
        role: 'Research Project',
        github: 'https://github.com/vnparmane/cern_jet_physic',
      },
    ],
  },
  {
    name: 'live',
    projects: [
      {
        tag: 'lawluminous',
        title: 'LawLuminous',
        description:
          'Legal intelligence and litigation assistant for Indian practitioners — viability checks, fact extraction, drafting.',
        details:
          'Ingests case documents (FIRs, charge sheets, contracts), extracts structured facts via Google Gemini, runs a 5-gate legal viability check (jurisdiction, limitation, arbitration, maintainability, notices), with conversational assistance and legal drafting.',
        tech: 'Python (FastAPI), PostgreSQL, Google Gemini, WebSockets, React',
        role: 'Developer',
        website: 'https://lawluminous.live',
      },
      {
        tag: 'adaptive-learning',
        title: 'Adaptive Learning Platform',
        description:
          'Backend services for personalized learning recommendations and learner analytics.',
        details:
          'Developed backend services for personalized learning recommendations, adaptive difficulty adjustment, learner analytics, and AI-assisted educational workflows.',
        tech: 'Django, Python, Gemini API',
        role: 'Developer',
      },
    ],
  },
  {
    name: 'engineering',
    projects: [
      {
        tag: 'blue-carbon-mrv',
        title: 'MRV System for Blue Carbon',
        description:
          'Verification platform for blue carbon credits — satellite imagery, blockchain attestation, IPFS storage.',
        details:
          'Monitoring, Reporting, and Verification platform for blue carbon ecosystems — satellite imagery via Google Earth Engine, immutable blockchain attestation on Polygon, and IPFS-based storage forming a transparent carbon-credit pipeline.',
        tech: 'Python (FastAPI), Google Earth Engine, Blockchain (Polygon), IPFS, React',
        role: 'Developer',
        github: 'https://github.com/vnparmane/MRV_blue_carbon',
      },
      {
        tag: 'repo-ser',
        title: 'repo-ser',
        description:
          'Deterministic codebase serialization tool for LLM workflows — pack, unpack, dry-run. On PyPI.',
        details:
          'Packs a repository into a canonical manifest with a relative tree view and symbol chunking, and unpacks it back safely with dry-run support. Published on PyPI.',
        tech: 'Python, CLI, PyPI',
        role: 'Developer',
        pypi: 'https://pypi.org/project/repo-ser/',
      },
      {
        tag: 'git-undigest',
        title: 'git-undigest',
        description:
          'Rebuilds full repos from GitIngest-style digests — streaming parser, path-traversal safe.',
        details:
          'Reconstructs a full repository — folder structure and all — from a GitIngest-style digest file. Streaming parser handles multi-GB digests with constant memory, with path-traversal protection, pluggable formats, and dry-run mode. Published on PyPI.',
        tech: 'Python, CLI, PyPI',
        role: 'Developer',
        github: 'https://github.com/vnparmane/git-undigest',
      },
      {
        tag: 'achilles',
        title: 'Achilles',
        description:
          'Desktop inventory and billing system — parties, godowns, invoicing, stock tracking.',
        details:
          'Parties, items, godowns, purchases, invoices, payments, and stock tracking backed by SQLAlchemy models, Alembic migrations, and report generation.',
        tech: 'Python, SQLAlchemy, Qt, SQLite',
        role: 'Developer',
        github: 'https://github.com/vnparmane/Achilles',
      },
      {
        tag: 'paper-scraper',
        title: 'Paper Scraper',
        description:
          'Research Synthesis Studio — arXiv/Semantic Scholar ingestion, RAG, streamed surveys.',
        details:
          'Automated paper ingestion from arXiv and Semantic Scholar with query expansion and deduplication, a RAG pipeline for chunking and embedding, and LLM-generated hierarchical survey documents streamed in real time via WebSocket.',
        tech: 'Python (FastAPI), RAG, arXiv, Semantic Scholar, React',
        role: 'Developer',
        github: 'https://github.com/vnparmane/Paper_Scraper',
      },
      {
        tag: 'reddit-reconnaissance',
        title: 'Reddit-Reconnaissance',
        description:
          'Reddit research pipeline — embedding clustering, token ranking, deduplication.',
        details:
          'Collects and analyzes Reddit data through embeddings-based clustering, token ranking, and deduplication, with results streamed through a Next.js dashboard.',
        tech: 'Python (FastAPI), Embeddings, Clustering, Next.js',
        role: 'Developer',
        github: 'https://github.com/vnparmane/Reddit-Reconnaissance',
      },
    ],
  },
];

export function ProjectsSection() {
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
              <ProjectCard key={project.tag} {...project} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}