import React, { useState } from 'react';
import { Sparkles, Phone, MessageSquare, ArrowRight, CheckCircle2, Laptop, Code2, Calculator, Palette, Monitor } from 'lucide-react';
import Button from '../common/Button';
import { siteConfig } from '../../config/site';

const HERO_CARDS = [
  {
    id: 'office',
    title: 'MS Office & Excel Pro',
    tag: 'Essential Skills',
    icon: Monitor,
    duration: '2 Months',
    mode: 'Practical Labs',
    highlight: 'Advanced Formulas, VLOOKUP, Pivot Tables & MIS Reports',
    color: '#5C3D2E',
    bgColor: '#F3E7D3',
    rotation: '-rotate-6 sm:-rotate-12',
  },
  {
    id: 'web',
    title: 'Web Design & Coding',
    tag: 'High Demand',
    icon: Code2,
    duration: '4 Months',
    mode: 'Project-Based',
    highlight: 'HTML5, CSS3, Tailwind, JavaScript & Live Website Projects',
    color: '#3B2418',
    bgColor: '#FAF3E8',
    rotation: '-rotate-3 sm:-rotate-6',
  },
  {
    id: 'python',
    title: 'Python Programming',
    tag: 'Career Accelerator',
    icon: Laptop,
    duration: '3 Months',
    mode: 'Hands-on Labs',
    highlight: 'Core Python, Logic Building, Automation & Data Analytics',
    color: '#B07A4F',
    bgColor: '#FAF3E8',
    rotation: 'rotate-0',
    featured: true,
  },
  {
    id: 'tally',
    title: 'Tally Prime with GST',
    tag: 'Job Ready',
    icon: Calculator,
    duration: '3 Months',
    mode: 'Industry Scenarios',
    highlight: 'E-Invoicing, Balance Sheets, Tax Filing & Accounting',
    color: '#5C3D2E',
    bgColor: '#F3E7D3',
    rotation: 'rotate-3 sm:rotate-6',
  },
  {
    id: 'design',
    title: 'Graphic & Media Design',
    tag: 'Creative Track',
    icon: Palette,
    duration: '3 Months',
    mode: 'Portfolio Focused',
    highlight: 'Photoshop, Illustrator, Branding & Social Media Graphics',
    color: '#3B2418',
    bgColor: '#FAF3E8',
    rotation: 'rotate-6 sm:rotate-12',
  },
];

