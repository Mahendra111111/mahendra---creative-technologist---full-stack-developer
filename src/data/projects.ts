import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    slug: 'gaushala-management-system',
    number: '01',
    title: 'GAUSHALA MANAGEMENT SYSTEM',
    subtitle: 'Agri-Tech Cattle Welfare & Inventory Operations Platform',
    category: 'Full-Stack ERP / Operations Platform',
    year: '2025',
    role: 'Lead Full-Stack Architect & Developer',
    overview:
      'A comprehensive, mission-critical operations software engineered for dairy and indigenous cattle shelter networks. Handles daily feeding schedules, veterinary health cycles, milk production tracking, donation accounting, and volunteer shifts.',
    problem:
      'Shelter staff were running daily workflows across fragmented paper ledgers and disconnected WhatsApp groups. Missed vaccinations, untracked inventory wastage of feed, and manual audit bottlenecks cost thousands of dollars and slowed rapid animal treatment.',
    solution:
      'Architected an end-to-end full-stack platform featuring role-based dashboards, offline-first health record sync, QR-tag animal tracking, real-time donation processing with tax-exempt receipt automation, and inventory consumption forecasting.',
    architecture: {
      frontend: ['React 19', 'TypeScript', 'Tailwind CSS', 'TanStack Query'],
      backend: ['Node.js', 'Fastify / Express', 'REST APIs', 'Background Cron Workers'],
      database: ['PostgreSQL', 'Prisma ORM', 'Redis Cache for Metrics'],
      infrastructure: ['Docker', 'Nginx', 'Automated Daily Backups'],
      flowSteps: [
        { step: '01', title: 'RFID / QR Scanning', description: 'Cattle ear-tag scanned via mobile camera or tablet at cattle yard intake.' },
        { step: '02', title: 'Telemetry & Intake Sync', description: 'Feed weight, milk output, and vet notes logged with instant schema validation.' },
        { step: '03', title: 'Ledger & Analytics Engine', description: 'Financial contributions matched automatically with cattle upkeep costs.' },
        { step: '04', title: 'Public Transparency Portal', description: 'Donors receive cryptographically verifiable upkeep tracking reports.' }
      ]
    },
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'REST APIs', 'Redis'],
    keyFeatures: [
      'Digital RFID/QR Health Card for individual cattle medical history',
      'Automated feed replenishment threshold alerts & vendor purchase orders',
      'Audit-ready ledger with Razorpay/Stripe donor tax invoice generation',
      'Multi-unit milk yield monitoring with fat/SNF analytical charts',
      'Role-based permission matrix for Administrators, Vets, and Volunteers'
    ],
    process: [
      { phase: 'Discovery & Field Study', details: 'Visited physical rural shelters to audit real operational bottlenecks and staff mobile literacy.' },
      { phase: 'Schema Architecture', details: 'Modeled relational PostgreSQL schemas handling hierarchical cattle lineages and inventory batches.' },
      { phase: 'Component Engineering', details: 'Built high-contrast, low-latency UI optimized for bright daylight outdoor tablet usage.' },
      { phase: 'Staging & Stress-Testing', details: 'Simulated 50,000+ transaction queries and validated real-time receipt generation speeds.' }
    ],
    outcomes: [
      { metric: '94%', label: 'Paper Elimination', detail: 'Transitioned 100% of daily veterinary rounds into electronic records.' },
      { metric: '3.2x', label: 'Donation Speed', detail: 'Automated receipt dispatch increased repeat donor retention significantly.' },
      { metric: '0%', label: 'Vaccination Lapses', detail: 'Automated SMS/Email alerts eliminated overdue medical boosters across 1,200+ cows.' }
    ],
    accentColor: '#0000EE',
    previewType: 'cattle-grid',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    slug: 'ip-bazaar',
    number: '02',
    title: 'IP BAZAAR',
    subtitle: 'Intellectual Property Marketplace & Patent Licensing Exchange',
    category: 'Fintech & Legal-Tech Web Application',
    year: '2024',
    role: 'Full-Stack Developer & UI Architect',
    overview:
      'A high-performance marketplace enabling inventors, tech startups, and research universities to list, license, appraise, and transact patents, trademarks, and proprietary software copyrights securely.',
    problem:
      'Traditional patent brokers rely on opaque phone brokerage, weeks of back-and-forth NDA negotiation, and fragmented government patent gazettes with no standardized pricing models or tech classification indexing.',
    solution:
      'Engineered a centralized intellectual property registry platform with automated USPTO/WIPO classification parsing, smart NDA signing workflows, escrow milestones, and an interactive valuation calculator.',
    architecture: {
      frontend: ['Next.js / React', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'],
      backend: ['Node.js', 'REST API', 'PDF Processing Pipeline', 'Webhook Dispatcher'],
      database: ['PostgreSQL', 'Supabase Vector for Patent Similarity Search'],
      infrastructure: ['Cloudflare Workers', 'AWS S3 encrypted vault', 'Stripe Connect'],
      flowSteps: [
        { step: '01', title: 'Patent Metadata Ingestion', description: 'Upload patent numbers to parse claims, priority dates, and legal validity.' },
        { step: '02', title: 'Automated Due Diligence', description: 'Digital NDA verification before revealing trade secrets or valuation metrics.' },
        { step: '03', title: 'Escrow Milestone Contract', description: 'Buyer and assignor deposit funds into multi-stage escrow agreement.' },
        { step: '04', title: 'Title Transfer & Royalty Dispatch', description: 'Automated execution of assignment deed and payment disbursements.' }
      ]
    },
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Supabase', 'REST APIs'],
    keyFeatures: [
      'Interactive Patent Search with semantic categorization & claims preview',
      'One-click bilateral NDA generation with e-signature capture',
      'Patent portfolio valuation simulator calculating forward citation weight',
      'Escrow milestone tracker with verified IP assignment transfer stages',
      'Encrypted confidential document data room with watermarked viewer'
    ],
    process: [
      { phase: 'Legal Tech Domain Research', details: 'Studied patent assignment statutes, trademark classes, and broker escrow obligations.' },
      { phase: 'Full-Stack API Design', details: 'Engineered REST endpoints with strict JWT validation and encrypted document storage vaults.' },
      { phase: 'Visual Identity & UX', details: 'Crafted a brutalist, high-density financial layout favoring rapid data density.' },
      { phase: 'Deployment & Security Audit', details: 'Passed OWASP Top 10 penetration checklist and enforced row-level security.' }
    ],
    outcomes: [
      { metric: '10x', label: 'Listing Time Reduction', detail: 'Automated metadata parsing reduced asset onboarding from days to under 4 minutes.' },
      { metric: '100%', label: 'Enforceable Audit Trail', detail: 'Timestamped cryptographically signed NDA audit logs for every portfolio view.' },
      { metric: '$450K+', label: 'Transaction Pipeline', detail: 'Facilitated enterprise technology acquisition and license deal flow.' }
    ],
    accentColor: '#0000EE',
    previewType: 'patent-diagram',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    slug: 'ai-instructor',
    number: '03',
    title: 'AI INSTRUCTOR',
    subtitle: 'Adaptive Generative Learning Engine & Code Tutor',
    category: 'AI-Powered Application / EdTech',
    year: '2025',
    role: 'AI Engineer & Frontend Architect',
    overview:
      'An intelligent pedagogical platform that analyzes student code submissions, detects conceptual bottlenecks in real-time, and generates custom step-by-step interactive coding walkthroughs instead of giving raw code answers.',
    problem:
      'Standard LLM chat interfaces give away complete solutions instantly, bypassing the critical cognitive struggle required to master algorithmic problem-solving and software architecture.',
    solution:
      'Built a Socratic teaching engine with AST (Abstract Syntax Tree) code analysis, adaptive hint ladders, automated test harness sandboxes, and interactive visual memory graphs that explain runtime pointers.',
    architecture: {
      frontend: ['React 19', 'Monaco Code Editor', 'Tailwind CSS', 'Motion'],
      backend: ['Node.js / Python Fastify', 'Streaming SSE Endpoint', 'Gemini & Claude API SDKs'],
      database: ['PostgreSQL', 'Redis session memory buffer'],
      infrastructure: ['Web Worker Code Sandboxes', 'Dockerized Code Runner'],
      flowSteps: [
        { step: '01', title: 'Code Ingestion & AST Parsing', description: 'Student pastes code into Monaco editor; parser identifies logic structure.' },
        { step: '02', title: 'Socratic Prompt Pipeline', description: 'AI evaluates errors against unit test cases without revealing code answers.' },
        { step: '03', title: 'Adaptive Hint Ladder', description: 'Delivers conceptual clues: gentle nudge → logic hint → memory diagram.' },
        { step: '04', title: 'Interactive Execution Run', description: 'Runs client-side sandbox execution with step-through variable inspector.' }
      ]
    },
    technologies: ['React', 'TypeScript', 'Python', 'Node.js', 'AI APIs', 'Tailwind CSS', 'Three.js'],
    keyFeatures: [
      'Socratic Hint Ladder preventing cheat copy-pasting while nurturing comprehension',
      'In-browser sandboxed runtime supporting JavaScript, TypeScript, and Python',
      'Interactive memory heap/stack visualizer explaining pointers and scope',
      'Real-time streaming feedback with zero latency typing animations',
      'Mastery telemetry tracking debugging speed and conceptual retention'
    ],
    process: [
      { phase: 'Prompt & Chain Architecture', details: 'Designed multi-turn guardrails enforcing Socratic pedagogical principles.' },
      { phase: 'Editor Integration', details: 'Embedded Monaco editor with custom syntax theme, lint markers, and breakpoint gutter.' },
      { phase: 'Visual Debugger Engine', details: 'Rendered procedural call-stack diagrams synced with editor line numbers.' },
      { phase: 'Latency Optimization', details: 'Implemented Server-Sent Events streaming to begin rendering hints in <320ms.' }
    ],
    outcomes: [
      { metric: '<320ms', label: 'Streaming TTFT', detail: 'Ultra-fast time-to-first-token provides responsive tutor presence.' },
      { metric: '82%', label: 'Independent Fix Rate', detail: 'Students resolve compilation and logic bugs without checking final solutions.' },
      { metric: '15,000+', label: 'Coding Sessions', detail: 'Logged across algorithms, web fundamentals, and system design exercises.' }
    ],
    accentColor: '#0000EE',
    previewType: 'neural-circuit',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    slug: 'tellstar-in',
    number: '04',
    title: 'TELLSTAR.IN',
    subtitle: 'High-Impact Brand Identity & Digital Agency Platform',
    category: 'Interactive Web Experience / Agency Platform',
    year: '2024',
    role: 'Creative Technologist & Lead Developer',
    overview:
      'A flagship interactive brand platform built for a creative production and digital marketing studio, pairing brutalist typography, micro-interactions, responsive video showcases, and client lead scoring.',
    problem:
      'The agency was losing high-ticket global clients because their previous generic portfolio template failed to demonstrate their visual craft, technical edge, or storytelling prowess.',
    solution:
      'Engineered a bespoke web experience with custom WebGL hover distortion shaders, dynamic video reel streaming, fluid editorial layouts, and an interactive budget/scope project estimator.',
    architecture: {
      frontend: ['React', 'Three.js / WebGL Shaders', 'Tailwind CSS', 'Motion'],
      backend: ['Node.js API', 'Resend Email Dispatch', 'Cloudflare CDN'],
      database: ['Supabase', 'Headless CMS REST API'],
      infrastructure: ['Global CDN Edge caching', 'Vercel / Cloud Run'],
      flowSteps: [
        { step: '01', title: 'Sensory Hero Entry', description: 'Curtain wipe revealing high-impact kinetic typography and custom WebGL shaders.' },
        { step: '02', title: 'Interactive Case Studies', description: 'Magnetic project triggers with fluid video thumbnail expansion on cursor hover.' },
        { step: '03', title: 'Scope & Budget Estimator', description: 'Prospective clients configure timeline, deliverable tiers, and tech stack.' },
        { step: '04', title: 'Instant Lead Qualification', description: 'Automated brief synthesis routed directly into agency Slack channel.' }
      ]
    },
    technologies: ['React', 'TypeScript', 'Three.js', 'Tailwind CSS', 'Node.js', 'REST APIs'],
    keyFeatures: [
      'Custom WebGL image distortion shaders reacting to mouse velocity',
      'Smooth inertial scroll with parallax editorial typography layers',
      'Interactive Project Builder calculating estimated budget & delivery milestones',
      'Dynamic video reel streaming with smart progressive preloading',
      'Strict WCAG AA accessibility compliance across all high-contrast modes'
    ],
    process: [
      { phase: 'Art Direction', details: 'Defined grid rules, 0.86 line-height typography scale, and brutalist color palettes.' },
      { phase: 'Shader Development', details: 'Authored custom GLSL fragment shaders for displacement and grain textures.' },
      { phase: 'Performance Budget', details: 'Optimized video assets, compressed geometries, and achieved 99+ Lighthouse performance.' },
      { phase: 'Production Launch', details: 'Configured edge caching, automated OpenGraph generation, and webhook notifications.' }
    ],
    outcomes: [
      { metric: '99/100', label: 'Lighthouse Performance', detail: 'Sub-second initial paint despite rich video and WebGL interactions.' },
      { metric: '240%', label: 'Qualified Inquiries', detail: 'Project builder form increased inbound enterprise conversion rate.' },
      { metric: '3.8m', label: 'Average Session Time', detail: 'Immersive storytelling retained prospective clients longer than industry avg.' }
    ],
    accentColor: '#0000EE',
    previewType: 'media-stream',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    slug: 'riyanshamrit-com',
    number: '05',
    title: 'RIYANSHAMRIT.COM',
    subtitle: 'Direct-to-Consumer Ayurvedic Wellness & Pure Organics E-Commerce',
    category: 'High-Volume E-Commerce Platform',
    year: '2024',
    role: 'Full-Stack E-Commerce Architect',
    overview:
      'A performance-engineered, direct-to-consumer e-commerce destination for pure Ayurvedic nutrition, wellness formulations, and organic cow ghee. Combines rich heritage storytelling with ultra-fast frictionless checkout.',
    problem:
      'High customer drop-off on mobile devices caused by slow Shopify third-party app bloat, clunky address autofill on Indian pin codes, and lack of customer trust around ingredient purity certificates.',
    solution:
      'Engineered a lightning-fast headless storefront with custom cart drawer, 1-click Razorpay/UPI checkout, automated Indian postal code verification, lab batch report QR lookups, and subscription re-ordering.',
    architecture: {
      frontend: ['React 19', 'Next.js / Vite', 'Tailwind CSS', 'Zustand State'],
      backend: ['Node.js Microservices', 'REST & GraphQL APIs', 'Shiprocket Logistics Webhooks'],
      database: ['PostgreSQL', 'Redis Cart Session Cache'],
      infrastructure: ['AWS CloudFront', 'Dockerized Node', 'Payment Gateway S2S Webhooks'],
      flowSteps: [
        { step: '01', title: 'Provenance Verification', description: 'Consumers inspect batch lab certificates with one-click purity report lookup.' },
        { step: '02', title: 'High-Velocity Cart Drawer', description: 'Instant bundle additions, cross-sells, and free gift progression bars.' },
        { step: '03', title: 'Optimized Indian Checkout', description: 'Automated pincode-to-city lookup, UPI QR direct trigger, and COD verification.' },
        { step: '04', title: 'Fulfillment & WhatsApp Tracking', description: 'Automated order status dispatch with live logistics courier integration.' }
      ]
    },
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST APIs', 'Tailwind CSS', 'Automation'],
    keyFeatures: [
      'Sub-second headless storefront with instantaneous cart and mini-drawer updates',
      'Lab test certificate barcode verification system verifying organic purity',
      'One-click UPI / Card / COD payment orchestration with automated OTP verification',
      'Automated dispatch logistics integration with Shiprocket courier APIs',
      'Subscription recurring order engine with flexible pause & frequency toggles'
    ],
    process: [
      { phase: 'E-Commerce Audit', details: 'Analyzed checkout drop-off funnels and eliminated 4 unnecessary customer steps.' },
      { phase: 'Cart & State Engine', details: 'Constructed optimistic UI cart engine with instant tax and coupon calculation.' },
      { phase: 'Payment Gateway Integration', details: 'Implemented server-to-server webhook verification preventing ghost orders.' },
      { phase: 'Logistics Automation', details: 'Connected shipping APIs to trigger real-time dispatch tracking notifications.' }
    ],
    outcomes: [
      { metric: '1.4s', label: 'Mobile Page Load', detail: 'Cut mobile load times from 6.8s down to 1.4s, skyrocketing conversion.' },
      { metric: '+38%', label: 'Checkout Conversion', detail: 'Streamlined address autofill and 1-click UPI eliminated cart abandonment.' },
      { metric: '45,000+', label: 'Orders Processed', detail: 'Flawlessly handled peak festival sales traffic spikes without downtime.' }
    ],
    accentColor: '#0000EE',
    previewType: 'ayurveda-store',
    liveUrl: '#',
    githubUrl: '#'
  }
];
