import React, { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in ms
  threshold?: number;
  direction?: 'up' | 'fade';
  style?: React.CSSProperties;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  threshold = 0.12,
  direction = 'up',
  style = {}
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.classList.add('reveal-active');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('reveal-active');
            observer.unobserve(el);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold]);

  const mergedStyle: React.CSSProperties = {
    ...style,
    transitionDelay: `${delay}ms`
  };

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal--${direction} ${className}`}
      style={mergedStyle}
    >
      {children}
    </div>
  );
};
