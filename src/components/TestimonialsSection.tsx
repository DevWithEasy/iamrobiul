import { Quote, Star } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

export function TestimonialsSection() {
  return (
    <section className="border-y border-white/[0.06] bg-[#07090b] py-24 lg:py-32">
      <div className="page-shell">
        <SectionHeading
          eyebrow="07 / Client notes"
          title={
            <>
              The work is judged <span className="serif-accent">after launch.</span>
            </>
          }
          description="Direct feedback from founders and operators who needed systems that hold up in day-to-day business—not just a polished demo."
          action={
            <span className="chip border-[#D6F25C]/25 text-[#D6F25C]">
              <Star className="h-3 w-3 fill-current" />
              5.0 average feedback
            </span>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          {testimonialsData.map((item, index) => (
            <Reveal key={item.id} delay={(index % 2) * 90}>
              <article className="surface-card interactive-card relative flex h-full flex-col overflow-hidden rounded-[22px] p-7 sm:p-8">
                <div className="pointer-events-none absolute -right-10 -top-14 h-40 w-40 brand-glow opacity-40" />
                <div className="relative flex items-start justify-between gap-4">
                  <Quote className="h-7 w-7 text-[#D6F25C]" />
                  <div className="flex items-center gap-1 text-[#D6F25C]">
                    {Array.from({ length: item.rating }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                </div>

                <blockquote className="relative mt-7 flex-1 text-[15px] leading-[1.8] text-zinc-300">
                  “{item.quote}”
                </blockquote>

                <div className="mt-8 border-t border-white/[0.08] pt-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D6F25C]/25 bg-[#D6F25C]/8 font-mono text-xs font-semibold text-[#D6F25C]">
                        {item.avatarInitials}
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-white">{item.name}</div>
                        <div className="mt-0.5 text-xs text-zinc-500">
                          {item.role} · {item.company}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-semibold text-[#D6F25C]">{item.outcome}</div>
                      <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-600">
                        {item.location}
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="chip">{item.projectType}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
