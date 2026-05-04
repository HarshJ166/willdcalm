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
        className="fixed inset-x-0 top-0 z-[2000] bg-[var(--wc-nav-bar-fill)]"
      >
        <div className="relative h-[var(--wc-mobile-nav-bar-h)] md:h-[var(--wc-nav-h)]">
          <button
            type="button"
            onClick={onMenuOpen}
            aria-label="Open menu"
            className="absolute left-[var(--wc-mobile-nav-pad-x)] top-1/2 z-10 inline-flex -translate-y-1/2 items-center gap-2 font-[Pilcrow_Rounded] text-[0.875rem] uppercase leading-none text-[#65785e] md:left-[var(--wc-page-gutter)] md:text-[1.25rem]"
          >
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden="true">
              <line x1="0" y1="1" x2="16" y2="1" stroke="currentColor" strokeWidth="1.1" />
              <line x1="0" y1="7" x2="16" y2="7" stroke="currentColor" strokeWidth="1.1" />
              <line x1="0" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.1" />
            </svg>
            <span>MENU</span>
          </button>
          <span className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 font-[Argufy] text-[1.25rem] uppercase leading-none text-[#65785e] md:text-[2.625rem]">
            WILDCALM
          </span>
          <a
            href="https://bookings.wildcalm.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-[var(--wc-mobile-nav-pad-x)] top-1/2 z-10 -translate-y-1/2 font-[Pilcrow_Rounded] text-[0.875rem] uppercase leading-none text-[#65785e] underline decoration-[0.0625rem] underline-offset-[0.24em] md:right-[var(--wc-page-gutter)] md:text-[1.25rem]"
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
            className="fixed inset-x-0 top-0 z-[4000] flex h-[var(--wc-nav-overlay-mobile-height-fallback)] max-h-[var(--wc-nav-overlay-mobile-height-fallback)] flex-col overflow-hidden bg-transparent md:h-auto md:max-h-[min(var(--wc-nav-overlay-desktop-panel-max-h),90dvh)]"
          >
            <div className="grid h-[var(--wc-mobile-nav-bar-h)] shrink-0 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center bg-[var(--wc-nav-overlay-mobile-fill)] px-[var(--wc-nav-overlay-menu-pad-x)] md:h-[7.4375rem] md:bg-[var(--wc-nav-overlay-menu-panel-bg)] md:px-[7.375rem]">
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
              <span className="justify-self-center font-[Argufy] text-[clamp(1.5rem,4.2vw,2.625rem)] uppercase leading-none text-[#768f6e] md:text-[2.625rem]">
                WILDCALM
              </span>
              <a
                href="https://bookings.wildcalm.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="justify-self-end font-[Pilcrow_Rounded] text-[clamp(0.9375rem,2.4vw,1.25rem)] uppercase leading-none text-[#65785e] underline decoration-[rgba(122,130,120,0.9)] decoration-[0.0625rem] underline-offset-[0.25em] md:text-[1.25rem]"
              >
                BOOK NOW
              </a>
            </div>
            <div className="grid min-h-0 flex-1 grid-cols-[minmax(0,80fr)_minmax(0,20fr)] bg-[var(--wc-nav-overlay-mobile-fill)] md:grid-cols-[minmax(0,836fr)_minmax(0,604fr)] md:bg-[var(--wc-nav-overlay-menu-panel-bg)]">
              <div className="z-10 flex min-h-0 flex-col justify-between px-[var(--wc-nav-overlay-menu-pad-x)] pb-7 pt-[clamp(0.75rem,1.875vw,1.6875rem)] md:pl-[clamp(1.5rem,8.40278vw,7.5625rem)]">
                <motion.nav
                  initial="hidden"
                  animate="visible"
                  variants={{ visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } }, hidden: {} }}
                  className="flex flex-col"
                >
                  {menuLinks.map((link) => {
                    const isActive =
                      activeHash === link.href || (link.href === '#the-stay' && activeHash === '#accommodation');
                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={onMenuClose}
                        variants={{
                          hidden: { opacity: 0, y: 14 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
                        }}
                        className={`border-b border-b-[rgba(101,120,94,0.18)] py-[0.6875rem] font-[Pilcrow_Rounded] text-[clamp(1.0625rem,3.4vw,1.5rem)] uppercase leading-[1.15] transition-colors ${
                          isActive ? 'text-[#65785e]' : 'text-[rgba(101,120,94,0.4)]'
                        }`}
                      >
                        {link.label.toUpperCase()}
                      </motion.a>
                    );
                  })}
                </motion.nav>
                <p className="mt-6 font-poppins text-[clamp(0.875rem,2.6vw,1.125rem)] font-light leading-[1.45] text-[rgba(101,120,94,0.58)]">
                  <span>&#169;</span> 2026 All Rights Reserved
                </p>
              </div>
              <div className="relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-[-32%] top-auto h-[min(36vmin,12.5rem)] md:bottom-0 md:left-[17.55%] md:right-[-16.56%] md:top-[5.65%] md:h-auto">
                  <Image
                    src="/design/Menu/Lion%20line%20art-dark%20.svg"
                    alt=""
                    fill
                    sizes="(max-width: 48em) 22vw, 40vw"
                    className="object-contain object-[96%_100%] opacity-50 md:object-[56%_48%] md:opacity-100"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
