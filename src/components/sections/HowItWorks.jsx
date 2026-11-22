import React from 'react';
import { FileText, UserCheck, Clock4, GraduationCap, ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

const STEPS = [
  {
    step: '01',
    title: 'Submit Course Enquiry',
    description:
      'Connect with us online, via WhatsApp, or call. Inquire about upcoming school board or college semester batch schedules and syllabus.',
    icon: FileText,
  },
  {
    step: '02',
    title: 'Personalized Counselling',
    description:
      'Our mentor evaluates your background and syllabus goals to recommend the exact right course track matching your board or college semester.',
    icon: UserCheck,
  },
  {
    step: '03',
    title: 'Batch Allocation & Timing',
    description:
      'Choose a timing that suits your schedule: Morning, Afternoon, Evening, or Weekend. Reserve your dedicated computer workstation.',
    icon: Clock4,
  },
  {
    step: '04',
    title: 'Hands-on Learning & Mastery',
    description:
      'Complete practical lab exercises, build real projects, clear your doubts with faculty, and achieve top board marks and university grades.',
    icon: GraduationCap,
  },
];

export default function HowItWorks({ onOpenEnquiryModal }) {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#FAF3E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Simple 4-Step Pathway"
          title="How It Works: From Enquiry to High-Scoring Graduate"
          subtitle="Our streamlined enrollment pathway gets you learning on practical systems with personal mentorship."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="relative rounded-3xl p-6 sm:p-7 bg-[#F3E7D3]/70 border border-[#E8D8C3] flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black text-[#B07A4F] opacity-70">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#5C3D2E] text-[#FAF3E8] flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-[#3B2418] mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6B4E3D] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E8D8C3]/50">
                  <span className="text-[11px] font-bold text-[#5C3D2E] uppercase tracking-wider">
                    Step {step.step} of 4
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="primary"
            size="md"
            onClick={() => onOpenEnquiryModal()}
            icon={ArrowRight}
            iconPosition="right"
          >
            Start with Step 1: Enquire Now
          </Button>
        </div>
      </div>
    </section>
  );
}
