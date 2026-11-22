import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const FAQS = [
  {
    q: 'Which school boards and classes do your computer programs cover?',
    a: 'We conduct dedicated batches for school students from Class 6 to 10 and Higher Secondary (11 & 12) across CBSE (Code 165, Code 402, Code 417 AI, Code 083 CS), ICSE (Computer Applications Java/BlueJ), ISC (Computer Science), and West Bengal Board (WBBSE Madhyamik & WBCHSE Modern Computer Applications in both English and Bengali mediums).',
  },
  {
    q: 'Do you offer specialized batches for college graduation students (B.Sc, B.Tech, BCA)?',
    a: 'Yes! We run specialized university semester theory and practical laboratory batches for B.Sc (Computer Science Hons), B.Tech (CSE/IT), and BCA undergraduates. Our coaching covers Data Structures & Algorithms (DSA), OOPs (C++, Java, Python), Database Management (DBMS), Operating Systems, and semester practical project guidance.',
  },
  {
    q: 'What is the duration of your computer courses and batch timings?',
    a: 'We offer flexible tracks: Academic Year & Semester Batches matching school/college schedules, as well as 3 to 6-month intensive modular tracks in Artificial Intelligence and Data Science. Batch timings include Morning (9:00 AM - 12:00 PM), Afternoon (1:00 PM - 4:00 PM), Evening After-School/College (5:00 PM - 8:00 PM), and Weekend Special batches.',
  },
  {
    q: 'Will every student get an individual computer workstation in the lab?',
    a: 'Absolutely. We follow a strict 1:1 computer-to-student policy in our air-conditioned computer labs. Every student codes and runs programs on their dedicated computer under continuous faculty supervision.',
  },
  {
    q: 'How do you prepare school students for board practical and theory exams?',
    a: 'Our board exam training includes solving the past 10 years of board question papers, specimen paper analyses, weekly timed mock tests, and complete guidance for maintaining 100-mark practical lab record files and project documentation.',
  },
  {
    q: 'How do I take admission or enroll in an upcoming batch?',
    a: 'You can submit an online enquiry, chat directly with us on WhatsApp, or call our admission desk. Our academic coordinator will evaluate your syllabus requirements, confirm seat availability in the appropriate batch, and guide you through the straightforward enrollment process.',
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
          subtitle="Clear answers to common questions about admissions, board syllabi, university CS batches, and lab timings."
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
