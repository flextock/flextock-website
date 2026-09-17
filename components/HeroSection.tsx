"use client";

import { ArrowRight, Play } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import { arabicCopy, heroContent, siteConfig } from "@/constants";
import { useLocale } from "@/components/LocaleProvider";

export function HeroSection() {
  const { locale } = useLocale();
  const reduceMotion = useReducedMotion();
  const content = locale === "ar" ? arabicCopy.hero : heroContent;
  const siteCopy = locale === "ar" ? arabicCopy.site : siteConfig;
  const trustStrip = content.trustStrip;

  return (
    <section className="relative overflow-hidden border-b border-flextock-line">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(57,255,152,0.08),transparent_55%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-5 py-16 sm:px-6 sm:py-24 lg:min-h-[calc(100vh-4.5rem)] lg:px-10 lg:py-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="mb-5 flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-flextock-neon sm:mb-7 sm:text-xs sm:tracking-[0.2em]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-flextock-neon" />
            {content.eyebrow}
          </p>
          <h1 className="max-w-4xl text-[2.15rem] font-medium leading-[1.05] tracking-[-0.05em] text-flextock-foreground sm:text-5xl sm:leading-[0.98] sm:tracking-[-0.065em] lg:text-6xl">
            {content.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-flextock-muted sm:mt-8 sm:text-lg sm:leading-8">
            {content.description}
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
              href="#system"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-flextock-muted transition-colors hover:text-flextock-foreground"
            >
              <Play size={14} fill="currentColor" />
              {siteCopy.secondaryCta}
            </a>
          </div>
          <div className="mt-10 flex flex-col gap-3 border-t border-flextock-line pt-6 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3">
            {trustStrip.map((item) => (
              <p
                key={item}
                className="text-xs font-medium uppercase tracking-[0.14em] text-flextock-muted"
              >
                {item}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
