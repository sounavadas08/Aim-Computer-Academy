import React, { useState } from 'react';
import { Clock, Monitor, BookOpen, CheckCircle, ArrowRight, Sparkles, GraduationCap } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

const COURSES = [
  {
    id: 'school-ai',
    title: 'Artificial Intelligence (AI) for Class 6–10',
    category: 'AI & Data Science',
    boards: 'CBSE (Code 417) • ICSE • WB Board',
    duration: '3 to 6 Months / Academic Track',
    mode: 'Hands-on Labs & AI Projects',
    batchTiming: 'After-School & Weekend Batches',
    description:
      'Specially designed for school students (Class 6–10). Master foundational AI concepts aligned with CBSE Code 417, ICSE, and WB Board curricula with interactive visual models.',
    curriculum: [
      'Python Programming Fundamentals & Algorithmic Logic',
      'Computer Vision & Teachable Machine Mini-Projects',
      'Natural Language Processing (NLP) & Smart Chatbots',
      'Board AI Practical Records & Ethics in Computing',
    ],
    popular: true,
    filterTags: ['Class 6–10 (School)', 'CBSE / ICSE / ISC', 'WB Board', 'AI & Data Science'],
  },
  {
    id: 'data-science',
    title: 'Data Science & Python Analytics',
    category: 'AI & Data Science',
    boards: 'Class 8–10, Senior Secondary & College',
    duration: '4 Months Practical Lab',
    mode: 'Real-World Dataset Analysis',
    batchTiming: 'Weekday Evenings / Weekend Batches',
    description:
      'Develop genuine data literacy and analytical thinking. Learn to clean, visualize, and extract insights from real datasets using industry-standard Python libraries.',
    curriculum: [
      'Python for Data Science (NumPy, Pandas & Jupyter)',
      'Data Visualization with Matplotlib & Seaborn',
      'Exploratory Data Analysis (EDA) on Real Datasets',
      'Statistical Reasoning & Intro to Machine Learning',
    ],
    popular: false,
    filterTags: ['Class 6–10 (School)', 'B.Sc / B.Tech / BCA', 'AI & Data Science'],
  },
  {
    id: 'icse-isc',
    title: 'ICSE & ISC Computer Applications / Science (Java)',
    category: 'CBSE / ICSE / ISC',
    boards: 'ICSE (Class 9–10) & ISC (Class 11–12)',
    duration: 'Academic Year / Board Batch',
    mode: 'BlueJ Lab Training & Theory',
    batchTiming: 'Morning & Evening Batches',
    description:
      'Rigorous, 100% board-oriented preparation for ICSE Computer Applications (Java / BlueJ) and ISC Computer Science. Master OOP theory, nested logic, and get full marks in practicals.',
    curriculum: [
      'Java OOP Principles, BlueJ Environment & Classes',
      'Arrays, String Manipulation, Sorting & Recursion',
      '10-Year Board Questions, Specimen Papers & Mock Tests',
      '100-Mark Practical Output & Project Documentation',
    ],
    popular: true,
    filterTags: ['Class 6–10 (School)', 'CBSE / ICSE / ISC'],
  },
  {
    id: 'cbse-cs-it',
    title: 'CBSE Computer Science & IT (Python & SQL)',
    category: 'CBSE / ICSE / ISC',
    boards: 'Class 6–10 (Code 165/402) & 11–12 (Code 083)',
    duration: 'Academic Year / Foundation Track',
    mode: 'Practical Labs + Board Theory',
    batchTiming: 'Weekday After-School Batches',
    description:
      'Comprehensive coaching for CBSE secondary & senior secondary students. Covers Python programming, database management with MySQL, cyber ethics, and board exam files.',
    curriculum: [
      'Python Programming, Functions, Loops & File Handling',
      'MySQL Database Queries, Table Joins & SQL Operations',
      'Computer Networks, Cyber Safety & Web Services',
      'CBSE Board Practical Files & Pre-Board Mock Exams',
    ],
    popular: false,
    filterTags: ['Class 6–10 (School)', 'CBSE / ICSE / ISC'],
  },
  {
    id: 'wb-board',
    title: 'West Bengal Board Computer Applications (Class 6–12)',
    category: 'WB Board',
    boards: 'WBBSE (Class 6–10) & WBCHSE (Class 11–12)',
    duration: 'Academic Year / Exam Prep',
    mode: 'Bilingual (English + Bengali) Labs',
    batchTiming: 'Morning & Afternoon Batches',
    description:
      'Dedicated coaching in English and Bengali for WB Board students (Madhyamik & HS COMA/COMS). In-depth coverage of computer fundamentals, MS Office, DBMS, and C coding.',
    curriculum: [
      'Logic Gates, Boolean Algebra & Number Systems',
      'MS Office (Word, Excel, PowerPoint, Access) Mastery',
      'DBMS Fundamentals & Introduction to C Programming',
      'Test Paper Solving, Suggestion Practice & Lab Marks Prep',
    ],
    popular: false,
    filterTags: ['Class 6–10 (School)', 'WB Board'],
  },
  {
    id: 'graduation-cs',
    title: 'Graduation Batches: B.Sc, B.Tech & BCA (CS Major)',
    category: 'B.Sc / B.Tech / BCA',
    boards: 'MAKAUT, CU & State University Undergrads',
    duration: 'Semester-Wise / 6 Months',
    mode: 'University Lab & Project Mentorship',
    batchTiming: 'Weekend & Evening College Batches',
    description:
      'Advanced semester theory and laboratory mentoring for Computer Science majors. Master core foundational subjects, lab assignments, viva preparation, and university projects.',
    curriculum: [
      'Data Structures & Algorithms (DSA) in C / C++ / Java',
      'Object-Oriented Programming (Java, C++, Python)',
      'DBMS (SQL/Relational), Operating Systems & Networks',
      'University Semester Lab Assignments & Capstone Projects',
    ],
    popular: true,
    filterTags: ['B.Sc / B.Tech / BCA'],
  },
];

