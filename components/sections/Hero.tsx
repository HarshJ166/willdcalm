"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { NavLink } from "@/data/homeData";

interface HeroProps {
  navLinks: NavLink[];
  onMenuOpen: () => void;
  heading: string;
  subheadingDesktop: string;
  subheadingMobile: string;
  imageSrcDesktop: string;
  imageSrcMobile: string;
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

function splitHeading(heading: string) {
  const words = heading.trim().split(/\s+/).filter(Boolean);
  if (words.length <= 3)
    return { line1: heading.trim(), line2: null as string | null };
  const mid = Math.min(3, Math.max(1, words.length - 1));
  return {
    line1: words.slice(0, mid).join(" "),
    line2: words.slice(mid).join(" "),
  };
}

export default function Hero({
  navLinks,
  onMenuOpen,
  heading,
  subheadingDesktop,
  subheadingMobile,
  imageSrcDesktop,
  imageSrcMobile,
}: HeroProps) {
  const { line1, line2 } = splitHeading(heading);
  const heroLead = subheadingDesktop || subheadingMobile;

  return (
    <section
      id="home"
      className="fixed inset-x-0 top-0 z-0 flex h-dvh w-full flex-col overflow-hidden bg-sage"
    >
      <div className="absolute inset-x-0 top-0 z-10 grid h-24 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center px-16">
        <button
          type="button"
          onClick={onMenuOpen}
          className="inline-flex items-center justify-self-start gap-2 font-sans text-base uppercase leading-none text-cream"
          aria-label="Open menu"
        >
          <span className="inline-flex items-center" aria-hidden="true">
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
              <line
                x1="0"
                y1="1"
                x2="16"
                y2="1"
                stroke="currentColor"
                strokeWidth="1.1"
              />
              <line
                x1="0"
                y1="7"
                x2="16"
                y2="7"
                stroke="currentColor"
                strokeWidth="1.1"
              />
              <line
                x1="0"
                y1="13"
                x2="16"
                y2="13"
                stroke="currentColor"
                strokeWidth="1.1"
              />
            </svg>
          </span>
          Menu
        </button>
        <span className="justify-self-center font-serif text-4xl uppercase leading-none text-cream">
          WildCalm
        </span>
        <a
          href="https://bookings.wildcalm.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="justify-self-end font-sans text-base uppercase leading-none text-cream underline decoration-1 underline-offset-4"
        >
          Book Now
        </a>
      </div>

      <div className="absolute inset-x-0 top-24 z-10 flex h-11 items-center justify-center gap-14 border-y border-y-cream/20">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: i * 0.1 }}
            className="font-sans text-base uppercase text-cream underline decoration-transparent underline-offset-4 transition-colors duration-200 hover:decoration-cream/90"
          >
            {link.label.toUpperCase()}
          </motion.a>
        ))}
      </div>

      <div className="grid h-full min-h-0 flex-1 grid-cols-2 overflow-hidden pt-36">
        <div className="relative isolate h-full min-h-0 w-full">
          <Image
            src={imageSrcMobile}
            alt=""
            fill
            sizes="100vw"
            priority
            className="hidden object-cover object-center grayscale"
          />
          <Image
            src={imageSrcDesktop}
            alt=""
            fill
            sizes="50vw"
            priority
            className="object-cover object-center grayscale"
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="pointer-events-none absolute bottom-6 right-6 z-10 h-16 w-24"
          >
            <Image
              src="/design/Home%20Page/Section%201%20-%20Banner/Lion%20Vector.svg"
              alt=""
              fill
              sizes="(max-width: 48rem) 71px, 172px"
              className="object-contain object-bottom"
            />
          </motion.div>
        </div>

        <div className="relative flex h-full min-h-0 flex-col justify-center bg-sage px-20 pb-16 pt-12">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full text-sage-light"
            viewBox="0 0 1200 900"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              fillOpacity={0.22}
              d="M0 520 C220 470 380 600 600 535 S940 455 1200 510 L1200 900 L0 900Z"
            />
            <path
              fill="currentColor"
              fillOpacity={0.14}
              d="M0 620 C280 560 460 690 720 605 S1000 520 1200 590 L1200 900 L0 900Z"
            />
          </svg>

          <div className="relative z-10 -ml-20">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.06, delayChildren: 0.15 },
                },
              }}
              className="font-sans text-5xl font-extralight text-cream"
            >
              <span className="block overflow-hidden">
                {line1.split(" ").map((word, i) => (
                  <motion.span
                    key={`l1-${word}-${i}`}
                    variants={{
                      hidden: { opacity: 0, y: 28 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.65, ease },
                      },
                    }}
                    className="mr-[0.3ch] inline-block last:mr-0"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              {line2 ? (
                <span className="mt-1 block overflow-hidden">
                  {line2.split(" ").map((word, i) => (
                    <motion.span
                      key={`l2-${word}-${i}`}
                      variants={{
                        hidden: { opacity: 0, y: 28 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.65, ease },
                        },
                      }}
                      className="mr-[0.3ch] inline-block last:mr-0"
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              ) : null}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.55, ease }}
            className="relative z-10 mt-12 ml-10 max-w-4xl font-sans text-2xl font-light text-cream"
          >
            <span>{heroLead}</span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
