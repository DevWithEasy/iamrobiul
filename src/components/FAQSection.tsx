import React, { useState } from 'react';
import { faqData, developerInfo } from '../data/portfolioData';
import { ChevronDown, MessageCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 lg:py-24 border-b border-white/[0.06] bg-[#07080B]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        <div className="mb-12">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
            07 // Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Clear answers on payments, courier APIs, and timelines.
          </h2>
        </div>

        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-white hover:text-emerald-400 transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-zinc-600 font-mono text-xs w-5">0{idx + 1}</span>
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pl-8 pt-2.5 pb-2 text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-xs font-mono text-zinc-400 flex items-center justify-between">
          <span>Have an unlisted requirement?</span>
          <a
            href={developerInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
