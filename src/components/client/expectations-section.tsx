"use client";

import Typography from "@/components/typography";
import { ExpectationsContent } from "@/lib/definitions";
import { gsap, ScrollTrigger } from "@/utils/gsap";
import { useLayoutEffect, useRef } from "react";

const ExpectationsSection = ({ content }: { content: ExpectationsContent; }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const pin = ScrollTrigger.create({
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom bottom-=500",
          pin: ".pin-content",
          pinSpacing: false,
          scrub: true,
        });

        return () => pin.kill();
      });

      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              x: 60,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top center",
                end: "bottom center+=100",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    cardsRef.current[index] = el;
  };

  return (
    <section ref={containerRef} className="relative w-full bg-zinc-50">
      <div ref={triggerRef} className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Left pinned content */}
          <div className="pin-content w-full md:sticky md:top-0 md:h-screen md:w-1/2">
            <div className="flex h-full flex-col justify-start">
              <Typography
                variant="display-2"
                className="mb-4 pl-8 pt-16 uppercase"
              >
                {content.heading}
              </Typography>
              <Typography variant="p" className="w-full pl-8 md:w-[60%]">
                {content.description}
              </Typography>
            </div>
          </div>

          {/* Right scrolling content */}
          <div className="w-full md:w-1/2">
            {/* Card 1 */}
            {content.points.map((item, idx) => (
              <div
                key={idx}
                ref={(el) => setCardRef(el, idx)}
                className="p-8 pt-16 md:min-h-[50vh]"
              >
                <div className="w-full">
                  <Typography variant="h3" className="mb-4 uppercase">
                    {item.heading}
                  </Typography>
                  <p className="text-xl text-[var(--gray-600)]">
                    {item.paragraph}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpectationsSection;
