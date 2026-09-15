"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  arabicCopy,
  localizedSolutionDetails,
  marketingVisuals,
  solutionCards,
  solutionDetails,
  solutionPageContent,
} from "@/constants";
import { useLocale } from "@/components/LocaleProvider";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";

export function SolutionPageContent({ slug }: { slug: string }) {
  const { locale } = useLocale();
  const reduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const index = solutionCards.findIndex((solution) => solution.slug === slug);
  const solution = solutionCards[index];

  if (!solution) {
    return null;
  }

  const detail =
    locale === "ar"
      ? localizedSolutionDetails[solution.slug]
      : solutionDetails[solution.slug];
  const content =
    locale === "ar" ? arabicCopy.solutionPage : solutionPageContent;
  const sourceDetail = solutionDetails[solution.slug];
  const image = sourceDetail.image;
  const egyptKsa = marketingVisuals.egyptKsa;
  const showEgyptKsaPlaceholder = solution.slug === "cross-border-trade";

  return (
    <main className="min-h-screen bg-flextock-navy text-flextock-foreground">
      <section className="px-5 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-10 lg:pb-32 lg:pt-28">
        <div className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-flextock-neon sm:text-xs sm:tracking-[0.2em]">
              {solution.title} · {content.eyebrow}
            </p>
            <h1 className="mt-5 max-w-3xl text-[2rem] font-medium leading-[1.05] tracking-[-0.05em] sm:mt-7 sm:text-5xl sm:leading-[0.95] sm:tracking-[-0.06em] lg:text-6xl">
              {detail.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-flextock-muted sm:mt-8 sm:text-xl sm:leading-8">
              {detail.intro}
            </p>
            <Link
              href="/quote"
              className="mt-8 inline-flex min-h-11 items-center gap-3 bg-flextock-neon px-5 py-3 text-sm font-medium text-flextock-navy transition-colors hover:bg-flextock-foreground sm:mt-10"
            >
              {content.cta}
              <ArrowRight size={16} className="rtl:rotate-180" />
            </Link>
          </motion.div>
          <div
            className={
              sourceDetail.secondaryImages?.length
                ? "grid gap-3 sm:grid-cols-2"
                : undefined
            }
          >
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.65 }}
              className="relative aspect-[4/5] max-h-[22rem] sm:max-h-none"
            >
              {showEgyptKsaPlaceholder ? (
                <VisualPlaceholder
                  src={egyptKsa.src}
                  alt={egyptKsa.alt}
                  label={egyptKsa.label[locale]}
                  note={egyptKsa.note[locale]}
                  className="h-full min-h-[22rem]"
                />
              ) : (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-contain"
                />
              )}
            </motion.div>
            {sourceDetail.secondaryImages?.map((secondaryImage) => (
              <div
                key={secondaryImage.src}
                className="relative hidden aspect-[4/5] bg-flextock-navy sm:block"
              >
                <Image
                  src={secondaryImage.src}
                  alt={secondaryImage.alt}
                  fill
                  sizes="(min-width: 640px) 20vw, 100vw"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-flextock-line bg-flextock-panel px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
          <div>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-flextock-neon sm:text-xs sm:tracking-[0.2em]">
              {detail.problem.eyebrow}
            </p>
            <h2 className="mt-5 max-w-xl text-3xl font-medium leading-[1.05] tracking-[-0.04em] sm:mt-7 sm:text-4xl sm:leading-[0.98] sm:tracking-[-0.05em] lg:text-5xl">
              {detail.problem.title}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-flextock-muted sm:mt-6 sm:text-lg sm:leading-8">
              {detail.problem.description}
            </p>
          </div>
          <div className="grid gap-0 border-y border-flextock-line sm:grid-cols-3">
            {detail.outcomes.map((outcome) => (
              <div
                key={outcome.label}
                className="border-b border-flextock-line py-5 last:border-b-0 sm:border-b-0 sm:border-l sm:px-5 sm:first:border-l-0"
              >
                <p className="text-3xl font-medium tracking-[-0.05em] text-flextock-foreground">
                  {outcome.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-flextock-muted">
                  {outcome.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-flextock-neon sm:text-xs sm:tracking-[0.2em]">
            {content.howItWorks}
          </p>
          <div className="mt-8 border-y border-flextock-line sm:mt-12">
            <div
              className="grid border-b border-flextock-line sm:grid-cols-2 lg:grid-cols-4"
              role="tablist"
              aria-label={content.howItWorks}
            >
              {detail.steps.map((step, stepIndex) => (
                <button
                  key={step.title}
                  type="button"
                  role="tab"
                  aria-selected={activeStep === stepIndex}
                  aria-controls="solution-step-panel"
                  onClick={() => setActiveStep(stepIndex)}
                  className={`min-h-11 border-b border-flextock-line px-4 py-4 text-start transition-colors last:border-b-0 sm:border-s sm:py-5 sm:first:border-s-0 lg:border-b-0 ${
                    activeStep === stepIndex
                      ? "bg-flextock-panelStrong text-flextock-foreground"
                      : "text-flextock-muted hover:text-flextock-foreground"
                  }`}
                >
                  <span className="font-mono text-xs text-flextock-neon">
                    0{stepIndex + 1}
                  </span>
                  <span className="mt-4 block text-sm font-medium leading-6 sm:mt-8">
                    {step.title}
                  </span>
                </button>
              ))}
            </div>
            <motion.div
              key={activeStep}
              id="solution-step-panel"
              role="tabpanel"
              aria-live="polite"
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.25 }}
              className="min-h-48 p-6 sm:p-8"
            >
              <span className="font-mono text-xs text-flextock-neon">
                0{activeStep + 1}
              </span>
              <h3 className="mt-6 text-3xl font-medium tracking-[-0.05em]">
                {detail.steps[activeStep].title}
              </h3>
              <p className="mt-3 max-w-xl text-base leading-7 text-flextock-muted">
                {detail.steps[activeStep].description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
