'use client';

import { motion } from 'framer-motion';
import type { NavLink } from '@/data/homeData';

interface HeroProps {
  navLinks: NavLink[];
  onMenuOpen: () => void;
  heading: string;
  subheadingDesktop: string;
  subheadingMobile: string;
  videoSrcDesktop: string;
  videoSrcMobile: string;
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero({
  navLinks,
  onMenuOpen,
  heading,
  subheadingDesktop,
  subheadingMobile,
  videoSrcDesktop,
  videoSrcMobile,
}: HeroProps) {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      >
        <source src={videoSrcDesktop} type="video/mp4" />
      </video>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      >
        <source src={videoSrcMobile} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-forest/30" />

      {/* Top bar */}
      <div className="absolute top-0 inset-x-0 z-10 flex items-center justify-between px-4 sm:px-6 md:px-12 h-14 sm:h-16">
        <button
          onClick={onMenuOpen}
          className="text-xs tracking-widest uppercase text-cream/80 hover:text-cream transition-colors"
          aria-label="Open menu"
        >
          Menu
        </button>
        <span className="text-cream text-sm tracking-[0.2em] uppercase font-light">WildCalm</span>
        <a
          href="#faq"
          className="text-xs tracking-widest uppercase text-cream/80 hover:text-cream transition-colors"
        >
          Book Now
        </a>
      </div>

      {/* Bottom nav links — desktop only */}
      <div className="absolute bottom-10 inset-x-0 z-10 hidden md:flex justify-center gap-8 lg:gap-12">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: i * 0.1 }}
            className="text-xs tracking-widest uppercase text-cream/70 hover:text-cream transition-colors"
          >
            {link.label}
          </motion.a>
        ))}
      </div>

      {/* Heading */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="text-cream text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-wide max-w-3xl"
        >
          {heading}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden md:block mt-4 text-cream/70 text-xs sm:text-sm tracking-widest uppercase"
        >
          {subheadingDesktop}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="md:hidden mt-3 text-cream/70 text-xs tracking-widest uppercase"
        >
          {subheadingMobile}
        </motion.p>
      </div>
    </section>
  );
}
