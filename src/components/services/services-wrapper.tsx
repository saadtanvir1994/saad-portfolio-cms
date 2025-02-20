"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface ServicesWrapperProps {
  children: React.ReactNode;
}

const ServicesWrapper = ({ children }: ServicesWrapperProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const elements = sectionRef.current?.querySelector('.services-header')?.children;
      if (!elements) return;

      gsap.from(elements, {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-header',
          start: 'top bottom-=200',
          once: true,
          markers: process.env.NODE_ENV === 'development' // helps with debugging
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="dark relative w-full bg-[--gray-25]">
      {children}
    </section>
  );
};

export default ServicesWrapper;