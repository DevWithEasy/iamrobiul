import { Compass, Workflow, ShieldCheck, Rocket, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    copy: 'A focused conversation about your offer, ad traffic, operations, and the exact outcome the build needs to protect.',
    icon: Compass,
  },
  {
    number: '02',
    title: 'Architecture',
    copy: 'I map the checkout, courier, tracking, and reporting flows before design begins—so nothing is bolted on later.',
    icon: Workflow,
  },
  {
    number: '03',
    title: 'Build & QA',
    copy: 'Fast, clean implementation with daily progress notes, real-device testing, and measurable performance checks.',
    icon: ShieldCheck,
  },
  {
    number: '04',
    title: 'Launch',
    copy: 'Production deployment, team handover, documentation, and thirty days of attentive post-launch support.',
    icon: Rocket,
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="relative border-y border-white/[0.06] bg-[#090c0e] py-24 lg:py-32">
      <div className="page-shell">
        <SectionHeading
          eyebrow="03 / A considered working rhythm"
          title={
            <>
              Clarity first. Then <span className="serif-accent">precision</span> at every step.
            </>
          }
          description="A senior, low-friction process designed for business owners who want dependable delivery—not agency theatre."
          action={
            <a href="#contact" className="btn-ghost group">
              Start a conversation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          }
        />

        <div className="relative mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="absolute left-0 right-0 top-[42px] hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent xl:block" />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.number} delay={index * 90}>
                <article className="surface-card interactive-card relative h-full rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-[#D6F25C]">
                      {step.number}
                    </span>
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0b0f11] text-[#D6F25C]">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="mt-8 text-lg font-semibold tracking-tight text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{step.copy}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
