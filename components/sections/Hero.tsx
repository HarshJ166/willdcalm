'use client';

import Image from 'next/image';
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
  const headingWords = heading.split(' ');

  return (
    <section
      id="home"
      className="fixed inset-x-0 top-0 z-0 h-[100dvh] w-full overflow-hidden bg-[#5a6b53] bg-[url('/design/web-noise-bg.svg')] bg-cover bg-center"
    >
      {/* ========================= */}
      {/* DESKTOP VIDEO — FULL BLEED */}
      {/* ========================= */}
      <div className="absolute left-0 top-[15rem] z-[2] hidden h-[37.25rem] w-[var(--wc-hero-video-w)] overflow-hidden lg:block">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-[34%_50%] grayscale"
        >
          <source src={videoSrcDesktop} type="video/mp4" />
        </video>
      </div>

      {/* ========================= */}
      {/* MOBILE VIDEO */}
      {/* ========================= */}
      <div className="absolute left-0 top-[12dvh] z-[2] w-full lg:hidden">
        <div className="mx-[var(--wc-mobile-nav-pad-x)] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-[52dvh] w-full object-cover object-[54%_50%] grayscale"
          >
            <source src={videoSrcMobile} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* ========================= */}
      {/* VECTOR BACKGROUND */}
      {/* ========================= */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[29.43dvh] z-[1] bg-[url('/Vector.png')] bg-[length:100%_100%] bg-bottom bg-no-repeat lg:top-[47%]" />

      {/* ========================= */}
      {/* MAIN SHELL */}
      {/* ========================= */}
      <div className="wc-shell relative h-full">

        {/* ========================= */}
        {/* TOP BAR */}
        {/* ========================= */}
        <div className="absolute inset-x-0 top-0 z-[5] grid h-[var(--wc-mobile-nav-bar-h)] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center px-[var(--wc-mobile-nav-pad-x)] lg:h-[6.511375rem] lg:px-[var(--wc-page-gutter)]">
          
          {/* MENU */}
          <button
            onClick={onMenuOpen}
            className="inline-flex items-center gap-2 justify-self-start font-[Pilcrow_Rounded] text-[0.875rem] uppercase leading-none text-[var(--text-cream)] lg:text-[1.25rem]"
            aria-label="Open menu"
          >
            <span className="inline-flex items-center" aria-hidden="true">
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
                <line x1="0" y1="1" x2="16" y2="1" stroke="currentColor" strokeWidth="1.1" />
                <line x1="0" y1="7" x2="16" y2="7" stroke="currentColor" strokeWidth="1.1" />
                <line x1="0" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.1" />
              </svg>
            </span>

            Menu
          </button>

          {/* LOGO */}
          <span className="justify-self-center font-[Argufy] text-[1.25rem] uppercase leading-none text-[var(--text-cream)] lg:text-[2.625rem]">
            WildCalm
          </span>

          {/* BOOK NOW */}
          <a
            href="https://bookings.wildcalm.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="justify-self-end font-[Pilcrow_Rounded] text-[0.875rem] uppercase leading-none text-[var(--text-cream)] underline decoration-[0.0625rem] underline-offset-[0.24em] lg:text-[1.25rem]"
          >
            Book Now
          </a>
        </div>

        {/* ========================= */}
        {/* DESKTOP NAV LINKS */}
        {/* ========================= */}
        <div className="absolute top-[7.511375rem] left-1/2 z-[5] hidden h-[2.6875rem] w-[100vw] -translate-x-1/2 border-y border-y-[rgba(245,241,232,0.24)] lg:flex items-center justify-center">
        <div className="mx-auto flex w-full max-w-[90rem] items-center justify-center gap-[5.125rem] px-[3rem]">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease,
                delay: i * 0.1,
              }}
              className="font-[Pilcrow_Rounded] text-[1.125rem] uppercase text-[var(--text-cream)] underline decoration-transparent decoration-[0.0625rem] underline-offset-[0.22em] transition-colors duration-200 hover:decoration-[rgba(245,241,232,0.95)]"
            >
              {link.label.toUpperCase()}
            </motion.a>
          ))}
        </div>
        </div>

        {/* ========================= */}
        {/* DESKTOP LION */}
        {/* ========================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease,
          }}
          className="absolute left-[calc(var(--wc-shell-pad-inline)+var(--wc-hero-lion-shift))] top-[88.5dvh] z-[4] hidden h-[var(--wc-hero-lion-h)] w-[var(--wc-hero-lion-w)] lg:block"
        >
          <Image
            src="/design/Home%20Page/Section%201%20-%20Banner/Lion%20Vector.svg"
            alt=""
            fill
            sizes="172px"
            className="object-contain object-left-bottom"
          />
        </motion.div>

        {/* ========================= */}
        {/* HERO TITLE */}
        {/* ========================= */}
        <div className="absolute left-[var(--wc-mobile-nav-pad-x)] top-[66dvh] z-[3] w-[calc(100%-3.875rem)] lg:left-[36.5rem] lg:top-[53dvh] lg:w-[var(--wc-hero-title-w)] lg:-translate-y-1/2">
          
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.2,
                },
              },
            }}
            className="font-poppins text-[1.75rem] font-[300] leading-[2.25rem] text-[var(--text-cream)] lg:text-[3.5rem] lg:font-[200] lg:leading-[4.1875rem]"
          >
            {headingWords.map((word) => (
              <motion.span
                key={word}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 24,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.7,
                      ease,
                    },
                  },
                }}
                className="mr-[0.35ch] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* ========================= */}
        {/* DESKTOP SUBHEADING */}
        {/* ========================= */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease,
          }}
          className="absolute lg:left-[52rem] top-[64dvh] z-[3] hidden w-[var(--wc-hero-lead-w)] font-poppins text-[1.5rem] font-[200] leading-[2.75rem] text-[var(--text-cream)] lg:block"
        >
          {subheadingDesktop}
        </motion.p>

        {/* ========================= */}
        {/* MOBILE SUBHEADING */}
        {/* ========================= */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease,
          }}
          className="absolute left-[var(--wc-mobile-nav-pad-x)] top-[77.5dvh] z-[3] w-[19.3125rem] max-w-[17.5rem] pt-2 font-poppins text-[1rem] font-[200] leading-[1.5rem] text-[var(--text-cream)] lg:hidden"
        >
          {subheadingMobile}
        </motion.p>

        {/* ========================= */}
        {/* MOBILE LION */}
        {/* ========================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease,
          }}
          className="absolute right-[var(--wc-mobile-nav-pad-x)] top-[59dvh] z-[4] h-[2.875rem] w-[4.4375rem] lg:hidden"
        >
          <Image
            src="/design/Home%20Page/Section%201%20-%20Banner/Lion%20Vector.svg"
            alt=""
            fill
            sizes="(max-width: 64em) 71px, 102px"
            className="object-contain object-left-bottom"
          />
        </motion.div>

      </div>
    </section>
  );
}