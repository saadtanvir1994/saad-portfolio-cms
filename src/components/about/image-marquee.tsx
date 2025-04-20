"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import ImageSet from "@/components/about/image-set";
import { ImageWithDim } from "@/lib/definitions";

const ImageMarquee = ({ images }: { images: ImageWithDim[] }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!marqueeRef.current || !marqueeContainerRef.current) return;

    // Get the width of one set of images
    const firstItem = marqueeRef.current.children[0] as HTMLElement;
    const itemWidth = firstItem.offsetWidth;
    
    // Set the duration based on desired speed (smaller number = faster)
    const duration = 20;

    // Create animation
    const tl = gsap.timeline({ repeat: -1 });
    
    // Animate to the left
    tl.to(marqueeRef.current, {
      x: -itemWidth,
      duration: duration,
      ease: "none"
    });
    
    // Jump back to start (instant) but make it seamless
    tl.to(marqueeRef.current, {
      x: 0,
      duration: 0
    });

  }, []);

  return (
    <div className="relative w-full">
      <div className="absolute -top-16 left-1/3 z-50 h-[160px] w-[160px] rounded-full bg-[var(--gray-50)] mix-blend-difference md:-top-24 md:h-[200px] md:w-[200px]">
        <Image
          fill
          loading="lazy"
          src="/images/arrow-circle-saad-2.svg"
          alt="circle"
          className="animate-spin-slow2 origin-center"
        />
      </div>

      <div className="flex" ref={marqueeContainerRef}>
        <div className="flex items-center flex-nowrap gap-4 w-[300vw]" ref={marqueeRef}>
          {Array.from({ length: 4 }).map((_, id) => (  // Increased to 4 copies for smoother looping
            <ImageSet key={id} images={images} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageMarquee;