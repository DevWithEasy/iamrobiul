import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { developerInfo } from '../data/portfolioData';

const navLinks = [
  { label: 'Work', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#process' },
  { label: 'Estimate', href: '#calculator' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto max-w-[1200px] transition-all duration-300 ${
          isScrolled
            ? 'rounded-2xl border border-white/10 bg-[#080b0d]/92 shadow-[0_18px_50px_-30px_rgba(0,0,0,1)] backdrop-blur-xl'
            : 'rounded-2xl border border-white/[0.08] bg-[#0b0f11]/65 backdrop-blur-md'
        }`}
      >
        <div className="flex h-[68px] items-center justify-between px-4 sm:px-5">
          <a href="#top" className="group flex items-center gap-3" aria-label="Robiul Awal — back to top">
            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-[#D6F25C] text-sm font-extrabold tracking-tight text-[#080b0d]">
              RA
              <span className="absolute -bottom-4 -right-4 h-7 w-7 rounded-full border border-[#080b0d]/25 transition-transform duration-500 group-hover:scale-150" />
            </span>
            <span className="leading-none">
              <span className="block text-[13px] font-extrabold tracking-[0.08em] text-white">ROBIUL AWAL</span>
              <span className="mt-1.5 hidden font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500 sm:block">
                Product engineer · Dhaka
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-400 transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="mr-2 hidden items-center gap-2 xl:flex">
              <span className="pulse-ring h-1.5 w-1.5 rounded-full bg-[#D6F25C]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                Available for Q4
              </span>
            </div>
            <a
              href={developerInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-[#D6F25C] px-4 py-2.5 text-xs font-bold text-[#080b0d] transition-colors hover:bg-[#e5fb7d] sm:inline-flex"
            >
              Let’s talk
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 lg:hidden"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-white/[0.08] px-5 pb-5 pt-3 lg:hidden"
          >
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-3 py-3 font-mono text-xs uppercase tracking-[0.14em] text-zinc-300 transition-colors hover:bg-white/[0.05] hover:text-[#D6F25C]"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href={developerInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary mt-4 w-full sm:hidden"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
