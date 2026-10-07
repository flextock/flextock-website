"use client";

import {
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
import { useMemo, useState, type CSSProperties } from "react";

import { FlextockArrow } from "@/components/FlextockArrow";
import { engineContent } from "@/constants";
import {
  serviceColors,
  type ServiceColorKey,
} from "@/constants/service-colors";
import { useLocale } from "@/components/LocaleProvider";

const engineIcons: Record<string, LucideIcon> = {
  Flextock: Package,
  Flexship: Route,
  Flexborders: Globe2,
  Flexshops: Store,
  Flexmart: ShoppingBag,
  Flexcash: CircleDollarSign,
};

type FlatCard = {
  name: string;
  label: string;
  description: string;
  href: string | null;
  comingSoon: boolean;
  colorKey: ServiceColorKey;
  groupTitle: string;
  groupSubtitle: string;
};

export function EcosystemSection() {
  const { locale } = useLocale();
  const reduceMotion = useReducedMotion();
  const content = engineContent[locale];
  const flatCards = useMemo(
    () =>
      content.groups.flatMap((group) =>
        group.cards.map(
          (card): FlatCard => ({
            name: card.name,
            label: card.label,
            description: card.description,
            href: card.href,
            comingSoon: card.comingSoon,
            colorKey: card.colorKey,
            groupTitle: group.title,
            groupSubtitle: group.subtitle,
          }),
        ),
      ),
    [content.groups],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCard = flatCards[activeIndex];
  const accent = serviceColors[activeCard.colorKey as ServiceColorKey];

  return (
    <section
      id="engine"
      className="border-t border-flextock-line bg-flextock-panel px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-32"
      style={
        {
          "--service-accent": accent.accent,
          "--service-soft": accent.soft,
        } as CSSProperties
      }
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flextock-neon">
            {content.eyebrow}
          </p>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.05em] text-flextock-foreground sm:mt-7 sm:text-4xl sm:leading-[0.98] sm:tracking-[-0.06em] lg:text-5xl">
            {content.titleBefore}{" "}
            <span style={{ color: serviceColors.fulfillment.accent }}>
              {content.titleHighlight}
            </span>
            {content.titleAfter}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-flextock-muted">
            {content.description}
          </p>
        </div>

        <div className="mt-14 grid gap-3 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="border-y border-flextock-line bg-flextock-navy px-3">
            <div role="tablist" aria-label={content.eyebrow}>
              {content.groups.map((group) => (
                <div key={group.id} className="border-b border-flextock-line last:border-b-0">
                  <p className="px-4 pb-2 pt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-flextock-muted">
                    {group.title}
                    <span className="ms-2 text-flextock-neon">{group.subtitle}</span>
                  </p>
                  {group.cards.map((card) => {
                    const flatIndex = flatCards.findIndex(
                      (item) => item.name === card.name,
                    );
                    const Icon = engineIcons[card.name] ?? Package;
                    const isActive = activeIndex === flatIndex;
                    const cardAccent =
                      serviceColors[card.colorKey as ServiceColorKey];

                    return (
                      <button
                        key={card.name}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        aria-controls="engine-detail-panel"
                        onClick={() => setActiveIndex(flatIndex)}
                        onMouseEnter={() => setActiveIndex(flatIndex)}
                        onFocus={() => setActiveIndex(flatIndex)}
                        className={`flex w-full items-center gap-4 px-4 py-5 text-start transition-colors ${
                          isActive
                            ? "text-flextock-foreground"
                            : "text-flextock-muted hover:text-flextock-foreground"
                        }`}
                        style={{
                          backgroundColor: isActive ? cardAccent.soft : "transparent",
                          boxShadow: isActive
                            ? `inset 3px 0 0 ${cardAccent.accent}`
                            : undefined,
                        }}
                      >
                        <span
                          className="flex h-9 w-9 shrink-0 items-center justify-center"
                          style={{ color: isActive ? cardAccent.accent : undefined }}
                        >
                          <Icon size={17} strokeWidth={1.7} />
                        </span>
                        <span className="flex-1">
                          <span className="block text-sm font-semibold">{card.name}</span>
                          <span className="mt-1 block text-xs text-flextock-muted">
                            {card.label}
                          </span>
                        </span>
                        {card.comingSoon ? (
                          <span
                            className="text-[10px] uppercase tracking-[0.14em]"
                            style={{ color: cardAccent.accent }}
                          >
                            {content.comingSoon}
                          </span>
                        ) : (
                          <span className="font-mono text-[10px]">
                            0{flatIndex + 1}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div
            id="engine-detail-panel"
            role="tabpanel"
            aria-live="polite"
            className="flex min-h-80 flex-col justify-between gap-8 border-y border-flextock-line bg-flextock-navy p-6 transition-colors sm:p-8"
            style={{
              borderColor: accent.accent,
              boxShadow: `inset 0 0 0 1px ${accent.soft}`,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard.name}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: reduceMotion ? 0 : 0.22 }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-[0.18em]"
                  style={{ color: accent.accent }}
                >
                  {activeCard.groupTitle} · {activeCard.label}
                  {activeCard.comingSoon ? ` · ${content.comingSoon}` : ""}
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-flextock-foreground">
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
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-flextock-foreground transition-opacity hover:opacity-80"
                style={{ color: accent.accent }}
              >
                {activeCard.name}
                <FlextockArrow size={16} className="rtl:rotate-180" />
              </Link>
            ) : null}
          </div>
        </div>

        <div className="mt-12">
          <Link
            href={content.ctaHref}
            className="group inline-flex min-h-11 items-center gap-3 border border-flextock-line px-5 py-3 text-sm font-semibold text-flextock-foreground transition-colors hover:border-[var(--service-accent)] hover:text-[var(--service-accent)]"
          >
            {content.cta}
            <FlextockArrow
              size={16}
              className="transition-transform group-hover:translate-x-1 rtl:rotate-180"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
