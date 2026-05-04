'use client';

import { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import type { Amenity } from '@/data/homeData';

interface HorizontalScrollProps {
  amenities: Amenity[];
  label?: string;
  heading?: string;
}

export default function HorizontalScroll({
  amenities,
  label = 'Amenities',
  heading = 'Crafted for comfort',
}: HorizontalScrollProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  // Measure the actual rendered card width so scroll math is always correct
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const firstCard = track.firstElementChild as HTMLElement | null;
      if (!firstCard) return;
      setCardWidth(firstCard.offsetWidth + 24); // card + gap-6
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const totalScroll = cardWidth * (amenities.length - 1);
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalScroll]);

  return (
    <section
      ref={sectionRef}
      id="amenities"
      style={{ height: `${amenities.length * 60}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        {/* Header */}
        <div className="px-4 sm:px-6 md:px-16 pb-6 space-y-2">
          <span className="text-xs tracking-[0.3em] uppercase text-sage font-medium">{label}</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-forest">{heading}</h2>
        </div>

        {/* Horizontal track */}
        <div className="overflow-hidden pl-4 sm:pl-6 md:pl-16">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-6 will-change-transform"
          >
            {amenities.map((amenity) => (
              <div
                key={amenity.id}
                className="shrink-0 w-[72vw] sm:w-[55vw] md:w-80 lg:w-96 aspect-3/4 relative overflow-hidden rounded-sm"
              >
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: amenity.imagePosition ?? 'center' }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-forest/70 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 space-y-1">
                  <p className="text-xs tracking-widest uppercase text-cream/50">
                    {amenity.subtitle}
                  </p>
                  <h3 className="text-base sm:text-lg font-light text-cream">{amenity.title}</h3>
                  <p className="text-xs text-cream/60 leading-relaxed">{amenity.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
