'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
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
  const [visitedIndexes, setVisitedIndexes] = useState<Set<number>>(() => new Set([0]));
  const detailTriggerIndex = rooms.findIndex((room) => room.id === 'gathering-grove');
  const shouldShowDetails = detailTriggerIndex >= 0 && activeIndex >= detailTriggerIndex;
  const mobileWindowStart = Math.max(0, Math.min(activeIndex - 2, rooms.length - 3));
  const mobileWindowRooms = rooms.slice(mobileWindowStart, mobileWindowStart + 3);

  useEffect(() => {
    setVisitedIndexes((prev) => {
      if (prev.has(activeIndex)) return prev;
      const next = new Set(prev);
      next.add(activeIndex);
      return next;
    });
  }, [activeIndex]);

  useEffect(() => {
    rooms.forEach((room) => {
      const img = new window.Image();
      img.src = room.image;
    });
  }, [rooms]);

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
    <section id="the-stay" className="relative w-full bg-[#f5f3ed] pb-[clamp(2.5rem,8dvh,4rem)] pt-[clamp(2.5rem,8dvh,4rem)] ">
      <div className="mx-auto grid w-full grid-cols-2 items-start gap-4 ">
        <div className="sticky top-[4.5rem] self-start ">

          {/* Mobile: 3 stacked images window */}
          <div className="flex flex-col gap-1 ">
            {mobileWindowRooms.map((room, offset) => {
              const roomIndex = mobileWindowStart + offset;
              const isActive = roomIndex === activeIndex;
              return (
                <div
                  key={room.id}
                  className={`relative aspect-square w-full overflow-hidden rounded-lg transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-35'
                  }`}
                >
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="(max-width: 48em) 45vw"
                    className="object-cover"
                  />
                </div>
              );
            })}
          </div>

          {/* Desktop: single crossfade image */}
          <div className="relative hidden h-full w-full overflow-hidden rounded-xl ">
            {rooms.map((room, index) => (
              <Image
                key={room.id}
                src={room.image}
                alt={room.name}
                fill
                sizes="394px"
                className={`object-cover transition-opacity duration-500 ${
                  index === activeIndex ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
              />
            ))}
          </div>

        </div>

        <div className="min-w-0">
          <ul className="flex flex-col">
            {rooms.map((room, index) => {
              const isActive = index === activeIndex;
              const isVisited = !isActive && visitedIndexes.has(index);
              return (
                <li
                  key={room.id}
                  ref={(element) => {
                    itemRefs.current[index] = element;
                  }}
                  className={`flex min-h-[3rem] cursor-pointer items-center border-b border-b-[rgba(105,122,97,0.18)] font-sans text-[clamp(0.75rem,3.5vw,0.9rem)] transition-[opacity,color] duration-300 ${
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
                <p className="font-sans text-[0.75rem] max-w-[28rem] font-[200] text-[rgba(105,122,97,0.86)] ">
                  A refined collection of rooms and private
                  pool villas, crafted for elevated comfort,
                  privacy, and immersive nature.
                </p>
                <a href="#faq" className="mt-5 inline-block border-b border-b-[rgba(101,120,94,0.55)] font-sans text-[0.875rem] uppercase text-[#65785e] ">
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
