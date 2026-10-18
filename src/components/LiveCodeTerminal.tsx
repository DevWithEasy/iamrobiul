import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Copy, 
  Check, 
  Terminal as TerminalIcon, 
  FileCode, 
  CheckCircle2,
  Zap,
  PackageCheck,
  CreditCard
} from 'lucide-react';
import { developerInfo } from '../data/portfolioData';

type ActiveTab = 'profile' | 'laravel' | 'terminal';

export const LiveCodeTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('profile');
  const [copied, setCopied] = useState(false);
  const [activeCommand, setActiveCommand] = useState<string | null>(null);
  const [consoleLogs, setConsoleLogs] = useState<string[] | null>(null);

  // Typewriter code lines for profile
  const profileLines = [
    '// Robiul Awal — Engineering for Bangladeshi E-Commerce & Retail',
    'export const engineer = {',
    '  name: "Robiul Awal",',
    '  location: "Dhaka, Bangladesh",',
    '  experience: "6+ Years Specialized",',
    '  specializations: [',
    '    "WordPress High-Converting Sales Pages",',
    '    "Custom Laravel Systems (POS, ERP, Dashboards)",',
    '    "Sub-1.2s 4G Mobile Performance",',
    '  ],',
    '  nativeIntegrations: [',
    '    "bKash Tokenized & Nagad Checkout",',
    '    "Steadfast & Pathao Automated Courier API",',
    '    "Server-Side Meta Conversions API (CAPI)",',
    '  ],',
    '  guarantees: {',
    '    delivery: "48 to 72 Hours for Landing Pages",',
    '    postLaunchSupport: "30 Days Free Warranty",',
    '    progressUpdates: "Daily Loom Screencasts",',
    '  },',
    '  status: "Available for Q4 Projects",',
    '};',
  ];

  const laravelLines = [
    '<?php',
    'namespace App\\Http\\Controllers;',
    '',
    'use App\\Services\\SteadfastCourierApi;',
    'use App\\Services\\BkashMerchantService;',
    '',
    'class QuickOrderController extends Controller',
    '{',
    '    public function store(OrderRequest $request)',
    '    {',
    '        // 1-Step high-speed checkout entry',
    '        $order = Order::create($request->validated());',
    '        ',
    '        // Automatic parcel booking to Steadfast Courier',
    '        $consignment = SteadfastCourierApi::dispatch([',
    '            "invoice" => $order->invoice_no,',
    '            "customer" => $order->customer_name,',
    '            "phone" => $order->phone,',
    '            "cod" => $order->total_bdt,',
    '        ]);',
    '        ',
    '        // Server-Side Meta CAPI Event (Bypasses iOS 14+ ad block)',
    '        MetaCapi::trackPurchase($order);',
    '        ',
    '        return response()->json(["status" => 200, "speed" => "sub-second"]);',
    '    }',
    '}',
  ];

  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    setVisibleCount(0);
    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < profileLines.length) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, 65);
    return () => clearInterval(timer);
  }, [activeTab]);

  const handleCopy = () => {
    const text = activeTab === 'profile' ? profileLines.join('\n') : laravelLines.join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const runSimulation = (cmdType: 'speed' | 'bkash' | 'courier') => {
    setActiveCommand(cmdType);
    setConsoleLogs(null);

    setTimeout(() => {
      if (cmdType === 'speed') {
        setConsoleLogs([
          '❯ audit --pagespeed --mobile',
          '  First Contentful Paint (FCP): 0.85s (Fast)',
          '  Largest Contentful Paint (LCP): 1.10s',
          '  Total Blocking Time (TBT): 20ms',
          '  Performance Score: 98 / 100 on BD 4G',
          '✔ Ready to convert cold ad traffic without bounce.',
        ]);
      } else if (cmdType === 'bkash') {
        setConsoleLogs([
          '❯ test --gateway bKash-Tokenized',
          '  Request: POST /v1.2.0-beta/tokenized/checkout/create',
          '  Status: 200 OK — Signature Verified',
          '  Webhook Listener: Active (Instant order status update)',
          '✔ bKash & Nagad checkout ready for instant transactions.',
        ]);
      } else {
        setConsoleLogs([
          '❯ dispatch --courier Steadfast-API',
          '  Consignment generated: STDF-984218BD',
          '  Recipient: Dhaka Metro Delivery (COD: ৳ 2,450)',
          '  Sync Status: Pushed directly to merchant dashboard',
          '✔ Zero manual address typing required.',
        ]);
      }
      setActiveCommand(null);
    }, 400);
  };

  return (
    <div className="w-full rounded-xl bg-[#090C12] border border-white/[0.08] text-left flex flex-col font-mono text-xs overflow-hidden shadow-2xl">
      
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#0C1017] border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <span className="text-zinc-500 text-[11px] ml-1 font-mono">
            robiul@dhaka: ~
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={handleCopy}
            className="p-1 rounded text-zinc-400 hover:text-white transition-colors"
            title="Copy Code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Editor File Tabs */}
      <div className="flex items-center border-b border-white/[0.06] bg-[#07090E] px-2 select-none overflow-x-auto">
        <button
          onClick={() => setActiveTab('profile')}
          className={`px-3 py-1.5 text-[11px] border-b transition-colors whitespace-nowrap ${
            activeTab === 'profile'
              ? 'border-emerald-400 text-zinc-100 bg-[#0C1017]'
              : 'border-transparent text-zinc-500 hover:text-zinc-300'
          }`}
        >
          RobiulAwal.ts
        </button>
        <button
          onClick={() => setActiveTab('laravel')}
          className={`px-3 py-1.5 text-[11px] border-b transition-colors whitespace-nowrap ${
            activeTab === 'laravel'
              ? 'border-emerald-400 text-zinc-100 bg-[#0C1017]'
              : 'border-transparent text-zinc-500 hover:text-zinc-300'
          }`}
        >
          QuickOrderController.php
        </button>
        <button
          onClick={() => setActiveTab('terminal')}
          className={`px-3 py-1.5 text-[11px] border-b transition-colors whitespace-nowrap ${
            activeTab === 'terminal'
              ? 'border-emerald-400 text-zinc-100 bg-[#0C1017]'
              : 'border-transparent text-zinc-500 hover:text-zinc-300'
          }`}
        >
          bash — terminal
        </button>
      </div>

      {/* Code Body */}
      <div className="p-4 overflow-x-auto min-h-[290px] max-h-[360px] overflow-y-auto leading-relaxed text-zinc-300 bg-[#080B10]">
        
        {activeTab === 'profile' && (
          <div className="space-y-0.5">
            {profileLines.slice(0, visibleCount).map((line, i) => (
              <div key={i} className="flex items-start">
                <span className="w-6 text-right pr-3 select-none text-zinc-600 text-[10px]">
                  {i + 1}
                </span>
                <span className="flex-1 font-mono">
                  {line.startsWith('//') ? (
                    <span className="text-zinc-500 italic">{line}</span>
                  ) : line.includes(':') ? (
                    <span>
                      <span className="text-zinc-400">{line.slice(0, line.indexOf(':'))}</span>
                      <span className="text-zinc-600">:</span>
                      <span className="text-emerald-400/90">{line.slice(line.indexOf(':') + 1)}</span>
                    </span>
                  ) : (
                    <span className="text-zinc-300">{line}</span>
                  )}
                  {i === visibleCount - 1 && visibleCount < profileLines.length && (
                    <span className="inline-block w-1.5 h-3.5 ml-1 bg-emerald-400 animate-pulse align-middle" />
                  )}
                </span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'laravel' && (
          <div className="space-y-0.5">
            {laravelLines.map((line, i) => (
              <div key={i} className="flex items-start">
                <span className="w-6 text-right pr-3 select-none text-zinc-600 text-[10px]">
                  {i + 1}
                </span>
                <span className="flex-1 font-mono">
                  {line.startsWith('//') ? (
                    <span className="text-zinc-500 italic">{line}</span>
                  ) : line.startsWith('<?php') || line.startsWith('namespace') || line.startsWith('use') || line.startsWith('class') || line.startsWith('public') ? (
                    <span className="text-zinc-100 font-semibold">{line}</span>
                  ) : (
                    <span className="text-zinc-300">{line}</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'terminal' && (
          <div className="space-y-2 text-zinc-400 font-mono text-[11px]">
            <div>
              <span className="text-emerald-400">robiul@dhaka</span>
              <span className="text-zinc-600">:</span>
              <span className="text-zinc-400">~/f-commerce-funnel</span>
              <span className="text-zinc-600">$</span> npx check-readiness
            </div>

            <div className="pl-3 border-l border-zinc-800 space-y-1 text-zinc-300">
              <div className="text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Engineer: Robiul Awal initialized.</span>
              </div>
              <div className="text-zinc-400">Target: Bangladeshi F-Commerce & E-Commerce Brands</div>
              <div className="text-zinc-400">Native APIs: bKash + Nagad + Steadfast + Pathao Courier</div>
              <div className="text-zinc-400">Mobile Speed: Sub-1.2s on 4G networks</div>
              <div className="text-zinc-400">Support: 30 days free post-launch warranty</div>
            </div>

            <div className="pt-1">
              <span className="text-emerald-400">robiul@dhaka</span>
              <span className="text-zinc-600">:</span>
              <span className="text-zinc-400">~/f-commerce-funnel</span>
              <span className="text-zinc-600">$</span> <span className="inline-block w-1.5 h-3.5 bg-emerald-400 animate-pulse align-middle" />
            </div>
          </div>
        )}

      </div>

      {/* Quick Interactive Command Buttons */}
      <div className="px-3.5 py-2 bg-[#0C1017] border-t border-white/[0.06] flex items-center justify-between text-[11px] gap-2 flex-wrap">
        <div className="flex items-center gap-1.5 text-zinc-400">
          <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">Test API:</span>
          <button
            onClick={() => runSimulation('speed')}
            disabled={activeCommand !== null}
            className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors flex items-center gap-1"
          >
            <Zap className="w-3 h-3 text-emerald-400" />
            <span>Speed</span>
          </button>
          <button
            onClick={() => runSimulation('bkash')}
            disabled={activeCommand !== null}
            className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors flex items-center gap-1"
          >
            <CreditCard className="w-3 h-3 text-emerald-400" />
            <span>bKash</span>
          </button>
          <button
            onClick={() => runSimulation('courier')}
            disabled={activeCommand !== null}
            className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors flex items-center gap-1"
          >
            <PackageCheck className="w-3 h-3 text-emerald-400" />
            <span>Courier</span>
          </button>
        </div>

        <span className="text-zinc-500 text-[10px] hidden xs:inline">
          Dhaka, BD (GMT+6)
        </span>
      </div>

      {/* Console Simulation Output Drawer */}
      {consoleLogs && (
        <div className="bg-[#05070A] border-t border-emerald-500/30 p-3 text-[11px] font-mono space-y-1 animate-in fade-in duration-150">
          <div className="flex items-center justify-between text-zinc-500 text-[10px] pb-1 border-b border-zinc-900">
            <span>TERMINAL RUN RESULT</span>
            <button onClick={() => setConsoleLogs(null)} className="hover:text-white">
              ✕
            </button>
          </div>
          {consoleLogs.map((log, i) => (
            <div key={i} className={i === consoleLogs.length - 1 ? 'text-emerald-400 font-medium' : 'text-zinc-400'}>
              {log}
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
