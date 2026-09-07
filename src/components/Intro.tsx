import React from 'react';
import { ArrowDownRight, Compass, ShieldCheck, Zap } from 'lucide-react';

export const Intro: React.FC = () => {
  return (
    <section
      id="intro"
      className="py-24 md:py-36 lg:py-44 border-b border-[#000000]/15 bg-[#DFDDD9]/25 relative"
    >
      <div className="max-w-[1521px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Section Marker */}
          <div className="lg:col-span-3">
            <div className="sticky top-28 space-y-4">
              <div className="inline-block border border-[#000000] px-3 py-1 font-mono text-xs uppercase tracking-widest text-[#000000] bg-[#EBE9E4]">
                PHILOSOPHY // 01
              </div>
              <p className="text-xs font-mono text-[#555555] leading-relaxed max-w-xs">
                Engineering with uncompromising attention to data integrity, code cleanliness, and sensory aesthetic hierarchy.
              </p>
            </div>
          </div>

          {/* Core Editorial Positioning Statement */}
          <div className="lg:col-span-9 space-y-12">
            <h2 className="font-display uppercase text-[#000000] text-[48px] sm:text-[72px] md:text-[92px] lg:text-[108px] leading-[0.88] tracking-tight select-none">
              FROM IDEA <br />
              <span className="text-[#0000EE]">TO INTERFACE</span> <br />
              TO PRODUCTION.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#000000]/15">
              <p className="text-lg md:text-xl text-[#000000] font-normal leading-relaxed">
                Most web applications either look stunning but break under complex state, or have solid backends wrapped in uninspired boilerplate templates.
              </p>
              <p className="text-base md:text-lg text-[#555555] leading-relaxed">
                I operate at the intersection of rigorous full-stack software engineering and editorial design. Every system is architected for maximum speed, strict type-safety, and memorable visual character that elevates your brand and solves real business bottlenecks.
              </p>
            </div>

            {/* Principles Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="border border-[#000000]/15 p-5 bg-[#EBE9E4] rounded-[8px] hover:border-[#0000EE] transition-colors">
                <Compass className="w-5 h-5 text-[#0000EE] mb-3" />
                <div className="font-mono text-xs font-bold uppercase text-[#000000] mb-1">
                  ARCHITECTURAL RIGOR
                </div>
                <p className="text-xs text-[#555555] leading-normal font-sans">
                  Relational PostgreSQL schemas, bulletproof API boundaries, and modular microservices.
                </p>
              </div>

              <div className="border border-[#000000]/15 p-5 bg-[#EBE9E4] rounded-[8px] hover:border-[#0000EE] transition-colors">
                <Zap className="w-5 h-5 text-[#0000EE] mb-3" />
                <div className="font-mono text-xs font-bold uppercase text-[#000000] mb-1">
                  SUB-SECOND VELOCITY
                </div>
                <p className="text-xs text-[#555555] leading-normal font-sans">
                  Optimized server actions, lightweight bundle weights, and instant optimistic UI response.
                </p>
              </div>

              <div className="border border-[#000000]/15 p-5 bg-[#EBE9E4] rounded-[8px] hover:border-[#0000EE] transition-colors">
                <ShieldCheck className="w-5 h-5 text-[#0000EE] mb-3" />
                <div className="font-mono text-xs font-bold uppercase text-[#000000] mb-1">
                  ENTERPRISE SECURITY
                </div>
                <p className="text-xs text-[#555555] leading-normal font-sans">
                  Strict JWT validation, cryptographic signature trails, and automated error telemetry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
