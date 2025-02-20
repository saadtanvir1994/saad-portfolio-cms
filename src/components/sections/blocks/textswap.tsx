"use client";

import { gsap } from "@/utils/gsap";
import React, { useEffect, useRef } from "react";

interface TextSwapProps {
  prefix?: string;
  roles?: string[];
  className?: string;
}

const TextSwap: React.FC<TextSwapProps> = ({
  prefix = "Hire me as",
  roles: words = ["Developer", "Designer", "Engineer"],
  className = "",
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const ctx = gsap.context(() => {
      // Reset refs array
      wordRefs.current = wordRefs.current.slice(0, words.length);

      // Set initial states
      gsap.set(wordRefs.current, {
        yPercent: 100,
        opacity: 0,
      });

      // Create timeline
      tl.current = gsap
        .timeline({ repeat: -1 })
        .set(wordRefs.current[0], { yPercent: 0, opacity: 1 });

      words.forEach((_, index) => {
        const nextIndex = (index + 1) % words.length;
        const currentElement = wordRefs.current[index];
        const nextElement = wordRefs.current[nextIndex];

        if (currentElement && nextElement) {
          tl.current
            ?.to(currentElement, {
              yPercent: -100,
              opacity: 0,
              duration: 0.5,
              ease: "power2.in",
            })
            .set(nextElement, { yPercent: 100 })
            .to(nextElement, {
              yPercent: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
            })
            .to({}, { duration: 1 }); // Pause between words
        }
      });
    }, textRef);

    return () => ctx.revert();
  }, [words]);

  return (
    <div
      className={`flex items-center justify-center gap-3 text-3xl font-bold md:text-4xl ${className}`}
    >
      <span>{prefix}</span>
      <div className="relative h-20 min-w-48 overflow-hidden" ref={textRef}>
        {words.map((word, index) => (
          <div
            key={word}
            ref={(el) => {
              wordRefs.current[index] = el;
            }}
            className="absolute inset-0 flex items-center justify-start"
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextSwap;
