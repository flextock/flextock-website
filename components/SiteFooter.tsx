"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  arabicCopy,
  ctaContent,
  footerContent,
  socialLinks,
  siteConfig,
} from "@/constants";
import { useLocale } from "@/components/LocaleProvider";

export function SiteFooter() {
  const { locale } = useLocale();
  const content = locale === "ar" ? arabicCopy.cta : ctaContent;
  const footer = locale === "ar" ? arabicCopy.footer : footerContent;
  const siteCopy = locale === "ar" ? arabicCopy.site : siteConfig;
  const secondaryCta = content.secondaryCta ?? siteCopy.secondaryCta;
  const secondaryHref = content.secondaryHref ?? "#system";
  const signOff = footer.signOff;

  return (
    <>
      <section
        id="contact"
        className="border-t border-flextock-line bg-flextock-panel px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-32"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end md:gap-10">
          <div className="max-w-2xl">
            <p className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-flextock-neon sm:mb-6 sm:text-xs sm:tracking-[0.2em]">
              {content.eyebrow}
            </p>
            <h2 className="text-3xl font-medium leading-[1.05] tracking-[-0.05em] text-flextock-foreground sm:text-4xl sm:leading-[0.98] sm:tracking-[-0.06em] lg:text-5xl">
              {content.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-flextock-muted sm:mt-6 sm:text-lg sm:leading-8">
              {content.description}
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-fit sm:flex-row sm:items-center">
            <Link
              href="/quote"
              className="group flex min-h-11 w-full items-center justify-center gap-3 bg-flextock-neon px-6 py-3.5 text-sm font-medium text-flextock-navy transition-colors hover:bg-flextock-foreground sm:w-fit"
            >
              {content.cta}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1 rtl:rotate-180"
              />
            </Link>
            <a
              href={secondaryHref}
              className="flex min-h-11 w-full items-center justify-center px-6 py-3.5 text-sm text-flextock-muted transition-colors hover:text-flextock-foreground sm:w-fit"
            >
              {secondaryCta}
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-flextock-navy px-5 py-10 sm:px-6 sm:py-12 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-flextock-line pt-8 text-sm text-flextock-muted md:flex-row">
          <div>
            <Link href="/" aria-label={siteCopy.logoAlt}>
              <Image
                src="/logos/logo.png"
                alt={siteCopy.logoAlt}
                width={120}
                height={34}
                style={{ width: "auto" }}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-3 max-w-sm text-base font-medium leading-6 text-flextock-foreground">
              {signOff}
            </p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="mt-4 inline-block text-sm text-flextock-foreground transition-colors hover:text-flextock-neon"
            >
              {siteConfig.contactEmail}
            </a>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center text-flextock-muted transition-opacity hover:opacity-75"
                  >
                    <Image
                      src={social.icon}
                      alt=""
                      width={18}
                      height={18}
                      style={{ width: "auto" }}
                      className="h-4 w-auto object-contain"
                    />
                  </a>
                );
              })}
            </div>
          </div>
          <p className="self-end">{footer.copyright}</p>
        </div>
      </footer>
    </>
  );
}
