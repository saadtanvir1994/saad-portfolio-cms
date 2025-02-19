"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceCardWrapper = ({ children, index }: { children: React.ReactNode; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.set(card, { opacity: 0, y: 50 });

    ScrollTrigger.create({
      trigger: card,
      start: "top bottom-=100",
      onEnter: () => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.1,
        });
      },
      once: true,
    });
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="service-card group/item dark relative w-full overflow-hidden rounded-lg bg-[--gray-50] p-6 2xl:aspect-[1/1.6] 2xl:p-8"
      data-cursor="CLICK ARROW"
    >
      {children}
    </div>
  );
};

export default ServiceCardWrapper;