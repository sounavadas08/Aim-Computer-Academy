import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const FAQS = [
  {
    q: 'Do I need prior computer knowledge to enroll in a course?',
    a: 'Not at all! Our foundational courses (such as Basic Computer & IT Tools or MS Office) are specifically crafted for complete beginners. Our instructors begin from absolute fundamentals, including mouse handling, keyboard shortcuts, and file management.',
  },
  {
    q: 'What is the duration of your computer courses and batch timings?',
    a: 'Course durations typically range from 2 to 4 months depending on whether you choose foundational office tools, Tally Prime, Web Design, or Python. We offer flexible batch options: Morning (9:00 AM - 12:00 PM), Afternoon (1:00 PM - 4:00 PM), Evening (5:00 PM - 8:00 PM), as well as Weekend Special batches for working professionals.',
  },
  {
    q: 'Will I receive an official certificate after completing the training?',
    a: 'Yes. Upon successfully completing your practical lab training, assignments, and practical course assessments, you will receive an official, verified Certificate of Completion from AIM COMPUTER ACADEMY that can be added to your resume and LinkedIn profile.',
  },
  {
    q: 'What if I miss a lecture or practical lab session?',
    a: 'We understand that emergencies or college exams occur. With our small batch structure, you can easily schedule a backup practical session with your faculty or attend doubt-clearing hours at no additional charge.',
  },
  {
    q: 'Can I pay my course fees in monthly installments?',
    a: 'Yes, we provide flexible, interest-free monthly installment facilities for our multi-month certificate programs to ensure quality education remains accessible to all students and families.',
  },
  {
    q: 'How does the Free Demo Class work?',
    a: 'The free demo class gives you full access to a live practical session. You will be assigned a computer in our lab, experience how our instructor teaches, review the complete syllabus, and discuss your career goals before paying any fee or committing to admission.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F3E7D3] border-t border-[#E8D8C3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Everything You Need to Know Before Joining"
          subtitle="Clear answers to common questions about admissions, lab facilities, certifications, and timings."
        />

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#E8D8C3] bg-[#FAF3E8] overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B07A4F]"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-[#3B2418]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#F3E7D3] text-[#5C3D2E] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#5C3D2E] text-[#FAF3E8]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#6B4E3D] leading-relaxed border-t border-[#E8D8C3]/40 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
