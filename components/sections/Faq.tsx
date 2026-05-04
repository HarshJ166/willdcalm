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
    <section id="faq" className="bg-cream py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12">
        {/* Left */}
        <div className="lg:col-span-2 space-y-3 sm:space-y-4">
          <span className="text-xs tracking-[0.3em] uppercase text-sage font-medium">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-forest leading-snug">
            Thoughtful answers
            <br />
            to considered questions
          </h2>
          <p className="text-sm text-forest/60 leading-relaxed max-w-xs">
            From planning your safari to celebrating a milestone — a quiet note on the questions we
            hear most often.
          </p>
        </div>

        {/* Accordion */}
        <div className="lg:col-span-3 divide-y divide-sage/20">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id}>
                <button
                  onClick={() => onToggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${faq.id}`}
                  className="w-full flex items-start justify-between gap-4 py-4 sm:py-5 text-left"
                >
                  <span className="text-sm md:text-base font-light text-forest leading-snug">
                    {faq.question}
                  </span>
                  <motion.svg
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 mt-1 text-sage"
                  >
                    <path
                      d="M1 1L7 7L13 1"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
                      <p className="pb-4 sm:pb-5 text-sm text-forest/60 leading-relaxed whitespace-pre-line">
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
