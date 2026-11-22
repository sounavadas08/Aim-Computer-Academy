import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { siteConfig } from '../../config/site';

export default function FloatingContact() {
  return (
    <aside
      className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 pointer-events-auto"
      aria-label="Quick Contact Actions"
    >
      {/* Sticky Call Button (Prominent on Mobile) */}
      <a
        href={siteConfig.phoneDialUrl}
        className="sm:hidden w-12 h-12 rounded-full bg-[#5C3D2E] text-[#FAF3E8] shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform border-2 border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B07A4F]"
        aria-label={`Direct Call: ${siteConfig.displayPhone}`}
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Floating Sticky WhatsApp Pill Button */}
      <a
        href={siteConfig.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba5a] hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Direct WhatsApp Enquiry"
      >
        <MessageSquare className="w-5 h-5 shrink-0 fill-current" />
        <span className="hidden md:inline text-xs font-bold tracking-wide">
          Chat with Us
        </span>
      </a>
    </aside>
  );
}
