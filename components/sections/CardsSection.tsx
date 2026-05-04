'use client';

import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Room } from '@/data/homeData';

interface CardsSectionProps {
  rooms: Room[];
  activeIndex: number;
  onRoomChange: (index: number) => void;
}

export default function CardsSection({ rooms, activeIndex, onRoomChange }: CardsSectionProps) {
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

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
    <section id="the-stay" className="bg-cream">
      <div className="flex flex-col lg:flex-row">
        {/* Sticky image panel */}
        <div className="hidden lg:block sticky top-0 h-screen w-1/2 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={rooms[activeIndex]?.id}
              src={rooms[activeIndex]?.image}
              alt={rooms[activeIndex]?.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* Scroll list */}
        <div className="lg:w-1/2 py-20">
          {rooms.map((room, i) => (
            <button
              key={room.id}
              ref={(el) => { itemRefs.current[i] = el; }}
              onClick={() => onRoomChange(i)}
              className={`w-full text-left px-8 md:px-16 py-10 border-b border-sage/10 transition-colors duration-300 ${
                activeIndex === i ? 'bg-sage/5' : 'hover:bg-sage/5'
              }`}
            >
              {/* Mobile image */}
              <div className="lg:hidden mb-4 aspect-video overflow-hidden rounded-sm">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className={`block text-xs tracking-[0.2em] uppercase mb-2 transition-colors ${
                  activeIndex === i ? 'text-sage' : 'text-forest/30'
                }`}
              >
                0{i + 1}
              </span>
              <h3
                className={`text-xl md:text-2xl font-light mb-3 transition-colors ${
                  activeIndex === i ? 'text-forest' : 'text-forest/50'
                }`}
              >
                {room.name}
              </h3>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-forest/60 leading-relaxed overflow-hidden"
                  >
                    {room.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
