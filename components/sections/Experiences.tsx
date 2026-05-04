'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import type { Experience } from '@/data/homeData';

interface ExperiencesProps {
  experiences: Experience[];
}

export default function Experiences({ experiences }: ExperiencesProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      ref={sectionRef}
      id="experiences"
      style={{ height: `${experiences.length * 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {experiences.map((exp, i) => (
          <ExperiencePanel
            key={exp.id}
            exp={exp}
            index={i}
            total={experiences.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

interface PanelProps {
  exp: Experience;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}

function ExperiencePanel({ exp, index, total, scrollYProgress }: PanelProps) {
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.05, end - 0.05, end],
    [0, 1, 1, 0]
  );

  const isFirst = index === 0;

  return (
    <motion.div
      style={{
        opacity: isFirst ? undefined : opacity,
        backgroundImage: `url('${exp.image}')`,
        position: 'absolute',
        inset: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: index + 1,
      }}
      className={isFirst ? 'opacity-100' : ''}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest/70 to-transparent" />

      {/* Card */}
      <div className="absolute left-8 md:left-16 bottom-16 md:bottom-20 max-w-sm space-y-4">
        <div className="flex items-center gap-2">
          <img
            src="/design/Home Page/Section 4 - Experiences/experiences icon.svg"
            alt=""
            width={13}
            height={13}
          />
          <span className="text-xs tracking-[0.3em] uppercase text-cream/70">Experiences</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-cream">{exp.title}</h2>
        <p className="text-sm text-cream/70 leading-relaxed">{exp.description}</p>
        <a
          href="#faq"
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-cream/80 hover:text-cream transition-colors"
        >
          Explore More
          <span className="block w-8 h-px bg-cream/60" />
        </a>
      </div>
    </motion.div>
  );
}
