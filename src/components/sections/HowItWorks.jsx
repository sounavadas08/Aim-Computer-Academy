import React from 'react';
import { CalendarCheck, UserCheck, Clock4, GraduationCap, ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

const STEPS = [
  {
    step: '01',
    title: 'Book a Free Demo Class',
    description:
      'Submit your enquiry or call us. Experience our teaching style, inspect our computer lab, and explore course modules firsthand.',
    icon: CalendarCheck,
  },
  {
    step: '02',
    title: 'Personalized Counselling',
    description:
      'Our mentor evaluates your background and career goals to recommend the exact right course track without unnecessary modules.',
    icon: UserCheck,
  },
  {
    step: '03',
    title: 'Batch Allocation & Timing',
    description:
      'Choose a timing that suits your schedule: Morning, Afternoon, Evening, or Weekend. Reserve your dedicated computer seat.',
    icon: Clock4,
  },
  {
    step: '04',
    title: 'Hands-on Learning & Certification',
    description:
      'Complete practical lab exercises, build real projects, clear your doubts, and receive your verified course completion certificate.',
    icon: GraduationCap,
  },
];

export default function HowItWorks({ onOpenDemoModal }) {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#FAF3E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Simple 4-Step Pathway"
          title="How It Works: From First Click to Certified Graduate"
          subtitle="Our streamlined enrolment pathway gets you learning on practical systems with zero hassle."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((step, idx) => {
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
            onClick={() => onOpenDemoModal()}
            icon={ArrowRight}
            iconPosition="right"
          >
            Start with Step 1: Book Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
