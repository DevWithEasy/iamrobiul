import { MessageCircle } from 'lucide-react';
import { developerInfo } from '../data/portfolioData';

export function FloatingWhatsApp() {
  const url = `https://wa.me/${developerInfo.whatsappNumber}?text=${encodeURIComponent(
    'Hello Robiul! I would like to discuss a project.',
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-[#D6F25C] p-3.5 text-[#080b0d] shadow-[0_18px_45px_-18px_rgba(214,242,92,0.8)] transition-all hover:-translate-y-1 hover:bg-[#e5fb7d] sm:bottom-7 sm:right-7 sm:px-4"
      aria-label="Chat with Robiul on WhatsApp"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#D6F25C]/20 [animation-duration:2.8s]" />
      <MessageCircle className="h-5 w-5 fill-[#080b0d]" />
      <span className="hidden text-xs font-bold sm:inline">Let’s talk</span>
    </a>
  );
}
