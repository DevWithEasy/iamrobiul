import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, Check, Clock3, MessageCircle, ReceiptText, Sparkles } from 'lucide-react';
import { calculatorAddOns, calculatorPackages, developerInfo } from '../data/portfolioData';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

interface CostCalculatorProps {
  initialPackageId?: string;
}

const formatBDT = (amount: number) => `৳ ${amount.toLocaleString('en-BD')}`;

export function CostCalculator({ initialPackageId }: CostCalculatorProps) {
  const [selectedPackageId, setSelectedPackageId] = useState(calculatorPackages[0].id);
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>(['courier-api']);

  useEffect(() => {
    if (initialPackageId && calculatorPackages.some((pkg) => pkg.id === initialPackageId)) {
      setSelectedPackageId(initialPackageId);
    }
  }, [initialPackageId]);

  const activePackage = useMemo(
    () => calculatorPackages.find((pkg) => pkg.id === selectedPackageId) ?? calculatorPackages[0],
    [selectedPackageId],
  );

  const selectedAddOns = useMemo(
    () =>
      selectedAddOnIds
        .map((id) => calculatorAddOns.find((addon) => addon.id === id))
        .filter((addon): addon is (typeof calculatorAddOns)[number] => Boolean(addon)),
    [selectedAddOnIds],
  );

  const totalCostBDT = useMemo(
    () => activePackage.basePriceBDT + selectedAddOns.reduce((sum, addon) => sum + addon.priceBDT, 0),
    [activePackage, selectedAddOns],
  );

  const whatsappUrl = useMemo(() => {
    const addonsText = selectedAddOns.length
      ? `Add-ons: ${selectedAddOns.map((addon) => addon.label).join(', ')}`
      : 'Add-ons: None';
    const message = `Hello Robiul! I prepared a project estimate on your portfolio.\n\nPackage: ${activePackage.name}\nEstimated budget: ${formatBDT(totalCostBDT)}\nTimeline: ${activePackage.deliveryDays}\n${addonsText}\n\nI'd like to discuss the scope and next steps.`;
    return `https://wa.me/${developerInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }, [activePackage, selectedAddOns, totalCostBDT]);

  const toggleAddOn = (id: string) => {
    setSelectedAddOnIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  return (
    <section id="calculator" className="relative bg-[#090c0e] py-24 lg:py-32">
      <div className="page-shell">
        <SectionHeading
          eyebrow="04 / Project estimate"
          title={
            <>
              A transparent starting point for your <span className="serif-accent">investment.</span>
            </>
          }
          description="Configure a realistic baseline in seconds. The final scope is always confirmed after a short discovery conversation."
          action={
            <span className="chip border-[#D6F25C]/25 text-[#D6F25C]">
              <Sparkles className="h-3 w-3" />
              No hidden fees
            </span>
          }
        />

        <div className="mt-16 grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
          <Reveal className="space-y-8 lg:col-span-7">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#D6F25C]">
                  Step 01
                </span>
                <span className="text-sm font-semibold text-white">Choose a base scope</span>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {calculatorPackages.map((pkg) => {
                  const isSelected = pkg.id === selectedPackageId;
                  return (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => setSelectedPackageId(pkg.id)}
                      className={`surface-card interactive-card rounded-2xl p-5 text-left ${
                        isSelected ? 'border-[#D6F25C]/55 bg-[#D6F25C]/[0.045]' : ''
                      }`}
                      aria-pressed={isSelected}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-500">
                          {pkg.type}
                        </span>
                        <span
                          className={`flex h-4.5 w-4.5 items-center justify-center rounded-full border ${
                            isSelected
                              ? 'border-[#D6F25C] bg-[#D6F25C] text-[#080b0d]'
                              : 'border-white/20'
                          }`}
                        >
                          {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                        </span>
                      </div>
                      <h3 className="mt-4 text-sm font-semibold leading-snug text-white">{pkg.name}</h3>
                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-zinc-500">
                        {pkg.idealFor}
                      </p>
                      <div className="mt-5 flex items-end justify-between border-t border-white/[0.07] pt-4">
                        <span className="text-sm font-bold text-white">
                          {formatBDT(pkg.basePriceBDT)}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-500">
                          {pkg.deliveryDays}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#D6F25C]">
                  Step 02
                </span>
                <span className="text-sm font-semibold text-white">Add integrations & assurance</span>
              </div>
              <div className="space-y-2.5">
                {calculatorAddOns.map((addon) => {
                  const isSelected = selectedAddOnIds.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddOn(addon.id)}
                      className={`flex w-full items-center justify-between gap-4 rounded-2xl border px-4 py-3.5 text-left transition-all ${
                        isSelected
                          ? 'border-[#D6F25C]/45 bg-[#D6F25C]/[0.04]'
                          : 'border-white/[0.08] bg-white/[0.018] hover:border-white/20'
                      }`}
                      aria-pressed={isSelected}
                    >
                      <div className="flex min-w-0 items-center gap-3.5">
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                            isSelected
                              ? 'border-[#D6F25C] bg-[#D6F25C] text-[#080b0d]'
                              : 'border-white/20'
                          }`}
                        >
                          {isSelected && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                        </span>
                        <span className="min-w-0">
                          <span className="block truncate text-sm font-medium text-zinc-100">
                            {addon.label}
                          </span>
                          <span className="mt-0.5 block truncate text-xs text-zinc-500">
                            {addon.description}
                          </span>
                        </span>
                      </div>
                      <span className="shrink-0 font-mono text-xs font-semibold text-[#D6F25C]">
                        +{formatBDT(addon.priceBDT)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:sticky lg:top-28 lg:col-span-5">
            <div className="surface-solid relative overflow-hidden rounded-[24px] p-6 sm:p-7">
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 brand-glow" />
              <div className="relative">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D6F25C]/10 text-[#D6F25C]">
                      <ReceiptText className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-semibold text-white">Estimate summary</span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                    BDT
                  </span>
                </div>

                <div className="space-y-4 py-6 text-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-medium text-zinc-100">{activePackage.name}</div>
                      <div className="mt-1 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500">
                        <Clock3 className="h-3 w-3" />
                        {activePackage.deliveryDays}
                      </div>
                    </div>
                    <span className="shrink-0 font-semibold text-white">
                      {formatBDT(activePackage.basePriceBDT)}
                    </span>
                  </div>

                  {selectedAddOns.length > 0 && (
                    <div className="space-y-2.5 border-t border-white/[0.07] pt-4">
                      {selectedAddOns.map((addon) => (
                        <div key={addon.id} className="flex items-start justify-between gap-3 text-xs">
                          <span className="text-zinc-500">
                            <span className="mr-2 text-[#D6F25C]">+</span>
                            {addon.label}
                          </span>
                          <span className="shrink-0 text-zinc-300">{formatBDT(addon.priceBDT)}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 border-t border-white/[0.07] pt-4">
                    {activePackage.includes.slice(0, 3).map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-[#D6F25C]/25 bg-[#D6F25C]/[0.055] p-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400">
                    Estimated investment
                  </div>
                  <div className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {formatBDT(totalCostBDT)}
                  </div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500">
                    50% advance / 50% on delivery
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-5 w-full group"
                >
                  <MessageCircle className="h-4 w-4" />
                  Send this estimate
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <p className="mt-4 text-center text-[11px] leading-relaxed text-zinc-600">
                  Includes 30 days of post-launch support. Final scope is confirmed together.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
