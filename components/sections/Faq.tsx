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
      className="relative w-full bg-[#fcfaf4] py-[clamp(2.5rem,7vw,3.75rem)] "
    >
      <div className="mx-auto grid w-full gap-y-8 min-h-[min(54rem,90dvh)] grid-cols-[minmax(0,min(42%,26rem))_minmax(0,1fr)] items-start gap-y-[2rem] py-[clamp(3.5rem,6vw,9.375rem)] pb-[clamp(3.5rem,5vw,4.75rem)]">
      <div className="min-w-0 max-w-none">
        <span className="block font-sans text-[0.875rem] uppercase text-[#697a61] ">
          FREQUENTLY ASKED QUESTIONS
        </span>
        <h2 className="mt-[1.875rem] font-sans font-[200] text-[clamp(1.375rem,6vw,1.75rem)] text-[#697a61] ">
          Thoughtful answers
          <br />
          to considered questions
        </h2>
        <p className="mt-[1.125rem] font-sans text-[1.125rem] font-[200] text-[#697a61] max-w-none">
          From planning your safari to celebrating a milestone - a quiet note on the questions we hear most often.
        </p>
      </div>

      <div className="mt-8 border-t border-t-[rgba(101,120,94,0.14)] mt-0 border-t-0">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div key={faq.id} className="border-b border-b-[rgba(101,120,94,0.14)]">
              <button
                onClick={() => onToggle(faq.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${faq.id}`}
                className="flex min-h-0 w-full items-center justify-between gap-4 py-4 text-left font-sans text-[clamp(0.8rem,3.5vw,0.875rem)] font-[400] text-[#65785e] "
              >
                <span>{faq.question}</span>
                <motion.svg
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.18 }}
                  className="h-auto w-5 shrink-0 "
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
                    <p className="pb-4 font-sans text-[clamp(0.75rem,3.5vw,0.875rem)] font-[200] text-[#65785e] whitespace-pre-line ">
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
