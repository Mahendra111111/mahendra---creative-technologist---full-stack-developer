import React, { useState } from 'react';
import { PROJECTS } from '../data/projects';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'FULL-STACK') return p.category.includes('Full-Stack') || p.category.includes('ERP');
    if (activeFilter === 'AI') return p.category.includes('AI');
    if (activeFilter === 'COMMERCE') return p.category.includes('E-Commerce') || p.category.includes('Fintech');
    return true;
  });

  return (
    <section id="work" className="py-24 md:py-36 border-b border-[#000000]/15">
      <div className="max-w-[1521px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#000000]/20 gap-6">
          <div>
            <div className="text-xs font-mono text-[#0000EE] font-bold tracking-widest uppercase mb-2">
              PORTFOLIO // CASE STUDIES
            </div>
            <h2 className="font-display text-[56px] sm:text-[76px] md:text-[96px] uppercase tracking-tight text-[#000000] leading-none">
              SELECTED WORK
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'ALL', label: 'ALL WORK [05]' },
              { id: 'FULL-STACK', label: 'FULL-STACK & ERP' },
              { id: 'AI', label: 'AI & EDTECH' },
              { id: 'COMMERCE', label: 'COMMERCE & FINTECH' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider rounded-[6px] border transition-all duration-200 ${
                  activeFilter === f.id
                    ? 'bg-[#000000] text-white border-[#000000]'
                    : 'border-[#000000]/20 bg-transparent text-[#555555] hover:text-[#000000] hover:border-[#000000]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Oversized Project Presentations */}
        <div className="space-y-12 md:space-y-16">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 p-8 border border-[#000000]/15 bg-[#DFDDD9]/30 rounded-[12px] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-2xl md:text-3xl uppercase text-[#000000]">
              LOOKING FOR A SPECIFIC ARCHITECTURE OR DOMAIN?
            </h4>
            <p className="text-xs md:text-sm font-mono text-[#555555] mt-1">
              I build custom systems across diverse industries: logistics, supply chain, edtech, fintech, and creative studios.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 bg-[#0000EE] text-white font-mono text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-[8px] hover:bg-[#0000BE] transition-colors"
          >
            DISCUSS YOUR SPECS →
          </a>
        </div>
      </div>
    </section>
  );
};
