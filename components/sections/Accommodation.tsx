'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { animate, motion, useInView, useMotionValue } from 'framer-motion';

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
    <>
      <span
        ref={ref}
        className="min-w-[4rem] font-poppins text-[3rem] font-[200] leading-[1] text-[var(--text-cream)] tabular-nums md:min-w-[7rem] md:text-[5rem]"
      >
        0{suffix}
      </span>
      <span className="text-right font-poppins text-[0.625rem] font-[400] uppercase tracking-[0.22em] text-[var(--text-cream-60)] md:text-[0.75rem]">
        {label}
      </span>
    </>
  );
}

interface AccommodationProps {
  roomCount: number;
  courtyardCount: number;
  heading: string;
  body: string;
  badgeText: string;
  imageSrc?: string;
  emblemSrc?: string;
}

export default function Accommodation({
  roomCount,
  courtyardCount,
  heading,
  badgeText,
  imageSrc = '/design/Home Page/Section 3 - Accomodation/Accomodation-converted-from-jpg.webp',
  emblemSrc = '/design/Home Page/Section 3 - Accomodation/AMBLEM.svg',
}: AccommodationProps) {
  return (
    <section
      id="accommodation"
      className="relative w-full overflow-visible bg-[url('/design/web-noise-bg.svg')] bg-cover bg-center px-[var(--wc-mobile-nav-pad-x)] py-[3.8125rem] md:px-[var(--wc-page-gutter)] md:py-0"
    >
      <div className="grid w-full max-w-[90rem] grid-cols-1 gap-8 md:min-h-[50rem] md:grid-cols-[minmax(0,37rem)_minmax(0,1fr)] md:gap-[2rem]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col pb-8 md:pb-[2.75rem] md:pr-7 md:pt-[4.25rem]"
        >
          <span className="block font-[Pilcrow_Rounded] text-[0.875rem] font-[100] uppercase tracking-[0.12em] text-[rgba(245,241,232,0.55)] md:text-[1.25rem] md:tracking-[0.14em]">
            {badgeText}
          </span>
          <p className="mt-10 font-poppins text-[1.1rem] font-[100] leading-[1.5] text-[var(--text-cream)] md:mt-[2.5rem] md:text-[1.35rem] md:leading-[1.36] md:mb-auto">
            {heading}
          </p>
          <div className="mt-8 w-full max-w-[18.3125rem] md:mt-[3.25rem] md:max-w-[37.375rem]">
            <div className="flex items-baseline justify-between border-b border-b-[rgba(245,241,232,0.25)] py-[1.35rem]">
              <AnimatedStat target={roomCount} suffix="+" label="EXPERIENTIAL ROOMS" />
            </div>
            <div className="flex items-baseline justify-between border-b border-b-[rgba(245,241,232,0.25)] py-[1.35rem]">
              <AnimatedStat target={courtyardCount} suffix="+" label="COURTYARD ROOMS" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative mx-auto mb-0 w-full max-w-[18.5rem] pb-[4.5rem] md:mx-0 md:mb-0 md:max-w-none md:self-start md:px-[3.25rem] md:pb-[2.5rem] md:pt-[5.85rem]"
        >
          <div className="relative ml-auto w-full max-w-[32.375rem]">
            <div className="relative h-[21.8125rem] w-full overflow-hidden rounded-[50%_50%_0_0/42%_42%_0_0] md:h-[36.1875rem]">
              <Image src={imageSrc} alt="WildCalm accommodation room" fill sizes="(max-width: 48em) 296px, 518px" className="object-cover object-[50%_42%] md:object-center" />
            </div>
            <motion.div
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
              className="pointer-events-none absolute bottom-[-7.0625rem] right-[-2.6875rem] z-[3] w-[10.1875rem] md:bottom-[-4.9375rem] md:right-[-6.75rem] md:w-[18.125rem]"
            >
              <Image src={emblemSrc} alt="" width={290} height={271} className="h-auto w-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
