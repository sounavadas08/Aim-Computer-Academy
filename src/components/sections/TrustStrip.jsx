import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, BookOpen, Clock, ShieldCheck } from 'lucide-react';

const STATS = [
  {
    id: 'students',
    value: 2500,
    suffix: '+',
    label: 'Students Trained',
    sublabel: 'Empowered with job-ready computer skills',
    icon: Users,
  },
  {
    id: 'years',
    value: 8,
    suffix: '+',
    label: 'Years of Excellence',
    sublabel: 'Dedicated to quality IT training',
    icon: Clock,
  },
  {
    id: 'courses',
    value: 15,
    suffix: '+',
    label: 'Industry Courses',
    sublabel: 'From fundamental to advanced tracks',
    icon: BookOpen,
  },
  {
    id: 'certification',
    value: 100,
    suffix: '%',
    label: 'Practical Lab Focus',
    sublabel: 'Individual computer terminal for every student',
    icon: ShieldCheck,
  },
];

export default function TrustStrip() {
  const [counts, setCounts] = useState(STATS.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          STATS.forEach((stat, idx) => {
            let start = 0;
            const end = stat.value;
            const duration = 1200;
            const stepTime = Math.abs(Math.floor(duration / (end || 1)));
            const timer = setInterval(() => {
              start += Math.ceil(end / 30);
              if (start >= end) {
                start = end;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const next = [...prev];
                next[idx] = start;
                return next;
              });
            }, Math.max(stepTime, 25));
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="py-12 bg-[#F3E7D3] border-y border-[#E8D8C3] relative z-10"
      aria-label="Key Achievements and Highlights"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-[#FAF3E8] border border-[#E8D8C3] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F3E7D3] text-[#5C3D2E] flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-[#3B2418] tracking-tight mb-1">
                  {counts[idx]}
                  {stat.suffix}
                </div>
                <div className="text-sm font-bold text-[#5C3D2E] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#6B4E3D] max-w-[180px]">
                  {stat.sublabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
