"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { arabicCopy, networkContent } from "@/constants";
import { useLocale } from "@/components/LocaleProvider";

export function NetworkSection() {
  const { locale } = useLocale();
  const content =
    locale === "ar"
      ? { ...networkContent, ...arabicCopy.network }
      : networkContent;
  const [activePoint, setActivePoint] = useState(0);

  return (
    <section className="border-t border-flextock-line bg-flextock-panel px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-flextock-neon sm:text-xs sm:tracking-[0.2em]">
            {content.eyebrow}
          </p>
          <h2 className="mt-5 text-3xl font-medium leading-[1.05] tracking-[-0.05em] text-flextock-foreground sm:mt-7 sm:text-4xl sm:leading-[0.98] sm:tracking-[-0.06em] lg:text-5xl">
            {content.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-flextock-muted sm:mt-6 sm:text-lg sm:leading-8">
            {content.description}
          </p>
        </div>
        <div className="mt-10 grid gap-3 sm:mt-14 md:grid-cols-3">
          {content.points.map((point, index) => (
            <button
              key={point.value}
              type="button"
              aria-pressed={activePoint === index}
              onClick={() => setActivePoint(index)}
              onMouseEnter={() => setActivePoint(index)}
              className={`min-h-11 border-t pt-5 text-start transition-colors ${
                activePoint === index
                  ? "border-flextock-neon"
                  : "border-flextock-line hover:border-flextock-foreground"
              }`}
            >
              <p
                className={`text-2xl font-medium tracking-[-0.03em] ${
                  activePoint === index
                    ? "text-flextock-foreground"
                    : "text-flextock-muted"
                }`}
              >
                {point.value}
              </p>
              <p className="mt-3 text-sm leading-6 text-flextock-muted">
                {point.label}
              </p>
            </button>
          ))}
        </div>
        <div
          className="mt-10 flex items-center gap-2"
          aria-label={`${content.points[activePoint].value} selected`}
        >
          {content.points.map((point, index) => (
            <motion.span
              key={point.value}
              animate={{ opacity: index === activePoint ? 1 : 0.35 }}
              className={`h-1.5 flex-1 ${
                index === activePoint
                  ? "bg-flextock-neon"
                  : "bg-flextock-line"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
