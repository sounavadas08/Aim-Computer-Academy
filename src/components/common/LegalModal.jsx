import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
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
      aria-labelledby="legal-modal-title"
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

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-[#5C3D2E] text-[#FAF3E8] flex items-center justify-center">
            {isPrivacy ? <ShieldCheck className="w-5 h-5 text-[#B07A4F]" /> : <FileText className="w-5 h-5 text-[#B07A4F]" />}
          </div>
          <div>
            <h3 id="legal-modal-title" className="text-xl md:text-2xl font-black text-[#3B2418]">
              {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
            <p className="text-xs text-[#6B4E3D]">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
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
                When you submit an enquiry form, apply for course details, or contact us via WhatsApp or phone, we collect details such as your Name, Phone Number, Course of Interest, and Preferred Batch Timings.
              </p>
              <h4 className="font-bold text-[#3B2418] text-sm">2. How We Use Your Information</h4>
              <p>
                Your data is exclusively used to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Coordinate batch admissions, course counselling, and scheduling.</li>
                <li>Send syllabus outlines, fee estimates, and educational updates.</li>
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
                Welcome to <strong>{siteConfig.name}</strong>. By accessing our training facilities, website, or enrolling in our programs, you agree to the following terms:
              </p>
              <h4 className="font-bold text-[#3B2418] text-sm">1. Course Enrolment & Attendance</h4>
              <p>
                Admission to any course or batch is subject to seat availability in our computer lab. Regular lab attendance and submission of practical assignments are required to qualify for completion certificates.
              </p>
              <h4 className="font-bold text-[#3B2418] text-sm">2. Lab Conduct & Equipment</h4>
              <p>
                Students are provided dedicated workstation access during their assigned batch hours. Trainees must treat all computer hardware, monitors, and peripherals with care.
              </p>
              <h4 className="font-bold text-[#3B2418] text-sm">3. Certification Policy</h4>
              <p>
                Certificates of Completion are awarded based on satisfactory attendance, completion of syllabus projects, and internal practical assessments.
              </p>
              <h4 className="font-bold text-[#3B2418] text-sm">4. Fee Payment & Adjustments</h4>
              <p>
                Course fees must be remitted as per the agreed schedule. For batch rescheduling due to academic school/college examinations, advance notice should be submitted to the administration.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
