import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const TESTIMONIALS = [
  {
    name: 'Rohan Banerjee',
    course: 'ICSE Class 10 Computer Applications',
    role: 'Scored 98/100 in ICSE Board Exam',
    rating: 5,
    quote:
      'The BlueJ programming sessions and doubt-clearing at AIM Computer Academy were phenomenal. The faculty solved 10 years of board papers and practical output questions with us. I scored 98 in my ICSE computer exam!',
  },
  {
    name: 'Ananya Chakraborty',
    course: 'BCA Semester Lab & DSA Batch',
    role: 'BCA 2nd Year Student (MAKAUT)',
    rating: 5,
    quote:
      'Data Structures and Algorithms in C were very tough in college lectures. The lab-first approach and 1-on-1 code debugging here made pointer concepts, linked lists, and trees crystal clear. Best coaching for CS majors.',
  },
  {
    name: 'Siddharth Roy',
    course: 'Artificial Intelligence (Class 9 - CBSE Code 417)',
    role: 'CBSE Class 9 Student',
    rating: 5,
    quote:
      'Learning AI with hands-on computer vision and Python models made the subject exciting rather than just textbook theory. The projects we built in the academy lab were top-rated in our school exhibition.',
  },
  {
    name: 'Deblina Das',
    course: 'WBCHSE Modern Computer Applications',
    role: 'Higher Secondary WB Board Student',
    rating: 5,
    quote:
      'The bilingual guidance in Bengali and English helped me grasp logic gates, DBMS, and Excel practicals with ease. The faculty gave us precise test paper suggestions and conducted regular mock exams.',
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
          badge="Student Success Stories"
          title="What Our School & College Students Say"
          subtitle="Real reviews from students who achieved high board marks and university semester grades with AIM Computer Academy."
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
