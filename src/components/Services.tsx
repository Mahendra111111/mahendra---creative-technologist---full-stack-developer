import React, { useState } from 'react';
import { SERVICES } from '../data/services';
import { ArrowUpRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export const Services: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('full-stack-dev');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="services"
      className="py-24 md:py-36 border-b border-[#000000]/15"
    >
      <div className="max-w-[1521px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#000000]/20 gap-4">
          <div>
            <div className="text-xs font-mono text-[#0000EE] font-bold tracking-widest uppercase mb-2">
              CAPABILITIES &amp; ARCHITECTURE
            </div>
            <h2 className="font-display text-[56px] sm:text-[76px] md:text-[96px] uppercase tracking-tight text-[#000000] leading-none">
              WHAT I BUILD
            </h2>
          </div>
          <div className="text-sm font-mono text-[#555555] max-w-md">
            Custom engineered full-stack software tailored to ambitious business goals, from zero-to-one startups to enterprise platforms.
          </div>
        </div>

        {/* Editorial Horizontal Rows */}
        <div className="divide-y divide-[#000000]/15 border-y border-[#000000]/15">
          {SERVICES.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                id={`service-row-${service.id}`}
                className={`transition-all duration-300 ${
                  isExpanded ? 'bg-[#DFDDD9]/40' : 'hover:bg-[#DFDDD9]/20'
                }`}
              >
                {/* Clickable Header Row */}
                <button
                  onClick={() => toggleExpand(service.id)}
                  className="w-full py-8 md:py-12 px-2 md:px-6 text-left flex flex-col lg:flex-row lg:items-center justify-between gap-6 group focus:outline-none focus-visible:bg-[#DFDDD9]"
                  aria-expanded={isExpanded}
                  aria-controls={`service-content-${service.id}`}
                >
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span className="font-mono text-lg md:text-xl font-bold text-[#555555] group-hover:text-[#0000EE] transition-colors">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-[#000000] group-hover:text-[#0000EE] group-hover:translate-x-1.5 transition-all duration-300">
                        {service.title}
                      </h3>
                      <div className="text-xs md:text-sm font-mono text-[#555555] mt-2">
                        {service.shortDesc}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end lg:self-center">
                    <div className="hidden sm:flex flex-wrap gap-2 max-w-xs justify-end">
                      {service.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono border border-[#000000]/15 bg-[#EBE9E4] px-2 py-0.5 rounded-xs text-[#000000]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="w-10 h-10 rounded-full border border-[#000000]/20 flex items-center justify-center group-hover:border-[#0000EE] group-hover:bg-[#0000EE] group-hover:text-white transition-all duration-300">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expanded Detail Panel */}
                {isExpanded && (
                  <div
                    id={`service-content-${service.id}`}
                    className="px-4 md:px-16 pb-10 pt-2 border-t border-[#000000]/10 grid grid-cols-1 md:grid-cols-12 gap-8 animate-in fade-in duration-200"
                  >
                    <div className="md:col-span-5 space-y-4">
                      <div className="text-xs font-mono text-[#0000EE] font-bold uppercase tracking-wider">
                        SCOPE &amp; ARCHITECTURE
                      </div>
                      <p className="text-base text-[#000000] leading-relaxed">
                        {service.fullDesc}
                      </p>
                      <div className="pt-2">
                        <div className="text-xs font-mono text-[#555555] uppercase mb-2">
                          PRIMARY TECHNOLOGIES:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {service.techStack.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-xs font-mono bg-[#000000] text-white px-2.5 py-1 rounded-[4px]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-7 space-y-4 bg-[#EBE9E4] p-6 rounded-[8px] border border-[#000000]/15">
                      <div className="text-xs font-mono text-[#000000] font-bold uppercase tracking-wider">
                        KEY DELIVERABLES &amp; CAPABILITIES:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.deliverables.map((deliv, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#000000]">
                            <CheckCircle2 className="w-4 h-4 text-[#0000EE] shrink-0 mt-0.5" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
