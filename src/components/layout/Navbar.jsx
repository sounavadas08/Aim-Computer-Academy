import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ChevronDown } from 'lucide-react';
import Logo from '../common/Logo';
import Button from '../common/Button';
import { siteConfig } from '../../config/site';

export default function Navbar({ onOpenDemoModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF3E8]/90 backdrop-blur-md shadow-sm border-b border-[#E8D8C3] py-3'
          : 'bg-[#FAF3E8] py-4 md:py-5 border-b border-[#E8D8C3]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-[#6B4E3D] hover:text-[#B07A4F] transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B07A4F] rounded-md"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={siteConfig.phoneDialUrl}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#5C3D2E] hover:text-[#B07A4F] transition-colors rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B07A4F]"
            aria-label={`Call ${siteConfig.displayPhone}`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{siteConfig.displayPhone}</span>
          </a>

          <Button
            variant="primary"
            size="sm"
            onClick={() => onOpenDemoModal()}
            className="shadow-sm"
          >
            Book Free Demo
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <Button
            variant="primary"
            size="sm"
            onClick={() => onOpenDemoModal()}
            className="!px-3 !py-1.5 !text-xs"
          >
            Demo
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#3B2418] hover:bg-[#F3E7D3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B07A4F] transition-colors"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF3E8] border-b border-[#E8D8C3] px-5 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#3B2418] hover:text-[#B07A4F] py-2 border-b border-[#E8D8C3]/40"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2.5">
            <Button
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
            >
              Book Free Demo Class
            </Button>
            
            <a
              href={siteConfig.phoneDialUrl}
              className="flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold text-[#5C3D2E] bg-[#F3E7D3] border border-[#E8D8C3]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {siteConfig.displayPhone}</span>
            </a>

            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold text-white bg-[#25D366]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
