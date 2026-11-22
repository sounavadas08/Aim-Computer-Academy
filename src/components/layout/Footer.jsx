import React from 'react';
import { Phone, Mail, MessageSquare, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from '../common/Icons';
import Logo from '../common/Logo';
import { siteConfig } from '../../config/site';

export default function Footer({ onOpenDemoModal, onOpenLegalModal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3B2418] text-[#FAF3E8] pt-16 pb-10 border-t-4 border-[#B07A4F]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#5C3D2E]">
          {/* Col 1: Institute Info & Brand */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" />
            <p className="text-sm text-[#DFCEB7] leading-relaxed max-w-sm">
              Empowering students, professionals, and aspiring tech leaders through practical, hands-on computer training and recognized certifications.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#5C3D2E] hover:bg-[#B07A4F] text-[#FAF3E8] flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF3E8]"
                aria-label={`Follow ${siteConfig.name} on Instagram`}
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label={`Chat with ${siteConfig.name} on WhatsApp`}
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.phoneDialUrl}
                className="w-10 h-10 rounded-full bg-[#5C3D2E] hover:bg-[#B07A4F] text-[#FAF3E8] flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF3E8]"
                aria-label={`Call ${siteConfig.name}`}
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#B07A4F]">Quick Navigation</h4>
            <ul className="space-y-2 text-sm text-[#DFCEB7]">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-[#FAF3E8] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onOpenDemoModal()}
                  className="text-left font-semibold text-[#B07A4F] hover:text-[#FAF3E8] transition-colors"
                >
                  Book Free Demo →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Courses */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#B07A4F]">Featured Programs</h4>
            <ul className="space-y-2 text-sm text-[#DFCEB7]">
              <li>
                <a href="#courses" className="hover:text-[#FAF3E8] transition-colors">
                  Basic Computer & IT Tools
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#FAF3E8] transition-colors">
                  Advanced MS Office & Excel
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#FAF3E8] transition-colors">
                  Web Development & Coding
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#FAF3E8] transition-colors">
                  Computerized Accounting (Tally)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#FAF3E8] transition-colors">
                  Python Programming & Data
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Timings */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#B07A4F]">Connect With Us</h4>
            <ul className="space-y-2.5 text-xs text-[#DFCEB7]">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#B07A4F] shrink-0 mt-0.5" />
                <a href={siteConfig.phoneDialUrl} className="hover:underline font-bold text-[#FAF3E8]">
                  {siteConfig.displayPhone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#B07A4F] shrink-0 mt-0.5" />
                <a href={siteConfig.emailMailtoUrl} className="hover:underline break-all">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#B07A4F] shrink-0 mt-0.5" />
                <span>{siteConfig.workingHours}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B07A4F] shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#DFCEB7]/80 gap-4">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegalModal('privacy')}
              className="hover:text-[#FAF3E8] transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegalModal('terms')}
              className="hover:text-[#FAF3E8] transition-colors"
            >
              Terms of Use
            </button>
            <a
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#FAF3E8] transition-colors text-[#B07A4F]"
            >
              <span>@{siteConfig.instagram.handle}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
