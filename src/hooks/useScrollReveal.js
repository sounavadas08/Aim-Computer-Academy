import { useEffect, useRef } from 'react';

/**
 * Lightweight IntersectionObserver hook for scroll-triggered section reveals.
 * Animates only opacity and transform (no layout thrashing).
 * Respects prefers-reduced-motion.
 */
export function useScrollReveal(options = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }) {
  const ref = useRef(null);

  useEffect(() => {
    // If user prefers reduced motion, show immediately
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      if (ref.current) {
        ref.current.classList.add('is-revealed');
      }
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    }, options);

    const el = ref.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [options]);

  return ref;
}
