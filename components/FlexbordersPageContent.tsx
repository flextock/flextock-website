"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { arabicCopy, flexbordersPage, siteConfig } from "@/constants";
import { useLocale } from "@/components/LocaleProvider";

export function FlexbordersPageContent() {
  const { locale } = useLocale();
  const reduceMotion = useReducedMotion();
  const content = flexbordersPage[locale];
  const siteCopy = locale === "ar" ? arabicCopy.site : siteConfig;
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-flextock-navy text-flextock-foreground">
      <section className="border-b border-flextock-line px-5 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-4xl"
          >
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-flextock-neon sm:text-xs sm:tracking-[0.2em]">
              {content.hero.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl text-[2rem] font-medium leading-[1.05] tracking-[-0.05em] sm:mt-7 sm:text-5xl sm:leading-[0.95] sm:tracking-[-0.06em] lg:text-6xl">
              {content.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-flextock-muted sm:mt-8 sm:text-xl sm:leading-8">
              {content.hero.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
              <Link
                href="/quote"
                className="inline-flex min-h-11 items-center gap-3 bg-flextock-neon px-5 py-3 text-sm font-medium text-flextock-navy transition-colors hover:bg-flextock-foreground"
              >
                {siteCopy.primaryCta}
                <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex min-h-11 items-center text-sm text-flextock-muted transition-colors hover:text-flextock-foreground"
              >
                {siteCopy.secondaryCta}
              </a>
            </div>
            <div className="mt-10 flex flex-col gap-3 border-t border-flextock-line pt-6 sm:flex-row sm:flex-wrap sm:gap-x-8">
              {content.hero.trustStrip.map((item) => (
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

      <section className="border-b border-flextock-line bg-flextock-panel px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-flextock-neon">
            {content.gap.eyebrow}
          </p>
          <h2 className="mt-5 max-w-3xl text-3xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-4xl sm:leading-[0.98] lg:text-5xl">
            {content.gap.title}
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-flextock-muted sm:text-lg">
            {content.gap.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-flextock-line px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-flextock-neon">
            {content.handles.eyebrow}
          </p>
          <h2 className="mt-5 max-w-3xl text-3xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            {content.handles.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-flextock-muted">
            {content.handles.description}
          </p>
          <div className="mt-12 grid gap-0 border-y border-flextock-line sm:grid-cols-2 lg:grid-cols-3">
            {content.handles.items.map((item, index) => (
              <article
                key={item.title}
                className="border-b border-flextock-line p-6 sm:border-e lg:[&:nth-child(3n)]:border-e-0"
              >
                <span className="font-mono text-xs text-flextock-neon">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-lg font-medium tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-flextock-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-flextock-line bg-flextock-panel px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-flextock-neon">
            {content.why.eyebrow}
          </p>
          <h2 className="mt-5 max-w-3xl text-3xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            {content.why.title}
          </h2>
          <div className="mt-12 grid gap-0 border-y border-flextock-line md:grid-cols-2 lg:grid-cols-3">
            {content.why.items.map((item) => (
              <article
                key={item.title}
                className="border-b border-flextock-line p-6 md:border-e"
              >
                <h3 className="text-lg font-medium tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-flextock-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="border-b border-flextock-line px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-flextock-neon">
            {content.howItWorks.eyebrow}
          </p>
          <h2 className="mt-5 max-w-3xl text-3xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            {content.howItWorks.title}
          </h2>
          <div className="mt-12 grid gap-0 border-y border-flextock-line md:grid-cols-2 lg:grid-cols-4">
            {content.howItWorks.steps.map((step, index) => (
              <article
                key={step.title}
                className="border-b border-flextock-line p-6 md:border-e lg:border-b-0 lg:last:border-e-0"
              >
                <span className="font-mono text-xs text-flextock-neon">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-lg font-medium tracking-[-0.03em]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-flextock-muted">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-flextock-line bg-flextock-panel px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-flextock-neon">
              {content.engine.eyebrow}
            </p>
            <h2 className="mt-5 text-3xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              {content.engine.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-flextock-muted sm:text-lg">
              {content.engine.description}
            </p>
          </div>
          <Link
            href={content.engine.ctaHref}
            className="inline-flex min-h-11 w-fit items-center gap-3 bg-flextock-neon px-5 py-3 text-sm font-medium text-flextock-navy transition-colors hover:bg-flextock-foreground"
          >
            {content.engine.cta}
            <ArrowRight size={16} className="rtl:rotate-180" />
          </Link>
        </div>
      </section>

      <section className="border-b border-flextock-line px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-flextock-neon">
            {content.faq.eyebrow}
          </p>
          <h2 className="mt-5 max-w-3xl text-3xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-4xl">
            {content.faq.title}
          </h2>
          <div className="mt-10 border-y border-flextock-line">
            {content.faq.items.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={item.question}
                  className="border-b border-flextock-line last:border-b-0"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex min-h-14 w-full items-center justify-between gap-4 py-5 text-start"
                  >
                    <span className="text-base font-medium text-flextock-foreground sm:text-lg">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-flextock-neon transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen ? (
                    <p className="pb-5 max-w-3xl text-sm leading-7 text-flextock-muted sm:text-base">
                      {item.answer}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              {content.finalCta.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-flextock-muted sm:text-lg">
              {content.finalCta.description}
            </p>
          </div>
          <Link
            href="/quote"
            className="inline-flex min-h-11 w-fit items-center gap-3 bg-flextock-neon px-5 py-3 text-sm font-medium text-flextock-navy transition-colors hover:bg-flextock-foreground"
          >
            {content.finalCta.primaryCta}
            <ArrowRight size={16} className="rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </main>
  );
}
