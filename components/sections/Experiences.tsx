'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { Experience } from '@/data/homeData';

interface ExperiencesProps {
  experiences: Experience[];
}

export default function Experiences({ experiences }: ExperiencesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const panels = panelRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!panels.length) return;

    let rafId = 0;

    const update = () => {
      const section = panels[0]?.parentElement;
      if (!section) return;

      const sectionRect = section.getBoundingClientRect();
      const panelHeight = panels[0].offsetHeight || window.innerHeight;
      const totalScrollable = Math.max(section.scrollHeight - window.innerHeight, 0);
      const scrolled = Math.min(Math.max(-sectionRect.top, 0), totalScrollable);

      const rawIndex = Math.floor((scrolled + panelHeight * 0.35) / panelHeight);
      const next = Math.min(Math.max(rawIndex, 0), panels.length - 1);
      setActiveIndex(next);
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [experiences.length]);

  return (
    <section id="experiences" className="relative w-full">
      {experiences.map((exp, i) => (
        <ExperiencePanel
          key={exp.id}
          exp={exp}
          index={i}
          isActive={i === activeIndex}
          panelRef={(el) => { panelRefs.current[i] = el; }}
        />
      ))}
    </section>
  );
}

interface PanelProps {
  exp: Experience;
  index: number;
  isActive: boolean;
  panelRef: (el: HTMLDivElement | null) => void;
}

function ExperiencePanel({ exp, index, isActive, panelRef }: PanelProps) {
  return (
    <div
      ref={panelRef}
      className="sticky top-0 h-screen w-full overflow-hidden"
      style={{ zIndex: index + 1 }}
    >
      <div className="absolute inset-0 hidden md:block">
        <div className="relative h-full w-full">
          <Image src={exp.image} alt={exp.title} fill sizes="100vw" className="object-cover" />
        </div>
      </div>
      <div className="absolute inset-0 md:hidden">
        <div className="relative h-full w-full">
          <Image src={exp.mobileImage ?? exp.image} alt={exp.title} fill sizes="100vw" className="object-cover" />
        </div>
      </div>
      <div className="absolute inset-0 bg-black/45" />

      <div
        className={`absolute inset-x-0 bottom-0 flex justify-end px-0 md:px-[clamp(1rem,5vw,7.5rem)] ${
          isActive ? '' : 'invisible pointer-events-none opacity-0'
        }`}
      >
          <div className="relative w-full border border-white/30 bg-[rgba(245,241,232,0.35)] px-8 pb-5 pt-14 backdrop-blur-[20px] md:mb-[clamp(2rem,4vw,6.5rem)] md:h-auto md:min-h-[28.125rem] md:w-[min(40.4375rem,90%)] md:rounded-[1.5625rem] md:px-[clamp(2rem,4vw,3.875rem)] md:pb-11 md:pt-[3.25rem] lg:h-[28.125rem] lg:w-[40.4375rem] lg:mb-[6.5rem] lg:px-[3.875rem]">
          <div className="absolute right-8 top-4 flex items-center gap-2 font-[Pilcrow_Rounded] text-[0.875rem] font-[400] tracking-[0.06em] uppercase text-[#f5f1e8] md:right-[3.8125rem] md:top-[2.5625rem] md:text-[1.25rem] md:font-[400] md:tracking-normal md:text-[#f5f1e8]">
            <Image src="/design/Home Page/Section 4 - Experiences/experiences icon.svg" alt="" width={24} height={19} className="h-[0.8125rem] w-[0.8125rem] md:h-[1.1875rem] md:w-[1.5rem]" />
            <span>EXPERIENCES</span>
          </div>
          <h2 className="mt-0 max-w-[33rem] font-poppins text-[1.25rem] font-[200] leading-[1.875rem] text-[#f5f1e8] md:mt-[4.15rem] md:text-[2.125rem] md:font-[300] md:leading-[1.875rem]">
            {exp.title}
          </h2>
          <p className="mb-0 mt-2 w-full max-w-[22rem] text-justify font-poppins text-[clamp(0.75rem,3.5vw,0.875rem)] font-[200] leading-[clamp(1rem,4.5vw,1.25rem)] text-[#f5f1e8] md:mt-[2.4rem] md:max-w-[33rem] md:text-justify md:text-[1.125rem] md:font-[200] md:leading-[1.875rem] md:text-[#f5f1e8]">
            {exp.description}
          </p>
          <a href="#faq" className="mt-3 inline-flex w-fit flex-col font-[Pilcrow_Rounded] text-[0.875rem] font-[400] tracking-[0.04em] uppercase leading-[1.875rem] text-[#f5f1e8] md:mt-6 md:text-[1.25rem] md:tracking-normal">
            EXPLORE
            <span className="mt-[0.125rem] h-px w-full bg-[#f5f1e8]" />
          </a>
        </div>
      </div>
    </div>
  );
}
