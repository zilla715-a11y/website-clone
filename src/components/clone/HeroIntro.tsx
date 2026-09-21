"use client";

import { useEffect, useState } from "react";

const rotatingWords = ["教育优惠", "职场认证", "找服务", "找门店", "找解决方案"] as const;

type WordPhase = "idle" | "out" | "in";

export function HeroIntro() {
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<WordPhase>("idle");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let swapTimer: ReturnType<typeof setTimeout> | undefined;
    let settleTimer: ReturnType<typeof setTimeout> | undefined;

    const interval = window.setInterval(() => {
      if (mediaQuery.matches) {
        setWordIndex((current) => (current + 1) % rotatingWords.length);
        return;
      }

      setPhase("out");
      swapTimer = setTimeout(() => {
        setWordIndex((current) => (current + 1) % rotatingWords.length);
        setPhase("in");
        settleTimer = setTimeout(() => setPhase("idle"), 30);
      }, 340);
    }, 3000);

    return () => {
      window.clearInterval(interval);
      if (swapTimer) clearTimeout(swapTimer);
      if (settleTimer) clearTimeout(settleTimer);
    };
  }, []);

  return (
    <section className="leaibot-welcome leaibot-rise" aria-labelledby="leaibot-welcome-title">
      <h1 className="leaibot-title" id="leaibot-welcome-title">
        <span>联想乐享帮你</span>
        <span className="leaibot-rotating-word" data-phase={phase} aria-live="polite">
          {rotatingWords[wordIndex]}
        </span>
      </h1>
    </section>
  );
}
