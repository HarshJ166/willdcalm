'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import type { Amenity } from '@/data/homeData';

interface HorizontalScrollProps {
  amenities: Amenity[];
  label?: string;
  heading?: string;
}

export default function HorizontalScroll({
  amenities,
  label = 'AMENITIES',
  heading = 'Refined Premium\nLifestyle Amenities\nDesigned for a\nSeamless and\nRelaxing Stay',
}: HorizontalScrollProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const track = trackRef.current;
    const leftPanel = leftRef.current;
    const rightPanel = rightRef.current;
    if (!section || !track || !sticky || !leftPanel || !rightPanel) return;

    const FADE_SCROLL = 1;
    const HORIZONTAL_SCROLL_SPEED = 1;
    const SCROLL_INTENSITY_BASE = 38;
    const SCROLL_INTENSITY_MIN = 0.7;
    const SCROLL_INTENSITY_MAX = 2.4;
    const CARD_START_GAP = 0;
    const TEXT_PARALLAX_FACTOR = 0.3;
    const TEXT_FADE_DISTANCE = 1000;
    const SMOOTHING_FACTOR = 0.18;

    let desktopMetrics: {
      cardTotalScroll: number;
      requiredVerticalScroll: number;
      totalScroll: number;
      preEntryLead: number;
    } | null = null;
    let virtualScroll = 0;
    let targetProgress = 0;
    let lastScrollY = window.scrollY;
    let progressRafId: number | null = null;

    const resetTrackState = () => {
      sticky.style.setProperty('--amn-left-w', '22rem');
      sticky.style.setProperty('--amn-left-op', '1');
      sticky.style.setProperty('--amn-gap', '1rem');
      track.style.transform = `translateX(${CARD_START_GAP}px)`;
      leftPanel.style.transform = 'translateX(0)';
      leftPanel.style.opacity = '1';
      sticky.style.setProperty('--amn-img-shift', '0px');
      virtualScroll = 0;
      targetProgress = 0;
    };

    const isDesktop = () => window.innerWidth >= 1024;

    const computeDesktopMetrics = () => {
      const cardViewport = sticky.clientWidth || rightPanel.clientWidth || 0;
      const stickyGap = parseFloat(getComputedStyle(sticky).gap) || 0;
      const leftZoneWidth = leftPanel.clientWidth + stickyGap;
      const lastCard = track.lastElementChild as HTMLElement | null;
      const lastCardWidth = lastCard?.offsetWidth ?? 0;
      const END_SLACK = Math.max(lastCardWidth * 0.9, 320);

      const cardTotalScroll = Math.max(
        track.scrollWidth - cardViewport + leftZoneWidth + END_SLACK + CARD_START_GAP,
        0,
      );

      const requiredVerticalScroll = cardTotalScroll / HORIZONTAL_SCROLL_SPEED;
      const totalScroll = FADE_SCROLL + requiredVerticalScroll;
      const preEntryLead = Math.min(totalScroll * 0.12, 220);

      section.style.height = `${800 + totalScroll}px`;
      desktopMetrics = { cardTotalScroll, requiredVerticalScroll, totalScroll, preEntryLead };
    };

    const applyDesktopProgress = (progressValue: number) => {
      if (!desktopMetrics) return;

      const clampedProgress = clamp(progressValue, 0, desktopMetrics.totalScroll);
      virtualScroll = clampedProgress;

      const cardScroll = Math.max(clampedProgress - FADE_SCROLL, 0) * HORIZONTAL_SCROLL_SPEED;
      const clampedCardScroll = Math.min(cardScroll, desktopMetrics.cardTotalScroll);
      track.style.transform = `translateX(${CARD_START_GAP - clampedCardScroll}px)`;

      const textParallax = clampedCardScroll * TEXT_PARALLAX_FACTOR;
      const opacity = clamp(1 - clampedCardScroll / TEXT_FADE_DISTANCE, 0.16, 1);
      leftPanel.style.transform = `translateX(-${textParallax}px)`;
      leftPanel.style.opacity = `${opacity}`;

      const normalized = desktopMetrics.cardTotalScroll > 0
        ? clampedCardScroll / desktopMetrics.cardTotalScroll
        : 0;
      const shift = (normalized * 18 - 9).toFixed(2);
      sticky.style.setProperty('--amn-img-shift', `${shift}px`);
    };

    const stopProgressAnimation = () => {
      if (progressRafId) {
        cancelAnimationFrame(progressRafId);
        progressRafId = null;
      }
    };

    const animateProgressToTarget = () => {
      if (progressRafId || !desktopMetrics) return;

      const step = () => {
        const delta = targetProgress - virtualScroll;
        if (Math.abs(delta) < 0.5) {
          applyDesktopProgress(targetProgress);
          progressRafId = null;
          return;
        }

        applyDesktopProgress(virtualScroll + delta * SMOOTHING_FACTOR);
        progressRafId = requestAnimationFrame(step);
      };

      progressRafId = requestAnimationFrame(step);
    };

    const enableMobileMode = () => {
      section.style.height = 'auto';
      resetTrackState();
    };

    const enableDesktopMode = () => {
      computeDesktopMetrics();
    };

    const onScroll = () => {
      if (!isDesktop() || !desktopMetrics) return;

      const rect = section.getBoundingClientRect();
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      if (rect.top > 0) {
        const preEntryStart = window.innerHeight * 0.75;
        if (rect.top <= preEntryStart) {
          const approachProgress = 1 - rect.top / preEntryStart;
          targetProgress = clamp(approachProgress * desktopMetrics.preEntryLead, 0, desktopMetrics.totalScroll);
          animateProgressToTarget();
        } else {
          stopProgressAnimation();
          resetTrackState();
        }
        return;
      }

      const isInsidePinnedZone = rect.top <= 0 && rect.bottom >= window.innerHeight;
      if (isInsidePinnedZone && Math.abs(deltaY) > 0) {
        const intensity = clamp(
          Math.abs(deltaY) / SCROLL_INTENSITY_BASE,
          SCROLL_INTENSITY_MIN,
          SCROLL_INTENSITY_MAX,
        );
        targetProgress = clamp(targetProgress + deltaY * intensity, 0, desktopMetrics.totalScroll);
        animateProgressToTarget();
        return;
      }

      targetProgress = clamp(Math.abs(rect.top), 0, desktopMetrics.totalScroll);
      animateProgressToTarget();
    };

    const setupByViewport = () => {
      if (isDesktop()) {
        enableDesktopMode();
        onScroll();
        return;
      }

      stopProgressAnimation();
      enableMobileMode();
    };

    const onResize = () => {
      setupByViewport();
      lastScrollY = window.scrollY;
    };

    setupByViewport();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      stopProgressAnimation();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [amenities.length]);

  return (
    <section ref={sectionRef} id="amenities" className="relative bg-[#f5f1e8]">

      {/* ── MOBILE LAYOUT – normal vertical scroll, card per card ── */}
      <div className="md:hidden">
        <div className="px-[var(--wc-mobile-nav-pad-x)] pb-8 pt-[3.5625rem]">
          <span className="block font-[Pilcrow_Rounded] text-[0.875rem] uppercase leading-[1.25] text-[#697a61]">
            {label}
          </span>
          <h2 className="mt-3 font-poppins text-[1.75rem] font-[200] leading-[2.375rem] text-[#697a61]">
            {heading.replace(/\n/g, ' ')}
          </h2>
        </div>

        <div className="flex flex-col gap-10 px-[var(--wc-mobile-nav-pad-x)] pb-12 pt-4">
          {amenities.map((amenity) => (
            <div key={amenity.id}>
              <div className="relative aspect-[327/364] w-full overflow-hidden rounded-[1.25rem]">
                <Image
                  src={amenity.image}
                  alt={amenity.title}
                  fill
                  sizes="(max-width: 768px) calc(100vw - 3.875rem)"
                  className={`object-cover ${getObjectPositionClass(amenity.imagePosition)}`}
                />
              </div>
              <h3 className="mt-3 font-poppins text-[0.875rem] font-[300] leading-[1.5] text-[#697a61]">
                {amenity.title}
              </h3>
              <p className="mt-1 text-justify font-poppins text-[0.75rem] font-[200] leading-[1rem] text-[#65785e]">
                {amenity.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP LAYOUT – sticky horizontal scroll ── */}
      <div ref={stickyRef} className="sticky top-0 hidden h-[800px] items-start justify-start gap-[var(--amn-gap,1rem)] overflow-x-hidden overflow-y-visible pb-[clamp(2rem,4dvh,4rem)] pt-[clamp(4rem,7dvh,7rem)] md:flex md:px-[7.5rem]">
        <div ref={leftRef} className="w-[22rem] shrink-0">
          <span className="mb-6 block font-[Pilcrow_Rounded] text-[1.25rem] uppercase leading-[1.25] text-[#697a61]">
            {label}
          </span>
          <h2 className="w-[25.625rem] max-w-full font-poppins text-[2.375rem] font-[200] leading-[3.3125rem] text-[#697a61]">
            {heading.split('\n').map((line, index, arr) => (
              <span key={`${line}-${index}`}>
                {line}
                {index < arr.length - 1 ? <br /> : null}
              </span>
            ))}
          </h2>
        </div>
        <div ref={rightRef} className="flex-1 overflow-visible">
          <div ref={trackRef} className="flex flex-row gap-[4.75rem] will-change-transform">
            {amenities.map((amenity) => (
              <div
                key={amenity.id}
                data-amenity-card
                className="w-[28.9375rem] shrink-0"
              >
                <div className="relative mb-5 h-[29.875rem] max-h-[min(29.875rem,calc(100vh-14rem))] overflow-hidden rounded-[1.25rem]">
                  <Image
                    src={amenity.image}
                    alt={amenity.title}
                    fill
                    sizes="(max-width: 1280px) 50vw, 520px"
                    className={`object-cover transition-transform duration-500 ${getObjectPositionClass(amenity.imagePosition)}`}
                    style={{ transform: 'translateY(var(--amn-img-shift, 0px))' }}
                  />
                </div>
                <h3 className="mb-[0.375rem] font-poppins text-[1.5rem] font-[300] leading-[3.3125rem] text-[#697a61]">
                  {amenity.title}
                </h3>
                <p className="font-poppins text-[1.125rem] font-[200] leading-[1.625rem] text-[#65785e]">
                  {amenity.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
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
