"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React from "react";

interface MarqueeProps {
  items: string[];
  gap?: number;
  className?: string;
}

const StarMarquee: React.FC<MarqueeProps> = ({
  items,
  gap = 24,
  className = "",
}) => {
  const marqueeRef = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!marqueeRef.current) return;

    const marquee = marqueeRef.current;
    const duration = 20;

    gsap.to(marquee, {
      x: "-50%",
      duration,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const MarqueeItem = ({ item, index }: { item: string; index: number }) => (
    <span
      key={index}
      className="inline-flex items-center gap-8 whitespace-nowrap"
    >
      <span>{item}</span>
    </span>
  );

  return (
    <div className="my-6 overflow-hidden whitespace-nowrap">
      <div
        ref={marqueeRef}
        className={`inline-flex items-center ${className}`}
        style={{ gap: `${gap}px` }}
      >
        {/* Original items */}
        {items.map((item, idx) => (
          <MarqueeItem key={`${item}-${idx}`} item={item} index={idx} />
        ))}
        {/* Duplicated items */}
        {items.map((item, idx) => (
          <MarqueeItem
            key={`${item}-duplicate-${idx}`}
            item={item}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default StarMarquee;
