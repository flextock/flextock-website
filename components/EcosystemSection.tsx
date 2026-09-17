"use client";

import {
  ArrowUpRight,
  CircleDollarSign,
  Globe2,
  Package,
  Route,
  Store,
  ShoppingBag,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { engineContent } from "@/constants";
import { useLocale } from "@/components/LocaleProvider";

const engineIcons: LucideIcon[] = [
  Package,
  Route,
  Globe2,
  Store,
  ShoppingBag,
  CircleDollarSign,
];

export function EcosystemSection() {
  const { locale } = useLocale();
  const reduceMotion = useReducedMotion();
  const content = engineContent[locale];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCard = content.cards[activeIndex];

  return (
    <section
      id="engine"
      className="border-t border-flextock-line bg-flextock-panel px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-flextock-neon">
            {content.eyebrow}
          </p>
          <h2 className="mt-5 max-w-3xl text-3xl font-medium leading-[1.05] tracking-[-0.05em] text-flextock-foreground sm:mt-7 sm:text-4xl sm:leading-[0.98] sm:tracking-[-0.06em] lg:text-5xl">
            {content.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-flextock-muted">
            {content.description}
          </p>
        </div>

        <div className="mt-14 grid gap-3 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="border-y border-flextock-line bg-flextock-navy px-3">
            <div role="tablist" aria-label={content.eyebrow}>
              {content.cards.map((card, index) => {
                const Icon = engineIcons[index];
                const isActive = activeIndex === index;

                return (
                  <button
                    key={card.name}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="engine-detail-panel"
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    className={`flex w-full items-center gap-4 border-b border-flextock-line px-4 py-5 text-start transition-colors last:border-b-0 ${
                      isActive
                        ? "bg-flextock-panel text-flextock-foreground"
                        : "text-flextock-muted hover:bg-flextock-panel/60 hover:text-flextock-foreground"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center ${
                        isActive ? "text-flextock-neon" : "text-flextock-muted"
                      }`}
                    >
                      <Icon size={17} strokeWidth={1.7} />
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-medium">{card.name}</span>
                      <span className="mt-1 block text-xs text-flextock-muted">
                        {card.label}
                      </span>
                    </span>
                    {card.comingSoon ? (
                      <span className="text-[10px] uppercase tracking-[0.14em] text-flextock-neon">
                        {content.comingSoon}
                      </span>
                    ) : (
                      <span className="font-mono text-[10px]">0{index + 1}</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            id="engine-detail-panel"
            role="tabpanel"
            aria-live="polite"
            className="flex min-h-80 flex-col justify-between gap-8 border-y border-flextock-line bg-flextock-navy p-6 sm:p-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard.name}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: reduceMotion ? 0 : 0.22 }}
              >
                <p className="text-xs uppercase tracking-[0.18em] text-flextock-neon">
                  {activeCard.label}
                  {activeCard.comingSoon ? ` · ${content.comingSoon}` : ""}
                </p>
                <h3 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-flextock-foreground">
                  {activeCard.name}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-flextock-muted">
                  {activeCard.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {activeCard.href && !activeCard.comingSoon ? (
              <Link
                href={activeCard.href}
                className="inline-flex w-fit items-center gap-2 text-sm font-medium text-flextock-foreground transition-colors hover:text-flextock-neon"
              >
                {activeCard.name}
                <ArrowUpRight size={16} />
              </Link>
            ) : null}
          </div>
        </div>

        <div className="mt-12">
          <Link
            href={content.ctaHref}
            className="group inline-flex min-h-11 items-center gap-3 border border-flextock-line px-5 py-3 text-sm font-medium text-flextock-foreground transition-colors hover:border-flextock-neon hover:text-flextock-neon"
          >
            {content.cta}
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
