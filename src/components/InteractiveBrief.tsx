import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, MessageCircle, RotateCcw, TerminalSquare } from 'lucide-react';
import { developerInfo, projectsData, servicesData } from '../data/portfolioData';
import { Reveal } from './ui/Reveal';

type Command = 'projects' | 'services' | 'skills' | 'contact';

interface ConsoleLine {
  id: string;
  type: 'system' | 'cmd' | 'output' | 'prompt' | 'link';
  text: string;
  href?: string;
  label?: string;
}

const initialLines: ConsoleLine[] = [
  { id: 'init-1', type: 'system', text: 'Robiul Awal // interactive portfolio brief' },
  { id: 'init-2', type: 'output', text: 'A quick way to explore the work without scrolling. Choose a command below.' },
  { id: 'init-3', type: 'prompt', text: 'Ready for input.' },
];

const commandLabels: { id: Command; label: string }[] = [
  { id: 'projects', label: 'work' },
  { id: 'services', label: 'services' },
  { id: 'skills', label: 'stack' },
  { id: 'contact', label: 'contact' },
];

const lineId = () => Math.random().toString(36).slice(2, 9);

function responseFor(command: Command): ConsoleLine[] {
  if (command === 'projects') {
    return [
      { id: lineId(), type: 'output', text: `${projectsData.length} selected case studies in the current portfolio.` },
      { id: lineId(), type: 'output', text: 'Featured products: EasyFunnel · LandingCommerce.' },
      { id: lineId(), type: 'output', text: 'Client systems: commerce funnels, Laravel POS, courier orchestration.' },
    ];
  }

  if (command === 'services') {
    return servicesData.slice(0, 4).map((service) => ({
      id: lineId(),
      type: 'output' as const,
      text: `${service.title} — ${service.turnaround}.`,
    }));
  }

  if (command === 'skills') {
    return [
      { id: lineId(), type: 'output', text: 'JavaScript · React · Next.js · Node.js · Laravel · WordPress.' },
      { id: lineId(), type: 'output', text: 'bKash · Nagad · Steadfast · Pathao · Meta CAPI · Redis.' },
      { id: lineId(), type: 'output', text: 'Performance engineering, API design, and production deployment.' },
    ];
  }

  return [
    { id: lineId(), type: 'output', text: `WhatsApp: ${developerInfo.phone}` },
    { id: lineId(), type: 'output', text: `Email: ${developerInfo.email}` },
    { id: lineId(), type: 'output', text: `Location: ${developerInfo.location} · Remote worldwide` },
    {
      id: lineId(),
      type: 'link',
      text: 'Typical reply time: under 15 minutes during working hours.',
      href: developerInfo.whatsappUrl,
      label: 'Open WhatsApp',
    },
  ];
}

export function InteractiveBrief() {
  const [history, setHistory] = useState<ConsoleLine[]>(initialLines);
  const [isRunning, setIsRunning] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = scrollRef.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [history]);

  const runCommand = (command: Command) => {
    if (isRunning) return;
    setIsRunning(true);
    setHistory((current) => [
      ...current,
      { id: lineId(), type: 'cmd', text: command },
      { id: lineId(), type: 'system', text: 'Fetching brief…' },
    ]);

    window.setTimeout(() => {
      setHistory((current) => [
        ...current.filter((line) => line.text !== 'Fetching brief…'),
        ...responseFor(command),
        { id: lineId(), type: 'prompt' as const, text: 'Ready for the next command.' },
      ].slice(-16));
      setIsRunning(false);
    }, 360);
  };

  const reset = () => {
    if (isRunning) return;
    setHistory(initialLines);
  };

  return (
    <section id="console" className="bg-[#090c0e] py-24 lg:py-32">
      <div className="page-shell grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <span className="eyebrow">08 / Interactive brief</span>
          <h2 className="section-title mt-5">
            Prefer the <span className="serif-accent">command line?</span>
          </h2>
          <p className="section-copy mt-5 max-w-lg">
            A compact, no-nonsense way to explore the portfolio. Run a command to see the essentials
            without the marketing copy.
          </p>
          <div className="mt-8 space-y-3">
            {[
              'Selected products and client systems',
              'Engagement scopes and delivery windows',
              'Core stack and local commerce integrations',
              'Direct contact details and response time',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-zinc-400">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D6F25C]" />
                {item}
              </div>
            ))}
          </div>
          <a href={developerInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-9 group">
            <MessageCircle className="h-4 w-4" />
            Or just say hello
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <div className="mock-window overflow-hidden rounded-[22px] font-mono">
            <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#101519] px-4 py-3">
              <div className="flex items-center gap-2.5">
                <TerminalSquare className="h-4 w-4 text-[#D6F25C]" />
                <span className="text-[10px] uppercase tracking-[0.16em] text-zinc-400">
                  brief.sh — robiul.dev
                </span>
              </div>
              <button
                type="button"
                onClick={reset}
                className="flex items-center gap-1.5 rounded-lg px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-zinc-500 transition-colors hover:bg-white/[0.05] hover:text-white"
                aria-label="Reset interactive brief"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Reset
              </button>
            </div>

            <div ref={scrollRef} className="h-[330px] space-y-2.5 overflow-y-auto bg-[#070a0b] px-4 py-5 text-[11px] leading-relaxed sm:px-5 sm:text-xs">
              {history.map((line) => {
                if (line.type === 'cmd') {
                  return (
                    <div key={line.id} className="console-enter flex flex-wrap items-center gap-2 pt-1">
                      <span className="text-zinc-600">visitor@robiul.dev:~$</span>
                      <span className="font-semibold text-white">{line.text}</span>
                      <span className="h-3.5 w-1.5 animate-pulse bg-[#D6F25C]" />
                    </div>
                  );
                }

                if (line.type === 'system') {
                  return (
                    <div key={line.id} className="console-enter text-[#D6F25C]">
                      // {line.text}
                    </div>
                  );
                }

                if (line.type === 'prompt') {
                  return (
                    <div key={line.id} className="console-enter flex items-center gap-2 pt-2 text-zinc-500">
                      <span className="font-bold text-[#D6F25C]">?</span>
                      {line.text}
                    </div>
                  );
                }

                if (line.type === 'link') {
                  return (
                    <div key={line.id} className="console-enter flex flex-wrap items-center justify-between gap-2 border-l-2 border-[#D6F25C]/60 pl-3 text-zinc-300">
                      <span>{line.text}</span>
                      <a
                        href={line.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-[#D6F25C] hover:text-[#eafba8]"
                      >
                        {line.label}
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                  );
                }

                return (
                  <div key={line.id} className="console-enter border-l-2 border-[#D6F25C]/45 pl-3 text-zinc-300">
                    {line.text}
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-2 gap-2 border-t border-white/[0.08] bg-[#0d1114] p-3 sm:grid-cols-4">
              {commandLabels.map((command) => (
                <button
                  key={command.id}
                  type="button"
                  onClick={() => runCommand(command.id)}
                  disabled={isRunning}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 py-2.5 text-[10px] uppercase tracking-[0.13em] text-zinc-300 transition-all hover:border-[#D6F25C]/45 hover:bg-[#D6F25C]/8 hover:text-[#D6F25C] disabled:opacity-50"
                >
                  <span className="mr-2 text-[#D6F25C]">›</span>
                  {command.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
