import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/faq';
import { ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 md:py-36 border-b border-[#000000]/15">
      <div className="max-w-[1521px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#000000]/20 gap-4">
          <div>
            <div className="text-xs font-mono text-[#0000EE] font-bold tracking-widest uppercase mb-2">
              FREQUENT INQUIRIES
            </div>
            <h2 className="font-display text-[56px] sm:text-[76px] md:text-[96px] uppercase tracking-tight text-[#000000] leading-none">
              QUESTIONS &amp; ANSWERS
            </h2>
          </div>

          <div className="text-xs font-mono text-[#555555] max-w-sm">
            Direct answers on collaboration, technology stack, project lifecycles, and architectural deliverables.
          </div>
        </div>

        {/* Minimal Accordion List */}
        <div className="divide-y divide-[#000000]/15 border-y border-[#000000]/15 max-w-5xl mx-auto">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={item.number}
                id={`faq-item-${item.number}`}
                className={`transition-colors ${isOpen ? 'bg-[#DFDDD9]/30' : 'hover:bg-[#DFDDD9]/15'}`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-6 md:py-8 px-4 md:px-6 text-left flex items-center justify-between gap-6 focus:outline-none group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.number}`}
                >
                  <div className="flex items-center gap-4 md:gap-8">
                    <span className="font-mono text-sm md:text-base font-bold text-[#555555] group-hover:text-[#0000EE] transition-colors">
                      {item.number}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[#000000] group-hover:text-[#0000EE] transition-colors leading-tight">
                      {item.question}
                    </h3>
                  </div>

                  <div className="shrink-0 w-8 h-8 rounded-full border border-[#000000]/20 flex items-center justify-center group-hover:border-[#0000EE] group-hover:text-[#0000EE] transition-colors">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.number}`}
                    className="px-6 md:px-16 pb-8 pt-2 text-base md:text-lg text-[#000000]/80 leading-relaxed font-sans max-w-3xl animate-in fade-in duration-200"
                  >
                    <p>{item.answer}</p>
                    <div className="mt-3">
                      <span className="text-[10px] font-mono uppercase bg-[#EBE9E4] border border-[#000000]/15 px-2 py-0.5 rounded-[4px] text-[#555555]">
                        CAT: {item.tag}
                      </span>
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
