import AnimatedCTAButton from "@/components/ui/animated-cta-button";
import Typography from "@/components/ui/typography";
import { HeroContent } from "@/lib/definitions";
import { getMediaUrl } from "@/utils/all";
import { Wand2 } from "lucide-react";

import Image from "next/image";
import React from "react";

const Hero = ({ heroContent }: { heroContent: HeroContent }) => {
  return (
    <div className="dark relative mx-4 my-4 flex min-h-[100vh] items-center overflow-hidden rounded-3xl bg-gray-100 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-[var(--gray-0)] via-[#161616] to-[var(--gray-0)] text-[var(--gray-500)]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4a49492e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="container relative">
        <div className="mx-0 grid min-h-[60vh] grid-cols-1 items-center justify-center md:mx-6 md:grid-cols-[228px_1fr_228px]">
          <div className="order-2 flex h-full flex-col justify-between px-0 md:order-1 md:px-4">
            <div className="hidden md:block">
              <Image
                src={getMediaUrl(heroContent["image"])}
                width={196}
                height={245}
                alt={
                  heroContent.image.caption ||
                  "Website Designer, Freelance SEO Consultant & Frontend Engineer"
                }
                priority
                loading="eager"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="relative hidden flex-col md:flex">
              <div className="border-gray dark relative flex items-center gap-4 rounded-lg border-xs border-[var(--gray-100)] bg-gradient-to-b from-[var(--gray-0)] to-[var(--gray-50)] p-4">
                <div className="absolute -left-4 -top-4 flex h-9 w-9 basis-1/2 items-center justify-center rounded-full bg-[#2A9919]">
                  <Wand2 className="h-4 w-4" />
                </div>
                <div className="relative">
                  <Typography variant="p" className="!text-base !text-gray-200">
                    {heroContent.brandbox}
                  </Typography>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 flex h-full flex-col gap-4 px-4 py-16 md:order-2">
            <Typography
              variant="span"
              className="text-center uppercase tracking-wider !text-[#ff7e32]"
            >
              {heroContent.tagline}
            </Typography>
            <h1 className="text-center text-2xl uppercase !leading-tight tracking-tighter text-[var(--text-primary)] md:text-5xl">
              {heroContent.headline}
            </h1>
            <p className="text-md mx-auto max-w-[90%] text-center text-[var(--text-tertiary)] md:max-w-[80%] md:!text-lg">
              <b>{heroContent["emphasized-text"]}</b> {heroContent.description}
            </p>
            <div className="text-center">
              <AnimatedCTAButton
                ariaLabel={heroContent["cta-button"].label}
                href={heroContent["cta-button"].href}
                text={heroContent["cta-button"].label}
              />
            </div>
          </div>

          <div className="order-3 flex h-full max-w-full justify-between gap-4 px-0 py-6 md:order-3 md:flex-col md:gap-0 md:px-4 md:py-0">
            <div className="dark mx-auto mb-4 flex h-full w-full max-w-[100%] flex-col items-center rounded-lg border-xs border-[var(--gray-100)] bg-gradient-to-b from-[var(--gray-0)] to-[var(--gray-50)] px-4 py-8 md:h-auto md:max-w-[100%]">
              <div className="relative flex h-12 w-12 items-center justify-center">
                <Image
                  src={getMediaUrl(heroContent["freelancer-icon"])}
                  alt={
                    heroContent["freelancer-icon"].caption ||
                    "top rated freelancer"
                  }
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <Typography
                variant="p"
                className="mt-4 text-center !text-lg text-white"
              >
                {heroContent.freelancer}
              </Typography>
            </div>
            <div className="dark relative min-h-52 w-full overflow-hidden rounded-lg border-xs border-[var(--gray-100)] bg-gradient-to-b from-[var(--gray-0)] to-[var(--gray-50)] px-5 py-5 text-left transition duration-700 md:aspect-[1/1.3]">
              <div className="relative z-10">
                <Typography
                  variant="h2"
                  className="mb-3 !text-lg font-semibold uppercase text-white"
                >
                  {heroContent["services-title"]}
                </Typography>
                <p className="text-md font-light text-gray-200">
                  {heroContent.services}
                </p>
              </div>
              <div className="absolute bottom-4 right-4 z-20">
                <AnimatedCTAButton
                  ariaLabel={heroContent["services-cta"].label}
                  variant="icon-only"
                  href={heroContent["services-cta"].href}
                />
              </div>
              <div className="absolute -bottom-32 left-0 h-52 w-full opacity-60 md:-bottom-24">
                <Image
                  src="/images/services-bento-bg.svg"
                  alt="Services background pattern"
                  fill
                  className="object-cover object-bottom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
