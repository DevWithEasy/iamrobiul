import { useState, type FormEvent } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ShieldCheck,
} from 'lucide-react';
import { developerInfo } from '../data/portfolioData';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

const initialForm = {
  name: '',
  phone: '',
  service: 'WordPress Landing Page',
  budget: '৳ 9,500 - ৳ 18,000',
  notes: '',
};

export function ContactSection() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const message = `*New project inquiry*\n\nName / Business: ${formData.name}\nWhatsApp: ${formData.phone}\nService: ${formData.service}\nBudget: ${formData.budget}\nNotes: ${formData.notes || 'Looking to discuss requirements.'}`;
    const url = `https://wa.me/${developerInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#090c0e] py-24 lg:py-32">
      <div className="pointer-events-none absolute -bottom-48 left-1/2 h-[540px] w-[780px] -translate-x-1/2 brand-glow opacity-70" />
      <div className="page-shell relative">
        <SectionHeading
          eyebrow="10 / Start a project"
          title={
            <>
              Let’s build something <span className="serif-accent">dependable.</span>
            </>
          }
          description="Share a little context and I’ll come back with a clear view of scope, timeline, and the most sensible next step."
          align="center"
        />

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 items-start gap-6 lg:grid-cols-12">
          <Reveal className="space-y-4 lg:col-span-5">
            <div className="surface-card rounded-[22px] p-7">
              <span className="font-mono text-[10px] uppercase tracking-[0.17em] text-[#D6F25C]">
                Direct line
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">Robiul Awal</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Independent product engineer working with founders, e-commerce teams, and operators
                across Bangladesh and remotely.
              </p>

              <div className="mt-7 space-y-3 border-t border-white/[0.08] pt-6 text-sm">
                <a
                  href={developerInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-300 transition-colors hover:text-[#D6F25C]"
                >
                  <MessageCircle className="h-4 w-4 text-[#D6F25C]" />
                  {developerInfo.phone}
                </a>
                <a
                  href={`mailto:${developerInfo.email}`}
                  className="flex items-center gap-3 text-zinc-300 transition-colors hover:text-[#D6F25C]"
                >
                  <Mail className="h-4 w-4 text-[#D6F25C]" />
                  {developerInfo.email}
                </a>
                <div className="flex items-center gap-3 text-zinc-300">
                  <MapPin className="h-4 w-4 text-[#D6F25C]" />
                  {developerInfo.location}
                </div>
              </div>
            </div>

            <div className="surface-solid rounded-[22px] p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D6F25C]/10 text-[#D6F25C]">
                  <Clock3 className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-white">Typical response</div>
                  <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.13em] text-zinc-500">
                    Within 15 minutes
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-3 border-t border-white/[0.08] pt-5">
                {[
                  'A short discovery conversation',
                  'Clear scope, timeline, and investment',
                  'Production plan before any build begins',
                ].map((step, index) => (
                  <div key={step} className="flex items-center gap-3 text-sm text-zinc-400">
                    <span className="font-mono text-[10px] text-[#D6F25C]">0{index + 1}</span>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={110} className="lg:col-span-7">
            <div className="surface-card relative overflow-hidden rounded-[24px] p-6 sm:p-8">
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 brand-glow opacity-60" />
              {submitted ? (
                <div className="relative flex min-h-[430px] flex-col items-center justify-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D6F25C]/12 text-[#D6F25C]">
                    <CheckCircle2 className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-white">Your inquiry is ready in WhatsApp</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
                    If the chat did not open automatically, use the button below. Your details are
                    prefilled and nothing is stored on this site.
                  </p>
                  <a
                    href={developerInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-7 group"
                  >
                    Open WhatsApp
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData(initialForm);
                    }}
                    className="mt-4 text-xs text-zinc-500 transition-colors hover:text-white"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
                        Name / business *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="e.g. Tanvir, Noor Perfumes"
                        value={formData.name}
                        onChange={(event) => updateField('name', event.target.value)}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
                        WhatsApp number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="017XX-XXXXXX"
                        value={formData.phone}
                        onChange={(event) => updateField('phone', event.target.value)}
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="service" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
                        Service required
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(event) => updateField('service', event.target.value)}
                        className="input-field"
                      >
                        <option value="WordPress Landing Page">WordPress / sales landing page</option>
                        <option value="Custom Laravel Web App">Custom Laravel web application</option>
                        <option value="LandingCommerce">LandingCommerce solution</option>
                        <option value="Website Speed Optimization">Speed & tracking optimization</option>
                        <option value="WordPress Plugin Development">WordPress plugin development</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
                        Budget range (BDT)
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(event) => updateField('budget', event.target.value)}
                        className="input-field"
                      >
                        <option value="৳ 9,500 - ৳ 18,000">৳ 9,500 – ৳ 18,000</option>
                        <option value="৳ 20,000 - ৳ 45,000">৳ 20,000 – ৳ 45,000</option>
                        <option value="৳ 45,000 - ৳ 90,000">৳ 45,000 – ৳ 90,000</option>
                        <option value="৳ 90,000+">৳ 90,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
                      Project notes / target launch
                    </label>
                    <textarea
                      id="notes"
                      rows={4}
                      placeholder="What are you building, and what should it improve?"
                      value={formData.notes}
                      onChange={(event) => updateField('notes', event.target.value)}
                      className="input-field resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full group">
                    <Send className="h-4 w-4" />
                    Send inquiry via WhatsApp
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  <div className="flex items-start gap-2 text-[11px] leading-relaxed text-zinc-600">
                    <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D6F25C]" />
                    This form opens WhatsApp with your details prefilled. Nothing is stored on this site.
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
