"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useEffect, useMemo, useState } from "react";

interface MarqueeProps {
  items: string[];
  gap?: number;
  className?: string;
}

const InfiniteMarquee: React.FC<MarqueeProps> = ({
  items,
  gap = 32,
  className = "",
}) => {
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const [minItems, setMinItems] = useState(2); // Default value to avoid SSR issues

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateItems = () => {
        setMinItems(Math.ceil(window.innerWidth / 300) + 1);
      };

      updateItems(); // Set initial value
      window.addEventListener("resize", updateItems);

      return () => {
        window.removeEventListener("resize", updateItems);
      };
    }
  }, []);

  // Memoize the combined items
  const combinedItems = useMemo(() => {
    const repeats = Math.max(2, minItems);
    return Array(repeats).fill(items).flat();
  }, [items, minItems]);

  useGSAP(() => {
    if (!marqueeRef.current) return;

    const marquee = marqueeRef.current;
    const duration = 140;

    gsap.killTweensOf(marquee); // Kill any existing animations

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(marquee, {
      x: "-50%",
      duration,
      ease: "none",
      onComplete: () => {
        gsap.set(marquee, { x: "0%" }); // Reset position
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  const containerClasses = `overflow-hidden whitespace-nowrap bg-white py-6 md:py-12`;
  const marqueeClasses = `inline-flex ${className}`;

  return (
    <div className={containerClasses}>
      <div
        ref={marqueeRef}
        className={marqueeClasses}
        style={{
          gap,
          willChange: "transform",
        }}
      >
        {combinedItems.map((item, idx) => (
          <span key={`${item}-${idx}`} className="whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default React.memo(InfiniteMarquee);
