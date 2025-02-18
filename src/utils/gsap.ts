// utils/gsap.ts
"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Only register once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { ScrollTrigger, gsap };
