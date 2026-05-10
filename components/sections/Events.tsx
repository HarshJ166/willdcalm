'use client';

import Image from 'next/image';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface EventBlock {
  heading: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  ctaHref?: string;
  ctaLabel?: string;
}

interface EventsProps {
  label: string;
  sectionHeading: string;
  blocks: [EventBlock, EventBlock];
}

export default function Events({ label, sectionHeading, blocks }: EventsProps) {
  const [firstBlock, secondBlock] = blocks;
  const firstSectionRef = useRef<HTMLDivElement>(null);
  const secondSectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: firstScroll } = useScroll({
    target: firstSectionRef,
    offset: ['start start', 'end end'],
  });

  const { scrollYProgress: secondScroll } = useScroll({
    target: secondSectionRef,
    offset: ['start start', 'end end'],
  });

  const leftImageYRaw = useTransform(firstScroll, [0, 0.85], ['220%', '140%']);
  const rightImageYRaw = useTransform(secondScroll, [0.35, 1], ['140%', '-10%']);
  const leftImageY = useSpring(leftImageYRaw, { stiffness: 70, damping: 26, mass: 0.7 });
  const rightImageY = useSpring(rightImageYRaw, { stiffness: 70, damping: 26, mass: 0.7 });

  return (
    <section id="events" className="relative w-full bg-[#fcfaf4]">
      {/* ── MOBILE ── */}
      <div className="flex flex-col px-[var(--wc-mobile-nav-pad-x)] py-[clamp(2.75rem,8vw,4rem)] md:hidden">
        <h2 className="m-0 w-full font-poppins text-[clamp(1.5rem,7.5vw,1.75rem)] font-[200] leading-[clamp(2rem,10vw,2.375rem)] text-[#697a61]">
          {sectionHeading}
        </h2>
        <div className="mt-[clamp(2rem,6vw,3rem)] space-y-[clamp(0.875rem,3vw,1.125rem)]">
          {blocks.map((block) => (
            <div
              key={block.heading}
              className="relative h-[clamp(14.25rem,58vw,15.75rem)] w-full overflow-hidden rounded-[clamp(1.5rem,5vw,2rem)]"
            >
              <Image
                src={block.imageSrc}
                alt={block.imageAlt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <p className="mb-[clamp(1rem,3vw,1.25rem)] mt-[clamp(1.5rem,5vw,2rem)] w-full font-poppins text-[clamp(0.75rem,3.5vw,0.875rem)] font-[200] leading-[clamp(1rem,4.5vw,1.25rem)] text-[#697a61]">
          {firstBlock.body}
        </p>
        <a
          href={firstBlock.ctaHref ?? '#faq'}
          className="inline-flex w-fit flex-col font-[Pilcrow_Rounded] text-[0.875rem] uppercase leading-[1.875rem] tracking-[0.06em] text-[#65785e]"
        >
          {firstBlock.ctaLabel ?? 'MORE ABOUT US'}
          <span className="mt-[0.125rem] h-px w-full bg-[#6b7c6a]/60" />
        </a>
      </div>

      {/* ── DESKTOP — separate sticky sections (no swap) */}
      <div className="hidden md:block">
        {/* SECTION 1 - Wedding */}
        <div ref={firstSectionRef} className="relative h-[110vh]">
          <div className="sticky top-0 flex h-[90vh] items-center justify-center text-center">
            <div className="mx-auto flex max-w-[30rem] flex-col items-center">
              <h2 className="font-poppins text-[2.375rem] font-[200] leading-[3.3125rem] text-[#697a61]">
                 Celebrate Your <span className="whitespace-nowrap">Wedding with Timeless</span> Grace and Elegance
              </h2>
              <p className="mx-auto mt-[1.25rem] font-poppins text-[1.125rem] font-[200] leading-[1.625rem] text-[rgba(105,122,97,0.7)]">
                From intimate ceremonies to grand wedding celebrations, every moment is thoughtfully curated with refined details, bespoke arrangements, and seamless hospitality, set against a serene backdrop for truly unforgettable memories.
              </p>
              <a
                href={firstBlock.ctaHref ?? '#faq'}
                className="mt-[1.875rem] inline-flex flex-col items-center font-[Pilcrow_Rounded] text-[1.25rem] uppercase tracking-[0.06em] text-[#65785e]"
              >
                MORE ABOUT US
                <span className="mt-[0.25rem] h-[0.0625rem] w-full bg-[#6b7c6a]/60" />
              </a>
            </div>
          </div>
          <motion.div
            style={{ y: leftImageY }}
            className="absolute left-[7%] top-[2rem] z-[2] h-[22.5rem] w-[18rem] overflow-hidden rounded-[1.25rem]"
          >
            <Image
              src={firstBlock.imageSrc}
              alt={firstBlock.imageAlt}
              fill
              sizes="288px"
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* SECTION 2 - Corporate Retreats */}
        <div ref={secondSectionRef} className="relative h-[130vh]">
          <div className="sticky top-0 flex h-[100vh] items-center justify-center text-center">
            <div className="mx-auto flex max-w-[34rem] flex-col items-center">
                <h2 className="max-w-[48rem] font-poppins text-[2.375rem] font-[200] leading-[3.3125rem] text-[#697a61]">
                   Corporate Retreats <span className="block whitespace-nowrap">in a Serene and Elegant</span> Destination Setting
              </h2>
              <p className="mx-auto mt-[1.25rem] max-w-[30rem] font-poppins text-[1.125rem] font-[200] leading-[1.625rem] text-[rgba(105,122,97,0.7)]">
                Host meaningful gatherings where refined spaces, natural surroundings, and seamless hospitality come together to create truly memorable and effortlessly elevated experiences, thoughtfully designed with attention to every detail.
              </p>
              <a
                href={secondBlock.ctaHref ?? '#faq'}
                className="mt-[1.875rem] inline-flex flex-col items-center font-[Pilcrow_Rounded] text-[1.25rem] uppercase tracking-[0.06em] text-[#65785e]"
              >
                MORE ABOUT US
                <span className="mt-[0.25rem] h-[0.0625rem] w-full bg-[#6b7c6a]/60" />
              </a>
            </div>
          </div>
          <motion.div
            style={{ y: rightImageY }}
            className="absolute right-[8%] top-[20rem] z-[2] h-[22.5rem] w-[20rem] overflow-hidden rounded-[1.25rem]"
          >
            <Image
              src={secondBlock.imageSrc}
              alt={secondBlock.imageAlt}
              fill
              sizes="320px"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}