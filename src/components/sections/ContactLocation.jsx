import React from 'react';
import { Phone, Mail, MessageSquare, MapPin, Clock, ExternalLink, Navigation } from 'lucide-react';
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

          {/* Right Map Column (Official Google Map Integration) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="rounded-3xl overflow-hidden bg-[#FAF3E8] border border-[#E8D8C3] shadow-sm p-5 sm:p-6 flex flex-col">
              {/* Map Header with Direct Navigation Link */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F3E7D3] text-[#5C3D2E] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#B07A4F]" />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-[#3B2418]">
                      AIM COMPUTER ACADEMY Location
                    </h4>
                    <p className="text-xs text-[#6B4E3D]">
                      Interactive Google Map & Campus Directions
                    </p>
                  </div>
                </div>

                <a
                  href={siteConfig.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#F3E7D3] text-[#5C3D2E] hover:bg-[#5C3D2E] hover:text-[#FAF3E8] transition-colors border border-[#E8D8C3] shrink-0 self-start sm:self-auto"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>

              {/* Embedded Google Map Iframe */}
              <div className="relative w-full rounded-2xl overflow-hidden border border-[#E8D8C3] shadow-inner bg-[#F3E7D3]/40 aspect-[4/3] sm:aspect-[16/10] md:h-[420px]">
                <iframe
                  src={siteConfig.googleMapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="AIM COMPUTER ACADEMY Location Map"
                  className="w-full h-full border-0"
                ></iframe>
              </div>

              {/* Action Button Below Map */}
              <div className="mt-4 pt-4 border-t border-[#E8D8C3] flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-[#6B4E3D]">
                  Visiting us? Feel free to contact our coordinator beforehand.
                </p>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => onOpenEnquiryModal()}
                  className="w-full sm:w-auto"
                >
                  Schedule an In-Person Campus Visit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
