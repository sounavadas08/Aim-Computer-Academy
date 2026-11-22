import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false,
}) {
  const alignClass = {
    center: 'text-center mx-auto items-center',
    left: 'text-left items-start',
    right: 'text-right items-end',
  }[align];

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignClass} ${className}`}>
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3.5 border transition-transform duration-300 hover:scale-105 ${
            light
              ? 'bg-[#3B2418]/60 text-[#DFBFA1] border-[#B07A4F]/40'
              : 'bg-[#F3E7D3] text-[#5C3D2E] border-[#E8D8C3]'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] mb-4 ${
          light ? 'text-[#FAF3E8]' : 'text-[#3B2418]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed max-w-2xl ${
            light ? 'text-[#DFCEB7]' : 'text-[#6B4E3D]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
