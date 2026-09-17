"use client";

import { useState } from "react";

import { systemContent } from "@/constants";
import { useLocale } from "@/components/LocaleProvider";

export function OperatingSystemShowcase() {
  const { locale } = useLocale();
  const content = systemContent[locale];
  const [activeGroup, setActiveGroup] = useState(0);

  return (
    <section
      id="system"
      className="border-t border-flextock-line bg-flextock-navy px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-flextock-neon">
            {content.eyebrow}
          </p>
          <h2 className="mt-5 text-3xl font-medium leading-[1.05] tracking-[-0.05em] text-flextock-foreground sm:mt-7 sm:text-4xl sm:leading-[0.98] sm:tracking-[-0.06em] lg:text-5xl">
            {content.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-flextock-muted">
            {content.description}
          </p>
        </div>

        <div
          className="mt-10 flex flex-wrap gap-2 border-y border-flextock-line py-4"
          role="tablist"
          aria-label={content.eyebrow}
        >
          {content.groups.map((group, index) => (
            <button
              key={group.title}
              type="button"
              role="tab"
              aria-selected={activeGroup === index}
              onClick={() => setActiveGroup(index)}
              className={`min-h-11 px-4 py-2 text-sm transition-colors ${
                activeGroup === index
                  ? "bg-flextock-neon text-flextock-navy"
                  : "text-flextock-muted hover:text-flextock-foreground"
              }`}
            >
              {group.title}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          aria-live="polite"
          className="mt-8 grid gap-0 border-y border-flextock-line md:grid-cols-2"
        >
          {content.groups[activeGroup].items.map((item, index) => (
            <article
              key={item.title}
              className="border-b border-flextock-line p-6 last:border-b-0 md:border-e md:odd:border-e md:even:border-e-0 md:[&:nth-last-child(-n+2)]:border-b-0"
            >
              <span className="font-mono text-xs text-flextock-neon">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-xl font-medium tracking-[-0.03em] text-flextock-foreground">
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
  );
}
