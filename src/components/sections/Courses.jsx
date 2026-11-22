import React, { useState } from 'react';
import { Clock, Monitor, BookOpen, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

const COURSES = [
  {
    id: 'basic-it',
    title: 'Certificate in Basic Computer & IT Tools',
    category: 'Foundation',
    duration: '2 Months',
    mode: 'Offline Practical Labs',
    batchTiming: 'Morning / Evening Batches',
    description:
      'Ideal for beginners, students, and seniors. Master Windows, file management, typing speed, internet operations, email etiquette, and cyber awareness.',
    curriculum: [
      'Computer Fundamentals & Hardware Basics',
      'Windows OS, File Management & Security',
      'English & Bengali / Regional Typing Skills',
      'Web Browsing, Online Safety & Email Etiquette',
    ],
    popular: false,
  },
  {
    id: 'msoffice',
    title: 'Advanced MS Office & Excel Specialist',
    category: 'Office Productivity',
    duration: '3 Months',
    mode: 'Practical Lab Training',
    batchTiming: 'Weekday & Weekend Batches',
    description:
      'The essential skillset for administrative, corporate, and back-office roles. In-depth Microsoft Word, advanced Excel data analysis, and PowerPoint.',
    curriculum: [
      'MS Word: Documentation, Mail Merge & Formatting',
      'MS Excel: VLOOKUP, XLOOKUP, Pivot Tables & Charts',
      'Formulas, Nested IF, Conditional Logic & Data Validation',
      'PowerPoint Presentations & Professional Slides',
    ],
    popular: true,
  },
  {
    id: 'tally',
    title: 'Professional Accounting with Tally Prime & GST',
    category: 'Finance & Accounts',
    duration: '3 Months',
    mode: 'Real Company Projects',
    batchTiming: 'Flexible Timing Options',
    description:
      'Become industry-ready for accounting and bookkeeping roles. Hands-on learning with real corporate balance sheets, vouchers, and GST returns.',
    curriculum: [
      'Double Entry Bookkeeping & Ledger Maintenance',
      'Tally Prime: Inventory, Vouchers & Invoicing',
      'GST Accounting, CGST/SGST/IGST Calculations',
      'Payroll Management, TDS Basics & Profit/Loss Reports',
    ],
    popular: true,
  },
  {
    id: 'webdev',
    title: 'Modern Web Design & Frontend Development',
    category: 'Technology',
    duration: '4 Months',
    mode: 'Project-Based Learning',
    batchTiming: 'Weekday Evenings / Weekends',
    description:
      'Build responsive websites from scratch. Learn semantic HTML5, modern CSS with Tailwind, interactive JavaScript, and live site deployment.',
    curriculum: [
      'Semantic HTML5 & Modern CSS3 Layouts (Flex & Grid)',
      'Responsive Mobile-First Web Design Principles',
      'Modern JavaScript (ES6+), DOM Manipulation & APIs',
      'Live Portfolio Project & GitHub Deployment',
    ],
    popular: false,
  },
  {
    id: 'python',
    title: 'Python Programming & Data Fundamentals',
    category: 'Programming',
    duration: '3 Months',
    mode: 'Code & Build Labs',
    batchTiming: 'Evening Batches Available',
    description:
      'Start your programming journey with clean Python code. Great for college students, aspiring analysts, and problem solvers.',
    curriculum: [
      'Python Syntax, Variables, Control Flow & Loops',
      'Functions, Modules, File Handling & Error Logic',
      'Object-Oriented Programming (OOP) Fundamentals',
      'Working with Data Libraries & Project Building',
    ],
    popular: false,
  },
  {
    id: 'graphic',
    title: 'Graphic Design & Digital Creative Media',
    category: 'Design',
    duration: '3 Months',
    mode: 'Portfolio Creation',
    batchTiming: 'Morning & Afternoon Batches',
    description:
      'Master visual communication and commercial graphics for social media, print advertising, and corporate branding.',
    curriculum: [
      'Design Theory, Color Harmony & Typography Principles',
      'Photo Editing & Retouching in Adobe Photoshop',
      'Vector Illustrations & Logo Creation in Illustrator',
      'Social Media Creatives, Flyers & Print Formats',
    ],
    popular: false,
  },
];

export default function Courses({ onOpenDemoModal }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Foundation', 'Office Productivity', 'Finance & Accounts', 'Technology', 'Design'];

  const filteredCourses =
    filter === 'All' ? COURSES : COURSES.filter((c) => c.category === filter);

  return (
    <section id="courses" className="py-20 md:py-28 bg-[#FAF3E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Career Programs"
          title="Practical Courses Designed for Real Jobs"
          subtitle="All courses include dedicated computer workstations, step-by-step guidance, small batch sizes, and practical exams."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
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
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F3E7D3] text-[#5C3D2E]">
                    {course.category}
                  </span>
                  {course.popular && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#B07A4F] text-white">
                      <Sparkles className="w-3 h-3" /> Popular
                    </span>
                  )}
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
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Monitor className="w-3.5 h-3.5 text-[#B07A4F] shrink-0" />
                    <span className="truncate">{course.mode}</span>
                  </div>
                </div>

                {/* Key Syllabus Modules */}
                <div className="space-y-2 mb-6">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#B07A4F]">
                    Key Skills Covered:
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
                <span className="text-[11px] text-[#6B4E3D] font-medium">
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
