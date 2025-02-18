"use client";

import { gsap, ScrollTrigger } from "@/utils/gsap";
import Lenis from "lenis";

import { PropsWithChildren, useEffect, useRef } from "react";

export default function SmoothScroll({ children }: PropsWithChildren) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current.on("scroll", ScrollTrigger.update);

    // Fix: Create a type-safe raf function
    const raf = (time: number) => {
      lenisRef.current?.raf(time * 1000);
    };

    gsap.ticker.add(raf);

    return () => {
      lenisRef.current?.destroy();
      // Fix: Use the same raf function in cleanup
      gsap.ticker.remove(raf);
    };
  }, []);

  return <>{children}</>;
}
