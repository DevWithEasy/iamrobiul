import React from 'react';
import { developerInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#07080B] text-zinc-500 font-mono text-xs">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/[0.06] pb-8">
          <div>
            <span className="text-white font-semibold">robiul.dev</span>
            <span className="text-zinc-600 mx-2">/</span>
            <span>Dhaka, Bangladesh</span>
          </div>

          <div className="flex items-center gap-6 text-zinc-400">
            <a href="#portfolio" className="hover:text-white transition-colors">Works</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#calculator" className="hover:text-white transition-colors">Pricing</a>
            <a href={developerInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="pt-6 flex items-center justify-between text-[11px] text-zinc-600">
          <div>
            © {new Date().getFullYear()} Robiul Awal. Built for Bangladeshi E-Commerce & Retail.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
