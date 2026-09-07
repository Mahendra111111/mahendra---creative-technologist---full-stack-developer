import React from 'react';
import { ArrowDownRight, ArrowRight, Terminal, Cpu, Layers } from 'lucide-react';
import { Scene3D } from './Scene3D';

interface HeroProps {
  onViewProjects: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewProjects, onOpenContact }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-24 md:pt-32 pb-16 md:pb-24 border-b border-[#000000]/15 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Micro Grid Watermark */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1521px] mx-auto px-4 md:px-8 w-full relative z-10 flex-1 flex flex-col justify-between">
        {/* Top Editorial Eyebrow & Live Status */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#000000]/15 pb-4 mb-8 md:mb-12">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#555555] uppercase">
            <span className="inline-block w-2 h-2 rounded-full bg-[#0000EE] animate-ping" />
            <span className="text-[#000000] font-bold">MAHENDRA // PORTFOLIO</span>
            <span className="hidden sm:inline text-[#555555]">— FULL-STACK &amp; 3D SYSTEMS</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-[#555555]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
              <span className="text-[#000000] font-semibold">AVAILABLE FOR Q2/Q3 PROJECTS</span>
            </span>
            <span className="hidden md:inline text-[#555555]">| BASED IN INDIA / UTC+5:30</span>
          </div>
        </div>

        {/* Asymmetric Editorial Hero Grid: Left Typography, Right 3D Object */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
          {/* Left Column: Massive Editorial Headlines (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#0000EE] font-bold mb-4 uppercase">
              <Terminal className="w-3.5 h-3.5" />
              <span>CREATIVE TECHNOLOGIST &amp; SOFTWARE ENGINEER</span>
            </div>

            {/* Oversized Tight Typography */}
            <h1 className="font-display uppercase text-[#000000] text-[58px] sm:text-[80px] md:text-[105px] lg:text-[118px] xl:text-[132px] leading-[0.85] tracking-[-0.03em] mb-6 select-none">
              <span className="block hover:text-[#0000EE] transition-colors duration-300">I BUILD</span>
              <span className="block hover:text-[#0000EE] transition-colors duration-300">DIGITAL</span>
              <span className="block text-[#0000EE]">SYSTEMS</span>
              <span className="block hover:text-[#0000EE] transition-colors duration-300">THAT SCALE.</span>
            </h1>

            {/* Supporting Statement */}
            <p className="text-base sm:text-lg md:text-xl text-[#000000]/80 max-w-2xl font-normal leading-[1.4] mb-8 font-sans">
              Full-stack developer engineering ambitious digital products, intelligent AI applications,
              and interactive 3D web experiences built to solve high-stakes business problems.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                id="hero-view-projects-btn"
                onClick={onViewProjects}
                className="group bg-[#000000] text-white px-7 py-3.5 text-xs sm:text-sm font-mono font-bold tracking-wider uppercase rounded-[8px] hover:bg-[#0000EE] transition-all duration-300 flex items-center gap-3 shadow-sm active:translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0000EE]"
              >
                <span>VIEW SELECTED WORK</span>
                <ArrowDownRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              </button>

              <button
                id="hero-lets-talk-btn"
                onClick={onOpenContact}
                className="group border border-[#000000] text-[#000000] px-6 py-3.5 text-xs sm:text-sm font-mono font-bold tracking-wider uppercase rounded-[8px] hover:bg-[#000000] hover:text-white transition-all duration-300 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0000EE]"
              >
                <span>LET'S TALK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Right Column: 3D Procedural Canvas with Framed Container (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-[#000000]/20 bg-[#DFDDD9]/40 rounded-[12px] p-2 md:p-3 overflow-hidden shadow-xs">
              {/* Header pill inside 3D frame */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-[#000000]/10 mb-2 text-[10px] font-mono text-[#555555]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="ml-2 text-[#000000] font-semibold">INTERACTIVE_CANVAS.R3F</span>
                </div>
                <span>60 FPS // GPU SYNC</span>
              </div>

              {/* 3D Scene */}
              <Scene3D />

              {/* Footer specs inside 3D frame */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#000000]/10 text-center font-mono text-[9px] text-[#555555]">
                <div>
                  <span className="block text-[#000000] font-bold">100%</span>
                  <span>RESPONSIVE</span>
                </div>
                <div className="border-x border-[#000000]/10">
                  <span className="block text-[#0000EE] font-bold">THREE.JS</span>
                  <span>PROCEDURAL</span>
                </div>
                <div>
                  <span className="block text-[#000000] font-bold">PARALLAX</span>
                  <span>ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Hero Ribbon / Capabilities strip */}
        <div className="pt-8 md:pt-12 border-t border-[#000000]/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#0000EE]" />
            <div>
              <div className="font-bold text-[#000000]">FULL-STACK</div>
              <div className="text-[10px] text-[#555555]">React / Node / Python</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#0000EE]" />
            <div>
              <div className="font-bold text-[#000000]">AI WORKFLOWS</div>
              <div className="text-[10px] text-[#555555]">LLM APIs &amp; Vector DBs</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#0000EE]" />
            <div>
              <div className="font-bold text-[#000000]">DATABASE ARCH</div>
              <div className="text-[10px] text-[#555555]">PostgreSQL &amp; Schemas</div>
            </div>
          </div>
          <div className="flex items-center justify-end text-right">
            <button
              onClick={onViewProjects}
              className="text-[#000000] hover:text-[#0000EE] flex items-center gap-1 group font-bold"
            >
              <span>SCROLL DOWN</span>
              <span className="group-hover:translate-y-0.5 transition-transform duration-200">↓</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
