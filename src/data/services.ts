import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'full-stack-dev',
    number: '01',
    title: 'FULL-STACK DEVELOPMENT',
    shortDesc: 'Frontend / Backend / APIs / Databases',
    fullDesc:
      'End-to-end engineering of resilient digital products. I design and build reliable architectures from high-performance TypeScript frontends to scalable Node.js/Python backends, optimized PostgreSQL databases, and cleanly versioned REST/GraphQL APIs.',
    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'TypeScript', 'REST APIs'],
    deliverables: [
      'Modular client applications in React & Next.js',
      'Robust backend servers with Express / Fastify / Python',
      'Relational & vector database schemas with automated migrations',
      'Secure authentication, session management, and role-based ACL'
    ],
    techStack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker']
  },
  {
    id: 'web-applications',
    number: '02',
    title: 'WEB APPLICATIONS',
    shortDesc: 'SaaS / Interactive Platforms / Cloud Portals',
    fullDesc:
      'Purpose-built cloud software engineered to solve complex workflows. Whether building collaborative multi-tenant SaaS tools, customer portals, or self-service business engines, I prioritize speed, bulletproof error handling, and intuitive interaction.',
    tags: ['SaaS', 'Cloud Architecture', 'Real-Time Sync', 'State Management'],
    deliverables: [
      'Multi-tenant SaaS subscription platforms with Stripe/Razorpay',
      'Real-time data synchronization and live event streaming',
      'Complex forms with optimistic updates and offline state cache',
      'Comprehensive error boundaries and automated telemetry logging'
    ],
    techStack: ['Next.js', 'Supabase', 'Tailwind CSS', 'Redis', 'WebSockets']
  },
  {
    id: 'ai-powered-products',
    number: '03',
    title: 'AI-POWERED APPLICATIONS',
    shortDesc: 'Automation / AI Workflows / Intelligent Tools',
    fullDesc:
      'Transforming raw LLMs into practical, production-grade applications. I integrate Gemini, Claude, and OpenAI APIs with custom prompt pipelines, Socratic reasoning chains, function calling, vector embeddings, and real-time streaming interfaces.',
    tags: ['AI SDKs', 'Streaming SSE', 'Embeddings', 'Agentic Workflows', 'Python'],
    deliverables: [
      'Low-latency streaming chat & co-pilot experiences with SSE',
      'Automated data extraction, classification, and summarization pipelines',
      'RAG systems grounded on enterprise knowledge bases and vector stores',
      'Strict deterministic guardrails preventing hallucinations'
    ],
    techStack: ['Python', 'Node.js', 'Gemini API', 'Vector Databases', 'LangChain / Custom Chains']
  },
  {
    id: 'dashboards-systems',
    number: '04',
    title: 'DASHBOARDS & INTERNAL SYSTEMS',
    shortDesc: 'Telemetry / ERPs / Data Density / Operational Hubs',
    fullDesc:
      'High-density internal software that empowers operations teams to act quickly. I turn convoluted spreadsheets and siloed databases into unified control centers featuring live metrics, interactive charts, and instant audit trails.',
    tags: ['Data Visualization', 'Admin Panels', 'Role Matrix', 'Audit Trails'],
    deliverables: [
      'Fast operational command centers with D3 and custom analytical charts',
      'Advanced data grids with instant multi-column filtering and CSV export',
      'Staff activity audit logs and granular permission controls',
      'Automated scheduled report generation and notification dispatches'
    ],
    techStack: ['React', 'TypeScript', 'D3 / Recharts', 'PostgreSQL', 'Tailwind CSS']
  },
  {
    id: 'ecommerce-platforms',
    number: '05',
    title: 'E-COMMERCE & BUSINESS PLATFORMS',
    shortDesc: 'Direct-To-Consumer / Marketplaces / Payment Orchestration',
    fullDesc:
      'High-velocity e-commerce and transaction exchanges built for conversion. From headless storefronts to multi-party escrow marketplaces, I engineer frictionless checkouts, inventory synchronizations, and automated invoicing.',
    tags: ['Payment Gateways', 'Inventory Sync', 'Logistics APIs', 'Headless Storefronts'],
    deliverables: [
      'Sub-second headless storefronts optimized for mobile conversion',
      'Integrated payment gateways (UPI, Credit Cards, Escrow, Webhooks)',
      'Automated inventory thresholds and warehouse courier dispatch integrations',
      'Automated GST/tax invoices and customer WhatsApp/SMS notification triggers'
    ],
    techStack: ['Next.js', 'Node.js', 'Stripe / Razorpay', 'Shiprocket / Logistics', 'PostgreSQL']
  }
];
