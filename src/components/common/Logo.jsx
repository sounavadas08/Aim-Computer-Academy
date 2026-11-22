import React from 'react';
import logoImg from '../../assets/images/logo.webp';
import { siteConfig } from '../../config/site';

export default function Logo({ className = '', showText = true, variant = 'default' }) {
  const isLight = variant === 'light';
  
  return (
    <a
      href="#hero"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B07A4F] rounded-lg transition-transform duration-200 active:scale-95 ${className}`}
      aria-label={`${siteConfig.name} Home`}
    >
      <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden shadow-sm border border-[#E8D8C3] group-hover:border-[#B07A4F] transition-colors bg-white flex items-center justify-center shrink-0">
        <img
          src={logoImg}
          alt={`${siteConfig.name} Logo`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          width="44"
          height="44"
          loading="eager"
        />
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span
            className={`font-black tracking-tight text-base md:text-lg leading-tight transition-colors ${
              isLight ? 'text-[#FAF3E8]' : 'text-[#3B2418]'
            } group-hover:text-[#B07A4F]`}
          >
            AIM
          </span>
          <span
            className={`text-[10px] md:text-xs font-semibold tracking-wider uppercase ${
              isLight ? 'text-[#DFCEB7]' : 'text-[#6B4E3D]'
            }`}
          >
            COMPUTER ACADEMY
          </span>
        </div>
      )}
    </a>
  );
}
