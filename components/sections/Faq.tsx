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
    <section id="faq" className="relative w-full bg-[#fcfaf4] px-[var(--wc-mobile-nav-pad-x)] py-[clamp(2.5rem,7vw,3.75rem)] md:grid md:min-h-[50rem] md:grid-cols-[32.875rem_40.75rem] md:justify-center md:gap-x-[4.875rem] md:px-[7.375rem] md:pb-[4.75rem] md:pt-[9.375rem]">
      <div className="max-w-[32.875rem]">
        <span className="block font-[Pilcrow_Rounded] text-[0.875rem] uppercase tracking-[0.14em] text-[#697a61] md:text-[1.25rem] md:normal-case md:tracking-normal">
          FREQUENTLY ASKED QUESTIONS
        </span>
        <h2 className="mt-[1.875rem] font-poppins text-[clamp(1.375rem,6vw,1.75rem)] font-[200] leading-[clamp(1.875rem,8vw,2.375rem)] text-[#697a61] md:text-[2.375rem] md:leading-[3.3125rem]">
          Thoughtful answers
          <br />
          to considered questions
        </h2>
        <p className="mt-[1.125rem] max-w-[25.9375rem] font-poppins text-[1.125rem] font-[200] leading-[1.625rem] text-[#697a61]">
          From planning your safari to celebrating a milestone - a quiet note on the questions we hear most often.
        </p>
      </div>

      <div className="mt-8 border-t border-t-[rgba(101,120,94,0.14)] md:mt-0 md:border-t-0">
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
                <span className="max-w-[38.375rem]">{faq.question}</span>
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
                    <p className="pb-4 font-poppins text-[clamp(0.75rem,3.5vw,0.875rem)] font-[200] leading-[clamp(1rem,4.5vw,1.25rem)] text-[#65785e] whitespace-pre-line md:max-w-[33.25rem] md:pb-[1.125rem] md:text-[1rem] md:leading-[1.625rem] md:text-[rgba(101,120,94,0.9)]">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
