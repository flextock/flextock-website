"use client";

import { ArrowRight, Play } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import {
  arabicCopy,
  heroContent,
  heroSignals,
  marketingVisuals,
  siteConfig,
} from "@/constants";
import { useLocale } from "@/components/LocaleProvider";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";

export function HeroSection() {
  const { locale } = useLocale();
  const reduceMotion = useReducedMotion();
  const content = locale === "ar" ? arabicCopy.hero : heroContent;
  const siteCopy = locale === "ar" ? arabicCopy.site : siteConfig;
  const signals = locale === "ar" ? arabicCopy.heroSignals : heroSignals;
  const [activeSignal, setActiveSignal] = useState(0);

  return (
    <section className="relative overflow-hidden border-b border-flextock-line">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-6 sm:py-20 lg:min-h-[calc(100vh-4.5rem)] lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-10 lg:py-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative z-10 max-w-2xl"
        >
          <p className="mb-5 flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-flextock-neon sm:mb-7 sm:text-xs sm:tracking-[0.2em]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-flextock-neon" />
            {content.eyebrow}
          </p>
          <h1 className="max-w-2xl text-[2rem] font-medium leading-[1.05] tracking-[-0.05em] text-flextock-foreground sm:text-5xl sm:leading-[0.98] sm:tracking-[-0.065em] lg:text-6xl">
            {content.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-flextock-muted sm:mt-8 sm:text-lg sm:leading-8">
            {content.description}
          </p>
          <p className="mt-3 text-sm font-medium text-flextock-foreground sm:mt-4">
            {content.supportingText}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10 sm:gap-5">
            <Link
              href="/quote"
              className="group inline-flex min-h-11 items-center gap-3 bg-flextock-neon px-5 py-3 text-sm font-medium text-flextock-navy transition-colors hover:bg-flextock-foreground"
            >
              {siteCopy.primaryCta}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1 rtl:rotate-180"
              />
            </Link>
            <a
              href="#showcase"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-flextock-muted transition-colors hover:text-flextock-foreground"
            >
              <Play size={14} fill="currentColor" />
              {siteCopy.secondaryCta}
            </a>
          </div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="grid grid-cols-3 gap-2">
            {marketingVisuals.heroPhotos.map((photo) => (
              <VisualPlaceholder
                key={photo.alt}
                src={photo.src}
                alt={photo.alt}
                label={photo.label[locale]}
                note={photo.note[locale]}
                className="aspect-[3/4] min-h-[12rem] sm:min-h-[18rem]"
              />
            ))}
          </div>
          <div className="border-y border-flextock-line bg-flextock-panel">
            <div className="grid grid-cols-1 divide-y divide-flextock-line sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:rtl:divide-x-reverse">
              {signals.map((signal, index) => (
                <button
                  key={signal.label}
                  type="button"
                  aria-pressed={activeSignal === index}
                  onClick={() => setActiveSignal(index)}
                  className={`px-4 py-3.5 text-start transition-colors sm:px-3 sm:py-4 ${
                    activeSignal === index
                      ? "bg-flextock-panelStrong text-flextock-foreground"
                      : "text-flextock-muted hover:text-flextock-foreground"
                  }`}
                >
                  <span className="flex items-center justify-between gap-3 sm:block">
                    <span className="font-mono text-[10px] text-flextock-neon">
                      0{index + 1}
                    </span>
                    <span className="text-xs uppercase tracking-[0.08em] sm:mt-2 sm:block sm:tracking-[0.12em]">
                      {signal.label}
                    </span>
                  </span>
                  <span className="mt-1 block text-sm font-medium">
                    {signal.value}
                  </span>
                </button>
              ))}
            </div>
            <div className="border-t border-flextock-line px-4 py-3">
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={signals[activeSignal].detail}
                  initial={reduceMotion ? false : { opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -5 }}
                  transition={{ duration: reduceMotion ? 0 : 0.2 }}
                  className="text-xs leading-5 text-flextock-muted"
                  aria-live="polite"
                >
                  {signals[activeSignal].detail}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
