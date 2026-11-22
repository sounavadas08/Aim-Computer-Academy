import React from 'react';
import { Award, Briefcase, GraduationCap } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const INSTRUCTORS = [
  {
    name: 'Senior Academic Faculty',
    designation: 'Head of Computer Science & College Batches',
    experience: '12+ Years University & College Teaching Experience',
    qualification: 'M.Tech / MCA (Computer Science)',
    specialties: ['B.Sc / B.Tech / BCA Labs', 'Data Structures (DSA)', 'Advanced Java & C++'],
    initials: 'CS',
  },
  {
    name: 'AI & Data Science Specialist',
    designation: 'Mentor for AI, Python & Machine Learning',
    experience: '8+ Years Industry & Academic Training Experience',
    qualification: 'M.Sc (Data Science) / B.Tech CSE',
    specialties: ['Artificial Intelligence', 'Data Science & Pandas', 'School AI Projects (CBSE/ICSE)'],
    initials: 'AI',
  },
  {
    name: 'Senior Board Exam Mentor',
    designation: 'Specialist for ICSE, ISC, CBSE & WB Board',
    experience: '10+ Years School Board Mentorship Experience',
    qualification: 'BCA, MCA, School Board Exam Specialist',
    specialties: ['ICSE/ISC BlueJ Java', 'CBSE Python & MySQL', 'WB Board Modern Computer Applications'],
    initials: 'BM',
  },
];

export default function Instructors() {
  return (
    <section id="instructors" className="py-20 md:py-28 bg-[#F3E7D3] border-t border-[#E8D8C3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Expert Mentorship"
          title="Learn from Dedicated, Experienced CS Faculty"
          subtitle="Our instructors combine academic curriculum expertise with patient, lab-first mentoring, ensuring every student masters practical programming."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSTRUCTORS.map((instructor, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-7 bg-[#FAF3E8] border border-[#E8D8C3] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Avatar with Initials */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#5C3D2E] text-[#FAF3E8] flex items-center justify-center font-black text-xl shadow-md border-2 border-[#B07A4F]">
                    {instructor.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#3B2418]">
                      {instructor.name}
                    </h3>
                    <p className="text-xs font-bold text-[#B07A4F]">
                      {instructor.designation}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6 text-xs text-[#6B4E3D]">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#5C3D2E] shrink-0" />
                    <span>{instructor.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#5C3D2E] shrink-0" />
                    <span>{instructor.experience}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8D8C3]">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#B07A4F] mb-2">
                    Key Specialties:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {instructor.specialties.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#F3E7D3] text-[#5C3D2E] border border-[#E8D8C3]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8D8C3]/50 text-center">
                <span className="text-[11px] text-[#6B4E3D] italic">
                  [Faculty profiles updated for upcoming academic batches]
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
