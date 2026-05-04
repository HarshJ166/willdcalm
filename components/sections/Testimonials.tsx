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

export default function Testimonials({
  videos,
  quotes,
  playingId,
  onVideoToggle,
}: TestimonialsProps) {
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const handleToggle = async (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (!video.paused) {
      video.pause();
      onVideoToggle('');
      return;
    }

    // Pause all others
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

  const [tallVideo, midVideo, sideVideo] = videos;
  const [quoteTop, quoteBottom] = quotes;

  return (
    <section id="testimonials" className="bg-forest py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="space-y-3">
          <span className="text-xs tracking-[0.3em] uppercase text-cream/40 font-medium">
            Testimonials
          </span>
          <p className="hidden md:block text-xl md:text-2xl font-light text-cream/80 max-w-2xl leading-relaxed">
            Discover authentic guest experiences that reflect the refined hospitality and distinctive
            character of WildCalm, creating lasting impressions.
          </p>
          <p className="md:hidden text-lg font-light text-cream/80 leading-relaxed">
            WildCalm Resort offers elegant, tranquil accommodations with premium comforts for a
            truly refined stay.
          </p>
        </div>

        {/* Grid: tall left | center col | right col */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {/* Tall video */}
          <VideoCard
            video={tallVideo}
            isPlaying={playingId === tallVideo.id}
            videoRef={(el) => { videoRefs.current[tallVideo.id] = el; }}
            onToggle={() => handleToggle(tallVideo.id)}
            className="md:row-span-2 aspect-3/5"
          />

          {/* Center column */}
          <div className="flex flex-col gap-4">
            <div className="bg-cream/10 p-6 rounded-sm space-y-3">
              <p className="text-cream/80 text-sm leading-relaxed italic">
                &ldquo;{quoteTop.text}&rdquo;
              </p>
              <span className="text-xs text-cream/40 tracking-widest">~ {quoteTop.author}</span>
            </div>
            <VideoCard
              video={midVideo}
              isPlaying={playingId === midVideo.id}
              videoRef={(el) => { videoRefs.current[midVideo.id] = el; }}
              onToggle={() => handleToggle(midVideo.id)}
              className="aspect-video"
            />
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            <VideoCard
              video={sideVideo}
              isPlaying={playingId === sideVideo.id}
              videoRef={(el) => { videoRefs.current[sideVideo.id] = el; }}
              onToggle={() => handleToggle(sideVideo.id)}
              className="aspect-video"
            />
            <div className="bg-cream/10 p-6 rounded-sm space-y-3">
              <p className="text-cream/80 text-sm leading-relaxed italic">
                &ldquo;{quoteBottom.text}&rdquo;
              </p>
              <span className="text-xs text-cream/40 tracking-widest">
                ~ {quoteBottom.author}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface VideoCardProps {
  video: TestimonialVideo;
  isPlaying: boolean;
  videoRef: (el: HTMLVideoElement | null) => void;
  onToggle: () => void;
  className?: string;
}

function VideoCard({ video, isPlaying, videoRef, onToggle, className = '' }: VideoCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-sm bg-forest/60 ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        playsInline
        muted
        preload="metadata"
        onEnded={onToggle}
      >
        <source src={video.src} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={onToggle}
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
        className="absolute inset-0 flex items-center justify-center group"
      >
        {!isPlaying && (
          <span className="w-12 h-12 rounded-full bg-cream/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-cream/30 transition-colors">
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
              <path d="M1 1L15 9L1 17V1Z" fill="white" />
            </svg>
          </span>
        )}
      </button>
    </div>
  );
}
