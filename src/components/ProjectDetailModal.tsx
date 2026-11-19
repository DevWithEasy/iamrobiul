import { useEffect } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  Gauge,
  Layers,
  MapPin,
  MessageCircle,
  X,
} from 'lucide-react';
import { developerInfo, projectsData } from '../data/portfolioData';
import type { ProjectItem } from '../types';
import { ProjectVisual } from './ProjectVisual';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const projectIndex = projectsData.findIndex((item) => item.id === project.id);
  const whatsappInquiryUrl = `https://wa.me/${developerInfo.whatsappNumber}?text=${encodeURIComponent(
    `Hello Robiul! I saw the case study for "${project.title}" and would like to discuss a similar system.`,
  )}`;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto p-4 sm:p-6" role="dialog" aria-modal="true" aria-label={`${project.title} case study`}>
      <button
        type="button"
        className="fixed inset-0 cursor-default bg-[#030506]/88 backdrop-blur-md"
        onClick={onClose}
        aria-label="Close case study"
      />

      <div className="surface-solid relative z-10 my-auto flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-[24px] shadow-[0_40px_120px_-40px_rgba(0,0,0,1)] console-enter">
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/[0.09] bg-[#0c1013]/95 px-5 py-4 backdrop-blur-xl sm:px-7">
          <div className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D6F25C]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.17em] text-zinc-400">
              Case study / {project.client}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-zinc-400 transition-colors hover:border-[#D6F25C]/45 hover:text-white"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-7 sm:px-7 sm:py-8">
          <ProjectVisual variant={Math.max(projectIndex, 0)} label={project.demoType} />

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3 text-[#D6F25C]" />
              {project.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Layers className="h-3 w-3 text-[#D6F25C]" />
              {project.demoType}
            </span>
            <span className="flex items-center gap-1.5">
              <Gauge className="h-3 w-3 text-[#D6F25C]" />
              {project.speedScore}/100 speed
            </span>
          </div>

          <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
            {project.heroHeadline}
          </h2>
          <div className="mt-4 inline-flex rounded-full border border-[#D6F25C]/25 bg-[#D6F25C]/8 px-3.5 py-2 text-xs font-semibold text-[#D6F25C]">
            {project.businessOutcome}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
                <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-600">
                  {metric.label}
                </div>
                <div className="mt-2 text-sm font-semibold leading-snug text-white">{metric.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-9 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                Context & engineering
              </span>
              <p className="mt-3 text-sm leading-[1.8] text-zinc-300">{project.summary}</p>
            </div>
            <div className="lg:col-span-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                Capabilities delivered
              </span>
              <div className="mt-3 space-y-2.5">
                {project.keyFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D6F25C]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-9 border-t border-white/[0.08] pt-7">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
              Technology
            </span>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/[0.09] bg-[#0a0e10] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-zinc-600">
            30-day post-launch warranty included
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full px-4 py-2.5 text-xs text-zinc-400 transition-colors hover:text-white"
            >
              Close
            </button>
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              <MessageCircle className="h-4 w-4" />
              Similar project?
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
