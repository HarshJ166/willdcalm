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
    const media = window.matchMedia('(max-width: 767px)');
    let observer: IntersectionObserver | null = null;

    if (media.matches) {
      observer = new IntersectionObserver(
        (entries) => {
          let bestIndex = -1;
          let bestRatio = 0;
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const index = itemRefs.current.indexOf(entry.target as HTMLLIElement);
            if (index < 0) return;
            if (entry.intersectionRatio > bestRatio) {
              bestRatio = entry.intersectionRatio;
              bestIndex = index;
            }
          });
          if (bestIndex >= 0) onRoomChange(bestIndex);
        },
        {
          root: null,
          rootMargin: '-45% 0px -45% 0px',
          threshold: [0, 0.25, 0.5, 0.75, 1],
        },
      );

      itemRefs.current.forEach((el) => {
        if (el) observer?.observe(el);
      });

      return () => {
        observer?.disconnect();
      };
    }

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
    <section id="the-stay" className="relative w-full bg-[#f5f3ed] px-[var(--wc-mobile-nav-pad-x)] pb-[clamp(2.5rem,8dvh,4rem)] pt-[clamp(2.5rem,8dvh,4rem)] md:min-h-[56.25rem] md:px-0 md:pb-[clamp(7rem,20vh,12rem)] md:pt-[clamp(7rem,20vh,12rem)]">
      <div className="mx-auto grid w-full max-w-[90rem] grid-cols-2 items-start gap-4 md:grid-cols-[minmax(0,26.0625rem)_minmax(0,44.5rem)] md:gap-[3.25rem] md:px-[3.25rem]">
        <div className="sticky top-[4.5rem] self-start md:top-[calc(50vh-14.75rem)] md:h-[28.1875rem] md:w-[24.625rem]">

          {/* Mobile: 3 stacked images window */}
          <div className="flex flex-col gap-1 md:hidden">
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
          <div className="relative hidden h-full w-full overflow-hidden rounded-xl md:block">
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
                  className={`flex min-h-[3rem] cursor-pointer items-center border-b border-b-[rgba(105,122,97,0.18)] font-poppins text-[clamp(0.75rem,3.5vw,0.9rem)] leading-[1.3] transition-[opacity,color] duration-300 md:min-h-[8.75rem] md:text-[2.375rem] md:leading-[3.3125rem] ${
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
                <p className="font-poppins text-[0.75rem] max-w-[28rem] font-[200] leading-[1.6] text-[rgba(105,122,97,0.86)] md:text-[1.25rem] md:leading-[1.22]">
                  A refined collection of rooms and private
                  pool villas, crafted for elevated comfort,
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
