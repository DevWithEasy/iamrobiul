import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { developerInfo } from '../data/portfolioData';

const links = [
  { label: 'Work', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#process' },
  { label: 'Estimate', href: '#calculator' },
  { label: 'FAQ', href: '#faq' },
];

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#07090b] pt-20">
      <div className="page-shell relative">
        <div className="flex flex-col justify-between gap-8 border-b border-white/[0.08] pb-14 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Next step</span>
            <h2 className="section-title mt-5 max-w-2xl">
              Have a project that needs to <span className="serif-accent">work hard?</span>
            </h2>
          </div>
          <a href="#contact" className="btn-primary group self-start md:self-auto">
            Start a conversation
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D6F25C] text-xs font-extrabold text-[#080b0d]">
                RA
              </span>
              <span className="text-sm font-extrabold tracking-[0.08em] text-white">ROBIUL AWAL</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              Product engineering for high-converting commerce systems, built with care in Dhaka.
            </p>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">Navigate</span>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-zinc-400">
              {links.map((link) => (
                <a key={link.label} href={link.href} className="transition-colors hover:text-[#D6F25C]">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">Direct</span>
            <div className="mt-4 space-y-3 text-sm text-zinc-400">
              <a
                href={`mailto:${developerInfo.email}`}
                className="flex items-center gap-2 transition-colors hover:text-[#D6F25C]"
              >
                <Mail className="h-3.5 w-3.5" />
                Email
              </a>
              <a
                href={developerInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-[#D6F25C]"
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
                WhatsApp
              </a>
              <div className="font-mono text-[11px] text-zinc-600">{developerInfo.location} · GMT+6</div>
            </div>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">Elsewhere</span>
            <div className="mt-4 flex items-center gap-2">
              <a
                href={developerInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-zinc-400 transition-colors hover:border-[#D6F25C]/45 hover:text-[#D6F25C]"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={developerInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-zinc-400 transition-colors hover:border-[#D6F25C]/45 hover:text-[#D6F25C]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={scrollToTop}
                className="ml-auto flex h-10 items-center gap-2 rounded-xl border border-white/10 px-3 text-xs text-zinc-400 transition-colors hover:border-[#D6F25C]/45 hover:text-[#D6F25C]"
              >
                Top
                <ArrowUp className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/[0.07] py-6 text-[11px] text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Robiul Awal. All rights reserved.</span>
          <span className="font-mono uppercase tracking-[0.13em]">
            Designed for performance · Built with precision
          </span>
        </div>
      </div>

      <div className="outline-wordmark pointer-events-none whitespace-nowrap px-4 text-center">
        ROBIUL AWAL
      </div>
    </footer>
  );
}
