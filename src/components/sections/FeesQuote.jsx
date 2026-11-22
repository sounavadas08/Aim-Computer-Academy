import React from 'react';
import { HelpCircle, Calculator, Check, ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

export default function FeesQuote({ onOpenEnquiryModal }) {
  return (
    <section id="fees" className="py-20 md:py-28 bg-[#FAF3E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Clear Investment"
          title="Affordable, Transparent Course Fee Structure"
          subtitle="Quality computer science training shouldn't be complicated or expensive. We offer budget-friendly fees with flexible monthly installments."
        />

        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-[#F3E7D3]/60 border border-[#E8D8C3] shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF3E8] border border-[#E8D8C3] text-xs font-bold text-[#5C3D2E]">
              <Calculator className="w-3.5 h-3.5 text-[#B07A4F]" />
              <span>Personalized Fee Quote</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#3B2418]">
              Get Instant Fee Details for Your Chosen Batch
            </h3>

            <p className="text-sm text-[#6B4E3D] leading-relaxed">
              Our fee structures are tailored by course duration, school board requirements (CBSE, ICSE, WB Board), or university semester tracks (B.Sc, B.Tech, BCA).
            </p>

            <ul className="space-y-2 text-xs sm:text-sm text-[#3B2418] font-medium pt-2">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#2E6B47] shrink-0" />
                <span>Zero hidden charges or examination surcharges</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#2E6B47] shrink-0" />
                <span>Easy monthly installment (EMI) facility available</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#2E6B47] shrink-0" />
                <span>Includes complete practical lab workstation access</span>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-auto shrink-0 flex flex-col items-center gap-3">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onOpenEnquiryModal()}
              icon={ArrowRight}
              iconPosition="right"
              className="w-full md:w-auto shadow-xl"
            >
              Get a Transparent Fee Quote
            </Button>
            <span className="text-[11px] text-[#6B4E3D] font-medium text-center">
              Direct quote via WhatsApp in minutes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
