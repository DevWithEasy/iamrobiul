import {
  ArrowUpRight,
  Headphones,
  MousePointerClick,
  ShieldCheck,
  TrendingUp,
  Truck,
  Zap,
} from 'lucide-react';
import { painPointsComparison } from '../data/portfolioData';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

const iconMap = {
  Zap,
  ShieldCheck,
  MousePointerClick,
  Truck,
  TrendingUp,
  Headphones,
} as const;

export function WhyChooseMeSection() {
  return (
    <section id="why-me" className="border-y border-white/[0.06] bg-[#07090b] py-24 lg:py-32">
      <div className="page-shell">
        <SectionHeading
          eyebrow="05 / Operating standards"
          title={
            <>
              Built to remove the usual <span className="serif-accent">freelance risk.</span>
            </>
          }
          description="Speed, communication, tracking, and aftercare are not upgrades here. They are part of the engineering standard."
          action={
            <a href="#contact" className="btn-ghost group">
              Work with me
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {painPointsComparison.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? ShieldCheck;
            return (
              <Reveal key={item.problem} delay={Math.min(index, 5) * 65}>
                <article className="surface-card interactive-card flex h-full flex-col rounded-[22px] p-6">
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#D6F25C]/8 text-[#D6F25C]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                      Standard {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="mt-7">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">
                      The common risk
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-500">{item.problem}</p>
                  </div>

                  <div className="mt-auto border-t border-white/[0.07] pt-5">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#D6F25C]">
                      My standard
                    </span>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-zinc-100">
                      {item.solution}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
