import React from 'react';
import { ArrowRight, MessageSquare, Phone, CheckCircle2, Sparkles } from 'lucide-react';
import { siteConfig } from '../../config/site';
import Button from '../common/Button';

export default function FinalCTA({ onOpenDemoModal }) {
  return (
    <section className="py-20 md:py-28 bg-[#FAF3E8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[32px] overflow-hidden bg-[#3B2418] text-[#FAF3E8] p-8 sm:p-14 md:p-16 border-2 border-[#B07A4F] shadow-2xl text-center">
          {/* Subtle Organic Background Glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#B07A4F]/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#5C3D2E]/40 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#B07A4F] text-white">
              <Sparkles className="w-3.5 h-3.5" /> Start Your Tech Journey
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15]">
              Don't Just Learn Theory. <br className="hidden sm:inline" />
              Gain Practical Computer Mastery.
            </h2>

            <p className="text-[#DFCEB7] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Join hundreds of successful students and working professionals trained at {siteConfig.name}. Book your complimentary demo class, meet your mentor, and inspect our computer labs.
            </p>

            {/* Main Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="caramel"
                size="lg"
                onClick={() => onOpenDemoModal()}
                icon={ArrowRight}
                iconPosition="right"
                className="w-full sm:w-auto shadow-2xl hover:scale-105"
              >
                Book a Free Demo Class
              </Button>

              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-[#25D366] text-white hover:bg-[#20ba5a] transition-all shadow-xl active:scale-98"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={siteConfig.phoneDialUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-[#5C3D2E] text-[#FAF3E8] border border-[#B07A4F] hover:bg-[#FAF3E8] hover:text-[#3B2418] transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us: {siteConfig.displayPhone}</span>
              </a>
            </div>

            {/* Reassurance Checks */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#DFCEB7] font-medium border-t border-[#5C3D2E]/80 mt-8">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B07A4F]" /> Zero Fee for Demo Class
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B07A4F]" /> Dedicated Computer Terminal
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B07A4F]" /> No Prior Experience Needed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
