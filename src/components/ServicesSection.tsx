import { ArrowUpRight, Check, Clock3, Flame, Layers, Zap } from 'lucide-react';
import { calculatorPackages, servicesData } from '../data/portfolioData';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

const iconMap = {
  Layers,
  Flame,
  Zap,
} as const;

const priceLabels: Record<string, string> = {
  'laravel-landing-commerce': 'Custom estimate',
  'wordpress-landing-pages': `From ৳ ${calculatorPackages[0].basePriceBDT.toLocaleString('en-BD')}`,
  'laravel-web-apps': `From ৳ ${calculatorPackages[2].basePriceBDT.toLocaleString('en-BD')}`,
  'performance-audit': 'Custom audit',
};

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="relative bg-[#090c0e] py-24 lg:py-32">
      <div className="page-shell">
        <SectionHeading
          eyebrow="02 / Capabilities"
          title={
            <>
              Specialist execution, without the <span className="serif-accent">agency overhead.</span>
            </>
          }
          description="Four focused engagements, each built around a clear business outcome and a production-ready technical foundation."
          action={
            <a href="#calculator" className="btn-ghost group">
              Estimate a project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Layers;
            const isFeatured = service.id === 'wordpress-landing-pages';
            const price = service.startingPrice || priceLabels[service.id] || 'Custom estimate';

            return (
              <Reveal key={service.id} delay={index * 80}>
                <article
                  className={`surface-card interactive-card group relative flex h-full flex-col overflow-hidden rounded-[22px] p-7 sm:p-8 ${
                    isFeatured ? 'border-[#D6F25C]/28' : ''
                  }`}
                >
                  {isFeatured && (
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D6F25C] to-transparent" />
                  )}

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#D6F25C]/8 text-[#D6F25C]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.19em] text-zinc-500">
                        {String(index + 1).padStart(2, '0')} / Service
                      </span>
                    </div>
                    <span className="chip">{service.badge}</span>
                  </div>

                  <h3 className="mt-8 max-w-md text-xl font-semibold leading-snug tracking-tight text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-400">
                    {service.tagline}
                  </p>

                  <div className="mt-7 grid gap-2.5">
                    {service.features.slice(0, 4).map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-sm text-zinc-300">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#D6F25C]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {service.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-col gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                        <Clock3 className="h-3 w-3" />
                        {service.turnaround}
                      </div>
                      <div className="mt-2 text-sm font-semibold text-white">{price}</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => onSelectService(service.id)}
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:border-[#D6F25C]/50 hover:text-[#D6F25C]"
                    >
                      Discuss scope
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
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
