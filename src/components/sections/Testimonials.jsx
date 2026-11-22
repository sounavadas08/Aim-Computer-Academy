import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const TESTIMONIALS = [
  {
    name: 'Priyanka Sen',
    course: 'Tally Prime with GST',
    role: 'Accounts Assistant at Private Firm',
    rating: 5,
    quote:
      'The hands-on practical training in Tally Prime gave me the exact skills required for my accounting job. The faculty explained every debit/credit concept and GST billing process patiently.',
  },
  {
    name: 'Amitabh Roy',
    course: 'Advanced MS Office & Excel Specialist',
    role: 'Operations Executive',
    rating: 5,
    quote:
      'I needed advanced Excel for my corporate work. Learning VLOOKUP, pivot tables, and automated reports at AIM Computer Academy was the best career decision. Highly recommended!',
  },
  {
    name: 'Sneha Mondal',
    course: 'Web Design & Frontend Development',
    role: 'Junior Web Designer',
    rating: 5,
    quote:
      'Unlike places that just read slides, here we coded our own websites every single day in the lab. The small batch size meant I could ask questions without hesitation.',
  },
  {
    name: 'Subham Mukherjee',
    course: 'Certificate in Basic Computer',
    role: 'College Student',
    rating: 5,
    quote:
      'I was completely new to computers before joining. The faculty made me comfortable from day one. My typing speed and software skills improved significantly.',
  },
];

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prev = () => {
    setCurrentIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#F3E7D3] border-t border-[#E8D8C3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Student Experiences"
          title="What Our Trainees Say About Learning with Us"
          subtitle="Real reviews from students who built their practical computer confidence at AIM Computer Academy."
        />

        {/* Testimonials Carousel Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#FAF3E8] rounded-3xl p-8 sm:p-12 border border-[#E8D8C3] shadow-md">
            <Quote className="w-12 h-12 text-[#B07A4F]/30 mb-4" />

            <p className="text-base sm:text-xl text-[#3B2418] font-medium leading-relaxed mb-8 italic">
              "{TESTIMONIALS[currentIdx].quote}"
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#E8D8C3]">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(TESTIMONIALS[currentIdx].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B07A4F] text-[#B07A4F]" />
                  ))}
                </div>
                <h4 className="font-black text-lg text-[#3B2418]">
                  {TESTIMONIALS[currentIdx].name}
                </h4>
                <p className="text-xs font-semibold text-[#6B4E3D]">
                  {TESTIMONIALS[currentIdx].course} • <span className="text-[#B07A4F]">{TESTIMONIALS[currentIdx].role}</span>
                </p>
              </div>

              {/* Navigation arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full bg-[#F3E7D3] hover:bg-[#5C3D2E] text-[#3B2418] hover:text-[#FAF3E8] transition-colors flex items-center justify-center border border-[#E8D8C3]"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-bold text-[#6B4E3D] px-2">
                  {currentIdx + 1} / {TESTIMONIALS.length}
                </span>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-[#F3E7D3] hover:bg-[#5C3D2E] text-[#3B2418] hover:text-[#FAF3E8] transition-colors flex items-center justify-center border border-[#E8D8C3]"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
