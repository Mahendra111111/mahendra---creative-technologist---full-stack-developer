import React, { useEffect } from 'react';
import { Project } from '../types';
import { ArrowLeft, ArrowRight, ExternalLink, Github, CheckCircle2, Cpu, Database, Server, Layers, ShieldCheck } from 'lucide-react';
import { PROJECTS } from '../data/projects';

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onSelectProject
}) => {
  // Prevent body scroll while viewing detail
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Find next project in sequence
  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div
      id="project-detail-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#EBE9E4] text-[#000000] animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
    >
      {/* Sticky Header Nav */}
      <nav
        aria-label="Project Navigation"
        className="sticky top-0 z-40 bg-[#EBE9E4]/95 backdrop-blur-md border-b border-[#000000]/15 py-4 px-4 md:px-8"
      >
        <div className="max-w-[1521px] mx-auto flex items-center justify-between">
          <button
            onClick={onClose}
            className="group flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#000000] hover:text-[#0000EE] transition-colors focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>BACK TO ALL WORK</span>
          </button>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="hidden sm:inline text-[#555555]">
              PROJECT {project.number} / {PROJECTS.length.toString().padStart(2, '0')}
            </span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-[#000000]/20 flex items-center justify-center hover:bg-[#000000] hover:text-white transition-colors"
              aria-label="Close Project View"
            >
              ✕
            </button>
          </div>
        </div>
      </nav>

      {/* Main Case Study Container */}
      <main className="max-w-[1521px] mx-auto px-4 md:px-8 py-12 md:py-20">
        {/* Editorial Eyebrow & Meta */}
        <div className="border-b border-[#000000]/20 pb-8 mb-12">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#0000EE] font-bold uppercase tracking-widest mb-4">
            <span>CASE STUDY // {project.category}</span>
            <span>•</span>
            <span className="text-[#555555]">YEAR: {project.year}</span>
          </div>

          <h1
            id="project-detail-title"
            className="font-display text-[48px] sm:text-[72px] md:text-[96px] lg:text-[112px] uppercase leading-[0.88] tracking-tight text-[#000000] mb-6"
          >
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl text-[#000000]/80 font-normal max-w-4xl leading-snug">
            {project.subtitle}
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 mt-8 border-t border-[#000000]/15 font-mono text-xs">
            <div>
              <div className="text-[#555555] uppercase text-[10px]">MY ROLE</div>
              <div className="text-[#000000] font-bold mt-1">{project.role}</div>
            </div>
            <div>
              <div className="text-[#555555] uppercase text-[10px]">TIMELINE</div>
              <div className="text-[#000000] font-bold mt-1">4–6 Months Production</div>
            </div>
            <div>
              <div className="text-[#555555] uppercase text-[10px]">PRIMARY ARCHITECTURE</div>
              <div className="text-[#000000] font-bold mt-1">Full-Stack Cloud / Event-Driven</div>
            </div>
            <div>
              <div className="text-[#555555] uppercase text-[10px]">DEPLOYMENT STATUS</div>
              <div className="text-[#0000EE] font-bold mt-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0000EE] animate-pulse"></span>
                ACTIVE IN PRODUCTION
              </div>
            </div>
          </div>
        </div>

        {/* Executive Problem vs Solution Breakdown */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-6 bg-[#DFDDD9]/40 border border-[#000000]/15 p-8 md:p-10 rounded-[12px]">
            <div className="text-xs font-mono text-red-600 font-bold uppercase tracking-widest mb-3">
              01 // THE CORE BOTTLENECK &amp; CHALLENGE
            </div>
            <h2 className="font-display text-3xl md:text-4xl uppercase text-[#000000] mb-4">
              THE PROBLEM
            </h2>
            <p className="text-base md:text-lg text-[#000000]/80 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="lg:col-span-6 bg-[#DFDDD9]/40 border border-[#000000]/15 p-8 md:p-10 rounded-[12px]">
            <div className="text-xs font-mono text-[#0000EE] font-bold uppercase tracking-widest mb-3">
              02 // SYSTEM ENGINEERING &amp; INTERFACE
            </div>
            <h2 className="font-display text-3xl md:text-4xl uppercase text-[#000000] mb-4">
              THE SOLUTION
            </h2>
            <p className="text-base md:text-lg text-[#000000]/80 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </section>

        {/* Interactive Architecture Flow Visualizer */}
        <section className="mb-20 border border-[#000000]/20 bg-[#DFDDD9]/25 p-8 md:p-12 rounded-[12px]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#000000]/15 pb-6 mb-8 gap-4">
            <div>
              <div className="text-xs font-mono text-[#0000EE] font-bold uppercase tracking-widest mb-1">
                SYSTEM DESIGN &amp; TELEMETRY
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase text-[#000000]">
                ARCHITECTURE PIPELINE
              </h2>
            </div>
            <span className="text-xs font-mono text-[#555555]">
              END-TO-END DATAFLOW
            </span>
          </div>

          {/* Sequential Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {project.architecture.flowSteps.map((step) => (
              <div
                key={step.step}
                className="bg-[#EBE9E4] p-5 border border-[#000000]/15 rounded-[8px] relative group hover:border-[#0000EE] transition-colors"
              >
                <div className="font-mono text-2xl font-bold text-[#0000EE] mb-2">
                  {step.step}
                </div>
                <div className="font-mono text-xs font-bold uppercase text-[#000000] mb-2">
                  {step.title}
                </div>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Architecture Tech Stack Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-[#000000]/15 font-mono text-xs">
            <div>
              <div className="flex items-center gap-2 text-[#000000] font-bold uppercase mb-2">
                <Layers className="w-4 h-4 text-[#0000EE]" />
                <span>FRONTEND LAYER</span>
              </div>
              <ul className="space-y-1 text-[#555555]">
                {project.architecture.frontend.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 text-[#000000] font-bold uppercase mb-2">
                <Server className="w-4 h-4 text-[#0000EE]" />
                <span>BACKEND APIS</span>
              </div>
              <ul className="space-y-1 text-[#555555]">
                {project.architecture.backend.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 text-[#000000] font-bold uppercase mb-2">
                <Database className="w-4 h-4 text-[#0000EE]" />
                <span>DATA PERSISTENCE</span>
              </div>
              <ul className="space-y-1 text-[#555555]">
                {project.architecture.database.map((d, i) => (
                  <li key={i}>• {d}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 text-[#000000] font-bold uppercase mb-2">
                <ShieldCheck className="w-4 h-4 text-[#0000EE]" />
                <span>INFRASTRUCTURE</span>
              </div>
              <ul className="space-y-1 text-[#555555]">
                {project.architecture.infrastructure.map((inf, i) => (
                  <li key={i}>• {inf}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Key Features & Engineering Modules */}
        <section className="mb-20">
          <div className="mb-8 pb-4 border-b border-[#000000]/15">
            <div className="text-xs font-mono text-[#0000EE] font-bold uppercase tracking-widest mb-1">
              ENGINEERING HIGHLIGHTS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase text-[#000000]">
              CORE FUNCTIONAL MODULES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.keyFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="p-5 border border-[#000000]/15 bg-[#DFDDD9]/30 rounded-[8px] flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0000EE] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-[#000000] leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Measurable Outcomes / Results */}
        <section className="mb-20 bg-[#000000] text-white p-8 md:p-14 rounded-[12px]">
          <div className="text-xs font-mono text-[#0000EE] font-bold uppercase tracking-widest mb-2">
            MEASURABLE IMPACT
          </div>
          <h2 className="font-display text-4xl sm:text-5xl uppercase mb-8">
            VERIFIED OUTCOMES
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {project.outcomes.map((out, idx) => (
              <div key={idx} className="border-l-2 border-[#0000EE] pl-4">
                <div className="font-display text-5xl sm:text-6xl text-[#0000EE]">
                  {out.metric}
                </div>
                <div className="font-mono text-sm uppercase text-white font-bold mt-1">
                  {out.label}
                </div>
                <p className="text-xs text-white/70 mt-1 font-sans">
                  {out.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Development Process Phases */}
        <section className="mb-20">
          <div className="mb-8 pb-4 border-b border-[#000000]/15">
            <div className="text-xs font-mono text-[#0000EE] font-bold uppercase tracking-widest mb-1">
              EXECUTION CHRONICLE
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase text-[#000000]">
              DEVELOPMENT MILESTONES
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.process.map((step, idx) => (
              <div
                key={idx}
                className="p-5 border border-[#000000]/15 bg-[#EBE9E4] rounded-[8px]"
              >
                <div className="text-xs font-mono text-[#555555] mb-2">
                  PHASE 0{idx + 1}
                </div>
                <div className="font-mono text-sm font-bold uppercase text-[#000000] mb-2">
                  {step.phase}
                </div>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {step.details}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Next Project Footer Bar */}
        <section className="pt-12 border-t-2 border-[#000000] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-[#555555] uppercase">
              NEXT CASE STUDY //
            </span>
            <h3 className="font-display text-3xl sm:text-4xl uppercase text-[#000000]">
              {nextProject.title}
            </h3>
            <span className="text-xs font-mono text-[#0000EE]">
              {nextProject.category}
            </span>
          </div>

          <button
            onClick={() => {
              onSelectProject(nextProject);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group bg-[#000000] text-white px-8 py-4 rounded-[8px] font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#0000EE] transition-colors flex items-center gap-3"
          >
            <span>VIEW NEXT CASE STUDY</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </section>
      </main>
    </div>
  );
};
