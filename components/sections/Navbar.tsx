'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { NavLink } from '@/data/homeData';

interface NavbarProps {
  navLinks: NavLink[];
  menuLinks: NavLink[];
  menuOpen: boolean;
  onMenuOpen: () => void;
  onMenuClose: () => void;
}

export default function Navbar({
  navLinks,
  menuLinks,
  menuOpen,
  onMenuOpen,
  onMenuClose,
}: NavbarProps) {
  const [showCompact, setShowCompact] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const accEl = document.getElementById('accommodation');
    const aboutEl = document.getElementById('about');
    if (!accEl) return;

    const compute = () => {
      const aboutRect = aboutEl?.getBoundingClientRect();
      const accRect = accEl.getBoundingClientRect();
      const vh = window.innerHeight;
      const eps = 2;
      const aboutGone = !aboutEl || (aboutRect !== undefined && aboutRect.bottom <= eps);
      const accIn = accRect.top < vh - eps;
      setShowCompact(aboutGone && accIn);
    };

    compute();
    const obs = new IntersectionObserver(compute, { threshold: [0, 0.01, 0.5, 0.99, 1] });
    if (aboutEl) obs.observe(aboutEl);
    obs.observe(accEl);
    window.addEventListener('scroll', compute, { passive: true });
    return () => {
      obs.disconnect();
      window.removeEventListener('scroll', compute);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('wc-menu-open', menuOpen);
    return () => document.body.classList.remove('wc-menu-open');
  }, [menuOpen]);

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash);
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  return (
    <>
      <motion.nav
        initial={false}
        animate={
          showCompact && !menuOpen
            ? { y: 0, opacity: 1, pointerEvents: 'auto' }
            : { y: '-100%', opacity: 0, pointerEvents: 'none' }
        }
        transition={{ duration: 0.26, ease: [0.2, 0.8, 0.2, 1] }}
        className="fixed inset-x-0 top-0 z-[2000] "
      >
        <div className="relative ">
          <button
            type="button"
            onClick={onMenuOpen}
            aria-label="Open menu"
            className="absolute top-1/2 z-10 inline-flex -translate-y-1/2 items-center gap-2 font-sans text-[0.875rem] uppercase leading-none text-[#65785e] "
          >
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden="true">
              <line x1="0" y1="1" x2="16" y2="1" stroke="currentColor" strokeWidth="1.1" />
              <line x1="0" y1="7" x2="16" y2="7" stroke="currentColor" strokeWidth="1.1" />
              <line x1="0" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.1" />
            </svg>
            <span>MENU</span>
          </button>
          <span className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 font-serif text-[1.25rem] uppercase leading-none text-[#65785e] ">
            WILDCALM
          </span>
          <a
            href="https://bookings.wildcalm.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1/2 z-10 -translate-y-1/2 font-sans text-[0.875rem] uppercase leading-none text-[#65785e] underline decoration-[0.0625rem] underline-offset-[0.24em] "
          >
            BOOK NOW
          </a>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-x-0 top-0 z-[4000] flex flex-col bg-transparent overflow-y-hidden"
            // style={{ maxHeight: '80dvh' }}
          >
            <div className="grid shrink-0 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center ">
              <button
                onClick={onMenuClose}
                className="justify-self-start text-[rgba(101,120,94,0.78)] transition-colors duration-200 hover:text-[rgba(86,98,82,0.95)]"
                aria-label="Close menu"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <line x1="1" y1="1" x2="13" y2="13" stroke="currentColor" strokeWidth="1.2" />
                  <line x1="13" y1="1" x2="1" y2="13" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </button>
              <span className="justify-self-center font-serif text-[clamp(1.5rem,4.2vw,2.625rem)] uppercase leading-none text-[#768f6e] ">
                WILDCALM
              </span>
              <a
                href="https://bookings.wildcalm.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="justify-self-end font-sans text-[clamp(0.9375rem,2.4vw,1.25rem)] uppercase leading-none text-[#65785e] underline decoration-[rgba(122,130,120,0.9)] decoration-[0.0625rem] underline-offset-[0.25em] "
              >
                BOOK NOW
              </a>
            </div>
            <div className="flex h-full flex-col justify-between bg-[#f6f2e9] ">
              {/* Mobile menu content — 80:20 split */}
              <div className="relative flex h-full flex-row ">
                {/* Left 80%: nav and copyright */}
                <div className="flex flex-col justify-between w-[80%] px-6 pb-6 pt-4">
                  <motion.nav
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } }, hidden: {} }}
                    className="flex flex-col"
                  >
                    {menuLinks.map((link) => {
                      const isActive =
                        activeHash === link.href ||
                        (link.href === '#the-stay' && activeHash === '#accommodation');
                      return (
                        <motion.a
                          key={link.href}
                          href={link.href}
                          onClick={onMenuClose}
                          variants={{
                            hidden: { opacity: 0, y: 14 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
                          }}
                          className={`py-[0.2rem] text-left font-sans text-[1.25rem] font-normal uppercase border-b border-[#d6d3c7] w-[98%] last:border-b-0 transition-colors ${
                            isActive ? 'text-[#65785e]' : 'text-[rgba(101,120,94,0.4)]'
                          }`}
                        >
                          {link.label}
                        </motion.a>
                      );
                    })}
                  </motion.nav>
                  <div className="relative z-10 mt-6 mb-2">
                    <span className="font-sans text-[0.8125rem] text-[rgba(101,120,94,0.6)]">
                      © 2026 All Rights Reserved
                    </span>
                  </div>
                </div>
                {/* Right 20%: empty, but lion art can overlap */}
                <div className="relative w-[20%] flex items-end">
                  <div className="pointer-events-none select-none absolute bottom-[1.5rem] right-[-30%]" style={{ width: '197.96px', height: '121px' }}>
                    <img
                      src="/design/Menu/Lion%20line%20art-dark%20.svg"
                      alt=""
                      className="object-contain"
                      style={{ width: '197.96px', height: '121px' }}
                    />
                  </div>
                </div>
              </div>
              {/* Desktop menu content */}
              <div className="hidden min-h-0 flex-1 grid-cols-[minmax(0,836fr)_minmax(0,604fr)] ">
                {/* Left column — nav links + copyright */}
                <div className="z-10 flex min-h-0 flex-col justify-between pl-[clamp(1.5rem,8.40278vw,7.5625rem)] pr-8 pb-8 pt-[clamp(1rem,1.875vw,1.6875rem)]">
                  <nav className="flex flex-col gap-[1.375rem]">
                    {menuLinks.map((link) => {
                      const isActive =
                        activeHash === link.href ||
                        (link.href === '#the-stay' && activeHash === '#accommodation');
                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={onMenuClose}
                          className={`font-sans text-[1.35rem] font-normal uppercase leading-none transition-colors duration-150 ${
                            isActive ? 'text-[#65785e]' : 'text-[rgba(101,120,94,0.4)]'
                          }`}
                        >
                          {link.label}
                        </a>
                      );
                    })}
                  </nav>
                  <div className="flex items-center gap-[0.375rem]">
                    <span className="font-sans text-[1.125rem] font-normal text-[rgba(101,120,94,0.55)] mt-8">
                      © 2026 All Rights Reserved
                    </span>
                  </div>
                </div>
                {/* Right column — lion art */}
                <div className="relative overflow-hidden">
                  <div className="absolute inset-[5.65%_-16.56%_20.7%_17.55%]">
                    <Image
                      src="/design/Menu/Lion%20line%20art-dark%20.svg"
                      alt=""
                      fill
                      sizes="40vw"
                      className="object-contain object-[56%_48%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
