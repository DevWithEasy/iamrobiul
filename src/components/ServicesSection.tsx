import React from 'react';
import { servicesData, developerInfo } from '../data/portfolioData';
import { ArrowUpRight, Check, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 lg:py-24 border-b border-white/[0.06] bg-[#07080B]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
            02 // Core Capabilities & Rates
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Transparent pricing. Specialized execution.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Flat fees in BDT (৳) with milestone payments. No surprise bills or hidden hosting markups.
          </p>
        </div>

        {/* 3 Services Minimal Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className="p-6 rounded-xl border border-white/[0.08] bg-[#090C12] hover:border-zinc-700 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Index & Turnaround */}
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-3">
                  <span>{String(idx + 1).padStart(2, '0')} //</span>
                  <span>{service.turnaround}</span>
                </div>

                <h3 className="text-lg font-bold text-white leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs text-zinc-400 mt-2 font-sans leading-relaxed">
                  {service.tagline}
                </p>

                <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-2.5">
                  <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                    Included Deliverables:
                  </div>
                  {service.features.slice(0, 4).map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <span className="text-emerald-400 font-mono mt-0.5">•</span>
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-zinc-500 font-mono block">Starting at</span>
                  <span className="text-base font-bold font-mono text-white">{service.startingPrice}</span>
                </div>

                <button
                  onClick={() => onSelectService(service.id)}
                  className="px-3 py-1.5 rounded text-xs font-mono font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors flex items-center gap-1"
                >
                  <span>Select</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Contrast Table */}
        <div className="mt-12 p-6 rounded-xl border border-white/[0.08] bg-[#080B10]">
          <h4 className="text-sm font-mono font-semibold text-white mb-4">
            The Professional Standard vs Typical Freelancers in Bangladesh:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-3 rounded bg-[#090C12] border border-white/[0.04] space-y-1">
              <span className="text-zinc-500 block text-[10px]">MOBILE TRAFFIC</span>
              <span className="text-emerald-400 font-medium block">Sub-1.2s on 4G (95+ score)</span>
              <span className="text-zinc-500 text-[11px]">vs 6s+ lag with bloated plugins</span>
            </div>
            <div className="p-3 rounded bg-[#090C12] border border-white/[0.04] space-y-1">
              <span className="text-zinc-500 block text-[10px]">COURIER INTEGRATION</span>
              <span className="text-emerald-400 font-medium block">1-Click Steadfast/Pathao API</span>
              <span className="text-zinc-500 text-[11px]">vs hours of manual data entry</span>
            </div>
            <div className="p-3 rounded bg-[#090C12] border border-white/[0.04] space-y-1">
              <span className="text-zinc-500 block text-[10px]">COMMUNICATION</span>
              <span className="text-emerald-400 font-medium block">Daily Loom video screencasts</span>
              <span className="text-zinc-500 text-[11px]">vs disappearing after advance payment</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
