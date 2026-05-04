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
      <div className="flex flex-col px-[var(--wc-mobile-nav-pad-x)] py-[clamp(2.75rem,8vw,4rem)] md:hidden">
        <span className="mb-[clamp(1.5rem,5vw,2.25rem)] font-[Pilcrow_Rounded] text-[0.875rem] uppercase tracking-[0.14em] text-[#697a61]">
          {label}
        </span>
        <h2 className="m-0 max-w-[19rem] font-poppins text-[clamp(1.5rem,7.5vw,1.75rem)] font-[200] leading-[clamp(2rem,10vw,2.375rem)] text-[#697a61]">
          {sectionHeading}
        </h2>
        <div className="mt-[clamp(2rem,6vw,3rem)] space-y-[clamp(0.875rem,3vw,1.125rem)]">
          {blocks.map((block) => (
            <div key={block.heading} className="relative h-[clamp(14.25rem,58vw,15.75rem)] w-full overflow-hidden rounded-[clamp(1.5rem,5vw,2rem)]">
              <Image src={block.imageSrc} alt={block.imageAlt} fill sizes="100vw" className="object-cover" />
            </div>
          ))}
        </div>
        <p className="mb-[clamp(1rem,3vw,1.25rem)] mt-[clamp(1.5rem,5vw,2rem)] max-w-[18.75rem] font-poppins text-[0.75rem] font-[200] leading-[1rem] text-[#697a61]">
          {firstBlock.body}
        </p>
        <a href={firstBlock.ctaHref ?? '#faq'} className="inline-flex w-fit flex-col font-[Pilcrow_Rounded] text-[0.875rem] uppercase leading-[1.875rem] tracking-[0.06em] text-[#65785e]">
          {firstBlock.ctaLabel ?? 'MORE ABOUT US'}
          <span className="mt-[0.125rem] h-px w-full bg-[#6b7c6a]/60" />
        </a>
      </div>

      <div className="relative hidden md:block">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex h-[42.625rem] items-center justify-center"
        >
          <div className="w-full max-w-[45.9375rem] text-center">
            <span className="mb-7 block font-poppins text-[0.75rem] uppercase tracking-[0.32em] text-[rgba(59,77,56,0.45)]">
              {label}
            </span>
            <h2 className="mb-[1.875rem] font-poppins text-[2.375rem] font-[200] leading-[3.0125rem] text-[#697a61]">
              {firstBlock.heading}
            </h2>
            <p className="mx-auto mb-[2.1875rem] max-w-[22.725rem] font-poppins text-[1.125rem] font-[200] leading-[1.625rem] text-[rgba(105,122,97,0.72)]">
              {firstBlock.body}
            </p>
            <a href={firstBlock.ctaHref ?? '#faq'} className="inline-flex flex-col font-[Pilcrow_Rounded] text-[1.25rem] uppercase text-[#65785e]">
              {firstBlock.ctaLabel ?? 'MORE ABOUT US'}
              <span className="mt-[0.375rem] h-px w-full bg-[#6b7c6a]/60" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="flex h-[42.625rem] items-center justify-center"
        >
          <div className="w-full max-w-[45.9375rem] text-center">
            <h2 className="mb-[1.875rem] font-poppins text-[2.375rem] font-[200] leading-[3.0125rem] text-[#697a61]">
              {secondBlock.heading}
            </h2>
            <p className="mx-auto mb-[2.1875rem] max-w-[22.725rem] font-poppins text-[1.125rem] font-[200] leading-[1.625rem] text-[rgba(105,122,97,0.72)]">
              {secondBlock.body}
            </p>
            <a href={secondBlock.ctaHref ?? '#faq'} className="inline-flex flex-col font-[Pilcrow_Rounded] text-[1.25rem] uppercase text-[#65785e]">
              {secondBlock.ctaLabel ?? 'MORE ABOUT US'}
              <span className="mt-[0.375rem] h-px w-full bg-[#6b7c6a]/60" />
            </a>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute left-[var(--wc-page-gutter)] top-[33.05%] z-[1] h-[22.5625rem] w-[18rem] overflow-hidden rounded-[1.125rem]">
          <Image src={firstBlock.imageSrc} alt="" fill sizes="288px" className="object-cover" />
        </div>
        <div className="pointer-events-none absolute right-[var(--wc-page-gutter)] top-[51.75%] z-[1] h-[22.5625rem] w-[18rem] overflow-hidden rounded-[1.125rem]">
          <Image src={secondBlock.imageSrc} alt="" fill sizes="288px" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
