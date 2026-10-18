import React, { useState } from 'react';
import { developerInfo } from '../data/portfolioData';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  const defaultWaUrl = `https://wa.me/${developerInfo.whatsappNumber}?text=${encodeURIComponent(
    'Hello Robiul! I am interested in building a website for my business.'
  )}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
      <a
        href={defaultWaUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-[#07080B] font-mono text-xs font-semibold shadow-lg shadow-black/50 transition-all hover:scale-105 active:scale-95 group"
        aria-label="Chat on WhatsApp"
      >
        <span className="w-2 h-2 rounded-full bg-[#07080B] animate-pulse" />
        <MessageCircle className="w-4 h-4 fill-[#07080B]" />
        <span className="hidden sm:inline">WhatsApp Direct</span>
      </a>
    </div>
  );
};
