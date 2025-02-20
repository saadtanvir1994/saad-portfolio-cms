"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const PortfolioItemsWrapper = ({ children }: { children: React.ReactNode }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".portfolio-item",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    );
  }, []);
  return (
    <div
      ref={gridRef}
      className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
    >
      {children}
    </div>
  );
};

export default PortfolioItemsWrapper;
