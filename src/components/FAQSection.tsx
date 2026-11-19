import { useState } from 'react';
import { ArrowUpRight, ChevronDown, MessageCircle } from 'lucide-react';
import { developerInfo, faqData } from '../data/portfolioData';
import { Reveal } from './ui/Reveal';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-y border-white/[0.06] bg-[#07090b] py-24 lg:py-32">
      <div className="page-shell grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <span className="eyebrow">09 / Common questions</span>
          <h2 className="section-title mt-5">
            Clear answers before <span className="serif-accent">we begin.</span>
          </h2>
          <p className="section-copy mt-5 max-w-md">
            Timelines, payments, courier integrations, and support—covered upfront so the project
            starts with shared expectations.
          </p>

          <div className="surface-card mt-9 rounded-[22px] p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D6F25C]/10 text-[#D6F25C]">
              <MessageCircle className="h-4.5 w-4.5" />
            </div>
            <h3 className="mt-5 text-base font-semibold text-white">Have a different requirement?</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Send the context directly. You will get a straightforward answer about feasibility,
              scope, and timeline.
            </p>
            <a
              href={developerInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 w-full group"
            >
              Ask on WhatsApp
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-7">
          <div className="overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#0b0f11]">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.question} className="border-b border-white/[0.07] last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-start justify-between gap-5 px-5 py-5 text-left transition-colors hover:bg-white/[0.025] sm:px-7"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="flex items-start gap-4">
                      <span className="mt-0.5 font-mono text-[10px] text-[#D6F25C]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold leading-snug text-white sm:text-[15px]">
                          {item.question}
                        </span>
                        <span className="mt-2 block font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-600">
                          {item.category}
                        </span>
                      </span>
                    </span>
                    <ChevronDown
                      className={`mt-0.5 h-4 w-4 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#D6F25C]' : 'text-zinc-600'
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div
                      id={`faq-answer-${index}`}
                      className="console-enter px-5 pb-6 pl-[3.4rem] text-sm leading-relaxed text-zinc-400 sm:px-7 sm:pl-[4.2rem]"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
