import React, { useState } from 'react';
import { ArrowDownRight, CheckCircle2 } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    subtitle: 'Bottleneck Identification & Product Goals',
    description:
      'We deconstruct your operational friction, user personas, revenue models, and data requirements before writing any code. Every technical choice is anchored to a measurable business outcome.',
    deliverables: ['System Scope Document', 'User Journey Mapping', 'Technical Feasibility Audit']
  },
  {
    number: '02',
    title: 'ARCHITECT',
    subtitle: 'Data Schema Modeling & API Contracts',
    description:
      'I draft relational PostgreSQL schemas, API contracts, state synchronization models, and infrastructure pipelines to ensure high concurrency and zero breaking rewrites down the line.',
    deliverables: ['Database ERD Schemas', 'REST/GraphQL API Specs', 'Cloud Architecture Blueprint']
  },
  {
    number: '03',
    title: 'DESIGN',
    subtitle: 'High-Contrast Interface & Spatial Hierarchy',
    description:
      'Creating distinct, memorable interfaces. I develop bespoke editorial typography systems, responsive layout grids, and interactive states that command attention and drive effortless usability.',
    deliverables: ['High-Fidelity Component Prototypes', 'Design Tokens & Typography', 'Interactive Motion Specs']
  },
  {
    number: '04',
    title: 'BUILD',
    subtitle: 'Full-Stack Implementation & Clean Code',
    description:
      'Engineering the core application with strict TypeScript, modular React frontends, robust Node/Python backends, payment orchestration, and real-time event workers.',
    deliverables: ['Production TypeScript Codebase', 'Authenticated APIs & Gateways', 'Live Staging Previews']
  },
  {
    number: '05',
    title: 'REFINE',
    subtitle: 'Latency Profiling & Edge Stress-Testing',
    description:
      'Rigorous performance auditing: optimizing query execution plans, pruning bundle sizes, passing WCAG accessibility checks, and ensuring sub-second response times across devices.',
    deliverables: ['Lighthouse 95+ Scorecard', 'OWASP Security Audit', 'Cross-Browser Test Suite']
  },
  {
    number: '06',
    title: 'SHIP',
    subtitle: 'Production Launch & Telemetry Handover',
    description:
      'Deployment to containerized cloud runners with automated CI/CD pipelines, DNS edge routing, automated database backups, and comprehensive documentation for your team.',
    deliverables: ['Production Edge Deployment', 'Automated Health Monitoring', 'Full Source Code & Architecture Docs']
  }
];

export const Process: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section id="process" className="py-24 md:py-36 border-b border-[#000000]/15">
      <div className="max-w-[1521px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#000000]/20 gap-4">
          <div>
            <div className="text-xs font-mono text-[#0000EE] font-bold tracking-widest uppercase mb-2">
              METHODOLOGY &amp; SPRINTING
            </div>
            <h2 className="font-display text-[56px] sm:text-[76px] md:text-[96px] uppercase tracking-tight text-[#000000] leading-none">
              HOW I WORK
            </h2>
          </div>

          <div className="text-xs font-mono text-[#555555] max-w-sm">
            Six disciplined phases transforming raw ambiguity into polished, stress-tested production software.
          </div>
        </div>

        {/* Sequential Editorial Steps Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Step Selector (6 Cols) */}
          <div className="lg:col-span-6 divide-y divide-[#000000]/15 border-y border-[#000000]/15">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;

              return (
                <button
                  key={step.number}
                  id={`process-step-btn-${step.number}`}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-full py-6 px-4 text-left flex items-center justify-between transition-all duration-200 group focus:outline-none ${
                    isActive ? 'bg-[#DFDDD9]/60 pl-6' : 'hover:bg-[#DFDDD9]/20'
                  }`}
                >
                  <div className="flex items-baseline gap-6">
                    <span
                      className={`font-mono text-lg font-bold transition-colors ${
                        isActive ? 'text-[#0000EE]' : 'text-[#555555] group-hover:text-[#000000]'
                      }`}
                    >
                      {step.number}
                    </span>
                    <div>
                      <h3
                        className={`font-display text-3xl sm:text-4xl uppercase tracking-tight transition-colors ${
                          isActive ? 'text-[#0000EE]' : 'text-[#000000] group-hover:text-[#0000EE]'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <div className="text-xs font-mono text-[#555555] mt-0.5">
                        {step.subtitle}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center font-mono text-xs transition-colors ${
                      isActive
                        ? 'border-[#0000EE] bg-[#0000EE] text-white'
                        : 'border-[#000000]/20 text-[#555555] group-hover:border-[#000000]'
                    }`}
                  >
                    →
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Phase Focus Card (6 Cols) */}
          <div className="lg:col-span-6 sticky top-28 bg-[#DFDDD9]/40 border border-[#000000]/20 rounded-[12px] p-8 md:p-12 shadow-xs">
            {(() => {
              const step = PROCESS_STEPS[activeStepIndex];
              return (
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-[#000000]/15 pb-4">
                    <div className="font-mono text-3xl font-bold text-[#0000EE]">
                      PHASE {step.number}
                    </div>
                    <span className="text-xs font-mono text-[#555555] uppercase">
                      STEP {activeStepIndex + 1} OF {PROCESS_STEPS.length}
                    </span>
                  </div>

                  <h3 className="font-display text-4xl sm:text-5xl uppercase text-[#000000]">
                    {step.title} // {step.subtitle}
                  </h3>

                  <p className="text-base sm:text-lg text-[#000000]/80 leading-relaxed font-sans">
                    {step.description}
                  </p>

                  <div className="pt-4 border-t border-[#000000]/15">
                    <div className="text-xs font-mono font-bold uppercase text-[#0000EE] mb-3">
                      CONCRETE PHASE DELIVERABLES:
                    </div>
                    <div className="space-y-2">
                      {step.deliverables.map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#000000]">
                          <CheckCircle2 className="w-4 h-4 text-[#0000EE] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};
