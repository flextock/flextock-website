"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type HeroTitleProps = {
  prefix: string;
  highlight: string;
  suffix: string;
};

function StaticHeroTitle({ prefix, highlight, suffix }: HeroTitleProps) {
  return (
    <h1 className="max-w-4xl text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.05em] text-flextock-foreground sm:text-5xl sm:leading-[0.96] sm:tracking-[-0.065em] lg:text-7xl lg:font-semibold">
      <span>{prefix}</span>
      <span className="inline-block text-flextock-neon">{highlight}</span>
      <span>{suffix}</span>
    </h1>
  );
}

function AnimatedHeroTitle({ prefix, highlight, suffix }: HeroTitleProps) {
  const full = `${prefix}${highlight}${suffix}`;
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    let index = 0;
    const id = window.setInterval(() => {
      index += 1;
      setCharCount(index);
      if (index >= full.length) {
        window.clearInterval(id);
      }
    }, 42);

    return () => window.clearInterval(id);
  }, [full]);

  const typed = full.slice(0, charCount);
  const showPrefix = typed.slice(0, Math.min(typed.length, prefix.length));
  const showHighlight = typed.slice(
    prefix.length,
    Math.min(typed.length, prefix.length + highlight.length),
  );
  const showSuffix = typed.slice(prefix.length + highlight.length);
  const highlightComplete = charCount >= prefix.length + highlight.length;
  const done = charCount >= full.length;

  return (
    <h1 className="max-w-4xl text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.05em] text-flextock-foreground sm:text-5xl sm:leading-[0.96] sm:tracking-[-0.065em] lg:text-7xl lg:font-semibold">
      <span>{showPrefix}</span>
      {showHighlight ? (
        <motion.span
          className="inline-block text-flextock-neon"
          initial={false}
          animate={highlightComplete ? { scale: [1, 1.08, 1] } : { scale: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          {showHighlight}
        </motion.span>
      ) : null}
      <span>{showSuffix}</span>
      {!done ? (
        <span
          aria-hidden="true"
          className="ml-0.5 inline-block h-[0.85em] w-[0.12em] translate-y-[0.08em] bg-[#4DA3FF] align-baseline"
        />
      ) : null}
    </h1>
  );
}

export function HeroTitle(props: HeroTitleProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <StaticHeroTitle {...props} />;
  }

  return (
    <AnimatedHeroTitle
      key={`${props.prefix}${props.highlight}${props.suffix}`}
      {...props}
    />
  );
}
