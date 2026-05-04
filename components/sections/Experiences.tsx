'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Experience } from '@/data/homeData';

interface ExperiencesProps {
  experiences: Experience[];
}

export default function Experiences({ experiences }: ExperiencesProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = document.getElementById('experiences');
    if (!section) return;

    let frame = 0;
    const onScroll = () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      frame = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const totalScrollable = Math.max(section.scrollHeight - window.innerHeight, 0);
        const scrolled = Math.min(Math.max(-rect.top, 0), totalScrollable);
        const panelHeight = window.innerHeight;
        const rawIndex = Math.floor((scrolled + panelHeight * 0.35) / panelHeight);
        const nextActive = Math.min(Math.max(rawIndex, 0), experiences.length - 1);
        setActiveIndex(nextActive);
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [experiences.length]);

  return (
    <section id="experiences" className="relative h-[600vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {experiences.map((exp, i) => (
          <ExperiencePanel
            key={exp.id}
            exp={exp}
            isActive={i === activeIndex}
          />
        ))}
      </div>
    </section>
  );
}

interface PanelProps {
  exp: Experience;
  isActive: boolean;
}

function ExperiencePanel({ exp, isActive }: PanelProps) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.5, ease: [0.33, 1, 0.32, 1] }}
      className="absolute inset-0"
    >
      <Image src={exp.image} alt={exp.title} fill sizes="100vw" className="hidden object-cover md:block" />
      <Image src={exp.mobileImage ?? exp.image} alt={exp.title} fill sizes="100vw" className="object-cover md:hidden" />
      <div className="absolute inset-0 bg-black/45 md:bg-black/45" />

      <div className="absolute inset-x-0 bottom-0 flex justify-end px-0 md:px-[7.5rem]">
        <div className="relative w-full border border-white/30 bg-[rgba(245,241,232,0.35)] px-8 pb-5 pt-14 backdrop-blur-[20px] md:mb-[6.5rem] md:h-[28.125rem] md:w-[40.4375rem] md:rounded-[1.5625rem] md:px-[4.25rem] md:pb-11 md:pt-[3.25rem]">
          <div className="absolute right-8 top-4 flex items-center gap-2 font-[Pilcrow_Rounded] text-[0.875rem] uppercase text-[#f5f1e8] md:right-[2.9rem] md:top-[2.2rem] md:text-[1.25rem] md:normal-case">
            <Image src="/design/Home Page/Section 4 - Experiences/experiences icon.svg" alt="" width={20} height={20} className="h-[0.8125rem] w-[0.8125rem] md:h-5 md:w-5" />
            <span>EXPERIENCES</span>
          </div>
          <h2 className="mt-0 max-w-[33rem] font-poppins text-[1.25rem] font-[400] leading-[1.875rem] text-[#f5f1e8] md:mt-[4.15rem] md:text-[2rem] md:font-[100]">
            {exp.title}
          </h2>
          <p className="mb-0 mt-2 max-w-[18.5rem] text-justify font-poppins text-[0.75rem] font-[200] leading-[1rem] text-[#f5f1e8] md:mt-[2.4rem] md:max-w-[34rem] md:text-left md:text-[1.125rem] md:leading-[1.78] md:text-[#f4f0e8]">
            {exp.description}
          </p>
          <a href="#faq" className="mt-3 inline-flex w-fit flex-col font-[Pilcrow_Rounded] text-[0.875rem] uppercase leading-[1.875rem] text-[#f5f1e8] md:mt-6 md:text-[1.25rem]">
            EXPLORE MORE
            <span className="mt-[0.125rem] h-px w-full bg-[#f5f1e8]" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
