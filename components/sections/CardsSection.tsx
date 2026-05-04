'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Room } from '@/data/homeData';

interface CardsSectionProps {
  rooms: Room[];
  activeIndex: number;
  onRoomChange: (index: number) => void;
}

export default function CardsSection({ rooms, activeIndex, onRoomChange }: CardsSectionProps) {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);
  const detailTriggerIndex = rooms.findIndex((room) => room.id === 'gathering-grove');
  const shouldShowDetails = detailTriggerIndex >= 0 && activeIndex >= detailTriggerIndex;

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const mid = window.innerHeight / 2;
        let closest = 0;
        let minDist = Infinity;
        itemRefs.current.forEach((el, i) => {
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const dist = Math.abs(rect.top + rect.height / 2 - mid);
          if (dist < minDist) {
            minDist = dist;
            closest = i;
          }
        });
        onRoomChange(closest);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [onRoomChange]);

  return (
    <section id="the-stay" className="w-full bg-[#f5f3ed] px-5 pb-14 pt-10 md:px-0 md:pb-[12rem] md:pt-[10rem]">
      <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-8 md:grid-cols-[minmax(0,26.0625rem)_minmax(0,44.5rem)] md:gap-[3.25rem] md:px-[3.25rem]">
        <div className="md:sticky md:top-[calc(50vh-14.75rem)] md:h-[28.1875rem] md:w-[24.625rem] md:overflow-hidden md:rounded-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={rooms[activeIndex]?.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.32, 1] }}
              className="relative aspect-[394/451] w-full overflow-hidden rounded-xl md:h-full md:aspect-auto"
            >
              <Image src={rooms[activeIndex]?.image ?? ''} alt={rooms[activeIndex]?.name ?? ''} fill sizes="(max-width: 48em) 100vw, 394px" className="object-cover" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="min-w-0">
          <ul className="flex flex-col">
            {rooms.map((room, index) => {
              const isActive = index === activeIndex;
              const isVisited = index < activeIndex;
              return (
                <li
                  key={room.id}
                  ref={(element) => {
                    itemRefs.current[index] = element;
                  }}
                  className={`flex min-h-[4.25rem] cursor-pointer items-center border-b border-b-[rgba(105,122,97,0.18)] font-poppins text-[1.25rem] leading-[1.3] transition-[opacity,color] duration-300 md:min-h-[8.75rem] md:text-[2.375rem] md:leading-[3.3125rem] ${
                    isActive
                      ? 'font-[200] text-[#697a61] opacity-100'
                      : isVisited
                      ? 'font-[200] text-[#697a61] opacity-40'
                      : 'font-[200] text-[#697a61] opacity-10'
                  }`}
                  onClick={() => onRoomChange(index)}
                >
                  {room.name}
                </li>
              );
            })}
          </ul>
          <AnimatePresence>
            {shouldShowDetails ? (
              <motion.div
                key="stay-details"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.4, ease: [0.33, 1, 0.32, 1] }}
                className="mt-7 max-w-[40.875rem]"
              >
                <p className="font-poppins text-[0.75rem] font-[200] leading-[1.6] text-[rgba(105,122,97,0.86)] md:text-[1.25rem] md:leading-[1.22]">
                  A refined collection of rooms and private
                  <br />
                  pool villas, crafted for elevated comfort,
                  <br />
                  privacy, and immersive nature.
                </p>
                <a href="#faq" className="mt-5 inline-block border-b border-b-[rgba(101,120,94,0.55)] font-[Pilcrow_Rounded] text-[0.875rem] uppercase text-[#65785e] md:text-[1.25rem]">
                  EXPLORE MORE
                </a>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
