import React, { useState, useEffect } from 'react';
import { developerInfo } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Works', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Estimator', href: '#calculator' },
    { label: 'Standards', href: '#why-me' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07080B]/90 backdrop-blur-md border-b border-white/[0.07] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Clean Dev Signature */}
          <a
            href="#"
            className="flex items-center gap-3 text-sm font-mono tracking-tight text-zinc-100 hover:text-white transition-colors"
          >
            <span className="font-semibold text-white">robiul.dev</span>
            <span className="text-zinc-600 hidden xs:inline">/</span>
            <span className="text-zinc-500 text-xs hidden xs:inline font-sans">
              wp & laravel engineer
            </span>
          </a>

          {/* Desktop Navigation (Minimal text links with unboxed simplicity) */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-mono tracking-wide text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-zinc-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Status & Action */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Live Availability Badge */}
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Hire</span>
            </div>

            <div className="h-3 w-px bg-zinc-800" />

            <a
              href={developerInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>WhatsApp Direct</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-3">
            <a
              href={developerInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-emerald-400"
            >
              WhatsApp
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-zinc-400 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#07080B] border-b border-white/[0.08] px-6 py-6 animate-in slide-in-from-top-2 duration-150">
          <div className="space-y-3 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-zinc-300 hover:text-emerald-400 py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-5 mt-5 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono">
            <span className="text-zinc-500">Dhaka, Bangladesh</span>
            <a
              href={developerInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 font-semibold flex items-center gap-1"
            >
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
