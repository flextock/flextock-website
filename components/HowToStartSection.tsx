"use client";

import { howToStartContent } from "@/constants";
import { useLocale } from "@/components/LocaleProvider";

export function HowToStartSection() {
  const { locale } = useLocale();
  const content = howToStartContent[locale];

  return (
    <section
      id="how-to-start"
      className="border-t border-flextock-line bg-flextock-panel px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-flextock-neon">
            {content.eyebrow}
          </p>
          <h2 className="mt-5 text-3xl font-medium leading-[1.05] tracking-[-0.05em] text-flextock-foreground sm:mt-7 sm:text-4xl sm:leading-[0.98] sm:tracking-[-0.06em] lg:text-5xl">
            {content.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-0 border-y border-flextock-line md:grid-cols-3">
          {content.steps.map((step) => (
            <article
              key={step.number}
              className="border-b border-flextock-line p-6 last:border-b-0 md:border-b-0 md:border-e md:last:border-e-0"
            >
              <span className="font-mono text-xs text-flextock-neon">
                {step.number}
              </span>
              <h3 className="mt-5 text-xl font-medium tracking-[-0.03em] text-flextock-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-flextock-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-base leading-8 text-flextock-foreground">
          {content.assurance}
        </p>
      </div>
    </section>
  );
}
