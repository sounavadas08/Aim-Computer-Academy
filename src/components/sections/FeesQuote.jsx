import React from 'react';
import { HelpCircle, CheckCircle, Calculator, ArrowRight, ShieldCheck } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

export default function FeesQuote({ onOpenDemoModal }) {
  return (
    <section id="fees" className="py-20 md:py-28 bg-[#FAF3E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Affordable & Transparent"
          title="Transparent Fee Structures with Zero Hidden Charges"
          subtitle="Quality computer education made accessible for all students, job-seekers, and working professionals."
        />

        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-[#F3E7D3]/80 border border-[#E8D8C3] shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#5C3D2E] text-[#FAF3E8]">
                Fee Transparency
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#3B2418] leading-tight">
                No Guesswork. Flexible Installment Options.
              </h3>
              <p className="text-sm text-[#6B4E3D] leading-relaxed">
                Because course durations range from 1 to 6 months depending on your goals, we provide customized fee estimates that fit your exact module needs without forcing unnecessary packages.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#3B2418]">
                  <CheckCircle className="w-4 h-4 text-[#2E6B47]" /> All lab computer usage charges included
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#3B2418]">
                  <CheckCircle className="w-4 h-4 text-[#2E6B47]" /> Official course certificate included
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#3B2418]">
                  <CheckCircle className="w-4 h-4 text-[#2E6B47]" /> Easy monthly installment plans available
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-[#FAF3E8] border border-[#E8D8C3] shadow-inner text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#B07A4F]/10 text-[#B07A4F] flex items-center justify-center mx-auto">
                <Calculator className="w-6 h-6" />
              </div>
              <h4 className="font-black text-xl text-[#3B2418]">
                Request an Instant Fee Quote
              </h4>
              <p className="text-xs text-[#6B4E3D] leading-relaxed">
                Select your desired course and timing to receive an exact fee breakdown, discount options, and batch schedule.
              </p>
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenDemoModal()}
                icon={ArrowRight}
                iconPosition="right"
                className="w-full justify-center shadow-md"
              >
                Get Exact Fee Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
