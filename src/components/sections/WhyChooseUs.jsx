import React from 'react';
import { Laptop, Users2, Award, HeartHandshake, HelpCircle, Briefcase, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const ADVANTAGES = [
  {
    icon: Laptop,
    title: '100% Practical Lab Focus',
    description:
      'We believe you learn computers by doing, not just watching. Every student gets a dedicated, modern PC terminal for each class.',
  },
  {
    icon: Users2,
    title: 'Small Batches (25-30 Students)',
    description:
      'No crowded lecture halls. Small batch sizes ensure instructors know your pace, clear your doubts, and offer personal coaching.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized 1-on-1 Attention',
    description:
      'Stuck on an Excel formula or coding error? Our faculty guides you individually through each exercise until you feel confident.',
  },
  {
    icon: Award,
    title: 'Recognized Course Certificate',
    description:
      'Earn an official certificate from AIM COMPUTER ACADEMY upon completing your practical training and course assessments.',
  },
  {
    icon: Briefcase,
    title: 'Career & Placement Guidance',
    description:
      'From resume formatting to computer interview preparation and practical tests, we prepare you for real-world employment.',
  },
  {
    icon: HelpCircle,
    title: 'Dedicated Doubt Support & Practice Time',
    description:
      'Need extra practice before your exam or project? Flexible extra lab hours and revision support are available at no extra charge.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-[#F3E7D3] border-t border-[#E8D8C3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The AIM Advantage"
          title="Why Students & Parents Trust AIM Computer Academy"
          subtitle="We focus on real job skills, supportive mentors, and practical confidence rather than mere theory."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ADVANTAGES.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl p-7 bg-[#FAF3E8] border border-[#E8D8C3] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#F3E7D3] text-[#5C3D2E] flex items-center justify-center mb-5 shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-[#3B2418] mb-3">
                  {adv.title}
                </h3>
                <p className="text-sm text-[#6B4E3D] leading-relaxed">
                  {adv.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