const FILTER_TABS = [
  'All',
  'Class 6–10 (School)',
  'CBSE / ICSE / ISC',
  'WB Board',
  'B.Sc / B.Tech / BCA',
  'AI & Data Science',
];

export default function Courses({ onOpenDemoModal }) {
  const [filter, setFilter] = useState('All');

  const filteredCourses =
    filter === 'All'
      ? COURSES
      : COURSES.filter((c) => c.filterTags.includes(filter));

  return (
    <section id="courses" className="py-20 md:py-28 bg-[#FAF3E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic & Degree Programs"
          title="School Board Exams & University Computer Science Coaching"
          subtitle="Specialized practical lab batches for Class 6–10 (CBSE, ICSE, WB Board), Higher Secondary (ISC/CBSE), and Graduation batches for B.Sc, B.Tech & BCA Computer Science majors."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {FILTER_TABS.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                filter === cat
                  ? 'bg-[#5C3D2E] text-[#FAF3E8] shadow-md scale-105'
                  : 'bg-[#F3E7D3] text-[#6B4E3D] hover:bg-[#E8D8C3] hover:text-[#3B2418]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 bg-[#FAF3E8] border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                course.popular
                  ? 'border-[#B07A4F] ring-1 ring-[#B07A4F] shadow-md bg-white'
                  : 'border-[#E8D8C3] shadow-sm'
              }`}
            >
              <div>
                {/* Header Tag & Duration */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F3E7D3] text-[#5C3D2E]">
                    {course.category}
                  </span>
                  {course.popular && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#B07A4F] text-white">
                      <Sparkles className="w-3 h-3" /> Recommended
                    </span>
                  )}
                </div>

                {/* Target Boards Badge */}
                <div className="mb-3">
                  <span className="inline-block text-[11px] font-bold text-[#B07A4F] bg-[#FAF3E8] px-2 py-0.5 rounded border border-[#E8D8C3]">
                    {course.boards}
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="text-xl font-black text-[#3B2418] mb-3 leading-snug">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#6B4E3D] leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Meta details */}
                <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-[#F3E7D3]/60 border border-[#E8D8C3] text-xs text-[#3B2418] mb-6">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#B07A4F] shrink-0" />
                    <span className="truncate">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Monitor className="w-3.5 h-3.5 text-[#B07A4F] shrink-0" />
                    <span className="truncate">{course.mode}</span>
                  </div>
                </div>

                {/* Key Syllabus Modules */}
                <div className="space-y-2 mb-6">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#B07A4F]">
                    Key Topics & Practicals:
                  </p>
                  {course.curriculum.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#6B4E3D]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#2E6B47] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-4 border-t border-[#E8D8C3] flex items-center justify-between gap-3">
                <span className="text-[11px] text-[#6B4E3D] font-medium truncate">
                  {course.batchTiming}
                </span>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => onOpenDemoModal(course.title)}
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Enquire Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