export default function Hero({ onOpenDemoModal }) {
  const [activeCard, setActiveCard] = useState('python');

  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-20 md:pb-28 overflow-hidden bg-[#FAF3E8]">
      {/* Organic Wave Background Ribbon Divider (Inspired by Reference Video) */}
      <div className="absolute top-0 left-0 right-0 h-44 sm:h-56 overflow-hidden pointer-events-none opacity-40">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full object-cover text-[#E8D8C3]"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,122.7C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      {/* Subtle Floating Skill Badges (Decorative Polish) */}
      <div className="hidden xl:block absolute top-40 left-12 animate-float pointer-events-none opacity-70">
        <div className="px-3.5 py-1.5 rounded-full bg-[#F3E7D3] border border-[#E8D8C3] text-xs font-bold text-[#5C3D2E] shadow-sm flex items-center gap-1.5">
          <Monitor className="w-3.5 h-3.5 text-[#B07A4F]" />
          <span>Excel & MIS</span>
        </div>
      </div>
      <div className="hidden xl:block absolute top-48 right-14 animate-float-alt pointer-events-none opacity-70">
        <div className="px-3.5 py-1.5 rounded-full bg-[#F3E7D3] border border-[#E8D8C3] text-xs font-bold text-[#5C3D2E] shadow-sm flex items-center gap-1.5">
          <Calculator className="w-3.5 h-3.5 text-[#B07A4F]" />
          <span>Tally Prime + GST</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3E7D3] border border-[#E8D8C3] text-xs font-bold text-[#5C3D2E] uppercase tracking-wider mb-6 shadow-sm animate-warm-pulse">
            <Sparkles className="w-3.5 h-3.5 text-[#B07A4F]" />
            <span>Admissions Open for New Practical Batches</span>
          </div>

          {/* Outcome-Driven Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#3B2418] tracking-tight leading-[1.1] mb-6">
            Master Practical Computer Skills.{' '}
            <span className="block text-[#5C3D2E] underline decoration-[#B07A4F] decoration-wavy decoration-2 underline-offset-8 mt-1">
              Build a Career That Thrives.
            </span>
          </h1>

          {/* Supporting Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#6B4E3D] max-w-2xl mx-auto leading-relaxed mb-8">
            Learn from experienced instructors in modern computer labs. Small batches, personalized 1-on-1 attention, hands-on live exercises, and verified course certification.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onOpenDemoModal()}
              icon={ArrowRight}
              iconPosition="right"
              className="w-full sm:w-auto shadow-xl hover:shadow-2xl transition-all"
            >
              Book a Free Demo Class
            </Button>

            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-semibold bg-[#25D366] text-white hover:bg-[#20ba5a] transition-all shadow-md active:scale-98"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={siteConfig.phoneDialUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-semibold bg-[#F3E7D3] text-[#3B2418] border border-[#E8D8C3] hover:border-[#B07A4F] transition-all"
            >
              <Phone className="w-4 h-4 text-[#5C3D2E]" />
              <span>Call: {siteConfig.displayPhone}</span>
            </a>
          </div>

          {/* Reassurance Trust Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#6B4E3D]">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#2E6B47]" /> 100% Practical Lab Training
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#2E6B47]" /> Small Batches (Max 12 Students)
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#2E6B47]" /> Government Recognized Certification
            </span>
          </div>
        </div>

        {/* Fanned-Out Interactive Course Card Deck (From Reference UI) */}
        <div className="mt-10 sm:mt-14 max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs font-black uppercase tracking-wider text-[#B07A4F]">
              Explore Our Training Tracks — Click Any Card Below
            </span>
          </div>

          {/* Deck Container */}
          <div className="relative py-8 px-2 flex items-center justify-center min-h-[360px] sm:min-h-[420px]">
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 sm:gap-0 sm:-space-x-8">
              {HERO_CARDS.map((card) => {
                const Icon = card.icon;
                const isSelected = activeCard === card.id;

                return (
                  <div
                    key={card.id}
                    onClick={() => setActiveCard(card.id)}
                    className={`relative cursor-pointer transition-all duration-300 transform rounded-3xl p-5 sm:p-6 w-full sm:w-64 border ${
                      isSelected
                        ? 'z-30 scale-105 sm:-translate-y-6 shadow-2xl border-[#5C3D2E] bg-white ring-2 ring-[#B07A4F]'
                        : `z-10 hover:z-20 hover:-translate-y-2 hover:scale-100 shadow-lg border-[#E8D8C3] bg-[#FAF3E8]/95 sm:${card.rotation}`
                    }`}
                  >
                    {/* Top Tag & Duration */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F3E7D3] text-[#5C3D2E]">
                        {card.tag}
                      </span>
                      <span className="text-xs font-bold text-[#B07A4F]">
                        {card.duration}
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div className="w-12 h-12 rounded-2xl bg-[#F3E7D3] text-[#5C3D2E] flex items-center justify-center mb-4 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-black text-[#3B2418] mb-2 leading-snug">
                      {card.title}
                    </h3>

                    <p className="text-xs text-[#6B4E3D] leading-relaxed mb-4 min-h-[48px]">
                      {card.highlight}
                    </p>

                    <div className="pt-3 border-t border-[#E8D8C3]/60 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-[#6B4E3D]">
                        {card.mode}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenDemoModal(card.title);
                        }}
                        className="text-xs font-bold text-[#B07A4F] hover:text-[#3B2418] flex items-center gap-1 group"
                      >
                        <span>Enquire</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
