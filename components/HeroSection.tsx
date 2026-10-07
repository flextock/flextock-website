"use client";

import { Play } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import { FlextockArrow } from "@/components/FlextockArrow";
import { HeroTitle } from "@/components/HeroTitle";
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
        <div className="max-w-4xl">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mb-5 flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-flextock-neon sm:mb-7 sm:text-xs sm:tracking-[0.2em]"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-flextock-neon" />
            {content.eyebrow}
          </motion.p>

          <HeroTitle
            prefix={content.titlePrefix}
            highlight={content.titleHighlight}
            suffix={content.titleSuffix}
          />

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.35, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-base leading-7 text-flextock-muted sm:mt-8 sm:text-xl sm:leading-8"
          >
            {content.description}
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10 sm:gap-5"
          >
            <Link
              href="/quote"
              className="group inline-flex min-h-11 items-center gap-3 bg-flextock-neon px-5 py-3 text-sm font-semibold text-flextock-navy transition-colors hover:bg-flextock-foreground"
            >
              {siteCopy.primaryCta}
              <FlextockArrow
                size={16}
                className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 rtl:group-hover:translate-x-0"
              />
            </Link>
            <a
              href="#system"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-flextock-muted transition-colors hover:text-flextock-foreground"
            >
              <Play size={14} fill="currentColor" />
              {siteCopy.secondaryCta}
            </a>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.65 }}
            className="mt-10 flex flex-col gap-3 border-t border-flextock-line pt-6 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3"
          >
            {trustStrip.map((item) => (
              <p
                key={item}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-flextock-muted"
              >
                {item}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
