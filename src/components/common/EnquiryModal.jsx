import React, { useState, useEffect } from 'react';
import { X, Send, Phone, CheckCircle2, MessageSquare } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { trackEvent, AnalyticsEvents } from '../../utils/analytics';
import Button from './Button';

export const COURSES_LIST = [
  'Artificial Intelligence (AI) - Class 6-10 (CBSE/ICSE/WB Board)',
  'Data Science & Python Analytics',
  'ICSE Computer Applications (Class 9-10 Java/BlueJ)',
  'ISC Computer Science (Class 11-12 Java & Theory)',
  'CBSE Computer Science & IT (Class 6-10 & 11-12)',
  'WB Board Computer Applications (Class 6-10 & HS)',
  'Graduation Batch: BCA (Computer Science Major)',
  'Graduation Batch: B.Tech CSE / IT (Lab & Semester)',
  'Graduation Batch: B.Sc Computer Science (Hons)',
  'Other Academic & Board Exam Consultation',
];

export default function EnquiryModal({ isOpen, onClose, preselectedCourse = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: preselectedCourse || COURSES_LIST[0],
    timing: 'Morning (9:00 AM - 12:00 PM)',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedCourse) {
      setFormData((prev) => ({ ...prev, course: preselectedCourse }));
    }
  }, [preselectedCourse]);

  // Escape key handler
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

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name (at least 2 characters)';
    }

    // Indian 10-digit mobile number regex check
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Build friendly WhatsApp message
    const waText = encodeURIComponent(
      `Hi AIM Computer Academy, I would like to book a free demo class & enquiry:%0A%0A` +
        `👤 *Name:* ${formData.name.trim()}%0A` +
        `📱 *Phone:* ${formData.phone.trim()}%0A` +
        `📚 *Course/Batch:* ${formData.course}%0A` +
        `⏰ *Preferred Time:* ${formData.timing}%0A` +
        (formData.message.trim() ? `💬 *Student Class/Board Details:* ${formData.message.trim()}%0A` : '') +
        `%0APlease share upcoming batch timings and demo class schedule.`
    );

    const waUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${waText}`;

    // Track analytics event
    trackEvent(AnalyticsEvents.DEMO_FORM_SUBMIT, {
      course: formData.course,
      timing: formData.timing,
    });

    // Open WhatsApp
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      course: COURSES_LIST[0],
      timing: 'Morning (9:00 AM - 12:00 PM)',
      message: '',
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3B2418]/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FAF3E8] rounded-3xl p-6 md:p-8 shadow-2xl border border-[#E8D8C3] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#6B4E3D] hover:text-[#3B2418] hover:bg-[#F3E7D3] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B07A4F]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-[#2E6B47]/10 text-[#2E6B47] rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-[#3B2418] mb-2">Enquiry Sent via WhatsApp!</h3>
            <p className="text-[#6B4E3D] text-sm md:text-base mb-6 leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. We have opened WhatsApp with your details.
              Our faculty coordinator will connect with you shortly to confirm your free demo class seat.
            </p>
            <div className="p-4 bg-[#F3E7D3] rounded-2xl mb-6 text-left text-xs text-[#6B4E3D] space-y-1 border border-[#E8D8C3]">
              <div><strong>Course / Batch:</strong> {formData.course}</div>
              <div><strong>Preferred Timing:</strong> {formData.timing}</div>
              <div><strong>Registered Phone:</strong> {formData.phone}</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="primary" onClick={handleReset}>
                Done
              </Button>
              <Button
                variant="secondary"
                href={siteConfig.phoneDialUrl}
                icon={Phone}
              >
                Call Us Directly
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#F3E7D3] text-[#5C3D2E] border border-[#E8D8C3] mb-2">
                Free Demo Class & Counselling
              </span>
              <h3 id="modal-title" className="text-2xl md:text-3xl font-black text-[#3B2418] tracking-tight">
                Book Your Free Demo Seat
              </h3>
              <p className="text-[#6B4E3D] text-sm mt-1.5">
                Attend a hands-on session, inspect our computer lab workstations, and consult our faculty before taking admission.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-[#3B2418] uppercase tracking-wider mb-1.5">
                  Student / Parent Full Name <span className="text-[#9B2C2C]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sounava Das"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#3B2418] placeholder-[#B07A4F]/60 focus:outline-none focus:ring-2 focus:ring-[#B07A4F] transition-colors ${
                    errors.name ? 'border-[#9B2C2C]' : 'border-[#E8D8C3]'
                  }`}
                />
                {errors.name && <p className="text-[11px] text-[#9B2C2C] mt-1 font-medium">{errors.name}</p>}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-[#3B2418] uppercase tracking-wider mb-1.5">
                  Phone Number (10 digits) <span className="text-[#9B2C2C]">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-3 text-xs font-bold text-[#6B4E3D]">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="7980961475"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                    className={`w-full pl-12 pr-4 py-3 rounded-xl bg-white border text-sm text-[#3B2418] placeholder-[#B07A4F]/60 focus:outline-none focus:ring-2 focus:ring-[#B07A4F] transition-colors ${
                      errors.phone ? 'border-[#9B2C2C]' : 'border-[#E8D8C3]'
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-[11px] text-[#9B2C2C] mt-1 font-medium">{errors.phone}</p>}
              </div>

              {/* Course of Interest */}
              <div>
                <label className="block text-xs font-bold text-[#3B2418] uppercase tracking-wider mb-1.5">
                  Course / Academic Batch of Interest
                </label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8D8C3] text-sm text-[#3B2418] focus:outline-none focus:ring-2 focus:ring-[#B07A4F] transition-colors"
                >
                  {COURSES_LIST.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Batch Timing */}
              <div>
                <label className="block text-xs font-bold text-[#3B2418] uppercase tracking-wider mb-1.5">
                  Preferred Batch Timing
                </label>
                <select
                  value={formData.timing}
                  onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8D8C3] text-sm text-[#3B2418] focus:outline-none focus:ring-2 focus:ring-[#B07A4F] transition-colors"
                >
                  <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                  <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                  <option value="Evening After-School / College (5:00 PM - 8:00 PM)">Evening After-School / College (5:00 PM - 8:00 PM)</option>
                  <option value="Weekend Special (Saturday & Sunday)">Weekend Special (Saturday & Sunday)</option>
                </select>
              </div>

              {/* Optional Message */}
              <div>
                <label className="block text-xs font-bold text-[#3B2418] uppercase tracking-wider mb-1.5">
                  Class / School Board / College Semester Details (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Class 9 ICSE student looking for BlueJ coaching, or BCA 2nd Sem"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8D8C3] text-sm text-[#3B2418] placeholder-[#B07A4F]/60 focus:outline-none focus:ring-2 focus:ring-[#B07A4F] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center shadow-lg"
                  icon={Send}
                  iconPosition="right"
                >
                  Confirm & Send via WhatsApp
                </Button>
                <p className="text-center text-[11px] text-[#6B4E3D] mt-2">
                  🔒 We respect your privacy. No spam. You will be connected directly with our faculty coordinator.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
