// Edit this file to update the /work page.
export type Role = {
  org: string;
  url?: string;
  title: string;
  dates: string;
  place?: string;
  points: string[];
};

export const roles: Role[] = [
  {
    org: 'Unstructured',
    url: 'https://unstructured.io',
    title: 'DevRel Engineer',
    dates: 'Feb 2025 – present',
    place: 'Remote',
    points: [
      'Maintain the <a href="https://docs.unstructured.io/welcome">docs</a>, write the <a href="https://unstructured.io/blog">blog</a>, and build PoCs and (not boring) <a href="https://docs.unstructured.io/examplecode/notebooks">technical tutorials</a>.',
      "Repurposed technical content into SEO-optimized posts: organic traffic up 168%, 192 keywords in Google's top 3, 330 MQLs in a single quarter.",
      'Author technical content across the blog and example notebooks at 8+ posts a week, 400+ a year.',
      'Owned launch content and messaging (messaging houses, one-sheeters, use cases, lifecycle email) for the core product.',
      'Presented technical webinars and ran field marketing at summits, turning a last-minute event into 250+ signups and ~400 leads at Databricks Data + AI Summit.',
      'Produced competitive battlecards and sales enablement (decks, FAQs) adopted company-wide, and built reusable skills that cut out manual work.',
    ],
  },
  {
    org: 'New York University',
    url: 'https://www.nyu.edu',
    title: 'Research Assistant',
    dates: 'Nov 2023 – May 2025',
    place: 'New York',
    points: [
      'Advised by Prof. Juliana Freire, Prof. Ellen Noonan and Prof. Sibylle Fischer.',
      'Designed a hierarchical ML pipeline to classify scanned immigration documents with 85% test accuracy.',
      'Automated 60% of metadata extraction from Forms G-325A and Certificates of Naturalization using Vision Transformers, OCR, and VLMs (Qwen2, LLaMA 3.2).',
      'Led the team-wide labeling strategy and a reproducible training stack; trained 4 interns who produced 25k gold samples in 3 weeks.',
      'Benchmarked VLM prompting and schema-driven extraction on cropped regions, improving precision by 13%.',
    ],
  },
  {
    org: 'New York University',
    url: 'https://www.nyu.edu',
    title: 'Teaching Assistant, Cloud Computing & Big Data',
    dates: 'Jan 2024 – May 2025',
    place: 'Brooklyn',
    points: [
      'Ran labs for 50–75 students a semester and mentored teams building and deploying end-to-end systems over 2-month projects.',
    ],
  },
  {
    org: 'Intel',
    url: 'https://www.intel.com',
    title: 'Software Engineer Intern',
    dates: 'May 2024 – Aug 2024',
    points: [
      'Set up Spark infrastructure for Intel Foundry with REST endpoints for running Spark queries.',
      'Cut query time from 210s to 35s across Oracle, Cassandra, and MongoDB sources.',
      'Built SSTables from 111 GB of data in 800s (down from 1.5 hours).',
    ],
  },
  {
    org: 'SpaceML · NASA IMPACT',
    title: 'AI Researcher',
    dates: 'Sep 2020 – Aug 2023',
    points: [
      'Worldview Reverse Image Search: self-supervised and active learning to organize and retrieve similar images across 40 petabytes of satellite imagery.',
      'Led a team of three on a self-supervised pipeline for Hubble Space Telescope images.',
      'Featured in NASA Earthdata ("SpaceML: Rise of the Machine (Learning)") and on the NVIDIA blog.',
    ],
  },
  {
    org: 'Mad Street Den',
    title: 'Machine Learning Engineer',
    dates: 'Oct 2021 – Jul 2023',
    place: 'Chennai',
    points: [
      'Built an end-to-end document verification pipeline for fraud detection and regulation analysis in fintech, serving 200,000+ users.',
      'Engineered KYC document matching and a human-in-the-loop pipeline processing 20,000+ documents a day.',
      "Deployed the org's first GPU inference pipeline (Redis, Kubernetes): 400ms for a graph of 102 models.",
      'Built ingestion, inference, and automated QA pipelines for the MLaaS platform Vuetag; led L1 support for key clients.',
    ],
  },
  {
    org: 'Frontier Development Lab',
    title: 'ML Research',
    dates: 'Jul 2020 – Dec 2020',
    points: [
      'Self-supervised learning on geospatial data of Australian bushfires, with a focus on locality awareness.',
    ],
  },
];

export const earlier = [
  "Machine Learning Intern, Mad Street Den (2021): benchmarking simulation tool and clustering improvements for Blox.ai",
  "Technical Reviewer, O'Reilly Media (2021–2022)",
  'ML Research with A*STAR Institute for Infocomm Research, via Anna University (2020–2021): latent space representations of self-supervised models',
  'Machine Learning Intern, Happiest Minds (2019): ticket triage NER and RPA automation, predictive maintenance with RNNs',
];

export const awards = [
  'Exceptional Contributor Award, NASA IMPACT',
  'IET E&T Innovation Award, for Worldview Search',
];

export const talks = [
  'IBM events in Boston and New York (2026)',
  'Unstructured webinars on document transformation quality and ETL+ (2025)',
  'Guest talks at UC Berkeley, NASA FDL, George Mason University, Swiss Cognitive, and VIT',
];
