import { useMemo, useState } from 'react';
import { ArrowUpRight, SlidersHorizontal } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import type { ProjectItem } from '../types';
import { ProjectVisual } from './ProjectVisual';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

interface PortfolioSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

type Filter = 'all' | 'products' | 'f-commerce' | 'laravel';

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All work' },
  { id: 'products', label: 'Products' },
  { id: 'f-commerce', label: 'Commerce' },
  { id: 'laravel', label: 'Laravel' },
];

export function PortfolioSection({ onSelectProject }: PortfolioSectionProps) {
  const [filter, setFilter] = useState<Filter>('all');

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      if (filter === 'all') return true;
      if (filter === 'products') return project.client === 'Product Creator & Architect';
      if (filter === 'f-commerce') return project.category === 'f-commerce' || project.category === 'wordpress';
      return project.category === 'laravel';
    });
  }, [filter]);

  return (
    <section id="portfolio" className="relative border-y border-white/[0.06] bg-[#07090b] py-24 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 brand-glow opacity-40" />
      <div className="page-shell relative">
        <SectionHeading
          eyebrow="01 / Selected work"
          title={
            <>
              Work engineered for <span className="serif-accent">real outcomes.</span>
            </>
          }
          description="A selection of proprietary products, conversion-focused commerce builds, and dependable Laravel systems—each shaped around a measurable business result."
          action={
            <div className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500 lg:flex">
              <SlidersHorizontal className="h-3.5 w-3.5 text-[#D6F25C]" />
              {String(projectsData.length).padStart(2, '0')} case studies
            </div>
          }
        />

        <Reveal className="mt-12 flex flex-wrap items-center gap-2">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              className={`rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] transition-all ${
                filter === item.id
                  ? 'border-[#D6F25C] bg-[#D6F25C] font-semibold text-[#080b0d]'
                  : 'border-white/10 bg-white/[0.025] text-zinc-400 hover:border-[#D6F25C]/40 hover:text-[#D6F25C]'
              }`}
            >
              {item.label}
              {item.id === 'all' && <span className="ml-2 opacity-70">({projectsData.length})</span>}
            </button>
          ))}
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {filteredProjects.map((project, index) => {
            const originalIndex = projectsData.findIndex((item) => item.id === project.id);
            const categoryLabel =
              project.category === 'laravel'
                ? 'Laravel system'
                : project.category === 'wordpress'
                  ? 'WordPress product'
                  : 'Commerce funnel';

            return (
              <Reveal key={project.id} delay={Math.min(index, 3) * 70}>
                <article
                  className="surface-card interactive-card group flex h-full cursor-pointer flex-col overflow-hidden rounded-[22px] p-4 sm:p-5"
                  onClick={() => onSelectProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      onSelectProject(project);
                    }
                  }}
                  aria-label={`Open case study: ${project.title}`}
                >
                  <ProjectVisual variant={originalIndex} label={categoryLabel} />

                  <div className="flex flex-1 flex-col px-1 pb-1 pt-6 sm:px-2">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#D6F25C]">
                        {project.location}
                      </span>
                      <span className="font-mono text-[10px] text-zinc-600">
                        {String(originalIndex + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-white transition-colors group-hover:text-[#D6F25C]">
                      {project.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-zinc-400">
                      {project.summary}
                    </p>

                    <div className="mt-6 grid grid-cols-2 gap-3 border-y border-white/[0.07] py-4">
                      {project.metrics.slice(0, 2).map((metric) => (
                        <div key={metric.label}>
                          <div className="font-mono text-[9px] uppercase tracking-[0.13em] text-zinc-600">
                            {metric.label}
                          </div>
                          <div className="mt-1.5 text-sm font-semibold text-zinc-100">{metric.value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto flex items-end justify-between gap-4 pt-6">
                      <div>
                        <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-600">
                          Business outcome
                        </div>
                        <div className="mt-1.5 text-sm font-medium text-[#D6F25C]">
                          {project.businessOutcome}
                        </div>
                      </div>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all group-hover:border-[#D6F25C]/50 group-hover:bg-[#D6F25C] group-hover:text-[#080b0d]">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
