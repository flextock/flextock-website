"use client";

import {
  Activity,
  RefreshCcw,
  ShieldAlert,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { useRef, useState } from "react";

import {
  arabicCopy,
  journeySteps,
  showcaseContent,
} from "@/constants";
import { useLocale } from "@/components/LocaleProvider";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";

const iconMap: Record<string, LucideIcon> = {
  activity: Activity,
  shield: ShieldAlert,
  refresh: RefreshCcw,
};

export function OperatingSystemShowcase() {
  const { locale } = useLocale();
  const reduceMotion = useReducedMotion();
  const localizedSteps =
    locale === "ar"
      ? journeySteps.map((step, index) => ({
          ...step,
          ...arabicCopy.journeySteps[index],
        }))
      : journeySteps;
  const localizedContent =
    locale === "ar" ? arabicCopy.showcase : showcaseContent;
  const showcaseRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ["start 70%", "end 45%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 28,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setActiveStep(
      Math.min(
        localizedSteps.length - 1,
        Math.floor(latest * localizedSteps.length),
      ),
    );
  });

  const currentStep = localizedSteps[activeStep];

  function selectStep(index: number) {
    setActiveStep(index);
    stepRefs.current[index]?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "center",
    });
  }

  return (
    <section
      ref={showcaseRef}
      id="showcase"
      className="relative bg-flextock-navy"
    >
      <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.86fr_1.14fr] lg:gap-24">
        <div className="sticky top-[4.5rem] z-20 border-b border-flextock-line bg-flextock-navy/95 backdrop-blur-md lg:border-b-0 lg:bg-transparent lg:backdrop-blur-none lg:h-[calc(100vh-4.5rem)] lg:py-10">
          <div className="relative overflow-hidden bg-flextock-panel lg:h-full">
            <div className="flex flex-col justify-between gap-4 p-4 sm:p-6 lg:h-full lg:gap-0 lg:p-10">
              <div className="flex items-center justify-between border-b border-flextock-line pb-3 lg:pb-5">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-flextock-muted sm:text-xs sm:tracking-[0.18em]">
                  {localizedContent.systemLabel}
                </span>
                <span className="font-mono text-xs text-flextock-neon">
                  {currentStep.number}
                </span>
              </div>

              <div className="grid grid-cols-[1fr_auto] items-end gap-4 py-2 lg:block lg:py-10">
                <div>
                  <motion.p
                    key={currentStep.visualValue}
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-medium tracking-[-0.06em] text-flextock-foreground sm:text-5xl lg:text-7xl lg:tracking-[-0.07em] xl:text-8xl"
                  >
                    {currentStep.visualValue}
                  </motion.p>
                  <p className="mt-1 text-[0.65rem] uppercase tracking-[0.14em] text-flextock-muted sm:mt-2 sm:text-xs sm:tracking-[0.16em]">
                    {currentStep.visualUnit}
                  </p>
                  <p className="text-[0.65rem] uppercase tracking-[0.16em] text-flextock-neon sm:text-xs sm:tracking-[0.2em]">
                    {currentStep.visualLabel}
                  </p>
                </div>
                <div className="hidden sm:block lg:mt-10">
                  <VisualPlaceholder
                    label={localizedContent.visualPendingLabel}
                    note={localizedContent.visualPendingNote}
                    alt={currentStep.visualLabel}
                    className="min-h-28"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between gap-4 text-[0.65rem] text-flextock-muted sm:text-xs">
                  <span>{localizedContent.signalLabel}</span>
                  <span>
                    {currentStep.number} /{" "}
                    {String(localizedSteps.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-3 h-px bg-flextock-line lg:mt-4">
                  <motion.div
                    style={{
                      scaleX: progress,
                      transformOrigin: locale === "ar" ? "right" : "left",
                    }}
                    className="h-px bg-flextock-neon"
                  />
                </div>
                <div className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:hidden">
                  {localizedSteps.map((step, index) => (
                    <button
                      key={step.number}
                      type="button"
                      onClick={() => selectStep(index)}
                      aria-current={activeStep === index ? "step" : undefined}
                      className={`shrink-0 border px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.12em] transition-colors ${
                        activeStep === index
                          ? "border-flextock-neon bg-flextock-neon text-flextock-navy"
                          : "border-flextock-line text-flextock-muted"
                      }`}
                    >
                      {step.number}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 py-14 sm:px-6 sm:py-20 lg:px-0 lg:py-32">
          <div className="mb-12 max-w-2xl sm:mb-16 lg:mb-24">
            <p className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-flextock-neon sm:mb-6 sm:text-xs sm:tracking-[0.2em]">
              {localizedContent.eyebrow}
            </p>
            <h2 className="text-3xl font-medium leading-[1.05] tracking-[-0.05em] text-flextock-foreground sm:text-4xl sm:leading-[0.98] sm:tracking-[-0.06em] lg:text-5xl">
              {localizedContent.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-flextock-muted sm:mt-6 sm:text-lg sm:leading-8">
              {localizedContent.description}
            </p>
          </div>

          <div className="relative">
            <div className="absolute bottom-8 start-0 top-8 w-px bg-white/10" />
            <motion.div
              style={{ scaleY: progress }}
              className="absolute bottom-8 start-0 top-8 z-10 w-px origin-top bg-flextock-neon"
            />
            {localizedSteps.map((step, index) => {
              const Icon = iconMap[step.icon];
              const isActive = activeStep === index;

              return (
                <article
                  key={step.number}
                  ref={(element) => {
                    stepRefs.current[index] = element;
                  }}
                  className={`relative border-s ps-6 pb-14 pt-2 transition-opacity sm:ps-8 md:ps-12 lg:min-h-[78vh] lg:pb-0 ${
                    isActive
                      ? "border-flextock-neon opacity-100"
                      : "border-flextock-line opacity-45"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => selectStep(index)}
                    aria-current={isActive ? "step" : undefined}
                    className="group mb-6 flex min-h-11 items-center gap-3 text-start sm:mb-10 sm:gap-4"
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center sm:h-11 sm:w-11 ${
                        isActive
                          ? "bg-flextock-neon text-flextock-navy"
                          : "bg-flextock-panelStrong text-flextock-muted"
                      }`}
                    >
                      <Icon size={20} strokeWidth={1.7} />
                    </div>
                    <div
                      className={`flex flex-wrap items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.14em] sm:gap-3 sm:text-xs sm:tracking-[0.18em] ${
                        isActive
                          ? "text-flextock-foreground"
                          : "text-flextock-muted"
                      }`}
                    >
                      <span className="font-mono">{step.number}</span>
                      <span className="hidden h-px w-8 bg-white/20 sm:block" />
                      <span>{step.label}</span>
                    </div>
                    <span className="sr-only">View this operating signal</span>
                  </button>
                  <h3
                    className={`max-w-xl text-2xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-4xl sm:leading-[0.98] sm:tracking-[-0.06em] lg:text-5xl ${
                      isActive
                        ? "text-flextock-foreground"
                        : "text-flextock-muted"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`mt-5 max-w-xl text-base leading-7 sm:mt-8 sm:text-lg sm:leading-8 ${
                      isActive
                        ? "text-flextock-foreground"
                        : "text-flextock-muted"
                    }`}
                  >
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
