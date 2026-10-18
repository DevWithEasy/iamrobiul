import React from 'react';
import { testimonialsData } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 border-b border-white/[0.06] bg-[#07080B]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
            06 // Verified Client Feedback
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Direct feedback from Bangladeshi brand owners.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl border border-white/[0.08] bg-[#090C12] flex flex-col justify-between space-y-4 font-mono text-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-zinc-500 text-[11px]">
                  <span>{item.company}</span>
                  <span className="text-emerald-400 font-medium">{item.outcome}</span>
                </div>

                <p className="text-zinc-300 font-sans leading-relaxed text-sm italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-400">
                <span className="text-white font-medium">{item.name} · {item.role}</span>
                <span className="text-zinc-600">{item.location}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
