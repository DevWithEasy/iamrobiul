import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { 
  ArrowUpRight, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  LayoutList, 
  LayoutGrid,
  Zap
} from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

type FilterCategory = 'all' | 'f-commerce' | 'wordpress' | 'laravel';

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<FilterCategory>('all');
  const [viewMode, setViewMode] = useState<'ledger' | 'grid'>('ledger');
  const [expandedId, setExpandedId] = useState<string | null>(projectsData[0].id);

  const filteredProjects = projectsData.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'wordpress') return item.category === 'wordpress' || item.category === 'f-commerce';
    if (filter === 'laravel') return item.category === 'laravel';
    if (filter === 'f-commerce') return item.category === 'f-commerce';
    return true;
  });

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="portfolio" className="py-20 lg:py-24 border-b border-white/[0.06] bg-[#07080B]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
              01 // Selected Works & Case Studies
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Tested under high ad-spend in Bangladesh.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-lg">
              Proven results from organic health brands, apparel labels, and multi-branch wholesalers in Dhaka.
            </p>
          </div>

          {/* Controls: Filter & View Mode */}
          <div className="flex items-center gap-3 self-start md:self-auto flex-wrap">
            {/* Category Filter */}
            <div className="flex items-center gap-1 border border-white/[0.08] rounded-lg p-1 text-xs font-mono bg-[#090C12]">
              <button
                onClick={() => setFilter('all')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  filter === 'all' ? 'bg-zinc-800 text-white font-medium' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                All ({projectsData.length})
              </button>
              <button
                onClick={() => setFilter('f-commerce')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  filter === 'f-commerce' ? 'bg-zinc-800 text-white font-medium' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                F-Commerce
              </button>
              <button
                onClick={() => setFilter('wordpress')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  filter === 'wordpress' ? 'bg-zinc-800 text-white font-medium' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                WordPress
              </button>
              <button
                onClick={() => setFilter('laravel')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  filter === 'laravel' ? 'bg-zinc-800 text-white font-medium' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                Laravel
              </button>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center border border-white/[0.08] rounded-lg p-1 bg-[#090C12] text-zinc-400">
              <button
                onClick={() => setViewMode('ledger')}
                className={`p-1 rounded ${viewMode === 'ledger' ? 'bg-zinc-800 text-white' : 'hover:text-zinc-200'}`}
                title="Ledger View"
              >
                <LayoutList className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1 rounded ${viewMode === 'grid' ? 'bg-zinc-800 text-white' : 'hover:text-zinc-200'}`}
                title="Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* View Mode 1: Minimalist Ledger (Uncommon & highly readable) */}
        {viewMode === 'ledger' ? (
          <div className="border border-white/[0.08] rounded-xl overflow-hidden divide-y divide-white/[0.06] bg-[#080B10]">
            {filteredProjects.map((project, idx) => {
              const isExpanded = expandedId === project.id;
              return (
                <div key={project.id} className="transition-colors hover:bg-zinc-900/40">
                  {/* Ledger Row Header */}
                  <div
                    onClick={() => onSelectProject(project)}
                    className="p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-3 cursor-pointer select-none"
                  >
                    <div className="flex items-start sm:items-center gap-3">
                      <span className="font-mono text-zinc-600 text-xs w-5">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm sm:text-base font-semibold text-white hover:text-emerald-400 transition-colors">
                            {project.title}
                          </h3>
                          <span className="text-zinc-600 font-mono text-xs">·</span>
                          <span className="text-zinc-500 text-xs font-mono">{project.location}</span>
                        </div>
                        <p className="text-xs text-zinc-400 mt-0.5 font-sans line-clamp-1">
                          {project.heroHeadline}
                        </p>
                      </div>
                    </div>

                    {/* Right side metrics and expand trigger */}
                    <div className="flex items-center justify-between lg:justify-end gap-5 pt-2 lg:pt-0 border-t lg:border-t-0 border-zinc-900 text-xs font-mono">
                      <div className="text-emerald-400 font-medium">
                        {project.businessOutcome}
                      </div>

                      <div className="flex items-center gap-3 text-zinc-400">
                        <span className="hidden sm:inline text-zinc-500">
                          {project.speedScore}/100 speed
                        </span>

                        <button
                          type="button"
                          onClick={(e) => toggleExpand(project.id, e)}
                          className="p-1 rounded text-zinc-500 hover:text-white"
                          title="Toggle Quick Preview"
                        >
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>

                        <button
                          type="button"
                          onClick={() => onSelectProject(project)}
                          className="p-1 text-zinc-400 hover:text-emerald-400"
                          title="Open Case Study"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Inline Quick Drawer (Uncommon inline inspection) */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 text-xs text-zinc-300 border-t border-white/[0.04] bg-[#06080C] space-y-4 animate-in fade-in duration-150">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start pt-2">
                        <div className="md:col-span-8 space-y-2">
                          <p className="text-zinc-400 leading-relaxed font-sans">
                            {project.summary}
                          </p>

                          <div className="space-y-1 pt-1">
                            {project.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                              <div key={fIdx} className="flex items-center gap-2 text-zinc-300">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="md:col-span-4 bg-[#090C12] p-3 rounded-lg border border-white/[0.06] space-y-2">
                          <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                            Integrated Stack:
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {project.techStack.map((tech) => (
                              <span key={tech} className="px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] font-mono text-zinc-300">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <button
                            onClick={() => onSelectProject(project)}
                            className="w-full mt-2 py-1.5 px-3 rounded text-[11px] font-mono font-medium text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors text-center"
                          >
                            Read Full Architecture →
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          /* View Mode 2: Minimalist Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="p-5 rounded-xl border border-white/[0.08] bg-[#090C12] hover:border-emerald-500/40 transition-all flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
                    <span>{project.location}</span>
                    <span className="text-emerald-400">{project.speedScore}/100</span>
                  </div>
                  <h3 className="text-base font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 font-sans line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400">{project.businessOutcome}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400" />
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
