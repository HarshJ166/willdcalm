'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';

interface StatProps {
  target: number;
  suffix?: string;
  label: string;
}

function AnimatedStat({ target, suffix = '', label }: StatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix;
      },
    });
    return controls.stop;
  }, [isInView, count, target, suffix]);

  return (
    <div className="space-y-1">
      <span
        ref={ref}
        className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-forest tabular-nums"
      >
        0{suffix}
      </span>
      <span className="text-xs tracking-[0.2em] uppercase text-sage">{label}</span>
    </div>
  );
}

interface AccommodationProps {
  roomCount: number;
  courtyardCount: number;
  heading: string;
  body: string;
  badgeText: string;
}

export default function Accommodation({
  roomCount,
  courtyardCount,
  heading,
  body,
  badgeText,
}: AccommodationProps) {
  return (
    <section id="accommodation" className="bg-cream py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
        <div className="space-y-5 sm:space-y-6 sm:space-y-8">
          <span className="text-xs tracking-[0.3em] uppercase text-sage font-medium">
            Accommodation
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-forest leading-snug">
            {heading}
          </h2>
          <p className="text-sm sm:text-base text-forest/60 leading-relaxed max-w-lg">{body}</p>
          <div className="inline-block px-3 sm:px-4 py-2 border border-sage/30 text-xs tracking-[0.2em] uppercase text-sage">
            {badgeText}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:gap-8">
          <AnimatedStat target={roomCount} suffix="+" label="Experiential Rooms" />
          <AnimatedStat target={courtyardCount} suffix="+" label="Courtyard Rooms" />
        </div>
      </div>
    </section>
  );
}
