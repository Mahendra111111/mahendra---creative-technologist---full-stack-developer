import React, { useState } from 'react';
import { TECHNOLOGIES } from '../data/technologies';
import { TechnologyItem } from '../types';
import { Cpu, Network, Sparkles, Check, ArrowUpRight } from 'lucide-react';

export const Technologies: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechnologyItem>(TECHNOLOGIES[0]);
  const [hoveredTechId, setHoveredTechId] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const activeTech = hoveredTechId
    ? TECHNOLOGIES.find((t) => t.id === hoveredTechId) || selectedTech
    : selectedTech;

  const filteredTechnologies = TECHNOLOGIES.filter((tech) => {
    if (filterCategory === 'all') return true;
    return tech.category === filterCategory;
  });

  return (
    <section id="technologies" className="py-24 md:py-36 border-b border-[#000000]/15 bg-[#DFDDD9]/20">
      <div className="max-w-[1521px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#000000]/20 gap-4">
          <div>
            <div className="text-xs font-mono text-[#0000EE] font-bold tracking-widest uppercase mb-2">
              SYSTEM TOPOLOGY &amp; TOOLING
            </div>
            <h2 className="font-display text-[56px] sm:text-[76px] md:text-[96px] uppercase tracking-tight text-[#000000] leading-none">
              TECH ECOSYSTEM
            </h2>
          </div>

          <div className="text-xs font-mono text-[#555555] max-w-sm">
            Interactive node graph. Hover or select any technology to inspect its role, architectural connections, and dependency mesh.
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
          {[
            { id: 'all', label: 'ALL TOOLS [15]' },
            { id: 'frontend', label: 'FRONTEND & UI' },
            { id: 'backend', label: 'BACKEND & RUNTIMES' },
            { id: 'database', label: 'DATABASES & ORMS' },
            { id: 'ai', label: 'AI & LLM APIS' },
            { id: '3d', label: '3D GRAPHICS' },
            { id: 'tools', label: 'DEVOPS & DEPLOY' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3 py-1 rounded-[6px] border uppercase transition-colors ${
                filterCategory === cat.id
                  ? 'bg-[#000000] text-white border-[#000000]'
                  : 'bg-[#EBE9E4] text-[#555555] border-[#000000]/15 hover:border-[#000000] hover:text-[#000000]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Connected Node Grid & Live Telemetry Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Technology Matrix (8 Cols) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filteredTechnologies.map((tech) => {
              const isSelected = activeTech.id === tech.id;
              const isConnected = activeTech.connectedTo.includes(tech.id);
              const isDimmed = !isSelected && !isConnected && (hoveredTechId !== null || selectedTech !== null);

              return (
                <button
                  key={tech.id}
                  id={`tech-node-${tech.id}`}
                  onMouseEnter={() => setHoveredTechId(tech.id)}
                  onMouseLeave={() => setHoveredTechId(null)}
                  onClick={() => setSelectedTech(tech)}
                  className={`p-4 text-left border rounded-[8px] transition-all duration-200 relative group focus:outline-none ${
                    isSelected
                      ? 'bg-[#000000] text-white border-[#000000] shadow-md scale-[1.02]'
                      : isConnected
                      ? 'bg-[#0000EE]/10 text-[#000000] border-[#0000EE] scale-[1.01]'
                      : 'bg-[#EBE9E4] text-[#000000] border-[#000000]/15 hover:border-[#0000EE]'
                  } ${isDimmed ? 'opacity-40' : 'opacity-100'}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span
                      className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded-[3px] ${
                        isSelected
                          ? 'bg-[#0000EE] text-white'
                          : isConnected
                          ? 'bg-[#0000EE] text-white'
                          : 'bg-[#DFDDD9] text-[#555555]'
                      }`}
                    >
                      {tech.level}
                    </span>

                    {isConnected && (
                      <span className="text-[9px] font-mono text-[#0000EE] font-bold flex items-center gap-0.5">
                        <Network className="w-3 h-3" />
                        LINKED
                      </span>
                    )}
                  </div>

                  <div className="font-display text-xl sm:text-2xl uppercase tracking-tight leading-none mb-1">
                    {tech.name}
                  </div>

                  <div
                    className={`text-[10px] font-mono truncate ${
                      isSelected ? 'text-white/70' : 'text-[#555555]'
                    }`}
                  >
                    {tech.category.toUpperCase()} // {tech.connectedTo.length} NODES
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Live Telemetry & Inspector Panel (4 Cols) */}
          <div className="lg:col-span-4 sticky top-28 bg-[#DFDDD9]/80 border-2 border-[#000000] rounded-[12px] p-6 shadow-xs font-mono">
            <div className="flex justify-between items-center border-b border-[#000000]/15 pb-3 mb-4 text-[10px]">
              <span className="text-[#0000EE] font-bold">NODE_INSPECTOR // ACTIVE</span>
              <span className="text-[#555555] uppercase">CAT: {activeTech.category}</span>
            </div>

            <div className="font-display text-4xl uppercase text-[#000000] leading-none mb-2">
              {activeTech.name}
            </div>

            <div className="text-xs text-[#0000EE] font-bold uppercase mb-4">
              ROLE: {activeTech.level}
            </div>

            <p className="text-xs text-[#000000] leading-relaxed font-sans mb-6 border-y border-[#000000]/10 py-3">
              {activeTech.description}
            </p>

            {/* Interconnected System Node Badges */}
            <div className="space-y-2">
              <div className="text-[10px] uppercase text-[#555555] font-bold flex items-center gap-1.5">
                <Network className="w-3.5 h-3.5 text-[#0000EE]" />
                <span>INTERCONNECTED PIPELINE NODES:</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {activeTech.connectedTo.map((connId) => {
                  const targetTech = TECHNOLOGIES.find((t) => t.id === connId);
                  return (
                    <button
                      key={connId}
                      onClick={() => {
                        if (targetTech) setSelectedTech(targetTech);
                      }}
                      className="text-[10px] bg-[#EBE9E4] hover:bg-[#0000EE] hover:text-white border border-[#000000]/20 px-2 py-1 rounded-[4px] text-[#000000] transition-colors"
                    >
                      {targetTech ? targetTech.name : connId}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Status Footer */}
            <div className="mt-6 pt-3 border-t border-[#000000]/15 flex items-center justify-between text-[9px] text-[#555555]">
              <span>SYSTEM HEALTH: NOMINAL</span>
              <span className="text-[#0000EE] font-bold">ZERO LEGACY DEBT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
