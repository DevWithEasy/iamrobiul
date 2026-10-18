import React, { useState } from 'react';
import { developerInfo } from '../data/portfolioData';
import { MessageCircle, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'WordPress Landing Page',
    budget: '৳ 9,500 - ৳ 18,000',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Project Inquiry*\n\nName: ${formData.name}\nWhatsApp: ${formData.phone}\nService: ${formData.service}\nBudget: ${formData.budget}\nNotes: ${formData.notes || 'Looking to discuss requirements.'}`;
    const waUrl = `https://wa.me/${developerInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 border-b border-white/[0.06] bg-[#07080B]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
            08 // Direct Communication
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Let's discuss your next project.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Send an inquiry below or reach out directly on WhatsApp for an immediate response.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct channels */}
          <div className="lg:col-span-5 space-y-4 font-mono text-xs">
            <div className="p-5 rounded-xl border border-white/[0.08] bg-[#090C12] space-y-4">
              <div>
                <span className="text-zinc-500 text-[10px] uppercase tracking-wider block">LEAD ENGINEER</span>
                <span className="text-sm font-bold text-white block mt-0.5">Robiul Awal</span>
                <span className="text-zinc-400 text-xs font-sans">Dhaka, Bangladesh · In-person meetups available</span>
              </div>

              <div className="pt-3 border-t border-white/[0.06] space-y-2 text-zinc-300">
                <a
                  href={developerInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp: {developerInfo.phone}</span>
                </a>

                <a
                  href={`mailto:${developerInfo.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{developerInfo.email}</span>
                </a>

                <div className="flex items-center gap-2 text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Dhanmondi / Banani / Remote</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06] text-[11px] text-zinc-500 space-y-1">
                <div>Availability: 7 Days / Week (Urgent ad launches accepted)</div>
                <div>Typical Response: Within 15 minutes</div>
              </div>
            </div>
          </div>

          {/* Minimal Form */}
          <div className="lg:col-span-7">
            <div className="p-6 rounded-xl border border-white/[0.08] bg-[#090C12]">
              {submitted ? (
                <div className="text-center py-8 space-y-3 font-mono">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h3 className="text-sm font-bold text-white">Inquiry Forwarded to WhatsApp!</h3>
                  <p className="text-xs text-zinc-400 font-sans max-w-sm mx-auto">
                    If WhatsApp did not launch automatically, click below to open chat:
                  </p>
                  <a
                    href={developerInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-bold text-[#07080B] bg-emerald-400 hover:bg-emerald-300 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-[#07080B]" />
                    <span>Open WhatsApp</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-zinc-400">Name / Business *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tanvir (Noor Perfumes)"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 rounded bg-[#07090E] border border-white/[0.08] text-white focus:outline-none focus:border-emerald-400 text-xs"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-zinc-400">WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="017XX-XXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 rounded bg-[#07090E] border border-white/[0.08] text-white focus:outline-none focus:border-emerald-400 text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-zinc-400">Service Required</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3 py-2 rounded bg-[#07090E] border border-white/[0.08] text-white focus:outline-none focus:border-emerald-400 text-xs"
                      >
                        <option value="WordPress Landing Page">WordPress Landing Page (F-Commerce)</option>
                        <option value="Custom Laravel Web App">Custom Laravel POS / ERP System</option>
                        <option value="Website Speed Optimization">Speed & CAPI Optimization</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-zinc-400">Budget Range (BDT)</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3 py-2 rounded bg-[#07090E] border border-white/[0.08] text-white focus:outline-none focus:border-emerald-400 text-xs"
                      >
                        <option value="৳ 9,500 - ৳ 18,000">৳ 9,500 - ৳ 18,000 (Landing Page)</option>
                        <option value="৳ 20,000 - ৳ 45,000">৳ 20,000 - ৳ 45,000 (Store / Mini POS)</option>
                        <option value="৳ 45,000 - ৳ 90,000">৳ 45,000 - ৳ 90,000 (Custom ERP / SaaS)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-zinc-400">Project Notes / Target Launch Date</label>
                    <textarea
                      rows={2}
                      placeholder="Brief details about your products or current site issues..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3 py-2 rounded bg-[#07090E] border border-white/[0.08] text-white focus:outline-none focus:border-emerald-400 text-xs resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded text-xs font-bold text-[#07080B] bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-[#07080B]" />
                    <span>Send Inquiry to WhatsApp Direct</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
