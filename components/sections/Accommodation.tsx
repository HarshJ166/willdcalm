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
        className="min-w-[4rem] font-sans text-[3rem] font-[200] leading-none tabular-nums "
      >
        0{suffix}
      </span>
      <span className="text-right font-sans text-[0.875rem] font-[400] uppercase text-[#F5F1E8] ">
        {label}
      </span>
    </>
  );
}

interface AccommodationProps {
  roomCount: number;
  courtyardCount: number;
  body: string;
  badgeText: string;
  imageSrc?: string;
  emblemSrc?: string;
  heading: React.ReactNode;
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
      className="relative w-full overflow-hidden bg-[#546950] bg-['#546950')] bg-cover bg-center py-[3.8125rem] "
    >
        <div className="mx-auto grid w-full grid-cols-1 min-h-[52rem] gap-[clamp(1.5rem,3vw,3.25rem)] ">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col pb-8 "
        >
          <span className="block font-sans text-[0.875rem] font-[400] uppercase ">
            {badgeText}
          </span>
          <p className="mt-[2.5rem] font-sans text-[1.75rem] font-[200] ">
            {heading}
          </p>
          <div className="mt-[clamp(2rem,8dvh,4rem)] w-full ">
            <div className="flex items-baseline justify-between border-b py-[1.35rem]">
              <AnimatedStat target={roomCount} suffix="+" label="EXPERIENTIAL ROOMS" />
            </div>
            <div className="flex items-baseline justify-between border-b py-[1.35rem]">
              <AnimatedStat target={courtyardCount} suffix="+" label="COURTYARD ROOMS" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative mx-auto mb-0 w-full pb-[4.5rem] pl-[2.25rem] pr-[clamp(3rem,5vw,4.75rem)] pb-[clamp(2.5rem,4vw,3.5rem)] pt-[clamp(2.5rem,4vw,3.5rem)]"
        >
            <div className="relative mx-auto w-full ">
            <div className="relative aspect-[296/349] w-full overflow-hidden rounded-[50%_50%_0_0/42%_42%_0_0] ">
              <Image src={imageSrc} alt="WildCalm accommodation room" fill sizes="(max-width: 48em) 296px, 518px" className="object-cover object-[50%_42%] " />
            </div>
            <motion.div
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
              className="pointer-events-none absolute bottom-[-4.125rem] right-[-2.6875rem] z-[3] w-[10.1875rem] "
            >
              <Image src={emblemSrc} alt="" width={290} height={271} className="h-auto w-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
