'use client';

import { useRef } from 'react';

interface TestimonialVideo {
  id: string;
  src: string;
  author: string;
}

interface TestimonialQuote {
  id: string;
  text: string;
  author: string;
}

interface TestimonialsProps {
  videos: readonly [TestimonialVideo, TestimonialVideo, TestimonialVideo];
  quotes: readonly [TestimonialQuote, TestimonialQuote];
  playingId: string | null;
  onVideoToggle: (id: string) => void;
}

export default function Testimonials({ videos, quotes, playingId, onVideoToggle }: TestimonialsProps) {
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const [tallVideo, midVideo, sideVideo] = videos;
  const [quoteTop, quoteBottom] = quotes;

  const handleToggle = async (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (!video.paused) {
      video.pause();
      onVideoToggle('');
      return;
    }

    Object.entries(videoRefs.current).forEach(([vid, el]) => {
      if (el && vid !== id) {
        el.pause();
        el.currentTime = 0;
      }
    });

    try {
      video.muted = false;
      video.volume = 1;
      await video.play();
    } catch {
      video.muted = true;
      await video.play();
    }
    onVideoToggle(id);
  };

  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#5f7058] pt-[3.875rem] pb-[5.8125rem] "
    >
      {/* Mobile/Tablet header */}
      <div className="hidden">
        <span className="block font-sans text-[0.875rem] font-[300] uppercase text-[#f5f1e8]">TESTIMONIALS</span>
        <p className="mt-3 font-sans text-[1.75rem] font-[100] text-[#f5f1e8]">
          WildCalm Resort offers elegant, tranquil accommodations with premium comforts for a truly refined stay.
        </p>
      </div>

      {/* Desktop: shared max-width so copy + grid scale together on 4K */}
      <div className="hidden mx-auto block w-full ">
        <span className="block font-sans font-[400] uppercase leading-normal text-[#f5f1e8] ">
          TESTIMONIALS
        </span>
        <h2 className="mt-[2.875rem] mb-[3.6875rem] w-full max-w-none font-sans font-[200] text-[#f5f1e8] mt-[2.875rem] mb-[3.6875rem] ">
          <span className="block">Discover authentic guest experiences that reflect the refined</span>
          <span className="block">hospitality and distinctive character of Wild Calm, creating lasting impressions</span>
        </h2>

        <div className="flex w-full items-start ">
        {/* Left: tall video */}
        <TestimonialVideoCard
          id={tallVideo.id}
          src={tallVideo.src}
          author={tallVideo.author}
          isPlaying={playingId === tallVideo.id}
          isTall
          videoRef={(el) => { videoRefs.current[tallVideo.id] = el; }}
          onToggle={() => handleToggle(tallVideo.id)}
          onEnded={() => onVideoToggle('')}
        />

        {/* Center column */}
        <div className="flex flex-none flex-col ">
          <div className="flex h-[12.375rem] flex-col rounded-[0.8125rem] bg-[#a7b4a2] px-[1.5rem] pt-[1.875rem] pb-[1.125rem]">
            <p className="font-sans text-[1.125rem] font-[200] ">
              &ldquo;{quoteTop.text}&rdquo;
            </p>
            <span className="mt-auto block text-right font-sans text-[1.125rem] font-[200] text-[#f5f1e8]">
              ~ {quoteTop.author}
            </span>
          </div>
          <TestimonialVideoCard
            id={midVideo.id}
            src={midVideo.src}
            author={midVideo.author}
            isPlaying={playingId === midVideo.id}
            isMediumKhushi
            videoRef={(el) => { videoRefs.current[midVideo.id] = el; }}
            onToggle={() => handleToggle(midVideo.id)}
            onEnded={() => onVideoToggle('')}
          />
        </div>

        {/* Right column */}
        <div className="flex flex-none flex-col ">
          <TestimonialVideoCard
            id={sideVideo.id}
            src={sideVideo.src}
            author={sideVideo.author}
            isPlaying={playingId === sideVideo.id}
            isFaded
            videoRef={(el) => { videoRefs.current[sideVideo.id] = el; }}
            onToggle={() => handleToggle(sideVideo.id)}
            onEnded={() => onVideoToggle('')}
          />
          <div className="flex h-[11.125rem] flex-col rounded-[0.8125rem] bg-[#909d88] px-[1.5rem] pt-[1.875rem] pb-[1.125rem]">
            <p className="font-sans text-[1.125rem] font-[200] ">
              &ldquo;{quoteBottom.text}&rdquo;
            </p>
            <span className="mt-auto block text-right font-sans text-[1.125rem] font-[200] text-[#f5f1e8]">
              ~ {quoteBottom.author}
            </span>
          </div>
        </div>
        </div>
      </div>

      {/* Mobile/Tablet: Figma layout — arch images alternating with quotes */}
      <div className="flex flex-col hidden">
        {/* Video 1: Anurita */}
        <div className="relative mt-[4.8125rem] h-[23.375rem] w-full overflow-hidden rounded-[0.8125rem] bg-[rgba(245,241,232,0.08)]">
          <video
            ref={(el) => { videoRefs.current[tallVideo.id] = el; }}
            className="absolute inset-0 h-full w-full object-cover object-center"
            playsInline
            muted
            preload="metadata"
            onEnded={() => onVideoToggle('')}
          >
            <source src={tallVideo.src} type="video/mp4" />
          </video>
          <button
            type="button"
            onClick={() => handleToggle(tallVideo.id)}
            aria-label={playingId === tallVideo.id ? `Pause ${tallVideo.author} video` : `Play ${tallVideo.author} video`}
            className="absolute inset-0 z-[4] flex items-center justify-center"
          >
            {playingId !== tallVideo.id && (
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(245,241,232,0.45)] bg-[rgba(152,166,145,0.28)]">
                <svg width="12" height="14" viewBox="0 0 16 18" fill="none" aria-hidden="true">
                  <path d="M1 1L15 9L1 17V1Z" fill="white" />
                </svg>
              </span>
            )}
          </button>
        </div>

        {/* Quote 1: Khushi — 135px card */}
        <div className="mt-[1.125rem] flex h-[8.4375rem] flex-col rounded-[0.8125rem] bg-[#909d88] px-[1.375rem] py-[1.125rem]">
          <p className="font-sans text-[0.75rem] font-[200] text-[#f5f1e8]">{quoteTop.text}</p>
          <span className="mt-auto text-right font-sans text-[0.625rem] font-[200] text-[#f5f1e8]">~ {quoteTop.author}</span>
        </div>

        {/* Video 2: Khushi */}
        <div className="relative mt-[1.125rem] h-[14.0625rem] w-full overflow-hidden rounded-[0.8125rem] bg-[rgba(245,241,232,0.08)]">
          <video
            ref={(el) => { videoRefs.current[midVideo.id] = el; }}
            className="absolute inset-0 h-full w-full object-cover object-center"
            playsInline
            muted
            preload="metadata"
            onEnded={() => onVideoToggle('')}
          >
            <source src={midVideo.src} type="video/mp4" />
          </video>
          <button
            type="button"
            onClick={() => handleToggle(midVideo.id)}
            aria-label={playingId === midVideo.id ? `Pause ${midVideo.author} video` : `Play ${midVideo.author} video`}
            className="absolute inset-0 z-[4] flex items-center justify-center"
          >
            {playingId !== midVideo.id && (
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(245,241,232,0.45)] bg-[rgba(152,166,145,0.28)]">
                <svg width="12" height="14" viewBox="0 0 16 18" fill="none" aria-hidden="true">
                  <path d="M1 1L15 9L1 17V1Z" fill="white" />
                </svg>
              </span>
            )}
          </button>
        </div>

        {/* Quote 2: Aparna — 114px card */}
        <div className="mt-[1.125rem] flex h-[7.125rem] flex-col rounded-[0.8125rem] bg-[#909d88] px-[1.375rem] py-[1.125rem]">
          <p className="font-sans text-[0.75rem] font-[200] text-[#f5f1e8]">{quoteBottom.text}</p>
          <span className="mt-auto text-right font-sans text-[0.625rem] font-[200] text-[#f5f1e8]">~ {quoteBottom.author}</span>
        </div>

        {/* Video 3: Aparna */}
        <div className="relative mt-[1.125rem] h-[20.9375rem] w-full overflow-hidden rounded-[0.8125rem] bg-[rgba(245,241,232,0.08)]">
          <video
            ref={(el) => { videoRefs.current[sideVideo.id] = el; }}
            className="absolute inset-0 h-full w-full object-cover object-center"
            playsInline
            muted
            preload="metadata"
            onEnded={() => onVideoToggle('')}
          >
            <source src={sideVideo.src} type="video/mp4" />
          </video>
          <button
            type="button"
            onClick={() => handleToggle(sideVideo.id)}
            aria-label={playingId === sideVideo.id ? `Pause ${sideVideo.author} video` : `Play ${sideVideo.author} video`}
            className="absolute inset-0 z-[4] flex items-center justify-center"
          >
            {playingId !== sideVideo.id && (
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(245,241,232,0.45)] bg-[rgba(152,166,145,0.28)]">
                <svg width="12" height="14" viewBox="0 0 16 18" fill="none" aria-hidden="true">
                  <path d="M1 1L15 9L1 17V1Z" fill="white" />
                </svg>
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

interface VideoCardProps {
  id: string;
  src: string;
  author: string;
  isPlaying: boolean;
  isTall?: boolean;
  isMediumKhushi?: boolean;
  isFaded?: boolean;
  videoRef: (el: HTMLVideoElement | null) => void;
  onToggle: () => void;
  onEnded: () => void;
}

function TestimonialVideoCard({ id, src, author, isPlaying, isTall, isMediumKhushi, isFaded, videoRef, onToggle, onEnded }: VideoCardProps) {
  const heightClass = isTall
    ? 'h-[48rem] w-[36rem] shrink-0'
    : isMediumKhushi
    ? 'h-[28rem] w-[30rem]'
    : 'h-[28rem] w-full';


  return (
    <div className={`relative overflow-hidden rounded-[0.8125rem] bg-[rgba(245,241,232,0.08)] ${heightClass}`}>
      <video
        ref={videoRef}
        className="absolute inset-0 z-[1] h-full w-full object-cover"
        playsInline
        muted
        preload="metadata"
        onEnded={onEnded}
      >
        <source src={src} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={onToggle}
        aria-label={isPlaying ? `Pause ${author} video` : `Play ${author} video`}
        className={`absolute z-[4] ${
          isPlaying
            ? 'bottom-[0.75rem] right-[0.75rem] h-[2.4rem] w-[2.4rem]'
            : 'left-1/2 top-1/2 h-[3.5rem] w-[3.5rem] -translate-x-1/2 -translate-y-1/2'
        } rounded-full border border-[rgba(245,241,232,0.45)] bg-[rgba(152,166,145,0.28)] transition-[background,border-color] hover:border-[rgba(245,241,232,0.7)] hover:bg-[rgba(152,166,145,0.4)]`}
      >
        {!isPlaying && (
          <span className="absolute left-[51%] top-1/2 -translate-x-[45%] -translate-y-1/2 border-y-[0.5rem] border-y-transparent border-l-[0.75rem] border-l-[rgba(245,241,232,0.92)]" />
        )}
      </button>
    </div>
  );
}
