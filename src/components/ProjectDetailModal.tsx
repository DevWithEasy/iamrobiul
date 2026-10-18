import React from 'react';
import { ProjectItem } from '../types';
import { developerInfo } from '../data/portfolioData';
import { 
  X, 
  CheckCircle2, 
  MapPin, 
  TrendingUp, 
  Zap, 
  MessageCircle, 
  Gauge, 
  ArrowRight
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const whatsappInquiryUrl = `https://wa.me/${developerInfo.whatsappNumber}?text=Hello%20Robiul!%20I%20saw%20your%20case%20study%20for%20"${encodeURIComponent(
    project.title
  )}"%20and%20would%20like%20a%20similar%20system%20for%20my%20business.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#040508]/85 backdrop-blur-sm transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#090C12] border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto animate-in zoom-in-95 duration-150 font-mono text-xs">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#07090E] sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[11px] text-zinc-400">
              CASE STUDY // {project.client}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-zinc-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Title & Headline */}
          <div>
            <div className="flex items-center gap-2 text-zinc-500 text-[11px] mb-1">
              <span>{project.location}</span>
              <span>·</span>
              <span>{project.demoType}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight">
              {project.heroHeadline}
            </h2>
            <div className="mt-2 text-emerald-400 font-semibold">
              Outcome: {project.businessOutcome}
            </div>
          </div>

          {/* Metric Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((metric, idx) => (
              <div 
                key={idx}
                className="bg-[#07090E] border border-white/[0.06] rounded-lg p-3 text-left"
              >
                <div className="text-[10px] text-zinc-500 uppercase">{metric.label}</div>
                <div className="text-sm sm:text-base font-bold text-white mt-0.5">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <div className="text-[11px] text-zinc-500 uppercase tracking-wider">
              Problem & Engineering Solution:
            </div>
            <p className="text-zinc-300 font-sans text-xs sm:text-sm leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Key Capabilities Implemented */}
          <div className="space-y-2">
            <div className="text-[11px] text-zinc-500 uppercase tracking-wider">
              Technical Capabilities Delivered:
            </div>
            <div className="space-y-1.5">
              {project.keyFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-zinc-300 font-sans">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2 pt-2 border-t border-white/[0.06]">
            <div className="text-[11px] text-zinc-500 uppercase tracking-wider">
              Tech Stack:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[11px]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-white/[0.08] bg-[#07090E] flex items-center justify-between gap-3">
          <span className="text-zinc-500 text-[11px] hidden sm:inline">
            Turnaround: 48-72h with 30-day warranty
          </span>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-3.5 py-2 rounded text-zinc-400 hover:text-white transition-colors"
            >
              Close
            </button>
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded text-xs font-semibold text-[#07080B] bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#07080B]" />
              <span>Discuss via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
