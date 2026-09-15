"use client";

import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";

import { arabicCopy, quotePage } from "@/constants";
import { useLocale } from "@/components/LocaleProvider";
import { QuoteForm } from "@/components/QuoteForm";

export function QuotePageContent() {
  const { locale } = useLocale();
  const content = locale === "ar" ? arabicCopy.quote : quotePage;

  return (
    <main className="min-h-screen bg-flextock-navy px-5 py-14 text-flextock-foreground sm:px-6 sm:py-20 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-flextock-muted transition-colors hover:text-flextock-neon"
          >
            <ArrowLeft size={15} className="rtl:rotate-180" />
            {content.backLabel}
          </Link>
          <p className="mt-8 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-flextock-neon sm:mt-12 sm:text-xs sm:tracking-[0.2em] lg:mt-16">
            {content.eyebrow}
          </p>
          <h1 className="mt-5 max-w-xl text-[2rem] font-medium leading-[1.05] tracking-[-0.05em] sm:mt-7 sm:text-5xl sm:leading-[0.95] sm:tracking-[-0.07em] lg:text-6xl">
            {content.title}
          </h1>
          {content.description ? (
            <p className="mt-5 max-w-lg text-base leading-7 text-flextock-muted sm:mt-7 sm:text-lg sm:leading-8">
              {content.description}
            </p>
          ) : null}
          <ul className="mt-8 space-y-4 sm:mt-10">
            {content.proofPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm text-flextock-foreground"
              >
                <Check size={16} className="mt-0.5 shrink-0 text-flextock-neon" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <QuoteForm />
      </div>
    </main>
  );
}
