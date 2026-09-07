"use client";

import { Pause, Play } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";

import { arabicCopy, siteConfig, videoContent } from "@/constants";
import { useLocale } from "@/components/LocaleProvider";

export function VideoShowcase() {
  const { locale } = useLocale();
  const content = locale === "ar" ? arabicCopy.video : videoContent;
  const siteCopy = locale === "ar" ? arabicCopy.site : siteConfig;
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  function togglePlayback() {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  }

  return (
    <section className="border-b border-flextock-line bg-flextock-navy px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-end lg:gap-12">
        <div>
          <p className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-flextock-neon sm:text-xs sm:tracking-[0.2em]">
            <Play size={14} fill="currentColor" />
            {content.eyebrow}
          </p>
          <h2 className="mt-5 text-3xl font-medium leading-[1.05] tracking-[-0.05em] text-flextock-foreground sm:mt-7 sm:text-4xl sm:leading-[0.98] sm:tracking-[-0.06em] lg:text-5xl">
            {content.title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-flextock-muted sm:mt-6 sm:text-lg sm:leading-8">
            {content.description}
          </p>
        </div>
        <div className="relative overflow-hidden border-y border-flextock-line bg-flextock-panel">
          <video
            ref={videoRef}
            className="aspect-video w-full object-cover"
            src={content.source}
            poster={content.poster}
            autoPlay={!reduceMotion}
            muted
            loop
            playsInline
            preload="none"
            aria-label={content.label}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onTimeUpdate={(event) => {
              const video = event.currentTarget;
              setProgress(video.duration ? video.currentTime / video.duration : 0);
            }}
          />
          <button
            type="button"
            onClick={togglePlayback}
            aria-label={
              isPlaying ? siteCopy.pauseVideoLabel : siteCopy.playVideoLabel
            }
            className="absolute start-4 top-4 flex h-11 w-11 items-center justify-center bg-flextock-neon text-flextock-navy transition-colors hover:bg-flextock-foreground focus:outline-none focus:ring-2 focus:ring-flextock-neon focus:ring-offset-2 focus:ring-offset-flextock-navy sm:start-5 sm:top-5"
          >
            {isPlaying ? (
              <Pause size={17} fill="currentColor" />
            ) : (
              <Play size={17} fill="currentColor" />
            )}
          </button>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-black/30">
            <div
              className="h-full bg-flextock-neon transition-[width]"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
