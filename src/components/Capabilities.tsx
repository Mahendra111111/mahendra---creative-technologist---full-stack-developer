import React, { useState } from 'react';

const STATEMENTS = [
  { id: '01', line1: 'I DESIGN', line2: 'SYSTEMS.', desc: 'High-availability data pipelines and bulletproof database schemas.' },
  { id: '02', line1: 'I BUILD', line2: 'PRODUCTS.', desc: 'Full-stack web applications that users love and founders rely on.' },
  { id: '03', line1: 'I AUTOMATE', line2: 'WORKFLOWS.', desc: 'Eliminating manual bottlenecks through cron engines and webhook triggers.' },
  { id: '04', line1: 'I CONNECT', line2: 'APIS.', desc: 'Seamless orchestration between payment gateways, logistics, and AI services.' },
  { id: '05', line1: 'I WORK WITH', line2: 'DATA.', desc: 'Extracting clarity from millions of records with Postgres and vector stores.' },
  { id: '06', line1: 'I TURN IDEAS INTO', line2: 'PRODUCTION SOFTWARE.', desc: 'Zero fluff. Pure architectural execution that delivers on business goals.' }
];

export const Capabilities: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="capabilities" className="py-24 md:py-36 border-b border-[#000000]/15 bg-[#000000] text-white">
      <div className="max-w-[1521px] mx-auto px-4 md:px-8">
        {/* Eyebrow */}
        <div className="text-xs font-mono text-[#0000EE] font-bold tracking-widest uppercase mb-4">
          DISCIPLINE &amp; EXECUTION
        </div>

        {/* Lead Headline */}
        <h2 className="font-display text-[44px] sm:text-[64px] md:text-[84px] lg:text-[100px] uppercase tracking-tight text-white leading-[0.88] mb-16 border-b border-white/20 pb-8 select-none">
          I DON'T JUST <span className="text-[#0000EE]">WRITE CODE.</span>
        </h2>

        {/* Massive Statements Grid / List */}
        <div className="divide-y divide-white/15 border-y border-white/15">
          {STATEMENTS.map((stmt, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={stmt.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`py-6 sm:py-8 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-default ${
                  isHovered ? 'bg-white/5 pl-4 sm:pl-6' : ''
                }`}
              >
                <div className="flex items-baseline gap-4 sm:gap-8">
                  <span className="font-mono text-sm sm:text-base text-white/40">
                    {stmt.id}
                  </span>
                  <div className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-white">
                    <span className="text-white/60 mr-2">{stmt.line1}</span>
                    <span className={`${isHovered ? 'text-[#0000EE]' : 'text-white'} transition-colors duration-200`}>
                      {stmt.line2}
                    </span>
                  </div>
                </div>

                <div className="text-xs sm:text-sm font-mono text-white/50 max-w-sm md:text-right">
                  {stmt.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
