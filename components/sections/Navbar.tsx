'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
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
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (y) => {
      setShowCompact(y > window.innerHeight * 0.6);
    });
  }, [scrollY]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* Compact sticky nav */}
      <AnimatePresence>
        {showCompact && !menuOpen && (
          <motion.nav
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 inset-x-0 z-40 flex items-center justify-between px-4 sm:px-6 md:px-12 h-14 sm:h-16 bg-cream/90 backdrop-blur-sm border-b border-sage/10"
          >
            <a href="#home" className="text-forest text-sm tracking-[0.2em] uppercase font-medium">
              WildCalm
            </a>
            <div className="hidden md:flex gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs tracking-widest uppercase text-forest/60 hover:text-forest transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <button
              onClick={onMenuOpen}
              className="text-xs tracking-widest uppercase text-forest/60 hover:text-forest transition-colors"
              aria-label="Open menu"
            >
              Menu
            </button>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Fullscreen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-forest flex flex-col overflow-y-auto"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 h-14 sm:h-16 shrink-0 border-b border-cream/10">
              <a
                href="#home"
                onClick={onMenuClose}
                className="text-cream text-sm tracking-[0.2em] uppercase font-medium"
              >
                WildCalm
              </a>
              <button
                onClick={onMenuClose}
                className="text-xs tracking-widest uppercase text-cream/60 hover:text-cream transition-colors"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-12 py-8">
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                  hidden: {},
                }}
                className="space-y-1 sm:space-y-2"
              >
                {menuLinks.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, x: -24 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                      },
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={onMenuClose}
                      className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-cream/80 hover:text-cream transition-colors py-1"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
