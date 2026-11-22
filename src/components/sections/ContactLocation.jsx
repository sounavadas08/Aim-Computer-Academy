import React from 'react';
import { Phone, Mail, MessageSquare, MapPin, Clock, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '../common/Icons';
import { siteConfig } from '../../config/site';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

export default function ContactLocation({ onOpenEnquiryModal }) {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F3E7D3] border-t border-[#E8D8C3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title="Visit Our Academy or Connect With Us"
          subtitle="We welcome students and parents to visit our lab, inspect the computer setup, and speak directly with our senior instructors."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Cards */}
            <div className="rounded-3xl p-6 sm:p-7 bg-[#FAF3E8] border border-[#E8D8C3] shadow-sm space-y-5">
              <h3 className="text-xl font-black text-[#3B2418]">
                Academy Contact Channels
              </h3>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#F3E7D3] text-[#5C3D2E] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B07A4F] block">
                      Phone Call & Support
                    </span>
                    <a
                      href={siteConfig.phoneDialUrl}
                      className="text-base font-black text-[#3B2418] hover:text-[#B07A4F] transition-colors"
                    >
                      {siteConfig.displayPhone}
                    </a>
                    <p className="text-xs text-[#6B4E3D]">Instant assistance during class hours</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2E6B47] block">
                      Direct WhatsApp Chat
                    </span>
                    <a
                      href={siteConfig.whatsapp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#3B2418] hover:text-[#25D366] transition-colors inline-flex items-center gap-1"
                    >
                      <span>+91 79809 61475</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <p className="text-xs text-[#6B4E3D]">Fast responses for batch timings & fees</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#F3E7D3] text-[#5C3D2E] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B07A4F] block">
                      Official Email
                    </span>
                    <a
                      href={siteConfig.emailMailtoUrl}
                      className="text-sm font-bold text-[#3B2418] hover:underline break-all"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#F3E7D3] text-[#5C3D2E] flex items-center justify-center shrink-0">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B07A4F] block">
                      Instagram Profile
                    </span>
                    <a
                      href={siteConfig.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#3B2418] hover:text-[#B07A4F] inline-flex items-center gap-1"
                    >
                      <span>@{siteConfig.instagram.handle}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <p className="text-xs text-[#6B4E3D]">Student lab photos & updates</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Address & Hours Card */}
            <div className="rounded-3xl p-6 sm:p-7 bg-[#FAF3E8] border border-[#E8D8C3] shadow-sm space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#5C3D2E] text-[#FAF3E8] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B07A4F] block">
                    Campus Address
                  </span>
                  <p className="text-sm font-semibold text-[#3B2418] mt-0.5">
                    {siteConfig.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-[#E8D8C3]/50">
                <div className="w-10 h-10 rounded-xl bg-[#5C3D2E] text-[#FAF3E8] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B07A4F] block">
                    Lab & Counselling Hours
                  </span>
                  <p className="text-sm font-semibold text-[#3B2418] mt-0.5">
                    {siteConfig.workingHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Map & Enquiry Prompt Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Interactive Map Placeholder Box */}
            <div className="rounded-3xl overflow-hidden bg-[#FAF3E8] border border-[#E8D8C3] shadow-sm p-6 sm:p-8 flex flex-col items-center justify-center text-center min-h-[320px]">
              <div className="w-16 h-16 rounded-full bg-[#F3E7D3] text-[#5C3D2E] flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-[#B07A4F]" />
              </div>
              <h4 className="text-xl font-black text-[#3B2418] mb-2">
                Academy Location & Map
              </h4>
              <p className="text-xs sm:text-sm text-[#6B4E3D] max-w-md leading-relaxed mb-6">
                Interactive Google Map will be embedded here as soon as exact campus coordinates or landmark are confirmed.
              </p>
              <div className="p-3 bg-[#F3E7D3] rounded-xl text-xs font-mono text-[#5C3D2E] border border-[#E8D8C3] mb-6">
                {siteConfig.address}
              </div>
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenEnquiryModal()}
              >
                Schedule an In-Person Campus Visit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
