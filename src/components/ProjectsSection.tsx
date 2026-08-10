import { ProjectCard } from './ProjectCard';

const projects = [
  {
    tag: 'cern-jet-physics',
    title: 'CERN Jet Physics Research',
    description:
      'GSoC 2026 ML4SCI HEPSIM evaluation task — analyzed simulated quark and gluon jets from Pythia8, computed jet observables in the lab frame, Lorentz-boosted them into the rest frame, and trained a Gradient Boosting classifier (AUC 0.815) for quark/gluon discrimination.',
    tech: 'Python, scikit-learn, Jupyter, Physics-aware Features',
    role: 'Research Project',
    github: 'https://github.com/vnparmane/cern_jet_physic',
  },
  {
    tag: 'blue-carbon-mrv',
    title: 'MRV System for Blue Carbon',
    description:
      'Monitoring, Reporting, and Verification platform for blue carbon ecosystems — satellite imagery via Google Earth Engine, immutable blockchain attestation on Polygon, and IPFS-based storage forming a transparent carbon-credit pipeline.',
    tech: 'Python (FastAPI), Google Earth Engine, Blockchain (Polygon), IPFS, React',
    role: 'Developer',
    github: 'https://github.com/vnparmane/MRV_blue_carbon',
  },
  {
    tag: 'nyay-ai',
    title: 'Nyay AI',
    description:
      'Legal intelligence and litigation assistant for Indian practitioners — ingests case documents (FIRs, charge sheets, contracts), extracts structured facts via Google Gemini, runs a 5-gate legal viability check (jurisdiction, limitation, arbitration, maintainability, notices), with conversational assistance and legal drafting.',
    tech: 'Python (FastAPI), PostgreSQL, Google Gemini, WebSockets, React',
    role: 'Developer',
    github: 'https://github.com/vnparmane/Legal_Assistant',
  },
  {
    tag: 'adaptive-learning',
    title: 'Adaptive Learning Platform',
    description:
      'Developed backend services for personalized learning recommendations, adaptive difficulty adjustment, learner analytics, and AI-assisted educational workflows.',
    tech: 'Django, Python, Gemini API',
    role: 'Developer',
  },
  {
    tag: 'repo-ser',
    title: 'repo-ser',
    description:
      'Deterministic codebase serialization tool for LLM workflows — packs a repository into a canonical manifest with a relative tree view and symbol chunking, and unpacks it back safely with dry-run support. Published on PyPI.',
    tech: 'Python, CLI, PyPI',
    role: 'Developer',
    github: 'https://github.com/vnparmane/repo-ser',
  },
  {
    tag: 'paper-scraper',
    title: 'Paper Scraper',
    description:
      'Research Synthesis Studio — automated paper ingestion from arXiv and Semantic Scholar with query expansion and deduplication, a RAG pipeline for chunking and embedding, and LLM-generated hierarchical survey documents streamed in real time via WebSocket.',
    tech: 'Python (FastAPI), RAG, arXiv, Semantic Scholar, React',
    role: 'Developer',
    github: 'https://github.com/vnparmane/Paper_Scraper',
  },
  {
    tag: 'reddit-reconnaissance',
    title: 'Reddit-Reconnaissance',
    description:
      'Reddit research pipeline — collects and analyzes Reddit data through embeddings-based clustering, token ranking, and deduplication, with results streamed through a Next.js dashboard.',
    tech: 'Python (FastAPI), Embeddings, Clustering, Next.js',
    role: 'Developer',
    github: 'https://github.com/vnparmane/Reddit-Reconnaissance',
  },
  {
    tag: 'git-undigest',
    title: 'git-undigest',
    description:
      'Reconstructs a full repository — folder structure and all — from a GitIngest-style digest file. Streaming parser handles multi-GB digests with constant memory, with path-traversal protection, pluggable formats, and dry-run mode. Published on PyPI.',
    tech: 'Python, CLI, PyPI',
    role: 'Developer',
    github: 'https://github.com/vnparmane/git-undigest',
  },
  {
    tag: 'achilles',
    title: 'Achilles',
    description:
      'Desktop inventory and billing management system — parties, items, godowns, purchases, invoices, payments, and stock tracking backed by SQLAlchemy models, Alembic migrations, and report generation.',
    tech: 'Python, SQLAlchemy, Qt, SQLite',
    role: 'Developer',
    github: 'https://github.com/vnparmane/Achilles',
  },
  {
    tag: 'nyay',
    title: 'Nyay AI',
    description:
      'Legal research platform for navigating Indian law — hybrid BM25 + embedding search over statutes and case law with reranking, citation verification, section classification, and AI-generated explanations and drafts.',
    tech: 'Python (FastAPI), Hybrid Search, Reranking, LLM',
    role: 'Developer',
  },
];

export function ProjectsSection() {
  return (
    <section className="flex flex-col gap-8" id="projects">
      <div className="font-bold mt-2"><span className="text-secondary-container">vedant</span><span className="text-outline">@</span><span className="text-link-blue">parmane</span><span className="text-secondary-fixed-dim">: ~/projects</span></div>
      <div className="pl-4">
        <span><span className="text-secondary-container">vedant</span><span className="text-outline">@</span><span className="text-primary-container">parmane :~/projects$</span></span>{' '}
        <span className="text-pure-white">ls -la</span>
        <p className="mt-2 text-outline">total 10 projects</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-4 mt-4">
        {projects.map((project) => (
          <ProjectCard key={project.tag} {...project} />
        ))}
      </div>
    </section>
  );
}
