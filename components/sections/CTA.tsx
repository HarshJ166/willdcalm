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
    <section id="plan" className="relative w-full overflow-hidden bg-[#556b4d] lg:min-h-[clamp(38rem,55vh,48rem)]">

      {/* Background lion image — desktop only, fills full section */}
      <div className="absolute inset-0 hidden lg:block">
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
      <div className="absolute inset-0 hidden lg:block" style={{ background: 'linear-gradient(to left, rgb(85,107,77) 8%, rgba(85,107,77,0.96) 18%, rgba(85,107,77,0.72) 40%, rgba(85,107,77,0) 72%)' }} />

      {/* Desktop: text panel — right half */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-[3] hidden lg:absolute lg:flex lg:top-1/2 lg:left-1/2 lg:w-[var(--wc-cta-panel-w)] lg:flex-col lg:-translate-y-1/2 lg:translate-x-[clamp(0.5rem,5vw,6rem)]"
      >
        <blockquote className="font-poppins font-[200] text-[#f5f1e8] lg:text-[var(--wc-section-h2)] lg:leading-[var(--wc-section-h2-leading)]">
          {quote}
        </blockquote>
        {quoteAuthor && (
          <cite className="mt-2 block font-poppins text-[0.875rem] font-[300] uppercase not-italic tracking-[0.08em] text-[rgba(245,241,232,0.78)]">
            {quoteAuthor}
          </cite>
        )}
        <a href={ctaHref} className="mt-[3.25rem] inline-flex w-fit flex-col font-[Pilcrow_Rounded] text-[1.25rem] uppercase leading-[1.875rem] text-[#f5f1e8]">
          PLAN YOUR STAY
          <span className="h-px w-full bg-[#f5f1e8] opacity-80" />
        </a>
      </motion.div>

      {/* Mobile/Tablet: text on top, image below */}
      <div className="flex flex-col lg:hidden">
        <div className="bg-[#65785E] px-[var(--wc-mobile-nav-pad-x)] pb-12 pt-[3.875rem]">
          <blockquote className="w-full font-poppins text-[clamp(1.375rem,6vw,1.75rem)] font-[100] leading-[clamp(1.875rem,8vw,2.375rem)] text-[#f5f1e8]">
            {quote}
          </blockquote>
          {quoteAuthor && (
            <cite className="mt-2 block font-poppins text-[0.875rem] font-[200] uppercase not-italic tracking-[0.08em] text-[rgba(245,241,232,0.78)]">
              {quoteAuthor}
            </cite>
          )}
          <a href={ctaHref} className="mt-[3.25rem] inline-flex w-fit flex-col font-[Pilcrow_Rounded] text-[0.875rem] uppercase leading-[1.875rem] tracking-[0.06em] text-[#f5f1e8]">
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
