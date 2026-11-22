import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, Phone } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { trackEvent, AnalyticsEvents } from '../../utils/analytics';
import Button from '../common/Button';

export default function LeadMagnet() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || phone.replace(/\D/g, '').length < 10) return;

    // Send syllabus request via WhatsApp prefill
    const waText = encodeURIComponent(
      `Hi AIM Computer Academy, I would like to download the Complete Course Syllabus & Brochure.%0A%0A*Name:* ${name.trim()}%0A*Phone:* ${phone.trim()}`
    );
    trackEvent(AnalyticsEvents.SYLLABUS_DOWNLOAD, {
      name: name.trim(),
    });

    window.open(`https://wa.me/${siteConfig.whatsapp.number}?text=${waText}`, '_blank', 'noopener,noreferrer');
    setDownloaded(true);
  };

  return (
    <section className="py-20 bg-[#F3E7D3] border-t border-[#E8D8C3]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF3E8] rounded-3xl p-8 sm:p-12 border border-[#E8D8C3] shadow-lg flex flex-col md:flex-row items-center gap-10">
          {/* Left Text */}
          <div className="flex-1 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F3E7D3] text-[#5C3D2E] border border-[#E8D8C3]">
              <FileText className="w-3.5 h-3.5 text-[#B07A4F]" /> Free Resource
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#3B2418] leading-tight">
              Download the 2026 Complete Course Syllabus & Career Roadmap
            </h3>
            <p className="text-sm text-[#6B4E3D] leading-relaxed">
              Get an in-depth breakdown of all computer modules, lab software versions, lesson plans, batch schedules, and fee guidelines sent directly to your phone.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-[#3B2418]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2E6B47]" /> Instant PDF Access
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2E6B47]" /> All 15+ Course Syllabi
              </span>
            </div>
          </div>

          {/* Right Lead Capture Form */}
          <div className="w-full md:w-80 rounded-2xl bg-white p-6 border border-[#E8D8C3] shadow-md shrink-0">
            {downloaded ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 bg-[#2E6B47]/10 text-[#2E6B47] rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-black text-base text-[#3B2418] mb-1">
                  Brochure Request Sent!
                </h4>
                <p className="text-xs text-[#6B4E3D] leading-relaxed">
                  We have forwarded your syllabus download link via WhatsApp. Thank you, {name}!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <h4 className="font-black text-sm text-[#3B2418] text-center mb-2">
                  Get Free Brochure in 30 Seconds
                </h4>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF3E8] border border-[#E8D8C3] text-xs text-[#3B2418] placeholder-[#B07A4F]/60 focus:outline-none focus:ring-2 focus:ring-[#B07A4F]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="Your 10-digit Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF3E8] border border-[#E8D8C3] text-xs text-[#3B2418] placeholder-[#B07A4F]/60 focus:outline-none focus:ring-2 focus:ring-[#B07A4F]"
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  className="w-full justify-center !py-3 text-xs"
                  icon={Download}
                >
                  Download Free Syllabus
                </Button>
                <p className="text-[10px] text-center text-[#6B4E3D]">
                  🔒 Direct WhatsApp link. Zero spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
