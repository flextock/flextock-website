"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

import { FlextockArrow } from "@/components/FlextockArrow";
import { howToStartContent } from "@/constants";
import { useLocale } from "@/components/LocaleProvider";

export function HowToStartSection() {
  const { locale } = useLocale();
  const content = howToStartContent[locale];
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const xShift = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-40, 60]);
  const pathProgress = useTransform(
    scrollYProgress,
    [0.15, 0.55],
    reduceMotion ? [1, 1] : [0, 1],
  );

  return (
    <section
      ref={sectionRef}
      id="how-to-start"
      className="relative overflow-hidden border-t border-flextock-line bg-flextock-panel px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-32"
    >
      <motion.p
        aria-hidden="true"
        style={{ x: xShift }}
        className="pointer-events-none absolute -right-6 top-10 text-[9rem] font-semibold leading-none tracking-[-0.08em] text-flextock-neon/10 sm:text-[12rem] lg:right-10"
      >
        X
      </motion.p>

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flextock-neon">
            {content.eyebrow}
          </p>
          <h2 className="mt-5 text-3xl font-semibold leading-[1.05] tracking-[-0.05em] text-flextock-foreground sm:mt-7 sm:text-4xl sm:leading-[0.98] sm:tracking-[-0.06em] lg:text-5xl">
            {content.title}
          </h2>
        </div>

        <div className="relative mt-12">
          <svg
            className="pointer-events-none absolute left-0 right-0 top-10 hidden h-8 w-full md:block"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d="M8 5 H92"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.4"
              className="text-flextock-neon"
              style={{ pathLength: pathProgress }}
            />
          </svg>

          <div className="grid gap-0 border-y border-flextock-line md:grid-cols-3">
            {content.steps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.08 }}
                className="relative border-b border-flextock-line p-6 last:border-b-0 md:border-b-0 md:border-e md:last:border-e-0"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-flextock-neon">
                    {step.number}
                  </span>
                  {index < content.steps.length - 1 ? (
                    <FlextockArrow
                      size={14}
                      className="text-flextock-neon opacity-70 md:hidden"
                    />
                  ) : null}
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-flextock-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-flextock-muted">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        <p className="mt-10 max-w-3xl text-base leading-8 text-flextock-foreground">
          {content.assurance}
        </p>
      </div>
    </section>
  );
}
