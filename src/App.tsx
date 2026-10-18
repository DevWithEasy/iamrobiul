import React, { useState, useEffect, useRef } from 'react';
import { developerInfo, projectsData, servicesData } from './data/portfolioData';
import { 
  MessageCircle, 
  RotateCcw, 
  FastForward, 
  Send, 
  ArrowUpRight,
  Check, 
  Copy,
  Volume2,
  VolumeX,
  Palette,
  Sparkles,
  Command,
  Flame,
  Layers,
  Zap,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

interface HistoryItem {
  id: string;
  type: 'cmd' | 'output' | 'menu' | 'prompt' | 'error';
  text: string;
  linkUrl?: string;
  linkLabel?: string;
  tag?: string;
  tagColor?: 'emerald' | 'cyan' | 'amber' | 'purple';
}

type ThemeMode = 'emerald' | 'cyan' | 'amber';

export default function App() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [typingLine, setTypingLine] = useState<{ text: string; type: string; linkUrl?: string; linkLabel?: string } | null>(null);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [theme, setTheme] = useState<ThemeMode>('emerald');

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isCancelledRef = useRef<boolean>(false);

  // Synthesized mechanical key click sound (Zero-latency Web Audio API)
  const playMechanicalClick = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(160 + Math.random() * 40, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.035);
      
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.035);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.035);
    } catch {
      // AudioContext policy fallback
    }
  };

  // Auto-scroll to bottom as text streams
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, typingLine]);

  // Stream single line character by character with fast, fluid typing speed
  const streamLine = async (
    text: string,
    type: 'cmd' | 'output' | 'menu' | 'prompt' | 'error',
    speedMs: number = 6,
    linkUrl?: string,
    linkLabel?: string,
    tag?: string,
    tagColor?: 'emerald' | 'cyan' | 'amber' | 'purple'
  ): Promise<void> => {
    if (isCancelledRef.current) return;

    // Fast dynamic stepping for fluid terminal streaming
    const step = text.length > 40 && type === 'output' ? 2 : 1;

    for (let i = 1; i <= text.length; i += step) {
      if (isCancelledRef.current) return;
      setTypingLine({ text: text.slice(0, i), type, linkUrl, linkLabel });
      if (i % 6 === 0) playMechanicalClick();
      await new Promise((r) => setTimeout(r, speedMs));
    }

    if (isCancelledRef.current) return;

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(2, 9),
        type,
        text,
        linkUrl,
        linkLabel,
        tag,
        tagColor,
      },
    ]);
    setTypingLine(null);
    await new Promise((r) => setTimeout(r, 25));
  };

  // Run the full intro typewriter sequence
  useEffect(() => {
    isCancelledRef.current = false;

    const runFullIntro = async () => {
      setHistory([]);
      setIsTyping(true);

      await new Promise((r) => setTimeout(r, 120));
      if (isCancelledRef.current) return;

      // 1. QUESTION 1: whoami (Fast, crisp typing)
      await streamLine('whoami', 'cmd', 14);
      await streamLine('▶ Robiul Awal — JavaScript & MERN Stack Developer (React · Next.js · React Native · WordPress)', 'output', 5);

      await new Promise((r) => setTimeout(r, 100));
      if (isCancelledRef.current) return;

      // 2. QUESTION 2: about
      await streamLine('about', 'cmd', 14);
      await streamLine('• Full-Stack JavaScript & MERN Stack Developer (React, Next.js, React Native, Node.js)', 'output', 5);
      await streamLine('• 200+ Projects Completed — Dynamic Landing Pages & Web Apps for Scaling Businesses', 'output', 5);
      await streamLine('• Creator of EasyFunnel — Dynamic Sales Landing Page WordPress Plugin with 20+ Built-in Widgets', 'output', 5, undefined, undefined, 'FEATURED PLUGIN', 'emerald');
      await streamLine('• Sub-1.2s 4G Mobile Performance, bKash/Nagad & Automated Courier APIs (Steadfast/Pathao)', 'output', 5);

      await new Promise((r) => setTimeout(r, 100));
      if (isCancelledRef.current) return;

      // 3. QUESTION 3: explore
      await streamLine('explore', 'cmd', 14);
      await streamLine('[1] Projects', 'menu', 6);
      await streamLine('[2] Services', 'menu', 6);
      await streamLine('[3] Skills', 'menu', 6);
      await streamLine('[4] Contact', 'menu', 6);

      // Follow-up prompt
      await streamLine("Next: Select [1-4] or type 'explore':", 'prompt', 6);

      setIsTyping(false);
      setTimeout(() => inputRef.current?.focus(), 40);
    };

    runFullIntro();

    return () => {
      isCancelledRef.current = true;
    };
  }, []);

  const handleSelectOption = async (option: string) => {
    if (isTyping) return;
    const clean = option.trim().toLowerCase();

    setIsTyping(true);
    await streamLine(clean, 'cmd', 12);

    if (clean === '1' || clean === 'projects' || clean === 'project') {
      await streamLine('[1] EasyFunnel — Dynamic Sales Landing Page WordPress Plugin (20+ Widgets)', 'output', 5, `https://wa.me/${developerInfo.whatsappNumber}?text=Hello%20Robiul!%20I%20am%20interested%20in%20EasyFunnel%20Plugin.`, 'Inquire ↗', 'WORDPRESS PLUGIN', 'emerald');
      await streamLine('[2] LandingCommerce — Laravel Landing Page Solution (Ultra-Fast · Automated Checkout & Courier)', 'output', 5, `https://wa.me/${developerInfo.whatsappNumber}?text=Hello%20Robiul!%20I%20am%20interested%20in%20LandingCommerce%20Laravel%20Solution.`, 'Inquire ↗', 'LARAVEL SOLUTION', 'cyan');
    } else if (clean === 'easyfunnel' || clean === 'easy-funnel') {
      await streamLine('▶ EasyFunnel — Dynamic Sales Landing Page WordPress Plugin', 'output', 5, undefined, undefined, 'OWN PLUGIN', 'emerald');
      await streamLine('• 20+ Built-in conversion widgets (sticky order drawer, order bumps, countdowns)', 'output', 5);
      await streamLine('• 1-Click checkout with zero distraction, bKash/Nagad & automated Steadfast/Pathao courier APIs', 'output', 5, `https://wa.me/${developerInfo.whatsappNumber}?text=Hello%20Robiul!%20Tell%20me%20more%20about%20EasyFunnel%20Plugin.`, 'Inquire on WhatsApp ↗', 'DETAILS', 'emerald');
    } else if (clean === 'landingcommerce' || clean === 'landing-commerce') {
      await streamLine('▶ LandingCommerce — High-Converting Laravel Landing Page Solution', 'output', 5, undefined, undefined, 'LARAVEL ENGINE', 'cyan');
      await streamLine('• Built on Laravel 11 for ultra-fast, zero-bloat performance (< 180ms response)', 'output', 5);
      await streamLine('• Automated bKash/Nagad checkout, live Steadfast/Pathao courier booking & Meta CAPI', 'output', 5, `https://wa.me/${developerInfo.whatsappNumber}?text=Hello%20Robiul!%20Tell%20me%20more%20about%20LandingCommerce%20Laravel%20Solution.`, 'Inquire on WhatsApp ↗', 'DETAILS', 'cyan');
    } else if (clean === '2' || clean === 'services' || clean === 'service' || clean === 'pricing') {
      await streamLine('• Laravel Landing Page Solution with Own-Built App (LandingCommerce) — Custom Architecture & Automation', 'output', 5, `https://wa.me/${developerInfo.whatsappNumber}?text=Hello%20Robiul!%20I%20am%20interested%20in%20Laravel%20Landing%20Page%20Solution%20(LandingCommerce).`, 'Discuss ↗', 'FEATURED SOLUTION', 'cyan');
      await streamLine('• Dynamic Sales Landing Pages (EasyFunnel & Custom Code) — Sub-1.2s Fast Load & 1-Click Buy', 'output', 5, `https://wa.me/${developerInfo.whatsappNumber}?text=Hello%20Robiul!%20I%20am%20interested%20in%20Dynamic%20Sales%20Landing%20Pages.`, 'Discuss ↗', 'HIGH CONVERTING', 'emerald');
      await streamLine('• Full-Stack Web & Mobile Applications (MERN, React, Next.js, React Native) — Scalable Custom Systems', 'output', 5, `https://wa.me/${developerInfo.whatsappNumber}?text=Hello%20Robiul!%20I%20want%20a%20Full-Stack%20Web%20or%20Mobile%20App.`, 'Discuss ↗', 'CUSTOM APP', 'purple');
      await streamLine('• WordPress Plugin Development & Speed Optimization — 20+ Built-in Widgets & Sub-1s Speed Tuning', 'output', 5, `https://wa.me/${developerInfo.whatsappNumber}?text=Hello%20Robiul!%20I%20want%20Plugin%20Development%20or%20Speed%20Optimization.`, 'Discuss ↗', 'SPEED TUNING', 'amber');
    } else if (clean === '3' || clean === 'skills' || clean === 'tech') {
      await streamLine('• JavaScript (ES6+), React, Next.js, React Native, Node.js, Express, MongoDB', 'output', 5);
      await streamLine('• WordPress Plugin Development (EasyFunnel Architecture, PHP, REST API)', 'output', 5);
      await streamLine('• Dynamic Sales Landing Pages, 20+ Built-in Conversion Widgets & 1-Click Checkout', 'output', 5);
      await streamLine('• bKash, Nagad, Steadfast, Pathao Courier APIs & Server-Side Meta CAPI', 'output', 5);
    } else if (clean === '4' || clean === 'contact' || clean === 'whatsapp') {
      await streamLine(`• WhatsApp: ${developerInfo.phone}`, 'output', 5, developerInfo.whatsappUrl, 'Chat on WhatsApp ↗', 'INSTANT REPLY', 'emerald');
      await streamLine(`• Email: ${developerInfo.email}`, 'output', 5);
      await streamLine(`• Phone: ${developerInfo.phone}`, 'output', 5);
      await streamLine('• Location: Dhaka, Bangladesh (Available for remote & in-person meetups)', 'output', 5);
    } else if (clean === 'clear' || clean === 'cls') {
      setHistory([]);
      setIsTyping(false);
      return;
    } else if (clean === 'explore' || clean === 'menu') {
      await streamLine('[1] Projects', 'menu', 6);
      await streamLine('[2] Services', 'menu', 6);
      await streamLine('[3] Skills', 'menu', 6);
      await streamLine('[4] Contact', 'menu', 6);
    } else {
      await streamLine("Unknown option. Press 1, 2, 3, or 4 (or 'explore').", 'error', 6);
    }

    await streamLine("Next: Select [1-4] or type 'explore':", 'prompt', 6);

    setIsTyping(false);
    setInputValue('');
    setTimeout(() => inputRef.current?.focus(), 60);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;
    playMechanicalClick();
    handleSelectOption(inputValue);
  };

  const restartTerminal = () => {
    playMechanicalClick();
    window.location.reload();
  };

  const skipIntro = () => {
    playMechanicalClick();
    isCancelledRef.current = true;
    setTypingLine(null);
    setIsTyping(false);
    setHistory([
      { id: '1', type: 'cmd', text: 'whoami' },
      { id: '2', type: 'output', text: '▶ Robiul Awal — JavaScript & MERN Stack Developer (React · Next.js · React Native · WordPress)' },
      { id: '3', type: 'cmd', text: 'about' },
      { id: '4', type: 'output', text: '• Full-Stack JavaScript & MERN Stack Developer (React, Next.js, React Native, Node.js)' },
      { id: '5', type: 'output', text: '• 200+ Projects Completed — Dynamic Landing Pages & Web Apps for Scaling Businesses' },
      { id: '6', type: 'output', text: '• Creator of EasyFunnel — Dynamic Sales Landing Page WordPress Plugin with 20+ Built-in Widgets', tag: 'FEATURED PLUGIN', tagColor: 'emerald' },
      { id: '7', type: 'output', text: '• Sub-1.2s 4G Mobile Performance, bKash/Nagad & Automated Courier APIs (Steadfast/Pathao)' },
      { id: '8', type: 'cmd', text: 'explore' },
      { id: '9', type: 'menu', text: '[1] Projects' },
      { id: '10', type: 'menu', text: '[2] Services' },
      { id: '11', type: 'menu', text: '[3] Skills' },
      { id: '12', type: 'menu', text: '[4] Contact' },
      { id: '13', type: 'prompt', text: "Next: Select [1-4] or type 'explore':" },
    ]);
  };

  const handleCopyEmail = () => {
    playMechanicalClick();
    navigator.clipboard.writeText(developerInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const cycleTheme = () => {
    playMechanicalClick();
    setTheme((prev) => (prev === 'emerald' ? 'cyan' : prev === 'cyan' ? 'amber' : 'emerald'));
  };

  // Dynamic theme colors
  const themeClasses = {
    emerald: {
      accentText: 'text-emerald-400',
      accentHover: 'hover:text-emerald-300',
      accentBg: 'bg-emerald-500/15',
      accentBorder: 'border-emerald-500/30',
      glowShadow: 'shadow-[0_0_50px_-10px_rgba(16,185,129,0.15)]',
      cursorBg: 'bg-emerald-400',
      btnActive: 'bg-emerald-400 text-slate-950 font-bold',
      promptPrefix: 'text-emerald-400',
      tagBadge: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40',
    },
    cyan: {
      accentText: 'text-cyan-400',
      accentHover: 'hover:text-cyan-300',
      accentBg: 'bg-cyan-500/15',
      accentBorder: 'border-cyan-500/30',
      glowShadow: 'shadow-[0_0_50px_-10px_rgba(6,182,212,0.15)]',
      cursorBg: 'bg-cyan-400',
      btnActive: 'bg-cyan-400 text-slate-950 font-bold',
      promptPrefix: 'text-cyan-400',
      tagBadge: 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40',
    },
    amber: {
      accentText: 'text-amber-400',
      accentHover: 'hover:text-amber-300',
      accentBg: 'bg-amber-500/15',
      accentBorder: 'border-amber-500/30',
      glowShadow: 'shadow-[0_0_50px_-10px_rgba(245,158,11,0.15)]',
      cursorBg: 'bg-amber-400',
      btnActive: 'bg-amber-400 text-slate-950 font-bold',
      promptPrefix: 'text-amber-400',
      tagBadge: 'bg-amber-950/80 text-amber-300 border-amber-500/40',
    },
  }[theme];

  return (
    <div className="h-[100dvh] w-full bg-[#05070A] text-zinc-200 font-mono flex flex-col justify-center sm:p-6 overflow-hidden selection:bg-emerald-500/30 selection:text-emerald-300 relative">
      
      {/* Premium Studio Ambient Glows (Subtle, breathing depth) */}
      <div className={`hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 opacity-25 ${
        theme === 'emerald' ? 'bg-emerald-500' : theme === 'cyan' ? 'bg-cyan-500' : 'bg-amber-500'
      }`} />
      
      {/* Background Architectural Dot Grid */}
      <div className="absolute inset-0 bg-dots-pattern opacity-25 pointer-events-none" />

      {/* Main Terminal Frame */}
      <div className="w-full h-full sm:h-auto sm:max-w-3xl sm:mx-auto flex flex-col sm:space-y-2.5 relative z-10">
        
        {/* Desktop Sleek Status & Control Bar */}
        <div className="hidden sm:flex items-center justify-between px-2 text-xs text-zinc-400">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2 w-2 relative">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${themeClasses.cursorBg}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${themeClasses.cursorBg}`}></span>
            </span>
            <span className="text-white font-bold tracking-tight">robiul.dev</span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-400 text-[11px]">Dhaka, BD (GMT+6)</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                playMechanicalClick();
              }}
              className="p-1 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors flex items-center gap-1 text-[11px]"
              title={soundEnabled ? 'Mute Key Clicks' : 'Enable Key Clicks'}
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-emerald-400" /> : <VolumeX className="w-3.5 h-3.5 text-zinc-600" />}
              <span>{soundEnabled ? 'Audio On' : 'Muted'}</span>
            </button>

            <span className="text-zinc-700">·</span>

            {/* Theme Toggle */}
            <button
              onClick={cycleTheme}
              className="p-1 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors flex items-center gap-1 text-[11px]"
              title="Cycle Color Scheme"
            >
              <Palette className={`w-3.5 h-3.5 ${themeClasses.accentText}`} />
              <span className="capitalize">{theme}</span>
            </button>

            <span className="text-zinc-700">·</span>

            {/* Email Copy */}
            <button
              onClick={handleCopyEmail}
              className="hover:text-zinc-200 transition-colors flex items-center gap-1"
              title="Copy Email Address"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Copied' : 'Email'}</span>
            </button>

            <span className="text-zinc-700">·</span>

            {/* WhatsApp Link */}
            <a
              href={developerInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${themeClasses.accentText} ${themeClasses.accentHover} font-bold flex items-center gap-1`}
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* The Terminal Window (Executive Glassmorphism & Shadow Depth) */}
        <div className={`w-full h-full sm:h-[590px] sm:rounded-2xl sm:border border-white/[0.12] bg-[#080B11]/95 sm:backdrop-blur-2xl flex flex-col overflow-hidden transition-all duration-300 ${themeClasses.glowShadow} shadow-[0_30px_90px_-20px_rgba(0,0,0,0.95)]`}>
          
          {/* Refined Glassmorphic Titlebar */}
          <div className="px-3.5 sm:px-4 py-2.5 bg-[#0D111A]/90 border-b border-white/[0.08] flex items-center justify-between shrink-0 select-none backdrop-blur-md">
            
            {/* macOS Sequoia Style Traffic Lights */}
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] cursor-pointer hover:brightness-110 active:brightness-90 transition-all shadow-sm"
                onClick={restartTerminal} 
                title="Restart Session" 
              />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] cursor-pointer hover:brightness-110 transition-all shadow-sm" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] cursor-pointer hover:brightness-110 transition-all shadow-sm" />
              
              <div className="flex items-center gap-1.5 ml-2">
                <span className="text-white font-bold text-xs tracking-tight">
                  robiul.dev
                </span>
                <span className="text-zinc-600 hidden xs:inline">/</span>
                <span className="text-zinc-400 text-[11px] hidden xs:inline">
                  portfolio-cli (main)
                </span>
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-400/80 ml-0.5" />
              </div>
            </div>

            {/* Titlebar Action Buttons */}
            <div className="flex items-center gap-2 text-xs">
              {/* Mobile Audio Toggle */}
              <button
                onClick={() => {
                  setSoundEnabled(!soundEnabled);
                  playMechanicalClick();
                }}
                className="sm:hidden p-1 text-zinc-400 hover:text-white"
                title="Sound"
              >
                {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-emerald-400" /> : <VolumeX className="w-3.5 h-3.5 text-zinc-600" />}
              </button>

              {/* Mobile WhatsApp Link */}
              <a
                href={developerInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${themeClasses.accentText} font-bold flex items-center gap-1 sm:hidden text-[11px]`}
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              {/* Skip Typing Button */}
              {isTyping && (
                <button
                  onClick={skipIntro}
                  className="text-[10px] text-zinc-300 hover:text-white px-2 py-0.5 rounded-md bg-zinc-800/80 hover:bg-zinc-700 border border-white/[0.08] flex items-center gap-1 transition-all"
                >
                  <FastForward className="w-3 h-3" />
                  <span>Skip</span>
                </button>
              )}

              {/* Reset Session */}
              <button
                onClick={restartTerminal}
                className="p-1 text-zinc-400 hover:text-white transition-colors"
                title="Restart Terminal"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Console Output Scroll Area */}
          <div className="flex-1 p-3.5 sm:p-5 overflow-y-auto space-y-2.5 text-xs leading-relaxed bg-[#07090F]/70">
            {history.map((entry) => (
              <div key={entry.id} className="animate-in fade-in duration-75">
                
                {/* Command Line */}
                {entry.type === 'cmd' && (
                  <div className={`${themeClasses.accentText} font-bold flex items-center gap-1.5 pt-1`}>
                    <span className="text-zinc-500 font-normal">visitor@robiul.dev:~$</span>
                    <span className="text-white">{entry.text}</span>
                  </div>
                )}

                {/* Output Line with Optional Badges & Links */}
                {entry.type === 'output' && (
                  <div className={`pl-3 border-l-2 ${themeClasses.accentBorder} py-0.5 text-zinc-200 flex flex-wrap items-center justify-between gap-1.5`}>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={entry.text.startsWith('▶') ? `${themeClasses.accentText} font-bold text-xs sm:text-sm tracking-tight` : ''}>
                        {entry.text}
                      </span>
                      {entry.tag && (
                        <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded border font-semibold ${
                          entry.tagColor === 'emerald' ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40' :
                          entry.tagColor === 'cyan' ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40' :
                          entry.tagColor === 'purple' ? 'bg-purple-950/80 text-purple-300 border-purple-500/40' :
                          'bg-amber-950/80 text-amber-300 border-amber-500/40'
                        }`}>
                          {entry.tag}
                        </span>
                      )}
                    </div>

                    {entry.linkUrl && (
                      <a
                        href={entry.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${themeClasses.accentText} ${themeClasses.accentHover} font-bold shrink-0 text-[11px] underline flex items-center gap-0.5 hover:translate-x-0.5 transition-transform`}
                      >
                        <span>{entry.linkLabel}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                )}

                {/* Numbered Menu Options */}
                {entry.type === 'menu' && (
                  <div 
                    onClick={() => {
                      playMechanicalClick();
                      const num = entry.text.match(/\[(\d+)\]/)?.[1];
                      if (num) handleSelectOption(num);
                    }}
                    className={`pl-3 border-l-2 border-white/20 py-0.5 text-zinc-300 hover:text-white cursor-pointer transition-colors group flex items-center gap-2`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-emerald-400 transition-colors" />
                    <span className="font-semibold">{entry.text}</span>
                  </div>
                )}

                {/* Follow-up Prompt Line */}
                {entry.type === 'prompt' && (
                  <div className="pt-2 text-zinc-400 flex items-center gap-1.5 text-[11px]">
                    <span className={`${themeClasses.accentText} font-bold`}>?</span>
                    <span>{entry.text}</span>
                  </div>
                )}

                {/* Error Line */}
                {entry.type === 'error' && (
                  <div className="pl-3 border-l-2 border-rose-500 py-0.5 text-rose-400 font-medium">
                    {entry.text}
                  </div>
                )}

              </div>
            ))}

            {/* Currently Typing Active Line (with live pulsing cursor) */}
            {typingLine && (
              <div>
                {typingLine.type === 'cmd' && (
                  <div className={`${themeClasses.accentText} font-bold flex items-center gap-1.5 pt-1`}>
                    <span className="text-zinc-500 font-normal">visitor@robiul.dev:~$</span>
                    <span className="text-white">{typingLine.text}</span>
                    <span className={`w-2 h-3.5 ${themeClasses.cursorBg} animate-pulse inline-block align-middle ml-0.5`} />
                  </div>
                )}
                {typingLine.type === 'output' && (
                  <div className={`pl-3 border-l-2 ${themeClasses.accentBorder} py-0.5 text-zinc-200`}>
                    <span className={typingLine.text.startsWith('▶') ? `${themeClasses.accentText} font-bold text-xs sm:text-sm` : ''}>
                      {typingLine.text}
                      <span className={`w-2 h-3.5 ${themeClasses.cursorBg} animate-pulse inline-block align-middle ml-0.5`} />
                    </span>
                  </div>
                )}
                {typingLine.type === 'menu' && (
                  <div className="pl-3 border-l-2 border-white/20 py-0.5 text-zinc-300">
                    <span>{typingLine.text}</span>
                    <span className={`w-2 h-3.5 ${themeClasses.cursorBg} animate-pulse inline-block align-middle ml-0.5`} />
                  </div>
                )}
                {typingLine.type === 'prompt' && (
                  <div className="pt-2 text-zinc-400 flex items-center gap-1.5">
                    <span className={`${themeClasses.accentText} font-bold`}>?</span>
                    <span>{typingLine.text}</span>
                    <span className={`w-2 h-3.5 ${themeClasses.cursorBg} animate-pulse inline-block align-middle ml-0.5`} />
                  </div>
                )}
              </div>
            )}

            <div ref={terminalEndRef} />
          </div>

          {/* Quick-Tap Mechanical Keypad Bar (Tactile keycap buttons) */}
          <div className="px-2.5 sm:px-4 py-2 bg-[#0A0D15] border-t border-white/[0.08] flex items-center justify-between gap-1.5 text-xs select-none shrink-0 shadow-inner">
            <button
              onClick={() => {
                playMechanicalClick();
                handleSelectOption('1');
              }}
              disabled={isTyping}
              className="flex-1 py-2 sm:py-1.5 rounded-lg bg-[#111622] hover:bg-[#181F30] active:scale-95 text-zinc-200 hover:text-white border border-white/[0.08] hover:border-white/[0.2] transition-all flex items-center justify-center gap-1.5 text-[11px] disabled:opacity-50 shadow-sm"
            >
              <span className={`${themeClasses.accentText} font-bold font-mono`}>1</span>
              <span>Projects</span>
            </button>

            <button
              onClick={() => {
                playMechanicalClick();
                handleSelectOption('2');
              }}
              disabled={isTyping}
              className="flex-1 py-2 sm:py-1.5 rounded-lg bg-[#111622] hover:bg-[#181F30] active:scale-95 text-zinc-200 hover:text-white border border-white/[0.08] hover:border-white/[0.2] transition-all flex items-center justify-center gap-1.5 text-[11px] disabled:opacity-50 shadow-sm"
            >
              <span className={`${themeClasses.accentText} font-bold font-mono`}>2</span>
              <span>Services</span>
            </button>

            <button
              onClick={() => {
                playMechanicalClick();
                handleSelectOption('3');
              }}
              disabled={isTyping}
              className="flex-1 py-2 sm:py-1.5 rounded-lg bg-[#111622] hover:bg-[#181F30] active:scale-95 text-zinc-200 hover:text-white border border-white/[0.08] hover:border-white/[0.2] transition-all flex items-center justify-center gap-1.5 text-[11px] disabled:opacity-50 shadow-sm"
            >
              <span className={`${themeClasses.accentText} font-bold font-mono`}>3</span>
              <span>Skills</span>
            </button>

            <button
              onClick={() => {
                playMechanicalClick();
                handleSelectOption('4');
              }}
              disabled={isTyping}
              className={`flex-1 py-2 sm:py-1.5 rounded-lg ${themeClasses.accentBg} hover:brightness-120 active:scale-95 ${themeClasses.accentText} border ${themeClasses.accentBorder} transition-all flex items-center justify-center gap-1.5 text-[11px] font-bold disabled:opacity-50 shadow-sm`}
            >
              <span className="font-mono">4</span>
              <span>Contact</span>
            </button>
          </div>

          {/* Interactive Command Line Bar */}
          <form onSubmit={handleFormSubmit} className="p-2.5 sm:p-3 bg-[#080A10] border-t border-white/[0.08] flex items-center gap-2 shrink-0">
            <span className={`${themeClasses.promptPrefix} font-bold text-xs shrink-0 flex items-center gap-1`}>
              <span>visitor@robiul.dev:~$</span>
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Press 1, 2, 3, or 4..."
              disabled={isTyping}
              className="flex-1 bg-transparent text-white placeholder-zinc-600 focus:outline-none text-xs font-mono disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isTyping}
              className={`p-1.5 rounded-md text-zinc-400 hover:text-white ${themeClasses.accentHover} hover:bg-zinc-800 transition-colors disabled:opacity-40`}
              title="Execute"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>

      </div>

    </div>
  );
}
