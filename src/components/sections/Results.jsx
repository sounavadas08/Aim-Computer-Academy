import React from 'react';
import { Award, Briefcase, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

const HIGHLIGHTS = [
  {
    title: 'Recognized Course Certification',
    description:
      'Every student who completes our curriculum and lab exercises receives an official verified certificate highlighting their practical software competencies.',
    badge: '100% Verified',
    icon: Award,
  },
  {
    title: 'Portfolio & Live Project Submissions',
    description:
      'Students build real portfolios—from complex Excel dashboard templates to live websites and GST accounting books—to showcase directly to employers.',
    badge: 'Real Work',
    icon: Briefcase,
  },
  {
    title: 'Job Interview & Practical Test Readiness',
    description:
      'We coach trainees through computerized typing speed tests, accounting assessment simulations, and technical viva interviews.',
    badge: 'Career Ready',
    icon: TrendingUp,
  },
];

export default function Results({ onOpenDemoModal }) {
  return (
    <section id="results" className="py-20 md:py-28 bg-[#FAF3E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Tangible Outcomes"
          title="Skills That Open Real Career Opportunities"
          subtitle="Our training is measured by the practical confidence our graduates bring to their jobs, colleges, and freelance projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl p-7 bg-[#F3E7D3]/60 border border-[#E8D8C3] shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-white"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#5C3D2E] text-[#FAF3E8] flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FAF3E8] text-[#B07A4F] border border-[#E8D8C3]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-black text-[#3B2418] mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-[#6B4E3D] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Certificate Callout Card */}
        <div className="rounded-3xl p-8 md:p-10 bg-[#3B2418] text-[#FAF3E8] border border-[#B07A4F]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#B07A4F] text-white mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Certificate of Completion
            </span>
            <h3 className="text-2xl md:text-3xl font-black mb-2">
              Ready to Add a Certified Computer Credential to Your Resume?
            </h3>
            <p className="text-[#DFCEB7] text-sm md:text-base leading-relaxed">
              Book a free demo seat today. Experience the curriculum, meet our instructor, and start building your future.
            </p>
          </div>

          <Button
            variant="caramel"
            size="lg"
            onClick={() => onOpenDemoModal()}
            className="shrink-0 shadow-lg"
          >
            Claim Your Free Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
