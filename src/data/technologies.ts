import { TechnologyItem } from '../types';

export const TECHNOLOGIES: TechnologyItem[] = [
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    level: 'Core Language',
    connectedTo: ['javascript', 'react', 'nextjs', 'nodejs', 'fastify', 'threejs'],
    description: 'Type-safe scalable systems architecture across frontend and backend services.'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'frontend',
    level: 'Core Language',
    connectedTo: ['typescript', 'react', 'nodejs', 'threejs'],
    description: 'Deep modern ESNext engine understanding, asynchronous event loops, and microtask queues.'
  },
  {
    id: 'react',
    name: 'React 19',
    category: 'frontend',
    level: 'UI Library',
    connectedTo: ['typescript', 'nextjs', 'threejs', 'rest-apis', 'tailwind'],
    description: 'Component architecture, concurrent rendering, custom hooks, and state engines.'
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    level: 'Meta-Framework',
    connectedTo: ['react', 'typescript', 'nodejs', 'supabase', 'rest-apis'],
    description: 'Hybrid SSR/SSG rendering, server actions, route handlers, and edge middleware.'
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    level: 'Runtime',
    connectedTo: ['typescript', 'fastify', 'postgresql', 'rest-apis', 'automation'],
    description: 'High-throughput I/O services, streaming responses, CLI tooling, and worker threads.'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    level: 'Language / AI',
    connectedTo: ['ai-apis', 'automation', 'postgresql', 'fastify'],
    description: 'Machine learning scripts, data manipulation with Pandas, and AI evaluation pipelines.'
  },
  {
    id: 'fastify',
    name: 'Fastify / Express',
    category: 'backend',
    level: 'API Framework',
    connectedTo: ['nodejs', 'typescript', 'rest-apis', 'postgresql'],
    description: 'Low-overhead JSON API microservices with schema validation and authentication.'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    level: 'Relational DB',
    connectedTo: ['supabase', 'nodejs', 'fastify', 'python'],
    description: 'Complex joins, indexing, ACID transactions, materialized views, and JSONB queries.'
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: 'database',
    level: 'BaaS & Vector',
    connectedTo: ['postgresql', 'react', 'nextjs', 'ai-apis'],
    description: 'Row-level security, realtime subscriptions, Auth, and pgvector embeddings.'
  },
  {
    id: 'rest-apis',
    name: 'REST APIs & Webhooks',
    category: 'backend',
    level: 'Integration',
    connectedTo: ['nodejs', 'fastify', 'react', 'automation'],
    description: 'Deterministic API contracts, webhook idempotency, rate limiting, and SDK integrations.'
  },
  {
    id: 'ai-apis',
    name: 'AI APIs & LLMs',
    category: 'ai',
    level: 'Intelligence',
    connectedTo: ['python', 'nodejs', 'supabase', 'automation'],
    description: 'Gemini, Claude, and OpenAI SDKs, streaming SSE, prompt chains, and function calling.'
  },
  {
    id: 'threejs',
    name: 'Three.js & WebGL',
    category: '3d',
    level: '3D Graphics',
    connectedTo: ['react', 'javascript', 'typescript'],
    description: 'Custom GLSL shaders, procedural geometries, camera physics, and 3D web environments.'
  },
  {
    id: 'automation',
    name: 'Automation & Cron',
    category: 'tools',
    level: 'DevOps & Tooling',
    connectedTo: ['nodejs', 'python', 'rest-apis', 'git'],
    description: 'Automated email/SMS dispatches, scheduled cron workers, and data sync scripts.'
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    category: 'tools',
    level: 'Version Control',
    connectedTo: ['typescript', 'nodejs', 'automation'],
    description: 'Atomic git commits, branch management, GitHub Actions CI/CD, and code review.'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'Design System',
    connectedTo: ['react', 'nextjs', 'typescript'],
    description: 'Utility-first typography, bespoke grid layouts, fluid spacing, and design tokens.'
  }
];
