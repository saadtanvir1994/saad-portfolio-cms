"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import ImageSet from "@/components/about/image-set";
import { ImageWithDim } from "@/lib/definitions";

const ImageMarquee = ({ images }: { images: ImageWithDim[] }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeTrigger = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!marqueeRef.current) return;

    const marqueeItems = marqueeRef.current.children;
    const totalWidth = Array.from(marqueeItems).reduce(
      (acc, item) => acc + (item as HTMLElement).offsetWidth - 48,
      0
    ); // 48px is the gap

    gsap.to(marqueeItems, {
      x: -totalWidth / 2,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  }, []); // Scope the animation to the trigger ref

  return (
    <div className="relative w-full" ref={marqueeTrigger}>
      <div className="absolute -top-16 left-1/3 z-50 h-[160px] w-[160px] rounded-full bg-[var(--gray-50)] mix-blend-difference md:-top-24 md:h-[200px] md:w-[200px]">
        <Image
          fill
          loading="lazy"
          src="/images/arrow-circle-saad-2.svg"
          alt="circle"
          className="animate-spin-slow2 origin-center"
        />
      </div>

      <div className="flex overflow-hidden">
        <div className="flex items-center gap-12 overflow-hidden" ref={marqueeRef}>
          {Array.from({ length: 2 }).map((_, id) => (
            <ImageSet key={id} images={images} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageMarquee;
