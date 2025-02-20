"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TestimonialContent } from "@/lib/definitions";
import { getMediaUrl } from "@/utils/all";

const TestimonialsCarousel = ({
  testimonials,
}: { testimonials: TestimonialContent[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAvatarClick = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="mx-auto flex flex-col md:!max-w-[80%] md:flex-col-reverse xl:!max-w-[50%]">
      {/* Testimonial Content */}
      <div className="relative mb-12 md:mb-0 md:mt-16">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-content text-center transition-opacity duration-300"
            style={{
              opacity: index === activeIndex ? 1 : 0,
              visibility: index === activeIndex ? "visible" : "hidden",
              position: "relative",
              display: index === activeIndex ? "block" : "none",
              transform:
                index === activeIndex ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease",
            }}
          >
            <p className="mb-6 text-2xl md:text-3xl">{testimonial.message}</p>
            <h3 className="mb-2 text-xl font-semibold">{testimonial.name}</h3>
            <p className="text-gray-600">{testimonial.designation}</p>
          </div>
        ))}
      </div>

      {/* Client Avatars */}
      <div className="flex flex-wrap justify-center gap-4">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            className="relative h-16 w-16 cursor-pointer"
            onClick={() => handleAvatarClick(index)}
            type="button"
            aria-label={`View testimonial from ${testimonial.name}`}
          >
            <div
              className="transition-all duration-300 ease-in-out"
              style={{
                opacity: index === activeIndex ? 1 : 0.3,
                border:
                  index === activeIndex
                    ? "1.6px solid #ff4102"
                    : "0px solid #ff4102",
                transform: `scale(${index === activeIndex ? 1 : 0.95})`,
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "100%",
              }}
            >
              <Image
                src={getMediaUrl(testimonial.avatar)}
                alt={testimonial.name}
                fill
                sizes="96px"
                className="rounded-full object-cover"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
