"use client";

import { brandMarkContent } from "@/constants";
import { useLocale } from "@/components/LocaleProvider";

export function BrandMarkSection() {
  const { locale } = useLocale();
  const content = brandMarkContent[locale];

  return (
    <section
      id="brand-x"
      className="border-t border-flextock-line bg-flextock-navy px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-flextock-neon">
            {content.eyebrow}
          </p>
          <p
            aria-hidden="true"
            className="mt-8 text-[7rem] font-medium leading-none tracking-[-0.08em] text-flextock-neon sm:text-[9rem]"
          >
            &gt;
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-medium leading-[1.05] tracking-[-0.05em] text-flextock-foreground sm:text-4xl sm:leading-[0.98] sm:tracking-[-0.06em] lg:text-5xl">
            {content.title}
          </h2>
          <p className="mt-5 text-lg font-medium text-flextock-neon">
            {content.lead}
          </p>
          <div className="mt-8 space-y-5 max-w-2xl text-base leading-8 text-flextock-muted">
            {content.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
