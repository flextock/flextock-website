"use client";

import { proofContent } from "@/constants";
import { useLocale } from "@/components/LocaleProvider";

export function ReviewsSection() {
  const { locale } = useLocale();
  const content = proofContent[locale];

  return (
    <section
      id="proof"
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

        <div className="mt-12 grid border-y border-flextock-line sm:grid-cols-2 lg:grid-cols-5">
          {content.stats.map((stat) => (
            <div
              key={stat.value + stat.label}
              className="border-b border-flextock-line px-4 py-6 last:border-b-0 sm:border-e sm:odd:border-e lg:border-b-0 lg:last:border-e-0"
            >
              <p className="text-3xl font-medium tracking-[-0.05em] text-flextock-foreground">
                {stat.value}
              </p>
              <p className="mt-3 text-sm leading-6 text-flextock-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-0 border-y border-flextock-line md:grid-cols-3">
          {content.testimonials.map((item) => (
            <article
              key={item.name}
              className="flex min-h-64 flex-col border-b border-flextock-line bg-flextock-navy p-6 last:border-b-0 md:border-b-0 md:border-e md:last:border-e-0"
            >
              <p className="flex-1 text-base leading-7 text-flextock-foreground">
                “{item.quote}”
              </p>
              <div className="mt-8 border-t border-flextock-line pt-4">
                <p className="text-sm font-medium text-flextock-foreground">
                  {item.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-flextock-muted">
                  {item.brand}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
