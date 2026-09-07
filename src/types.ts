export interface Project {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  role: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: {
    frontend: string[];
    backend: string[];
    database: string[];
    infrastructure: string[];
    flowSteps: { step: string; title: string; description: string }[];
  };
  technologies: string[];
  keyFeatures: string[];
  process: { phase: string; details: string }[];
  outcomes: { metric?: string; label: string; detail: string }[];
  accentColor: string;
  previewType: 'cattle-grid' | 'patent-diagram' | 'neural-circuit' | 'media-stream' | 'ayurveda-store';
  liveUrl?: string;
  githubUrl?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  deliverables: string[];
  techStack: string[];
}

export interface TechnologyItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'ai' | 'tools' | '3d';
  level: string;
  connectedTo: string[];
  description: string;
}

export interface FAQItem {
  number: string;
  question: string;
  answer: string;
  tag: string;
}
