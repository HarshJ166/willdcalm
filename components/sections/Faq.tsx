'use client';

import { AnimatePresence, motion } from 'framer-motion';
import type { FaqItem } from '@/data/homeData';

interface FaqProps {
  faqs: FaqItem[];
  openId: string | null;
  onToggle: (id: string) => void;
}

export default function Faq({ faqs, openId, onToggle }: FaqProps) {
  return (
    <section
      id="faq"
      className="relative w-full bg-[#fcfaf4] px-[var(--wc-mobile-nav-pad-x)] py-[clamp(2.5rem,7vw,3.75rem)] md:px-[var(--wc-page-gutter)] md:py-[clamp(3.75rem,8vw,5rem)]"
    >
      <div className="mx-auto grid w-full max-w-[var(--wc-shell-max)] gap-y-8 lg:min-h-[min(54rem,90dvh)] lg:grid-cols-[minmax(0,min(42%,26rem))_minmax(0,1fr)] lg:items-start lg:gap-x-[var(--wc-section-gap-fluid)] lg:gap-y-[2rem] lg:py-[clamp(3.5rem,6vw,9.375rem)] lg:pb-[clamp(3.5rem,5vw,4.75rem)]">
      <div className="min-w-0 lg:max-w-none">
        <span className="block font-[Pilcrow_Rounded] text-[0.875rem] uppercase tracking-[0.14em] text-[#697a61] md:text-[1.25rem] md:normal-case md:tracking-normal">
          FREQUENTLY ASKED QUESTIONS
        </span>
        <h2 className="mt-[1.875rem] font-poppins font-[200] text-[clamp(1.375rem,6vw,1.75rem)] leading-[clamp(1.875rem,8vw,2.375rem)] text-[#697a61] md:text-[var(--wc-section-h2)] md:leading-[var(--wc-section-h2-leading)]">
          Thoughtful answers
          <br />
          to considered questions
        </h2>
        <p className="mt-[1.125rem] max-w-[var(--wc-prose-wide)] font-poppins text-[1.125rem] font-[200] leading-[1.625rem] text-[#697a61] lg:max-w-none">
          From planning your safari to celebrating a milestone - a quiet note on the questions we hear most often.
        </p>
      </div>

      <div className="mt-8 border-t border-t-[rgba(101,120,94,0.14)] lg:mt-0 lg:border-t-0">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div key={faq.id} className="border-b border-b-[rgba(101,120,94,0.14)]">
              <button
                onClick={() => onToggle(faq.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${faq.id}`}
                className="flex min-h-0 w-full items-center justify-between gap-4 py-4 text-left font-poppins text-[clamp(0.8rem,3.5vw,0.875rem)] font-[400] leading-[1.4] text-[#65785e] md:min-h-[4.5rem] md:py-3 md:text-[1.25rem] md:font-[300]"
              >
                <span className="max-w-[min(42rem,calc(var(--wc-shell-max)*0.45))]">{faq.question}</span>
                <motion.svg
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.18 }}
                  className="h-auto w-5 shrink-0 md:h-2 md:w-4"
                >
                  <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-panel-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pb-4 font-poppins text-[clamp(0.75rem,3.5vw,0.875rem)] font-[200] leading-[clamp(1rem,4.5vw,1.25rem)] text-[#65785e] whitespace-pre-line md:max-w-[min(43rem,calc(var(--wc-shell-max)*0.42))] md:pb-[1.125rem] md:text-[1rem] md:leading-[1.625rem] md:text-[rgba(101,120,94,0.9)]">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}
