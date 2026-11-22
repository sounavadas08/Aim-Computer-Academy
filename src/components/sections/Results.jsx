import React from 'react';
import { Award, Briefcase, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
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
      'Students build real portfolios—from Python algorithms and AI mini-models to university project code—to showcase directly to colleges and recruiters.',
    badge: 'Real Work',
    icon: Briefcase,
  },
  {
    title: 'Board Exam & University Lab Readiness',
    description:
      'We coach students through practical lab tests, board specimen questions, BlueJ/Python coding assignments, and university viva preparation.',
    badge: 'Exam Ready',
    icon: TrendingUp,
  },
];

export default function Results({ onOpenEnquiryModal }) {
  return (
    <section id="results" className="py-20 md:py-28 bg-[#FAF3E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Tangible Outcomes"
          title="Skills That Open Real Academic & Career Opportunities"
          subtitle="Our training is measured by the high board marks and university semester grades our students achieve."
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
              Ready to Master Practical Computer Science & Score Top Grades?
            </h3>
            <p className="text-[#DFCEB7] text-sm md:text-base leading-relaxed">
              Join our upcoming academic batches. Learn directly from experienced faculty with dedicated lab workstations.
            </p>
          </div>

          <Button
            variant="caramel"
            size="lg"
            onClick={() => onOpenEnquiryModal()}
            className="shrink-0 shadow-lg"
            icon={ArrowRight}
            iconPosition="right"
          >
            Enquire for Admission
          </Button>
        </div>
      </div>
    </section>
  );
}
