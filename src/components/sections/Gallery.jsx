import React from 'react';
import { Monitor, Laptop, Users, Sparkles } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const GALLERY_ITEMS = [
  {
    title: 'Modern High-Speed Computer Lab',
    category: 'Lab Infrastructure',
    icon: Monitor,
    desc: 'Each student terminal is equipped with modern processors, high-speed SSDs, and dedicated software suites.',
  },
  {
    title: 'Individual 1-on-1 Practice Workstations',
    category: 'Practical Training',
    icon: Laptop,
    desc: 'Spacious desk setups ensuring ergonomic comfort and uninterrupted concentration during long coding and accounting sessions.',
  },
  {
    title: 'Interactive Group Lab & Doubt Clearing',
    category: 'Classroom Culture',
    icon: Users,
    desc: 'Collaborative environment where faculty and peers review code, troubleshoot formulas, and solve project challenges together.',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FAF3E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Learning Environment"
          title="Inside AIM Computer Academy Classrooms & Labs"
          subtitle="Explore the focused, supportive environment where our trainees build daily practical skills."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden bg-[#F3E7D3]/70 border border-[#E8D8C3] p-8 flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#5C3D2E] text-[#FAF3E8] flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#B07A4F] block mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-black text-[#3B2418] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B4E3D] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E8D8C3]/50 flex items-center gap-1.5 text-xs font-bold text-[#5C3D2E]">
                  <Sparkles className="w-3.5 h-3.5 text-[#B07A4F]" />
                  <span>Air-Conditioned Lab • High-Speed Internet</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
