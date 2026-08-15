export type ProjectKind = 'research' | 'live' | 'engineering';

export interface PreviewRow {
  label: string;
  value: string;
}

export interface ReadmeSection {
  heading: string;
  body: string;
}

export interface Project {
  tag: string;
  title: string;
  description: string;
  tech: string[];
  role: string;
  kind: ProjectKind;
  github?: string;
  pypi?: string;
  website?: string;
  preview: PreviewRow[];
  readme: ReadmeSection[];
}

export interface ProjectCategory {
  name: ProjectKind;
  projects: Project[];
}

export const categories: ProjectCategory[] = [
  {
    name: 'research',
    projects: [
      {
        tag: 'cern-jet-physics',
        title: 'CERN Jet Physics Research',
        description:
          'Physics-aware ML for quark/gluon jet discrimination — GSoC 2026 ML4SCI HEPSIM evaluation task.',
        tech: ['Python', 'scikit-learn', 'Jupyter', 'Physics-aware Features'],
        role: 'Research Project',
        kind: 'research',
        github: 'https://github.com/vnparmane/cern_jet_physic',
        preview: [
          { label: 'Dataset', value: 'Pythia8 simulated jets' },
          { label: 'Task', value: 'Binary classification' },
          { label: 'Result', value: 'AUC ≈ 0.815' },
        ],
        readme: [
          {
            heading: 'Objective',
            body: 'Classify quark and gluon jets using machine learning on physics-aware features, as the ML4SCI HEPSIM evaluation task for GSoC 2026.',
          },
          {
            heading: 'Dataset',
            body: 'Simulated quark and gluon jets generated with Pythia8. Jet observables are computed in the lab frame, then Lorentz-boosted into the jet rest frame before feature extraction.',
          },
          {
            heading: 'Methodology',
            body: 'Features are engineered from jet substructure observables in both frames, capturing the kinematic differences between quark- and gluon-initiated jets. A Gradient Boosting classifier is trained on the boosted-frame representations.',
          },
          {
            heading: 'Experiment',
            body: 'Baseline features (lab frame) are compared against rest-frame features to quantify the information gained from the Lorentz boost. Model selection and evaluation are performed with stratified train/validation/test splits.',
          },
          {
            heading: 'Results',
            body: 'Gradient Boosting classifier reaches an AUC of approximately 0.815 on quark/gluon discrimination.',
          },
          {
            heading: 'Limitations',
            body: 'Simulation-dependent — performance on detector-level (rather than particle-level) jets is untested, as is generalization to other event generators.',
          },
        ],
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
        tech: ['Python (FastAPI)', 'PostgreSQL', 'Google Gemini', 'WebSockets', 'React'],
        role: 'Developer',
        kind: 'live',
        website: 'https://lawluminous.live',
        preview: [
          { label: 'Problem', value: 'Manual legal viability review' },
          { label: 'Stack', value: 'FastAPI · React · Gemini' },
          { label: 'Status', value: 'Live' },
        ],
        readme: [
          {
            heading: 'Problem',
            body: 'Indian legal practitioners spend hours reading case documents to assess whether a matter is viable before accepting it — a process that is manual, slow, and error-prone.',
          },
          {
            heading: 'Product',
            body: 'A legal intelligence assistant that ingests case documents (FIRs, charge sheets, contracts), extracts structured facts, and runs a 5-gate viability check covering jurisdiction, limitation, arbitration, maintainability, and notices.',
          },
          {
            heading: 'Architecture',
            body: 'Document ingestion and fact extraction are driven by Google Gemini with structured outputs. A rule-based 5-gate evaluation engine scores viability per matter. WebSockets power conversational assistance and drafting flows. PostgreSQL persists cases, facts, and analysis history.',
          },
          {
            heading: 'Tech Stack',
            body: 'Python (FastAPI), PostgreSQL, Google Gemini, WebSockets, React.',
          },
          {
            heading: 'Status',
            body: 'Live at lawluminous.live with documented workflows for viability checks, fact extraction, and legal drafting.',
          },
        ],
      },
      {
        tag: 'adaptive-learning',
        title: 'Adaptive Learning Platform',
        description:
          'Backend services for personalized learning recommendations and learner analytics.',
        tech: ['Django', 'Python', 'Gemini API'],
        role: 'Developer',
        kind: 'live',
        preview: [
          { label: 'Problem', value: 'One-size-fits-all learning paths' },
          { label: 'Stack', value: 'Django · Python · Gemini' },
          { label: 'Status', value: 'Backend services' },
        ],
        readme: [
          {
            heading: 'Problem',
            body: 'Learners on a fixed curriculum receive no personalization — content difficulty and recommendations are identical for every student regardless of performance.',
          },
          {
            heading: 'Product',
            body: 'Backend services that personalize learning: recommendation endpoints surface relevant content per learner, difficulty adapts based on performance signals, and learner analytics feed educational workflows.',
          },
          {
            heading: 'Architecture',
            body: 'Django models capture learner state, performance history, and content metadata. A recommendation service combines learner analytics with Gemini-powered educational workflows to generate adaptive paths and assessments.',
          },
          {
            heading: 'Tech Stack',
            body: 'Django, Python, Gemini API.',
          },
          {
            heading: 'Status',
            body: 'Backend services implemented and integrated with learner analytics; frontend consumption in progress.',
          },
        ],
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
        tech: ['Python (FastAPI)', 'Google Earth Engine', 'Blockchain (Polygon)', 'IPFS', 'React'],
        role: 'Developer',
        kind: 'engineering',
        github: 'https://github.com/vnparmane/MRV_blue_carbon',
        preview: [
          { label: 'Problem', value: 'Verifiable carbon-credit pipeline' },
          { label: 'Stack', value: 'FastAPI · GEE · Polygon · IPFS' },
          { label: 'Status', value: 'Platform' },
        ],
        readme: [
          {
            heading: 'Problem',
            body: 'Blue carbon credit claims are hard to verify end-to-end — monitoring data, reporting, and verification artifacts live in disconnected systems with no tamper-evident trail.',
          },
          {
            heading: 'Why',
            body: 'Build a Monitoring, Reporting, and Verification (MRV) platform that ties satellite-observed ecosystem state to an immutable attestation chain, making each credit traceable from imagery to storage.',
          },
          {
            heading: 'Implementation',
            body: 'Satellite imagery is pulled via Google Earth Engine and processed into monitoring metrics. A FastAPI service orchestrates the pipeline and commits attestation records on Polygon. Reports and raw artifacts are addressed on IPFS, forming a transparent carbon-credit pipeline.',
          },
          {
            heading: 'Architecture',
            body: 'Python (FastAPI) API layer · Google Earth Engine for imagery · Polygon blockchain for attestation · IPFS for content-addressed storage · React frontend.',
          },
          {
            heading: 'Usage',
            body: 'Platform is exercised as a full pipeline: ingest site bounds → fetch satellite metrics → generate monitoring report → attest on-chain → publish artifact hash to IPFS.',
          },
        ],
      },
      {
        tag: 'repo-ser',
        title: 'repo-ser',
        description:
          'Deterministic codebase serialization tool for LLM workflows — pack, unpack, dry-run. On PyPI.',
        tech: ['Python', 'CLI', 'PyPI'],
        role: 'Developer',
        kind: 'engineering',
        pypi: 'https://pypi.org/project/repo-ser/',
        preview: [
          { label: 'Problem', value: 'Repos too large for LLM context' },
          { label: 'Stack', value: 'Python CLI' },
          { label: 'Status', value: 'Published on PyPI' },
        ],
        readme: [
          {
            heading: 'Problem',
            body: 'Full codebases routinely exceed LLM context windows, and ad-hoc dumps lose structure — the tree layout and symbol boundaries that models need to reason about code.',
          },
          {
            heading: 'Why',
            body: 'A deterministic serialization format that keeps repository structure intact while compressing it into a canonical manifest usable by LLM workflows.',
          },
          {
            heading: 'Implementation',
            body: 'Packs a repository into a canonical manifest with a relative tree view and symbol chunking; unpacks it back safely with dry-run support. Serialization is deterministic — identical input always yields identical output.',
          },
          {
            heading: 'Usage',
            body: 'Pack with `repo-ser pack`, inspect with dry-run, and restore with `repo-ser unpack --dry-run` before writing anything to disk. Installable via pip (published on PyPI).',
          },
        ],
      },
      {
        tag: 'git-undigest',
        title: 'git-undigest',
        description:
          'Rebuilds full repos from GitIngest-style digests — streaming parser, path-traversal safe.',
        tech: ['Python', 'CLI', 'PyPI'],
        role: 'Developer',
        kind: 'engineering',
        github: 'https://github.com/vnparmane/git-undigest',
        preview: [
          { label: 'Problem', value: 'Digests are one-way today' },
          { label: 'Stack', value: 'Python CLI' },
          { label: 'Status', value: 'Published on PyPI' },
        ],
        readme: [
          {
            heading: 'Problem',
            body: 'GitIngest-style digests compress a repository into text for LLM context, but nothing restores the original structure — the digest is a dead end for round-tripping.',
          },
          {
            heading: 'Why',
            body: 'Rebuild a full repository — folder structure and all — from a GitIngest-style digest file, enabling digest round-trips.',
          },
          {
            heading: 'Implementation',
            body: 'A streaming parser handles multi-GB digests in constant memory, with path-traversal protection, pluggable output formats, and dry-run mode. Restoration is safe by default: paths are validated against traversal attacks before any write.',
          },
          {
            heading: 'Usage',
            body: 'Feed a digest file in, preview the reconstructed tree with dry-run, then materialize the full repository. Parser is streaming, so memory stays flat even on very large digests.',
          },
        ],
      },
      {
        tag: 'achilles',
        title: 'Achilles',
        description:
          'Desktop inventory and billing system — parties, godowns, invoicing, stock tracking.',
        tech: ['Python', 'SQLAlchemy', 'Qt', 'SQLite'],
        role: 'Developer',
        kind: 'engineering',
        github: 'https://github.com/vnparmane/Achilles',
        preview: [
          { label: 'Problem', value: 'Small-business stock & billing' },
          { label: 'Stack', value: 'Python · SQLAlchemy · Qt' },
          { label: 'Status', value: 'Desktop application' },
        ],
        readme: [
          {
            heading: 'Problem',
            body: 'Small businesses track parties, inventory, and invoicing in spreadsheets — no single source of truth for stock levels across godowns or payment status.',
          },
          {
            heading: 'Why',
            body: 'A desktop inventory and billing system that models the full workflow — parties, items, godowns, purchases, invoices, and payments — without requiring a server.',
          },
          {
            heading: 'Implementation',
            body: 'Domain model backed by SQLAlchemy with Alembic migrations on SQLite. Qt frontend drives the workflows; report generation covers invoices and stock summaries.',
          },
          {
            heading: 'Usage',
            body: 'Run locally: manage parties and items, record purchases into godowns, create invoices, track payments, and generate stock/billing reports.',
          },
        ],
      },
      {
        tag: 'paper-scraper',
        title: 'Paper Scraper',
        description:
          'Research Synthesis Studio — arXiv/Semantic Scholar ingestion, RAG, streamed surveys.',
        tech: ['Python (FastAPI)', 'RAG', 'arXiv', 'Semantic Scholar', 'React'],
        role: 'Developer',
        kind: 'engineering',
        github: 'https://github.com/vnparmane/Paper_Scraper',
        preview: [
          { label: 'Problem', value: 'Slow manual literature review' },
          { label: 'Stack', value: 'FastAPI · RAG · arXiv · React' },
          { label: 'Status', value: 'Platform' },
        ],
        readme: [
          {
            heading: 'Problem',
            body: 'Literature synthesis is manual and slow — finding papers, deduplicating them, and structuring findings into a survey takes days.',
          },
          {
            heading: 'Why',
            body: 'A Research Synthesis Studio that automates ingestion, retrieval, and survey generation, streaming results live instead of forcing users to wait for a batch job.',
          },
          {
            heading: 'Implementation',
            body: 'Automated paper ingestion from arXiv and Semantic Scholar with query expansion and deduplication. A RAG pipeline handles chunking and embedding for retrieval. LLM-generated hierarchical survey documents stream in real time over WebSocket.',
          },
          {
            heading: 'Usage',
            body: 'Run the FastAPI backend with the React frontend, submit a research topic, and watch the survey build as papers are ingested, retrieved, and synthesized live.',
          },
        ],
      },
      {
        tag: 'reddit-reconnaissance',
        title: 'Reddit-Reconnaissance',
        description:
          'Reddit research pipeline — embedding clustering, token ranking, deduplication.',
        tech: ['Python (FastAPI)', 'Embeddings', 'Clustering', 'Next.js'],
        role: 'Developer',
        kind: 'engineering',
        github: 'https://github.com/vnparmane/Reddit-Reconnaissance',
        preview: [
          { label: 'Problem', value: 'Signal buried in Reddit noise' },
          { label: 'Stack', value: 'FastAPI · Embeddings · Next.js' },
          { label: 'Status', value: 'Pipeline + dashboard' },
        ],
        readme: [
          {
            heading: 'Problem',
            body: 'Reddit threads contain dense community knowledge, but raw posts are noisy, repetitive, and unstructured — hard to mine for research.',
          },
          {
            heading: 'Why',
            body: 'A research pipeline that collects Reddit data, clusters it by semantic similarity, ranks the tokens that define each cluster, and deduplicates the corpus.',
          },
          {
            heading: 'Implementation',
            body: 'FastAPI backend collects and processes posts: embeddings-based clustering groups discussions by topic, token ranking surfaces distinguishing vocabulary, and deduplication collapses near-identical content. Results stream to a Next.js dashboard.',
          },
          {
            heading: 'Usage',
            body: 'Point the collector at a set of subreddits or queries, run the pipeline, and explore the clustered, ranked output through the dashboard.',
          },
        ],
      },
    ],
  },
];
