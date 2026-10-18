import React from 'react';
import { developerInfo } from '../data/portfolioData';
import { LiveCodeTerminal } from './LiveCodeTerminal';
import { 
  MessageCircle, 
  ArrowDown, 
  Zap, 
  ShieldCheck, 
  Target, 
  ArrowUpRight
} from 'lucide-react';

interface HeroSectionProps {
  onExploreWork: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreWork }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-white/[0.06] bg-grid-subtle">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Minimalist Editorial Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quiet status line */}
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Full-Stack Web Engineer · Specialized in Bangladesh</span>
            </div>

            {/* Bold, Direct Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.12]">
              High-converting landing pages & custom Laravel systems.
            </h1>

            {/* Clear Editorial Subtitle */}
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
              Helping Bangladeshi brands turn cold Facebook traffic into paying customers. Engineered with sub-1.2s mobile speeds, 1-click checkout, and automated Steadfast & Pathao courier booking.
            </p>

            {/* Unboxed Minimalist Trust Badges (Anti-slop zero pills) */}
            <div className="pt-1 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5 text-zinc-300">
                <span className="text-emerald-400">⚡</span>
                <span>48-Hour Delivery</span>
              </div>
              <span className="text-zinc-700 hidden sm:inline">/</span>
              <div className="flex items-center gap-1.5 text-zinc-300">
                <span className="text-emerald-400">🎯</span>
                <span>bKash & Courier API Ready</span>
              </div>
              <span className="text-zinc-700 hidden sm:inline">/</span>
              <div className="flex items-center gap-1.5 text-zinc-300">
                <span className="text-emerald-400">🛡️</span>
                <span>30-Day Free Warranty</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={developerInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg text-xs font-mono font-semibold text-[#07080B] bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-[#07080B]" />
                <span>Chat on WhatsApp</span>
                <span className="text-zinc-800 text-[10px]">(&lt;15m reply)</span>
              </a>

              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  onExploreWork();
                }}
                className="px-5 py-3 rounded-lg text-xs font-mono text-zinc-300 hover:text-white bg-zinc-900/60 hover:bg-zinc-800 border border-white/[0.08] transition-colors flex items-center justify-center gap-1.5"
              >
                <span>View Selected Works</span>
                <ArrowDown className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>

            {/* Metric strip */}
            <div className="pt-6 border-t border-white/[0.06] grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">120+</div>
                <div className="text-[11px] text-zinc-500 font-mono mt-0.5">Projects Delivered</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">৳35Cr+</div>
                <div className="text-[11px] text-zinc-500 font-mono mt-0.5">Client Sales Tracked</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">&lt;1.2s</div>
                <div className="text-[11px] text-zinc-500 font-mono mt-0.5">Avg Mobile Load Time</div>
              </div>
            </div>

          </div>

          {/* Right Column: Minimalist Code Workstation */}
          <div className="lg:col-span-5 relative">
            <LiveCodeTerminal />
          </div>

        </div>

      </div>
    </section>
  );
};
