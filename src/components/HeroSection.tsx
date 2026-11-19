import { ArrowDown, ArrowUpRight, Gauge, ShieldCheck, Star } from 'lucide-react';
import { developerInfo } from '../data/portfolioData';
import { LiveCodeTerminal } from './LiveCodeTerminal';
import { Reveal } from './ui/Reveal';

interface HeroSectionProps {
  onExploreWork: () => void;
}

const metrics = [
  { value: developerInfo.completedProjects, label: 'Projects delivered' },
  { value: developerInfo.experience.replace(' Experience', ''), label: 'Specialized engineering' },
  { value: '<1.2s', label: 'Typical mobile load' },
];

export function HeroSection({ onExploreWork }: HeroSectionProps) {
  return (
    <section id="top" className="relative overflow-hidden bg-[#07090b] pb-20 pt-32 lg:pb-28 lg:pt-44">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
      <div className="pointer-events-none absolute -left-[12%] top-[8%] h-[520px] w-[520px] rounded-full brand-glow blur-[10px]" />
      <div className="pointer-events-none absolute -right-[18%] top-[26%] h-[580px] w-[580px] rounded-full bg-[radial-gradient(circle,rgba(150,180,110,0.09),transparent_68%)]" />
      <div className="noise-overlay pointer-events-none absolute inset-0" />

      <div className="page-shell relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 backdrop-blur-sm">
              <span className="pulse-ring h-1.5 w-1.5 rounded-full bg-[#D6F25C]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.17em] text-zinc-300">
                Independent product engineer · Dhaka, BD
              </span>
            </div>

            <h1 className="mt-8 max-w-3xl text-balance text-[clamp(2.8rem,6vw,5.35rem)] font-bold leading-[0.99] tracking-[-0.065em] text-white">
              Digital systems that turn traffic into{' '}
              <span className="serif-accent">revenue.</span>
            </h1>

            <p className="mt-7 max-w-xl text-[15px] leading-[1.8] text-zinc-400 sm:text-base">
              I design and engineer high-converting landing pages, custom Laravel applications, and
              dependable commerce integrations for ambitious Bangladeshi businesses. Built for speed,
              clarity, and measurable outcomes.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={developerInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#portfolio"
                onClick={(event) => {
                  event.preventDefault();
                  onExploreWork();
                }}
                className="btn-ghost group"
              >
                View selected work
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 border-y border-white/[0.09] py-6 sm:gap-8">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {metric.value}
                  </div>
                  <div className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.13em] text-zinc-500 sm:text-[10px]">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              <div className="flex -space-x-2">
                {['TR', 'SA', 'MH'].map((initials) => (
                  <span
                    key={initials}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#07090b] bg-[#171d1b] font-mono text-[9px] font-semibold text-zinc-300"
                  >
                    {initials}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-[#D6F25C]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-3 w-3 fill-current" />
                ))}
              </div>
              <span className="text-xs text-zinc-500">Trusted by founders & operators across Bangladesh</span>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="pointer-events-none absolute -inset-10 rounded-full brand-glow opacity-70 blur-3xl" />
            <div className="relative z-10 lg:translate-x-2">
              <LiveCodeTerminal />
            </div>

            <div className="float-slow absolute -left-6 top-8 z-20 hidden w-[172px] rounded-2xl border border-white/10 bg-[#111619]/95 p-4 shadow-2xl backdrop-blur-xl lg:block">
              <div className="flex items-center justify-between">
                <Gauge className="h-4 w-4 text-[#D6F25C]" />
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-500">
                  Page speed
                </span>
              </div>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-2xl font-bold tracking-tight text-white">98</span>
                <span className="mb-1 font-mono text-[10px] text-zinc-500">/ 100</span>
              </div>
              <svg viewBox="0 0 120 34" className="mt-3 h-8 w-full" aria-hidden="true">
                <path
                  d="M2 28 C18 26 20 12 34 15 S52 27 65 18 S84 4 96 10 S110 8 118 3"
                  fill="none"
                  stroke="#D6F25C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="line-chart"
                />
              </svg>
            </div>

            <div className="float-slow absolute -bottom-7 -right-5 z-20 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#111619]/95 px-4 py-3.5 shadow-2xl backdrop-blur-xl sm:flex [animation-delay:1.2s]">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D6F25C]/12 text-[#D6F25C]">
                <ShieldCheck className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-xs font-semibold text-white">30-day warranty</span>
                <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-[0.13em] text-zinc-500">
                  Post-launch support
                </span>
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#090c0e]" />
    </section>
  );
}
