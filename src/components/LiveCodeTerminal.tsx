import { useEffect, useMemo, useState } from 'react';
import {
  Check,
  CheckCircle2,
  Copy,
  CreditCard,
  PackageCheck,
  TerminalSquare,
  Zap,
} from 'lucide-react';

type Tab = 'profile' | 'checkout' | 'terminal';

const codeByTab: Record<Tab, string[]> = {
  profile: [
    '// Robiul Awal — product engineering profile',
    'const engineer = {',
    '  focus: "High-converting commerce systems",',
    '  location: "Dhaka, Bangladesh",',
    '  experience: "6+ years",',
    '  stack: ["React", "Next.js", "Laravel", "WordPress"],',
    '  integrations: [',
    '    "bKash & Nagad payments",',
    '    "Steadfast & Pathao courier",',
    '    "Server-side Meta CAPI",',
    '  ],',
    '  standards: { speed: "<1.2s", warranty: "30 days" },',
    '  status: "Available for select projects",',
    '};',
  ],
  checkout: [
    '<?php',
    '// One-step commerce order pipeline',
    'class QuickOrderController extends Controller',
    '{',
    '  public function store(OrderRequest $request)',
    '  {',
    '    $order = Order::create($request->validated());',
    '    $parcel = Steadfast::dispatch($order->toParcel());',
    '    Bkash::verify($request->transaction_id);',
    '    MetaCapi::trackPurchase($order);',
    '',
    '    return response()->json([',
    '      "status" => "confirmed",',
    '      "latency" => "<180ms",',
    '    ]);',
    '  }',
    '}',
  ],
  terminal: [
    '$ npx audit --commerce --mobile',
    '',
    '✓ Core Web Vitals: passing',
    '✓ Checkout path: 1 step',
    '✓ Courier webhook: active',
    '✓ Payment verification: active',
    '✓ Meta CAPI event match: 9.4',
    '',
    'System readiness: 100%',
    '$ _',
  ],
};

const simulationResults: Record<string, string[]> = {
  speed: [
    '❯ audit --pagespeed --mobile',
    '  LCP: 1.10s · TBT: 20ms · CLS: 0.00',
    '  Performance score: 98 / 100 on BD 4G',
    '✔ Ready for paid social traffic.',
  ],
  bkash: [
    '❯ test --gateway bkash-tokenized',
    '  POST /tokenized/checkout/create → 200 OK',
    '  Signature verified · webhook listener active',
    '✔ Payment confirmation is automated.',
  ],
  courier: [
    '❯ dispatch --courier steadfast-api',
    '  Consignment STDF-984218BD generated',
    '  Order details pushed to merchant dashboard',
    '✔ Zero manual address entry required.',
  ],
};

