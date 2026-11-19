import { Cable, Cpu, Database, Gauge, LockKeyhole, Waypoints } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

const stack = [
  {
    category: 'Application layer',
    icon: Cpu,
    technologies: ['Laravel 11', 'WordPress 6+', 'React / Next.js', 'PHP 8.3', 'Livewire', 'Tailwind CSS'],
  },
  {
    category: 'Commerce integrations',
    icon: Cable,
    technologies: ['bKash Merchant', 'Nagad', 'SSLCommerz', 'Steadfast', 'Pathao', 'Meta CAPI'],
  },
  {
    category: 'Data & delivery',
    icon: Database,
    technologies: ['MySQL', 'PostgreSQL', 'Redis', 'Queues', 'LiteSpeed', 'Cloudflare'],
  },
];

const principles = [
  { icon: Gauge, label: 'Performance budgets' },
  { icon: LockKeyhole, label: 'Secure by default' },
  { icon: Waypoints, label: 'Documented architecture' },
];

export function TechStackSection() {
  return (
    <section id="tech-stack" className="bg-[#090c0e] py-24 lg:py-32">
      <div className="page-shell">
        <SectionHeading
          eyebrow="06 / Technical foundation"
          title={
            <>
              A deliberate stack. No <span className="serif-accent">unnecessary bloat.</span>
            </>
          }
          description="Every tool earns its place. The result is a system that stays fast, understandable, and resilient when campaign traffic arrives."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {stack.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.category} delay={index * 90}>
                <article className="surface-card interactive-card h-full rounded-[22px] p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D6F25C]/10 text-[#D6F25C]">
                        <Icon className="h-4.5 w-4.5" />
                      </span>
                      <h3 className="text-sm font-semibold text-white">{group.category}</h3>
                    </div>
                    <span className="font-mono text-[10px] text-zinc-600">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {group.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2 font-mono text-[10px] text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-6">
          <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/[0.08] bg-[#0b0f11] px-6 py-5 sm:flex-row">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              Engineering principles
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {principles.map((principle) => {
                const Icon = principle.icon;
                return (
                  <span key={principle.label} className="flex items-center gap-2 text-xs text-zinc-300">
                    <Icon className="h-3.5 w-3.5 text-[#D6F25C]" />
                    {principle.label}
                  </span>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
