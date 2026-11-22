import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../config/site';

export default function LegalModal({ isOpen, onClose, type = 'privacy' }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3B2418]/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FAF3E8] rounded-3xl p-6 md:p-8 shadow-2xl border border-[#E8D8C3] max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#6B4E3D] hover:text-[#3B2418] hover:bg-[#F3E7D3] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B07A4F]"
          aria-label="Close legal modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#B07A4F]/10 text-[#B07A4F] flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-[#3B2418]">
              {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
            <p className="text-xs text-[#6B4E3D]">{siteConfig.name}</p>
          </div>
        </div>

        <div className="text-xs md:text-sm text-[#6B4E3D] space-y-4 leading-relaxed border-t border-[#E8D8C3] pt-4">
          {isPrivacy ? (
            <>
              <p>
                At <strong>{siteConfig.name}</strong>, we are committed to safeguarding the privacy of our students, prospective trainees, and website visitors.
              </p>
              <h4 className="font-bold text-[#3B2418] text-sm">1. Information We Collect</h4>
              <p>
                When you submit an enquiry form, request a demo class, or contact us via WhatsApp or phone, we collect details such as your Name, Phone Number, Course of Interest, and Preferred Batch Timings.
              </p>
              <h4 className="font-bold text-[#3B2418] text-sm">2. How We Use Your Information</h4>
              <p>
                Your data is exclusively used to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Coordinate demo classes, course counselling, and batch scheduling.</li>
                <li>Send course brochures, fee estimates, and educational updates.</li>
                <li>Respond to direct queries sent via WhatsApp, phone, or email.</li>
              </ul>
              <h4 className="font-bold text-[#3B2418] text-sm">3. Data Protection</h4>
              <p>
                We do NOT sell, rent, or trade your personal information to any third parties for advertising or commercial purposes.
              </p>
              <h4 className="font-bold text-[#3B2418] text-sm">4. Contact & Opt-Out</h4>
              <p>
                If you have questions about our privacy practices, you can contact us directly at <a href={siteConfig.emailMailtoUrl} className="text-[#B07A4F] underline">{siteConfig.email}</a> or phone <a href={siteConfig.phoneDialUrl} className="text-[#B07A4F] underline">{siteConfig.displayPhone}</a>.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>{siteConfig.name}</strong>. By accessing our training programs or browsing this website, you agree to the following terms:
              </p>
              <h4 className="font-bold text-[#3B2418] text-sm">1. Course Enrolment & Attendance</h4>
              <p>
                Admission to any course is finalized following orientation and batch allocation. Students are encouraged to maintain regular practical attendance to ensure complete skill acquisition.
              </p>
              <h4 className="font-bold text-[#3B2418] text-sm">2. Certification Criteria</h4>
              <p>
                Course completion certificates are awarded upon satisfactory attendance, completion of assigned practical lab exercises, and final module assessments.
              </p>
              <h4 className="font-bold text-[#3B2418] text-sm">3. Lab Usage & Conduct</h4>
              <p>
                All students must abide by ethical computer laboratory guidelines and respect institute equipment, fellow trainees, and faculty instructions.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-[#E8D8C3] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#5C3D2E] text-[#FAF3E8] font-semibold text-xs hover:bg-[#3B2418] transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