function highlightLine(line: string) {
  if (line.startsWith('//')) {
    return <span className="italic text-zinc-600">{line}</span>;
  }

  if (line.startsWith('✓') || line.startsWith('✔')) {
    return <span className="text-[#D6F25C]">{line}</span>;
  }

  if (line.startsWith('$')) {
    return (
      <span>
        <span className="text-[#D6F25C]">$</span>
        <span className="text-zinc-300">{line.slice(1)}</span>
      </span>
    );
  }

  const parts = line.split(/("[^"]*")/g);
  return parts.map((part, index) => {
    if (part.startsWith('"') && part.endsWith('"')) {
      return (
        <span key={index} className="text-[#D6F25C]/90">
          {part}
        </span>
      );
    }

    const isKeyword = /^(\s*)(const|class|public|return|use|namespace|function|\$|✓)/.test(part);
    return (
      <span key={index} className={isKeyword ? 'text-zinc-100' : 'text-zinc-400'}>
        {part}
      </span>
    );
  });
}

export function LiveCodeTerminal() {
  const [activeTab, setActiveTab] = useState<Tab>('profile');
  const [copied, setCopied] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const [activeCommand, setActiveCommand] = useState<string | null>(null);
  const [consoleLogs, setConsoleLogs] = useState<string[] | null>(null);

  const lines = useMemo(() => codeByTab[activeTab], [activeTab]);

  useEffect(() => {
    setVisibleCount(0);
    const timer = window.setInterval(() => {
      setVisibleCount((count) => {
        if (count >= lines.length) {
          window.clearInterval(timer);
          return count;
        }
        return count + 1;
      });
    }, 52);
    return () => window.clearInterval(timer);
  }, [lines]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(lines.join('\n'));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const runSimulation = (command: 'speed' | 'bkash' | 'courier') => {
    setActiveCommand(command);
    setConsoleLogs(null);
    window.setTimeout(() => {
      setConsoleLogs(simulationResults[command]);
      setActiveCommand(null);
    }, 420);
  };

  const tabs: { id: Tab; label: string }[] = [
    { id: 'profile', label: 'engineer.ts' },
    { id: 'checkout', label: 'checkout.php' },
    { id: 'terminal', label: 'readiness' },
  ];

  return (
    <div className="mock-window flex w-full flex-col overflow-hidden rounded-[22px] font-mono text-xs">
      <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#101519] px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b5f]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#D6F25C]" />
          <span className="ml-2 hidden text-[10px] uppercase tracking-[0.16em] text-zinc-500 sm:inline">
            robiul@systems — live
          </span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-lg px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-zinc-500 transition-colors hover:bg-white/[0.05] hover:text-white"
          aria-label="Copy current code snippet"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-[#D6F25C]" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      <div className="flex overflow-x-auto border-b border-white/[0.07] bg-[#0a0e10]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              setActiveTab(tab.id);
              setConsoleLogs(null);
            }}
            className={`relative shrink-0 px-4 py-3 text-[10px] transition-colors ${
              activeTab === tab.id
                ? 'bg-white/[0.035] text-zinc-100'
                : 'text-zinc-600 hover:text-zinc-300'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute inset-x-3 bottom-0 h-px bg-[#D6F25C]" />
            )}
          </button>
        ))}
      </div>

      <div className="min-h-[322px] flex-1 overflow-x-auto bg-[#080b0d] px-3 py-4 sm:px-4">
        <div className="space-y-1.5">
          {lines.slice(0, visibleCount).map((line, index) => (
            <div key={`${activeTab}-${index}`} className="flex min-w-max items-start gap-3 leading-relaxed">
              <span className="w-6 shrink-0 select-none text-right text-[10px] text-zinc-700">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="whitespace-pre text-[11px] sm:text-xs">{highlightLine(line)}</span>
              {index === visibleCount - 1 && visibleCount < lines.length && (
                <span className="mt-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-[#D6F25C]" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] bg-[#0d1114] px-3 py-2.5 sm:px-4">
        <div className="flex items-center gap-1.5">
          <span className="mr-1 hidden font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600 sm:inline">
            Test
          </span>
          <button
            type="button"
            onClick={() => runSimulation('speed')}
            disabled={activeCommand !== null}
            className="flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-[10px] text-zinc-300 transition-colors hover:border-[#D6F25C]/40 hover:text-[#D6F25C] disabled:opacity-50"
          >
            <Zap className="h-3 w-3 text-[#D6F25C]" />
            Speed
          </button>
          <button
            type="button"
            onClick={() => runSimulation('bkash')}
            disabled={activeCommand !== null}
            className="flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-[10px] text-zinc-300 transition-colors hover:border-[#D6F25C]/40 hover:text-[#D6F25C] disabled:opacity-50"
          >
            <CreditCard className="h-3 w-3 text-[#D6F25C]" />
            bKash
          </button>
          <button
            type="button"
            onClick={() => runSimulation('courier')}
            disabled={activeCommand !== null}
            className="flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-[10px] text-zinc-300 transition-colors hover:border-[#D6F25C]/40 hover:text-[#D6F25C] disabled:opacity-50"
          >
            <PackageCheck className="h-3 w-3 text-[#D6F25C]" />
            Courier
          </button>
        </div>
        <span className="hidden items-center gap-1.5 text-[9px] uppercase tracking-[0.15em] text-zinc-600 sm:flex">
          <TerminalSquare className="h-3 w-3" />
          Dhaka · GMT+6
        </span>
      </div>

      {consoleLogs && (
        <div className="border-t border-[#D6F25C]/25 bg-[#06090a] px-4 py-3">
          <div className="mb-2 flex items-center justify-between text-[9px] uppercase tracking-[0.16em] text-zinc-600">
            <span>Run result</span>
            <button
              type="button"
              onClick={() => setConsoleLogs(null)}
              className="transition-colors hover:text-white"
              aria-label="Close run result"
            >
              Close ×
            </button>
          </div>
          <div className="space-y-1 text-[10px] leading-relaxed sm:text-[11px]">
            {consoleLogs.map((log, index) => (
              <div
                key={index}
                className={
                  index === consoleLogs.length - 1
                    ? 'flex items-center gap-2 text-[#D6F25C]'
                    : 'text-zinc-400'
                }
              >
                {index === consoleLogs.length - 1 && <CheckCircle2 className="h-3.5 w-3.5" />}
                <span>{log.replace(/^✔\s*/, '')}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
