'use client';

import Image from 'next/image';
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
  heading = 'Refined Premium Lifestyle Amenities Designed for a Seamless and Relaxing Stay',
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
    <section ref={sectionRef} id="amenities" className="relative h-[500vh] bg-[#f5f1e8]">
      <div className="sticky top-0 flex h-[100dvh] items-center overflow-hidden px-[var(--wc-mobile-nav-pad-x)] py-10 md:gap-4 md:px-[7.5rem]">
        <div className="hidden w-[22rem] shrink-0 md:block">
          <span className="mb-6 block font-[Pilcrow_Rounded] text-[1.25rem] uppercase leading-[1.25] text-[#697a61]">
            {label}
          </span>
          <h2 className="max-w-[25.625rem] font-poppins text-[2.375rem] font-[200] leading-[3.3125rem] text-[#697a61]">
            {heading}
          </h2>
          <p className="mt-4 font-poppins text-[0.6875rem] font-[200] uppercase tracking-[0.24em] text-[rgba(59,77,56,0.45)]">Scroll to explore</p>
        </div>
        <div className="w-full overflow-hidden md:flex-1">
          <motion.div ref={trackRef} style={{ x }} className="flex gap-[4.75rem] will-change-transform">
            {amenities.map((amenity) => (
              <motion.div key={amenity.id} whileHover={{ y: -2 }} className="w-[20rem] shrink-0 md:w-[28.9375rem]">
                <div className="relative mb-5 h-[22rem] overflow-hidden rounded-[1.25rem] md:h-[29.875rem]">
                  <Image src={amenity.image} alt={amenity.title} fill sizes="(max-width: 48em) 320px, 463px" className={`object-cover transition-transform duration-500 ${getObjectPositionClass(amenity.imagePosition)}`} />
                </div>
                <h3 className="mb-1 font-poppins text-[1.375rem] font-[200] leading-[1.3] text-[#697a61]">
                  {amenity.title}
                </h3>
                <p className="font-poppins text-[1rem] font-[200] leading-[1.45] text-[#65785e]">
                  {amenity.desc}
                </p>
                <p className="mt-1 text-[0.6875rem] uppercase tracking-[0.1em] text-[rgba(59,77,56,0.45)]">
                  {amenity.subtitle}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function getObjectPositionClass(position?: string): string {
  switch (position) {
    case '50% 52%':
      return 'object-[50%_52%]';
    case '58% 44%':
      return 'object-[58%_44%]';
    case '62% 50%':
      return 'object-[62%_50%]';
    case '42% 50%':
      return 'object-[42%_50%]';
    case '60% 50%':
      return 'object-[60%_50%]';
    case '52% 50%':
      return 'object-[52%_50%]';
    default:
      return 'object-center';
  }
}
