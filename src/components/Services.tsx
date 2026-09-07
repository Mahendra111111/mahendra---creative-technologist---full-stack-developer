import React from 'react';
import { SERVICES } from '../data/services';
import { CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-24 md:py-36 bg-[#000000] text-white border-b border-white/15 relative"
    >
      <div className="max-w-[1521px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/20 gap-4">
          <div>
            <div className="text-xs font-mono text-white/60 font-bold tracking-widest uppercase mb-2">
              CAPABILITIES &amp; ARCHITECTURE
            </div>
            <h2 className="font-display text-[56px] sm:text-[76px] md:text-[96px] uppercase tracking-tight text-white leading-none">
              WHAT I BUILD
            </h2>
          </div>
          <div className="text-sm font-mono text-white/60 max-w-md">
            Custom engineered full-stack software tailored to ambitious business goals, from zero-to-one startups to enterprise platforms.
          </div>
        </div>

        {/* Stacked Cards Container */}
        <div className="relative pb-24">
          {SERVICES.map((service, index) => {
            return (
              <div
                key={service.id}
                id={`service-row-${service.id}`}
                className="sticky min-h-[90vh] shadow-[0_-10px_40px_rgba(0,0,0,0.8)] border-t border-white/15 bg-[#000000] pt-8 md:pt-12 pb-16 md:pb-24 transition-all duration-300"
                style={{
                  // All cards stick at the exact same position to cover the previous ones completely
                  top: '10vh',
                  // Ensure z-index increases so later cards stack on top of earlier ones properly
                  zIndex: 10 + index,
                }}
              >
                {/* Header Row */}
                <div className="w-full px-2 md:px-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span className="font-mono text-lg md:text-xl font-bold text-white/40">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-white">
                        {service.title}
                      </h3>
                      <div className="text-xs md:text-sm font-mono text-white/60 mt-2">
                        {service.shortDesc}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end lg:self-center">
                    <div className="hidden sm:flex flex-wrap gap-2 max-w-xs justify-end">
                      {service.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono border border-white/20 bg-white/5 px-2 py-0.5 rounded-xs text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Content Detail Panel */}
                <div className="px-2 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
                  <div className="md:col-span-5 space-y-4">
                    <div className="text-xs font-mono text-white/60 font-bold uppercase tracking-wider">
                      SCOPE &amp; ARCHITECTURE
                    </div>
                    <p className="text-base text-white/90 leading-relaxed">
                      {service.fullDesc}
                    </p>
                    <div className="pt-6">
                      <div className="text-xs font-mono text-white/50 uppercase mb-3">
                        PRIMARY TECHNOLOGIES:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {service.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-xs font-mono bg-white text-black px-3 py-1.5 rounded-[4px] font-bold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-7 space-y-4 bg-white/5 p-6 md:p-8 rounded-[8px] border border-white/10 backdrop-blur-sm">
                    <div className="text-xs font-mono text-white/80 font-bold uppercase tracking-wider mb-6">
                      KEY DELIVERABLES &amp; CAPABILITIES:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                      {service.deliverables.map((deliv, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-3 text-sm text-white/80 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-1 opacity-70" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
