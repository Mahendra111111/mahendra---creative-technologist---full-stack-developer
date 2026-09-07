import React from 'react';
import { Terminal, MapPin, Code2, Sparkles, Binary, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-36 border-b border-[#000000]/15">
      <div className="max-w-[1521px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#0000EE] font-bold tracking-widest uppercase mb-4">
          <Terminal className="w-3.5 h-3.5" />
          <span>ABOUT // PROFILE // MANIFESTO</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Asymmetric Editorial Portrait / Visual Monument */}
          <div className="lg:col-span-5 relative">
            <div className="relative border-2 border-[#000000] bg-[#DFDDD9] rounded-[12px] p-4 sm:p-6 overflow-hidden">
              {/* Top Bar */}
              <div className="flex items-center justify-between border-b border-[#000000]/15 pb-3 mb-4 text-[10px] font-mono">
                <span className="font-bold text-[#000000]">PROFILE_SYS.ID</span>
                <span className="text-[#0000EE] font-bold">ACTIVE DEPLOYMENT</span>
              </div>

              {/* Graphic Composition: Technical Monolith & Geometry */}
              <div className="w-full h-[360px] sm:h-[420px] bg-[#121212] text-white rounded-[8px] p-6 flex flex-col justify-between relative overflow-hidden font-mono border border-[#000000]">
                {/* Background matrix line art */}
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}
                />

                <div className="relative z-10 flex justify-between items-start">
                  <div className="w-14 h-14 border border-white/20 bg-white/5 flex items-center justify-center font-display text-2xl text-white">
                    MN
                  </div>
                  <div className="text-right text-[10px] text-white/50 space-y-1">
                    <div>LAT: 20.5937° N</div>
                    <div>LONG: 78.9629° E</div>
                    <div className="text-emerald-400">STATUS: AVAILABLE</div>
                  </div>
                </div>

                <div className="relative z-10 my-auto">
                  <div className="text-[11px] text-[#0000EE] font-bold uppercase tracking-widest mb-1">
                    SOFTWARE ENGINEER
                  </div>
                  <div className="font-display text-4xl sm:text-5xl uppercase text-white leading-none">
                    MAHENDRA
                  </div>
                  <p className="text-xs text-white/70 mt-2 max-w-xs font-sans">
                    Specialized in high-concurrency Node/Python services, reactive React 19 interfaces, and scalable PostgreSQL database engines.
                  </p>
                </div>

                {/* Bottom Metadata Tags */}
                <div className="relative z-10 border-t border-white/15 pt-3 grid grid-cols-2 gap-2 text-[9px] text-white/60">
                  <div>
                    <span className="text-white/40 block">EXPERTISE</span>
                    <span className="text-white">FULL-STACK &amp; 3D</span>
                  </div>
                  <div>
                    <span className="text-white/40 block">BASE</span>
                    <span className="text-white">INDIA // GLOBAL REMOTE</span>
                  </div>
                </div>
              </div>

              {/* Personal Metadata Badges Underneath */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center font-mono text-[10px]">
                <div className="bg-[#EBE9E4] p-2 border border-[#000000]/15 rounded-[4px]">
                  <span className="text-[#555555] block text-[8px]">LOCATION</span>
                  <span className="text-[#000000] font-bold">INDIA</span>
                </div>
                <div className="bg-[#EBE9E4] p-2 border border-[#000000]/15 rounded-[4px]">
                  <span className="text-[#555555] block text-[8px]">EXP</span>
                  <span className="text-[#000000] font-bold">FULL-STACK</span>
                </div>
                <div className="bg-[#EBE9E4] p-2 border border-[#000000]/15 rounded-[4px]">
                  <span className="text-[#555555] block text-[8px]">DISCIPLINE</span>
                  <span className="text-[#0000EE] font-bold">SYSTEMS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bio Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-display text-[52px] sm:text-[72px] md:text-[88px] uppercase tracking-tight text-[#000000] leading-[0.88]">
              HEY — <br />
              <span className="text-[#0000EE]">I'M MAHENDRA.</span>
            </h2>

            <div className="space-y-6 text-base sm:text-lg md:text-xl text-[#000000] font-normal leading-relaxed font-sans">
              <p>
                I am a full-stack software engineer and creative technologist. I build digital software for founders, companies, and institutions that demand both flawless technical architecture and unforgettable visual precision.
              </p>

              <p className="text-[#555555]">
                Over the past several years, I have architected mission-critical enterprise systems—from complex cattle and shelter management ERPs handling thousands of animal medical records, to patent licensing transaction marketplaces with automated legal escrow, down to direct-to-consumer e-commerce engines serving tens of thousands of orders.
              </p>

              <p className="text-[#555555]">
                I believe code is not merely syntax; it is an architectural medium. Whether structuring relational schemas in PostgreSQL, training AST parsers for Socratic AI tutoring, or writing custom GLSL fragment shaders in Three.js, my focus remains constant: <strong className="text-[#000000]">solving real business bottlenecks with software people actually remember.</strong>
              </p>
            </div>

            {/* Core Values / Work Ethic */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#000000]/15 font-mono text-xs">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#0000EE] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#000000] uppercase">SYSTEMS FIRST</div>
                  <div className="text-[#555555] mt-0.5">Every feature starts with solid data schemas and deterministic API contracts.</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#0000EE] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#000000] uppercase">NO DESIGN SHORTCUTS</div>
                  <div className="text-[#555555] mt-0.5">Typography, spatial rhythm, and responsive hierarchy are non-negotiable.</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#0000EE] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#000000] uppercase">PRAGMATIC AI</div>
                  <div className="text-[#555555] mt-0.5">Real intelligence workflows with vector search, not hollow chat wrappers.</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#0000EE] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#000000] uppercase">TRANSPARENT SPRINTING</div>
                  <div className="text-[#555555] mt-0.5">Direct communication, clear milestone tracking, and daily deploy links.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
