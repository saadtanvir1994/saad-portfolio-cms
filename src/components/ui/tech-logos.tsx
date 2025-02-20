"use client";

import Image from "next/image";
import React from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Logo {
  name: string;
  src: string;
}

interface TechLogosProps {
  logos: Logo[];
  direction?: boolean;
}

const TechLogos: React.FC<TechLogosProps> = ({ logos, direction = false }) => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="w-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        loop={true}
        speed={2000}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: direction,
        }}
        className="mb-8"
        wrapperClass="transition-timing-function-linear"
      >
        {duplicatedLogos.map((logo, index) => (
          <SwiperSlide
            key={`${logo.name}-${index}`}
            className={`!w-auto overflow-visible py-16 transition-transform duration-500 ${
              index % 2 === 0 ? "translate-y-8 transform" : "-translate-y-8"
            }`}
          >
            <div className="mx-3 flex min-h-[120px] min-w-[120px] flex-col items-center justify-center gap-4 rounded-full border border-slate-100 bg-white px-4 py-6 shadow-sm transition-all duration-300 hover:shadow-md md:min-h-[140px] md:min-w-[140px]">
              <div className="relative h-6 w-6 md:h-12 md:w-12">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  loading="lazy"
                  className="object-contain"
                />
              </div>
              <span className="w-full truncate text-center text-xs font-medium text-gray-800">
                {logo.name}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TechLogos;
