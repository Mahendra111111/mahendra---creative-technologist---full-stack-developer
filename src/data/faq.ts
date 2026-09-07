import { FAQItem } from '../types';

export const FAQ_ITEMS: FAQItem[] = [
  {
    number: '01',
    question: 'What kind of projects do you build?',
    answer:
      'I specialize in building full-stack web applications, business software, interactive digital products, and intelligent AI tools. This spans enterprise operations platforms (like cattle and inventory ERPs), intellectual property transaction exchanges, high-conversion headless e-commerce storefronts, and bespoke creative websites featuring interactive 3D graphics.',
    tag: 'Capabilities'
  },
  {
    number: '02',
    question: 'Can you build a complete product from scratch?',
    answer:
      'Yes. In fact, that is my primary mode of work. I handle the entire lifecycle: initial system discovery, data modeling and schema design in PostgreSQL, backend API architecture in Node.js/Python, high-performance responsive frontend implementation in React/Next.js, payment gateway integration, deployment, and ongoing optimization.',
    tag: 'Execution'
  },
  {
    number: '03',
    question: 'What technologies do you work with?',
    answer:
      'My core stack revolves around TypeScript, React, Next.js, Node.js, Fastify/Express, Python, PostgreSQL, Supabase, and Tailwind CSS. For immersive visual experiences, I engineer custom WebGL and 3D scenes with Three.js. For intelligent automation, I integrate modern AI APIs (Gemini, Claude, OpenAI) with streaming SSE pipelines.',
    tag: 'Stack'
  },
  {
    number: '04',
    question: 'Can you work with an existing codebase?',
    answer:
      'Absolutely. I frequently step into existing codebases to refactor messy architectures, diagnose and eliminate latency bottlenecks, modernize legacy frontend components, fix broken API integrations, or integrate complex new feature modules without disrupting live users.',
    tag: 'Refactoring'
  },
  {
    number: '05',
    question: 'Do you build AI-powered applications?',
    answer:
      'Yes, and with a pragmatic engineering mindset. Rather than bolting on a generic chatbot wrapper, I build deliberate AI systems: Socratic tutoring engines, automated document extraction and classification pipelines, vector search embeddings, and intelligent agentic workflows with strict validation guardrails.',
    tag: 'AI Engineering'
  },
  {
    number: '06',
    question: 'Can you build dashboards and internal tools?',
    answer:
      'Yes. High-density operational dashboards are a core strength. I design role-based admin panels, inventory telemetries, real-time analytics graphs, and audit ledgers that give founders and operations staff total visibility and command over their business data.',
    tag: 'Internal Tools'
  },
  {
    number: '07',
    question: 'How does a project usually start?',
    answer:
      'Every project begins with an honest discovery call to dissect your problem, user personas, timeline, and business goals. I then draft an architectural blueprint outlining the tech stack, data schemas, milestones, and deliverables before writing a single line of production code. Once aligned, development moves in rapid, transparent weekly sprints.',
    tag: 'Process'
  }
];
