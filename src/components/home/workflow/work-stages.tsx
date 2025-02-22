"use client";

import { gsap, ScrollTrigger } from "@/utils/gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import HeadingWithVideo from "@/components/ui/heading-with-video";
import { WorkStagesContent } from "@/lib/definitions";
import StageCard from "@/components/home/workflow/stage-card";

const WorkStages = ({ content }: { content: WorkStagesContent }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = cardsRef.current;
      const mm = gsap.matchMedia();

      // Desktop animation
      mm.add("(min-width: 768px)", () => {
        gsap.set(cards, {
          rotate: 0,
          y: 60,
          opacity: 0,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        });

        tl.to(cards, {
          rotate: -12,
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        });
      });

      // Mobile animation
      mm.add("(max-width: 767px)", () => {
        gsap.set(cards, {
          y: 50,
          opacity: 0,
          rotate: 0,
        });

        cards.forEach((card) => {
          gsap.to(card, {
            y: 0,
            opacity: 1,
            rotate: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top center",
              end: "bottom top",
              toggleActions: "play none none reverse",
            },
          });
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        mm.revert();
      };
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white exact-2xl:min-h-screen"
    >
      <div className="container mx-auto h-full px-4 py-16 md:py-32">
        <HeadingWithVideo videoUrl={content["video-embed"]} />
        <div className="relative flex min-h-[calc(80vh-100px)] items-center justify-center pt-16">
          <div
            ref={containerRef}
            className="relative grid max-w-full grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-5"
          >
            {content.stages.map((stage, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="relative mb-4 transform last:mb-0 md:mb-0"
                style={{
                  zIndex: content.stages.length - index,
                }}
              >
                <StageCard {...stage} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkStages;
