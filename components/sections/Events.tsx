'use client';

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

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Events({ label, sectionHeading, blocks }: EventsProps) {
  return (
    <section id="events" className="bg-cream py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-14 md:mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="block text-xs tracking-[0.3em] uppercase text-sage font-medium"
        >
          {label}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.08 }}
          className="text-2xl sm:text-3xl md:text-4xl font-light text-forest"
        >
          {sectionHeading}
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto space-y-14 sm:space-y-20 md:space-y-24">
        {blocks.map((block, i) => (
          <div
            key={block.heading}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center"
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className={`aspect-4/3 overflow-hidden rounded-sm ${i % 2 !== 0 ? 'lg:order-2' : ''}`}
            >
              <img
                src={block.imageSrc}
                alt={block.imageAlt}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: 0.15 }}
              className={`space-y-4 sm:space-y-5 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-forest leading-snug">
                {block.heading}
              </h3>
              <p className="text-sm text-forest/60 leading-relaxed">{block.body}</p>
              <a
                href={block.ctaHref ?? '#faq'}
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-sage hover:text-forest transition-colors border-b border-sage hover:border-forest pb-0.5"
              >
                {block.ctaLabel ?? 'More About Us'}
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
