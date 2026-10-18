import React from 'react';

export const TechStackSection: React.FC = () => {
  const stack = [
    {
      category: 'Backend & Frameworks',
      technologies: ['Laravel 11', 'WordPress 6+', 'PHP 8.3', 'Livewire', 'REST APIs & Webhooks'],
    },
    {
      category: 'Bangladeshi Integrations',
      technologies: ['bKash Tokenized Merchant API', 'Nagad API', 'Steadfast Courier API', 'Pathao Logistics API', 'Meta Conversions API (CAPI)'],
    },
    {
      category: 'Database & Infrastructure',
      technologies: ['MySQL', 'PostgreSQL', 'Redis Cache', 'LiteSpeed Enterprise', 'Cloudflare CDN', 'Tailwind CSS'],
    },
  ];

  return (
    <section id="tech-stack" className="py-20 lg:py-24 border-b border-white/[0.06] bg-[#07080B]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
            05 // Technical Infrastructure
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            High performance stack. No unnecessary bloatware.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Engineered for high concurrent ad spikes and resilient database transactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stack.map((group, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-white/[0.08] bg-[#090C12] space-y-4"
            >
              <div className="text-xs font-mono text-zinc-400 font-semibold pb-2 border-b border-white/[0.06] flex items-center justify-between">
                <span>{group.category}</span>
                <span className="text-zinc-600">0{idx + 1}</span>
              </div>

              <ul className="space-y-2 text-xs font-mono text-zinc-300">
                {group.technologies.map((tech) => (
                  <li key={tech} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
