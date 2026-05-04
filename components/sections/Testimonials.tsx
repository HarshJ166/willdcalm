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
      className="relative w-full min-h-[64.8125rem] bg-[#54694f] bg-[url('/design/web-noise-bg.svg')] bg-cover bg-center px-[var(--wc-page-gutter)] pt-[5.125rem] pb-[5.8125rem]"
    >
      {/* Desktop header */}
      <span className="hidden md:block w-[19.0625rem] font-[Pilcrow_Rounded] text-[1.25rem] font-[400] leading-[3.3125rem] text-[#f5f1e8]">
        TESTIMONIALS
      </span>
      <h2 className="hidden md:block font-poppins text-[1.875rem] font-[100] leading-[2.8125rem] text-[#f5f1e8] mt-[2.875rem] mb-[3.6875rem] w-full max-w-[98%]">
        Discover authentic guest experiences that reflect the refined hospitality and distinctive
        character of Wild Calm, creating lasting impressions
      </h2>

      {/* Mobile header */}
      <div className="md:hidden mb-6">
        <span className="block font-[Pilcrow_Rounded] text-[0.875rem] font-[400] tracking-[0.14em] text-[#f5f1e8] mb-2">TESTIMONIALS</span>
        <p className="max-w-[19.25rem] font-poppins text-[1.75rem] font-[200] leading-[2.375rem] text-[#f5f1e8]">
          WildCalm Resort offers elegant, tranquil accommodations with premium comforts for a truly refined stay.
        </p>
      </div>

      {/* Desktop grid */}
      <div className="hidden md:flex gap-[2rem] items-start w-full">
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
        <div className="flex flex-none w-[23.6875rem] flex-col gap-[1.375rem]">
          <div className="flex h-[12.375rem] flex-col rounded-[1rem] bg-[#909d88] px-[1.5rem] pt-[1.875rem] pb-[1.125rem]">
            <p className="font-poppins text-[1.125rem] font-[200] leading-[1.444] text-[var(--text-cream)]">
              &ldquo;{quoteTop.text}&rdquo;
            </p>
            <span className="mt-auto block text-right font-poppins text-[1.5rem] font-[100] leading-[0.89] text-[#f5f1e8]">
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
        <div className="flex flex-none w-[19.4375rem] flex-col gap-[1.375rem]">
          <TestimonialVideoCard
            id={sideVideo.id}
            src={sideVideo.src}
            author={sideVideo.author}
            isPlaying={playingId === sideVideo.id}
            videoRef={(el) => { videoRefs.current[sideVideo.id] = el; }}
            onToggle={() => handleToggle(sideVideo.id)}
            onEnded={() => onVideoToggle('')}
          />
          <div className="flex h-[11.125rem] flex-col rounded-[1rem] bg-[#909d88] px-[1.5rem] pt-[1.875rem] pb-[1.125rem]">
            <p className="font-poppins text-[1.125rem] font-[200] leading-[1.444] text-[var(--text-cream)]">
              &ldquo;{quoteBottom.text}&rdquo;
            </p>
            <span className="mt-auto block text-right font-poppins text-[1.5rem] font-[100] leading-[0.89] text-[#f5f1e8]">
              ~ {quoteBottom.author}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile: single column */}
      <div className="flex flex-col gap-4 md:hidden">
        {[tallVideo, midVideo, sideVideo].map((video) => (
          <div key={video.id} className="relative aspect-video w-full overflow-hidden rounded-[0.75rem] bg-[rgba(245,241,232,0.08)]">
            <video
              ref={(el) => { videoRefs.current[video.id] = el; }}
              className="absolute inset-0 z-[1] h-full w-full object-cover"
              playsInline
              muted
              preload="metadata"
              onEnded={() => onVideoToggle('')}
            >
              <source src={video.src} type="video/mp4" />
            </video>
            {playingId !== video.id && (
              <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-[rgba(78,97,74,0.34)] via-[rgba(78,97,74,0.22)] to-[rgba(78,97,74,0.08)]" />
            )}
            <button
              type="button"
              onClick={() => handleToggle(video.id)}
              aria-label={playingId === video.id ? `Pause ${video.author} video` : `Play ${video.author} video`}
              className="absolute inset-0 z-[4] flex items-center justify-center"
            >
              {playingId !== video.id && (
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(245,241,232,0.45)] bg-[rgba(152,166,145,0.28)]">
                  <svg width="12" height="14" viewBox="0 0 16 18" fill="none" aria-hidden="true">
                    <path d="M1 1L15 9L1 17V1Z" fill="white" />
                  </svg>
                </span>
              )}
            </button>
          </div>
        ))}
        <div className="flex h-[12.375rem] flex-col rounded-[1rem] bg-[#909d88] px-[1.5rem] pt-[1.875rem] pb-[1.125rem]">
          <p className="font-poppins text-[1.125rem] font-[200] leading-[1.444] text-[var(--text-cream)]">&ldquo;{quoteTop.text}&rdquo;</p>
          <span className="mt-auto block text-right font-poppins text-[1.5rem] font-[100] leading-[0.89] text-[#f5f1e8]">~ {quoteTop.author}</span>
        </div>
        <div className="flex h-[11.125rem] flex-col rounded-[1rem] bg-[#909d88] px-[1.5rem] pt-[1.875rem] pb-[1.125rem]">
          <p className="font-poppins text-[1.125rem] font-[200] leading-[1.444] text-[var(--text-cream)]">&ldquo;{quoteBottom.text}&rdquo;</p>
          <span className="mt-auto block text-right font-poppins text-[1.5rem] font-[100] leading-[0.89] text-[#f5f1e8]">~ {quoteBottom.author}</span>
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
  videoRef: (el: HTMLVideoElement | null) => void;
  onToggle: () => void;
  onEnded: () => void;
}

function TestimonialVideoCard({ id, src, author, isPlaying, isTall, isMediumKhushi, videoRef, onToggle, onEnded }: VideoCardProps) {
  const heightClass = isTall
    ? 'h-[34.125rem] w-[27.9375rem] shrink-0'
    : isMediumKhushi
    ? 'h-[19.8125rem] w-[23.6875rem]'
    : 'h-[20.9375rem] w-full';

  return (
    <div className={`relative overflow-hidden rounded-[1rem] bg-[rgba(245,241,232,0.08)] ${heightClass}`}>
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
      {!isPlaying && (
        <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-[rgba(78,97,74,0.34)] via-[rgba(78,97,74,0.22)] to-[rgba(78,97,74,0.08)]" />
      )}
      {!isPlaying && isTall && (
        <div className="pointer-events-none absolute inset-[2.6rem_2.2rem] z-[2] rounded-[0.9375rem] border border-[rgba(245,241,232,0.36)] bg-[rgba(220,230,232,0.08)]" />
      )}
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
