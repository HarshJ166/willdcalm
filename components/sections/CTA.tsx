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
    <section id="plan" className="relative w-full overflow-hidden bg-[#f5f1e8] md:h-[38.75rem]">
      <div className="absolute inset-0 hidden md:block">
        <Image src={imageSrc} alt="Lion at Sasan Gir" fill sizes="100vw" className="object-cover object-[22%_center] brightness-95 contrast-90 saturate-[0.86]" />
      </div>
      <div className="absolute inset-0 hidden bg-gradient-to-r from-[rgba(74,92,63,0.03)] via-[rgba(74,92,63,0.28)] to-[rgba(74,92,63,0.64)] md:block" />
      <div className="absolute inset-0 hidden bg-[radial-gradient(45%_52%_at_52%_56%,rgba(198,210,190,0.16)_0%,rgba(198,210,190,0.08)_38%,rgba(198,210,190,0)_72%)] md:block" />

      <div className="relative z-[3] flex flex-col md:absolute md:left-[60%] md:top-1/2 md:w-[min(40%,36.6875rem)] md:-translate-y-1/2">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[var(--wc-cta-mobile-panel)] px-[var(--wc-mobile-nav-pad-x)] pb-12 pt-[3.875rem] md:bg-transparent md:px-0 md:pb-0 md:pt-0"
        >
          <blockquote className="max-w-[19.4375rem] font-poppins text-[1.75rem] font-[200] leading-[2.375rem] text-[#f5f1e8] md:max-w-none md:text-[clamp(3.25rem,5vw,4.875rem)] md:leading-[1.18]">
            {quote}
          </blockquote>
          {quoteAuthor ? (
            <cite className="mt-2 block font-poppins text-[0.875rem] font-[300] uppercase not-italic tracking-[0.08em] text-[rgba(245,241,232,0.78)] md:text-[1rem]">
              {quoteAuthor}
            </cite>
          ) : null}
          <a href={ctaHref} className="mt-[3.25rem] inline-flex w-fit flex-col font-[Pilcrow_Rounded] text-[0.875rem] uppercase leading-[1.875rem] tracking-[0.06em] text-[#f5f1e8] md:mt-12 md:text-[1.25rem] md:tracking-normal">
            PLAN YOUR STAY
            <span className="h-px w-full bg-[#f5f1e8] opacity-80" />
          </a>
        </motion.div>
        <div className="relative h-[22rem] w-screen max-w-[100vw] md:hidden">
          <Image src={imageSrc} alt="Lion at Sasan Gir" fill sizes="100vw" className="object-cover object-[20%_center]" />
        </div>
      </div>
    </section>
  );
}
