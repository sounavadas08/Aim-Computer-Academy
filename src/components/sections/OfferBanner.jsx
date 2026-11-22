import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

export default function OfferBanner({ onOpenEnquiryModal, hasOffer = true }) {
  if (!hasOffer) return null;

  return (
    <section className="bg-gradient-to-r from-[#5C3D2E] via-[#3B2418] to-[#5C3D2E] text-[#FAF3E8] py-4 px-4 border-y border-[#B07A4F]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-full bg-[#B07A4F] text-white flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </span>
          <p className="text-xs sm:text-sm font-semibold">
            <strong className="text-[#DFBFA1] font-bold">New Batch Admission Offer:</strong> Free Study Material & 1-on-1 Academic Mentoring for all new enrolments!
          </p>
        </div>

        <Button
          variant="caramel"
          size="sm"
          onClick={() => onOpenEnquiryModal()}
          className="!py-1.5 !px-4 !text-xs shrink-0 shadow-sm"
          icon={ArrowRight}
          iconPosition="right"
        >
          Enquire for Offer
        </Button>
      </div>
    </section>
  );
}
