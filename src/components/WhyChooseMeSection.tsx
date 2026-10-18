import React from 'react';
import { painPointsComparison } from '../data/portfolioData';

export const WhyChooseMeSection: React.FC = () => {
  return (
    <section id="why-me" className="py-20 lg:py-24 border-b border-white/[0.06] bg-[#07080B]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
            04 // Operating Principles & Standards
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Built to eliminate freelance anxiety in Bangladesh.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Every decision is designed to protect your ad budget, your time, and your business data.
          </p>
        </div>

        {/* 6 Minimalist Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPointsComparison.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-white/[0.08] bg-[#090C12] space-y-3 font-mono text-xs"
            >
              <div className="flex items-center justify-between text-zinc-500 text-[11px]">
                <span>STANDARD {String(idx + 1).padStart(2, '0')}</span>
                <span className="text-emerald-400">GUARANTEED</span>
              </div>

              <div>
                <span className="text-[11px] text-zinc-500 uppercase tracking-wider block">
                  The Industry Pain:
                </span>
                <p className="text-zinc-400 mt-0.5 font-sans leading-relaxed">
                  {item.problem}
                </p>
              </div>

              <div className="pt-2 border-t border-white/[0.04]">
                <span className="text-[11px] text-emerald-400 uppercase tracking-wider block font-semibold">
                  My Technical Solution:
                </span>
                <p className="text-zinc-200 mt-0.5 font-sans font-medium leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
