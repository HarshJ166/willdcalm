'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface CTAProps {
  quote: string;
  quoteAuthor?: string;
  imageSrc: string;
  ctaHref?: string;
}

export default function CTA({ quote, quoteAuthor, imageSrc, ctaHref = '#faq' }: CTAProps) {
  return (
    <section id="plan" className="relative w-full overflow-hidden bg-[#556b4d] min-h-[clamp(38rem,55vh,48rem)]">

      {/* Background lion image — desktop only, fills full section */}
      <div className="absolute inset-0 hidden block">
        <Image
          src={imageSrc}
          alt="Lion at Sasan Gir"
          fill
          sizes="100vw"
          className="object-cover object-[18%_center]"
          priority={false}
        />
      </div>

      {/* Gradient: solid sage-green on right, fades to transparent towards left — desktop only */}
      <div className="absolute inset-0 hidden block" style={{ background: 'linear-gradient(to left, rgb(85,107,77) 8%, rgba(85,107,77,0.96) 18%, rgba(85,107,77,0.72) 40%, rgba(85,107,77,0) 72%)' }} />

      {/* Desktop: text panel — right half */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-[3] hidden absolute flex top-1/2 left-1/2 flex-col -translate-y-1/2 translate-x-[clamp(0.5rem,5vw,6rem)]"
      >
        <blockquote className="font-sans font-[200] text-[#f5f1e8] ">
          {quote}
        </blockquote>
        {quoteAuthor && (
          <cite className="mt-2 block font-sans text-[0.875rem] font-[300] uppercase not-italic text-[rgba(245,241,232,0.78)]">
            {quoteAuthor}
          </cite>
        )}
        <a href={ctaHref} className="mt-[3.25rem] inline-flex w-fit flex-col font-sans text-[1.25rem] uppercase text-[#f5f1e8]">
          PLAN YOUR STAY
          <span className="h-px w-full bg-[#f5f1e8] opacity-80" />
        </a>
      </motion.div>

      {/* Mobile/Tablet: text on top, image below */}
      <div className="flex flex-col hidden">
        <div className="bg-[#65785E] pb-12 pt-[3.875rem]">
          <blockquote className="w-full font-sans text-[clamp(1.375rem,6vw,1.75rem)] font-[100] text-[#f5f1e8]">
            {quote}
          </blockquote>
          {quoteAuthor && (
            <cite className="mt-2 block font-sans text-[0.875rem] font-[200] uppercase not-italic text-[rgba(245,241,232,0.78)]">
              {quoteAuthor}
            </cite>
          )}
          <a href={ctaHref} className="mt-[3.25rem] inline-flex w-fit flex-col font-sans text-[0.875rem] uppercase text-[#f5f1e8]">
            PLAN YOUR STAY
            <span className="h-px w-full bg-[#f5f1e8] opacity-80" />
          </a>
        </div>
        <div className="relative aspect-[390/352] w-full overflow-hidden">
          <Image src={imageSrc} alt="Lion at Sasan Gir" fill sizes="100vw" className="object-cover object-[20%_center]" />
        </div>
      </div>

    </section>
  );
}
