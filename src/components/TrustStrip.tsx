const stackItems = [
  'Laravel 11',
  'WordPress',
  'React & Next.js',
  'bKash Merchant API',
  'Nagad',
  'Steadfast Courier',
  'Pathao Logistics',
  'Meta Conversions API',
  'Redis Cache',
  'Cloudflare CDN',
];

export function TrustStrip() {
  const items = [...stackItems, ...stackItems];

  return (
    <section className="relative overflow-hidden border-y border-white/[0.07] bg-[#090c0e] py-5">
      <div className="page-shell flex items-center gap-7">
        <span className="hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 lg:inline">
          Engineered with
        </span>
        <div className="marquee-mask min-w-0 flex-1 overflow-hidden">
          <div className="marquee-track flex items-center">
            {items.map((item, index) => (
              <div key={`${item}-${index}`} className="flex shrink-0 items-center gap-8 pr-8">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                  {item}
                </span>
                <span className="h-1 w-1 rounded-full bg-[#D6F25C]/70" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
