'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

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

  return (
    <section id="events" className="relative w-full overflow-hidden bg-[#fcfaf4]">
      {/* MOBILE */}
      <div className="flex flex-col py-[clamp(2.75rem,8vw,4rem)] ">
        <h2 className="m-0 w-full font-sans text-[clamp(1.5rem,7.5vw,1.75rem)] font-[200] text-[#697a61]">
          {sectionHeading}
        </h2>
        <div className="mt-[clamp(2rem,6vw,3rem)] space-y-[clamp(0.875rem,3vw,1.125rem)]">
          {blocks.map((block) => (
            <div key={block.heading} className="relative h-[clamp(14.25rem,58vw,15.75rem)] w-full overflow-hidden rounded-[clamp(1.5rem,5vw,2rem)]">
              <Image src={block.imageSrc} alt={block.imageAlt} fill sizes="100vw" className="object-cover" />
            </div>
          ))}
        </div>
        <p className="mb-[clamp(1rem,3vw,1.25rem)] mt-[clamp(1.5rem,5vw,2rem)] w-full font-sans text-[clamp(0.75rem,3.5vw,0.875rem)] font-[200] text-[#697a61]">
          {firstBlock.body}
        </p>
        <a href={firstBlock.ctaHref ?? '#faq'} className="inline-flex w-fit flex-col font-sans text-[0.875rem] uppercase text-[#65785e]">
          {firstBlock.ctaLabel ?? 'MORE ABOUT US'}
          <span className="mt-[0.125rem] h-px w-full bg-[#6b7c6a]/60" />
        </a>
      </div>

      {/* DESKTOP — asymmetric floating layout */}
      <div className="relative hidden min-h-[clamp(52rem,min(72vh,64rem),64rem)] py-[clamp(4rem,9dvh,7rem)] ">

        {/* LEFT FLOATING IMAGE — starts near top of section */}
        <div className="absolute left-[clamp(4%,8vw,14%)] top-[clamp(1.5rem,4vh,3rem)] z-[2] overflow-hidden rounded-[1.25rem] ">
          <Image src={firstBlock.imageSrc} alt={firstBlock.imageAlt} fill sizes="288px" className="object-cover" />
        </div>

        {/* RIGHT FLOATING IMAGE — staggered lower, aligned with block 2 area */}
        <div className="absolute right-[clamp(4%,8vw,14%)] top-[clamp(16rem,min(30vh,38vw),26rem)] z-[2] overflow-hidden rounded-[1.25rem] ">
          <Image src={secondBlock.imageSrc} alt={secondBlock.imageAlt} fill sizes="320px" className="object-cover" />
        </div>

        {/* CENTER CONTENT */}
        <div className="relative z-[1] mx-auto flex w-full max-w-[min(34rem,88vw)] flex-col items-center text-center ">

          {/* BLOCK 1 */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-[5rem]"
          >
            <h2 className="mb-[1.5rem] font-sans font-[200] text-[clamp(1.625rem,4vw+1rem,2.25rem)] text-[#697a61] ">
              {firstBlock.heading}
            </h2>
            <p className="mx-auto mb-[1.875rem] font-sans text-[clamp(0.9rem,2.5vw,1.0625rem)] font-[200] text-[rgba(105,122,97,0.7)] text-[clamp(1rem,calc(0.55vw+0.9rem),1.125rem)] ">
              {firstBlock.body}
            </p>
            <a href={firstBlock.ctaHref ?? '#faq'} className="inline-flex flex-col items-center font-sans text-[0.875rem] uppercase text-[#65785e]">
              {firstBlock.ctaLabel ?? 'MORE ABOUT US'}
              <span className="mt-[0.25rem] h-px w-full bg-[#6b7c6a]/60" />
            </a>
          </motion.div>

          {/* BLOCK 2 */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="mb-[1.5rem] font-sans font-[200] text-[clamp(1.625rem,4vw+1rem,2.25rem)] text-[#697a61] ">
              {secondBlock.heading}
            </h2>
            <p className="mx-auto mb-[1.875rem] font-sans text-[clamp(0.9rem,2.5vw,1.0625rem)] font-[200] text-[rgba(105,122,97,0.7)] text-[clamp(1rem,calc(0.55vw+0.9rem),1.125rem)] ">
              {secondBlock.body}
            </p>
            <a href={secondBlock.ctaHref ?? '#faq'} className="inline-flex flex-col items-center font-sans text-[0.875rem] uppercase text-[#65785e]">
              {secondBlock.ctaLabel ?? 'MORE ABOUT US'}
              <span className="mt-[0.25rem] h-px w-full bg-[#6b7c6a]/60" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
