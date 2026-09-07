import React from 'react';
import { Project } from '../types';
import { ArrowUpRight, CheckCircle2, Shield, Activity, Cpu, ShoppingBag, Eye } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelectProject: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectProject }) => {
  // Render bespoke technical graphic previews for each project
  const renderProjectVisual = () => {
    switch (project.previewType) {
      case 'cattle-grid':
        return (
          <div className="w-full h-full bg-[#111111] text-white p-5 flex flex-col justify-between font-mono text-xs overflow-hidden relative group-hover:border-[#0000EE] transition-colors border border-black/20">
            <div className="flex justify-between items-center border-b border-white/15 pb-2 text-[10px] text-white/60">
              <span>TAG #IND-GSH-8842 // GIR_INDIGENOUS</span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                ACTIVE MONITORING
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 my-4">
              <div className="bg-white/5 p-3 rounded-[4px] border border-white/10">
                <div className="text-[9px] text-white/50">DAILY FEED INTAKE</div>
                <div className="text-lg font-bold text-white mt-1">18.4 KG</div>
                <div className="text-[8px] text-emerald-400 mt-0.5">OPTIMAL CALORIC DENSITY</div>
              </div>
              <div className="bg-white/5 p-3 rounded-[4px] border border-white/10">
                <div className="text-[9px] text-white/50">MILK YIELD / DAY</div>
                <div className="text-lg font-bold text-[#0000EE] mt-1">14.2 L</div>
                <div className="text-[8px] text-white/60">A2 BETA-CASEIN</div>
              </div>
              <div className="bg-white/5 p-3 rounded-[4px] border border-white/10">
                <div className="text-[9px] text-white/50">HEALTH STATUS</div>
                <div className="text-lg font-bold text-emerald-400 mt-1">VACCINATED</div>
                <div className="text-[8px] text-white/60">BOOSTER: 14 DAYS</div>
              </div>
            </div>

            <div className="border-t border-white/15 pt-2 flex justify-between items-center text-[10px] text-white/60">
              <span>POSTGRESQL // RFID SYNCHRONIZED</span>
              <span className="text-[#0000EE] font-bold">ERP SCHEMA V2.4</span>
            </div>
          </div>
        );

      case 'patent-diagram':
        return (
          <div className="w-full h-full bg-[#0a0f1d] text-white p-5 flex flex-col justify-between font-mono text-xs overflow-hidden relative border border-black/20">
            <div className="flex justify-between items-center border-b border-white/15 pb-2 text-[10px] text-white/60">
              <span>PATENT #US-11,409,218-B2</span>
              <span className="text-cyan-400">STATUS: ESCROW PENDING</span>
            </div>

            <div className="space-y-2.5 my-3">
              <div className="flex items-center justify-between text-[11px] bg-white/5 p-2 rounded-[4px]">
                <span className="text-white/70">WIPO TECH CLASS:</span>
                <span className="text-white font-bold">G06F 21/57 (CYBERSECURITY)</span>
              </div>
              <div className="flex items-center justify-between text-[11px] bg-white/5 p-2 rounded-[4px]">
                <span className="text-white/70">VALUATION ALGORITHM:</span>
                <span className="text-cyan-300 font-bold">$1,250,000 USD</span>
              </div>
              <div className="flex items-center justify-between text-[11px] bg-white/5 p-2 rounded-[4px]">
                <span className="text-white/70">ASSIGNMENT ESCROW:</span>
                <span className="text-emerald-400 font-bold">MILESTONE 2 / 3 VERIFIED</span>
              </div>
            </div>

            <div className="border-t border-white/15 pt-2 flex justify-between items-center text-[10px] text-white/60">
              <span>SUPABASE VECTOR EMBEDDINGS</span>
              <span className="text-cyan-400 font-bold">WIPO / USPTO PARSER</span>
            </div>
          </div>
        );

      case 'neural-circuit':
        return (
          <div className="w-full h-full bg-[#080808] text-white p-5 flex flex-col justify-between font-mono text-xs overflow-hidden relative border border-black/20">
            <div className="flex justify-between items-center border-b border-white/15 pb-2 text-[10px] text-white/60">
              <span className="flex items-center gap-1.5 text-indigo-400">
                <Cpu className="w-3.5 h-3.5" />
                AST ENGINE // SOCRATIC PIPELINE
              </span>
              <span className="text-emerald-400">STREAMING ACTIVE</span>
            </div>

            <div className="my-2 bg-black/80 p-3 rounded-[4px] border border-white/10 text-[11px] space-y-1.5">
              <div className="text-white/40">// Student submitted bugged quicksort</div>
              <div className="text-emerald-400 font-bold">→ ANALYZING SYNTAX TREE...</div>
              <div className="text-indigo-300">"Notice line 24: What happens if low &gt;= high?"</div>
              <div className="text-white/70 text-[9px] bg-indigo-950/40 p-1.5 rounded border border-indigo-500/30">
                Hint tier 1 dispatched. Solution code masked to protect reasoning.
              </div>
            </div>

            <div className="border-t border-white/15 pt-2 flex justify-between items-center text-[10px] text-white/60">
              <span>TTFT: 280ms // SERVER-SENT EVENTS</span>
              <span className="text-indigo-400 font-bold">MONACO SANDBOX</span>
            </div>
          </div>
        );

      case 'media-stream':
        return (
          <div className="w-full h-full bg-[#181818] text-white p-5 flex flex-col justify-between font-mono text-xs overflow-hidden relative border border-black/20">
            <div className="flex justify-between items-center border-b border-white/15 pb-2 text-[10px] text-white/60">
              <span>TELLSTAR // PRODUCTION STUDIO</span>
              <span className="text-[#0000EE] font-bold">GLSL DISPLACEMENT</span>
            </div>

            <div className="my-auto text-center py-4">
              <div className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-white group-hover:text-[#0000EE] transition-colors">
                KINETIC CANVAS
              </div>
              <div className="text-[10px] text-white/50 mt-1 uppercase tracking-widest">
                INERTIAL SCROLL // VIDEO REEL // 99 LIGHTHOUSE
              </div>
            </div>

            <div className="border-t border-white/15 pt-2 flex justify-between items-center text-[10px] text-white/60">
              <span>CUSTOM WEBGL SHADER</span>
              <span className="text-white/80">60 FPS COMPOSITOR</span>
            </div>
          </div>
        );

      case 'ayurveda-store':
        return (
          <div className="w-full h-full bg-[#16130e] text-[#f5ebd7] p-5 flex flex-col justify-between font-mono text-xs overflow-hidden relative border border-black/20">
            <div className="flex justify-between items-center border-b border-white/15 pb-2 text-[10px] text-amber-200/70">
              <span className="flex items-center gap-1.5">
                <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
                D2C PURE COW GHEE // BATCH #2024-AUG-09
              </span>
              <span className="text-emerald-400">LAB PURITY: 99.8%</span>
            </div>

            <div className="grid grid-cols-2 gap-3 my-3">
              <div className="bg-white/5 p-2.5 rounded-[4px] border border-amber-500/20">
                <div className="text-[9px] text-amber-300/60">CHECKOUT VELOCITY</div>
                <div className="text-base font-bold text-white mt-0.5">1-CLICK UPI</div>
                <div className="text-[8px] text-emerald-400">CONVERSION +38%</div>
              </div>
              <div className="bg-white/5 p-2.5 rounded-[4px] border border-amber-500/20">
                <div className="text-[9px] text-amber-300/60">MOBILE SPEED</div>
                <div className="text-base font-bold text-amber-300 mt-0.5">1.4 SECONDS</div>
                <div className="text-[8px] text-white/60">ZERO SHOPIFY BLOAT</div>
              </div>
            </div>

            <div className="border-t border-white/15 pt-2 flex justify-between items-center text-[10px] text-amber-200/60">
              <span>HEADLESS REACT STOREFRONT</span>
              <span className="text-amber-400 font-bold">SHIPROCKET LOGISTICS</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <article
      id={`project-block-${project.slug}`}
      data-cursor="VIEW_PROJECT"
      onClick={() => onSelectProject(project)}
      className="group cursor-pointer border border-[#000000]/20 bg-[#DFDDD9]/30 rounded-[12px] p-6 sm:p-8 md:p-10 transition-all duration-300 hover:border-[#0000EE] hover:bg-[#DFDDD9]/60 flex flex-col justify-between relative overflow-hidden"
    >
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#000000]/15 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xl md:text-2xl font-bold text-[#0000EE]">
            {project.number}
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-[#555555]">
            // {project.category}
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono text-[#555555]">
          <span>YEAR: {project.year}</span>
          <span className="hidden sm:inline">ROLE: {project.role.split('&')[0]}</span>
        </div>
      </div>

      {/* Main Grid: Left Details & Right Bespoke Visual */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
        {/* Left Column: Massive Editorial Title & Narrative */}
        <div className="lg:col-span-6 space-y-4">
          <h3 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#000000] group-hover:text-[#0000EE] transition-colors duration-200 leading-[0.9]">
            {project.title}
          </h3>

          <div className="text-xs font-mono font-semibold text-[#0000EE] uppercase tracking-wide">
            {project.subtitle}
          </div>

          <p className="text-sm md:text-base text-[#000000]/80 leading-relaxed font-sans">
            {project.overview}
          </p>

          {/* Key Metrics / Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
            {project.outcomes.slice(0, 3).map((out, idx) => (
              <div key={idx} className="border border-[#000000]/10 bg-[#EBE9E4] p-2.5 rounded-[6px]">
                <div className="font-mono text-base font-bold text-[#000000]">{out.metric}</div>
                <div className="text-[10px] font-mono text-[#555555] uppercase leading-tight mt-0.5">
                  {out.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: High-Density Bespoke Interactive Preview Box */}
        <div className="lg:col-span-6 h-[260px] sm:h-[300px] rounded-[8px] overflow-hidden border border-[#000000]/20 shadow-xs group-hover:scale-[1.01] transition-transform duration-300">
          {renderProjectVisual()}
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="pt-4 border-t border-[#000000]/15 flex flex-wrap items-center justify-between gap-4">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] font-mono font-bold text-[#555555] mr-1">TECH:</span>
          {project.technologies.slice(0, 5).map((tech, tIdx) => (
            <span
              key={tIdx}
              className="text-[10px] font-mono bg-[#000000] text-white px-2.5 py-1 rounded-[4px] uppercase"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[10px] font-mono text-[#555555]">
              +{project.technologies.length - 5} MORE
            </span>
          )}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#000000] group-hover:text-[#0000EE] transition-colors">
          <span>VIEW CASE STUDY</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>
    </article>
  );
};
