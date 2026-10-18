import React, { useState, useMemo } from 'react';
import { calculatorPackages, calculatorAddOns, developerInfo } from '../data/portfolioData';
import { Check, MessageCircle, ArrowRight } from 'lucide-react';

export const CostCalculator: React.FC = () => {
  const [selectedPackageId, setSelectedPackageId] = useState<string>(calculatorPackages[0].id);
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>(['courier-api']);

  const activePackage = useMemo(() => {
    return calculatorPackages.find((p) => p.id === selectedPackageId) || calculatorPackages[0];
  }, [selectedPackageId]);

  const toggleAddOn = (id: string) => {
    setSelectedAddOnIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const totalCostBDT = useMemo(() => {
    const base = activePackage.basePriceBDT;
    const addonsTotal = selectedAddOnIds.reduce((sum, id) => {
      const addon = calculatorAddOns.find((a) => a.id === id);
      return sum + (addon ? addon.priceBDT : 0);
    }, 0);
    return base + addonsTotal;
  }, [activePackage, selectedAddOnIds]);

  const activeAddOnsList = useMemo(() => {
    return selectedAddOnIds
      .map((id) => calculatorAddOns.find((a) => a.id === id)?.label)
      .filter(Boolean);
  }, [selectedAddOnIds]);

  const whatsappUrl = useMemo(() => {
    const addonsText = activeAddOnsList.length > 0 
      ? `\nAdd-ons: ${activeAddOnsList.join(', ')}` 
      : '\nAdd-ons: None';

    const message = `Hello Robiul! I calculated a project estimate on your portfolio:\n\nPackage: ${activePackage.name}\nEstimated Budget: ৳ ${totalCostBDT.toLocaleString('en-BD')}${addonsText}\nTimeline: ${activePackage.deliveryDays}\n\nLet's discuss getting started.`;

    return `https://wa.me/${developerInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }, [activePackage, totalCostBDT, activeAddOnsList]);

  return (
    <section id="calculator" className="py-20 lg:py-24 border-b border-white/[0.06] bg-[#07080B]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
            03 // Interactive Project Cost Estimator
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Estimate your investment in seconds.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Choose your base system and any optional Bangladeshi courier or payment add-ons.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Selections */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Base */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-zinc-400 block">
                [1] Select Base Project Scope:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {calculatorPackages.map((pkg) => {
                  const isSelected = pkg.id === selectedPackageId;
                  return (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPackageId(pkg.id)}
                      className={`p-3.5 rounded-lg border text-left cursor-pointer transition-all ${
                        isSelected
                          ? 'border-emerald-500/70 bg-[#0C1217]'
                          : 'border-white/[0.08] bg-[#090C12] hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-mono mb-1">
                        <span className="text-zinc-400">{pkg.type}</span>
                        <span className="text-white font-bold">
                          ৳ {pkg.basePriceBDT.toLocaleString('en-BD')}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-semibold text-white">
                        {pkg.name}
                      </h4>
                      <p className="text-[11px] text-zinc-500 mt-1 font-sans line-clamp-1">
                        {pkg.idealFor}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Add-Ons */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono text-zinc-400 block">
                [2] Select Bangladeshi APIs & Enhancements:
              </span>
              <div className="space-y-2">
                {calculatorAddOns.map((addon) => {
                  const isChecked = selectedAddOnIds.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={`p-3 rounded-lg border cursor-pointer transition-all flex items-center justify-between text-xs font-mono ${
                        isChecked
                          ? 'border-emerald-500/50 bg-[#0C1217]'
                          : 'border-white/[0.08] bg-[#090C12] hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                          isChecked ? 'border-emerald-400 bg-emerald-400 text-black' : 'border-zinc-700'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div>
                          <span className="text-zinc-200 font-medium">{addon.label}</span>
                          <span className="text-zinc-500 text-[11px] block font-sans">{addon.description}</span>
                        </div>
                      </div>
                      <span className="text-emerald-400 font-semibold shrink-0 ml-3">
                        +৳ {addon.priceBDT.toLocaleString('en-BD')}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Summary */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-6 rounded-xl border border-white/[0.08] bg-[#080B10] space-y-4 font-mono">
              <div className="flex items-center justify-between text-xs text-zinc-400 pb-3 border-b border-white/[0.06]">
                <span>SPECIFICATION SUMMARY</span>
                <span className="text-emerald-400">BDT (৳)</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-300">{activePackage.name}</span>
                  <span className="text-white font-bold">৳ {activePackage.basePriceBDT.toLocaleString('en-BD')}</span>
                </div>

                {activeAddOnsList.length > 0 && (
                  <div className="pt-2 border-t border-zinc-900 space-y-1 text-zinc-400 text-[11px]">
                    {selectedAddOnIds.map((id) => {
                      const addon = calculatorAddOns.find((a) => a.id === id);
                      if (!addon) return null;
                      return (
                        <div key={id} className="flex justify-between">
                          <span className="truncate pr-2">• {addon.label}</span>
                          <span className="text-zinc-300 shrink-0">+৳ {addon.priceBDT.toLocaleString('en-BD')}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className="pt-2 border-t border-zinc-900 flex justify-between text-zinc-400">
                  <span>Turnaround:</span>
                  <span className="text-zinc-200 font-medium">{activePackage.deliveryDays}</span>
                </div>
              </div>

              {/* Total */}
              <div className="pt-4 border-t border-white/[0.08] flex items-baseline justify-between">
                <span className="text-xs text-zinc-400">Total Investment:</span>
                <div className="text-right">
                  <span className="text-2xl font-bold text-white">
                    ৳ {totalCostBDT.toLocaleString('en-BD')}
                  </span>
                  <span className="text-[10px] text-zinc-500 block">50% Advance / 50% on Delivery</span>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-3 py-3 px-4 rounded-lg text-xs font-semibold text-[#07080B] bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-[#07080B]" />
                <span>Send Specification via WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <span className="text-[10px] text-zinc-500 block text-center">
                Includes 30 days free post-launch code warranty
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
