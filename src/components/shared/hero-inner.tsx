"use client";

import { Wand } from "lucide-react";
import Image from "next/image";
import AnimatedCTAButton from "@/components/ui/animated-cta-button";
import Typography from "@/components/ui/typography";

interface HeroSectionProps {
  heading: string;
  paragraph: string;
  ctaText: string;
  ctaHref: string;
}

const HeroSectionInner: React.FC<HeroSectionProps> = ({
  heading,
  paragraph,
  ctaText,
  ctaHref,
}) => {
  return (
    <div className="dark relative mx-4 my-4 mb-0 flex min-h-[95vh] items-center overflow-hidden rounded-3xl bg-gray-100 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-[--gray-0] via-[#161616] to-[--gray-0] text-[var(--gray-500)]">
      {/* Navigation padding */}
      <div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-[linear-gradient(to_right,#4a49492e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="container relative z-30">
        <div className="mx-0 grid min-h-[60vh] grid-cols-1 content-center md:mx-6 md:grid-cols-[1fr_288px_288px]">
          <div className="flex h-full flex-col gap-4 px-4 py-16">
            <Typography
              variant="span"
              className="uppercase tracking-wider !text-[#ff7e32]"
            >
              Design for Loyalty. Develop for Longevity.
            </Typography>
            <h1 className="text-2xl uppercase !leading-tight tracking-tighter text-[var(--text-primary)] md:text-5xl exact-2xl:text-7xl">
              {heading}
            </h1>
            <p className="text-md text-[var(--text-tertiary)] md:max-w-[80%] md:!text-lg">
              {paragraph}
            </p>
            <AnimatedCTAButton
              text={ctaText}
              href={ctaHref}
              ariaLabel={ctaText}
            />
          </div>
          <div className="order-2 flex h-full flex-col items-end justify-end gap-6 px-0 md:px-4">
            <div className="relative z-30 hidden md:flex">
              <div className="relative block h-[175px] w-[170px] flex-col gap-4 space-y-4 rounded-lg border-xs border-[var(--gray-100)] bg-[var(--orange-color)] p-4">
                <Wand className="mx-auto h-10 w-10 text-gray-300" />
                <Typography
                  variant="p"
                  className="text-center text-lg uppercase !text-gray-100"
                >
                  Want to Create Brand?
                </Typography>
              </div>
            </div>
            <div className="hidden w-full md:block">
              <Image
                src="/images/website-designer-freelance-seo-consultant-frontend-engineer-saad-tanvir.png"
                width={288}
                height={245}
                alt="Website Designer, Freelance SEO Consultant & Frontend Engineer"
                priority
                loading="eager"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          <div className="order-3 flex h-full max-w-full justify-between gap-4 px-0 py-6 md:order-3 md:flex-col md:gap-0 md:px-4 md:py-0">
            <div className="dark relative h-full min-h-52 w-full overflow-hidden rounded-lg border-xs border-[var(--gray-100)] bg-gradient-to-b from-[var(--gray-0)] to-[var(--gray-50)] px-5 py-5 text-left transition duration-700 md:aspect-[1/1.3]">
              {/* Content */}
              <div className="relative z-10">
                <Typography
                  variant="h2"
                  className="mb-3 !text-6xl font-semibold uppercase text-white"
                >
                  10+
                </Typography>
                <p className="text-md w-32 font-light text-gray-200">
                  Hired by Countries
                </p>
              </div>

              {/* CTA Button */}
              <div className="absolute bottom-4 right-4 z-20">
                <AnimatedCTAButton
                  ariaLabel="View Services"
                  variant="icon-only"
                  href="/services"
                />
              </div>

              {/* Bottom Image */}
              <div className="absolute -bottom-32 left-0 h-52 w-full opacity-60 md:-bottom-24">
                <Image
                  src="/images/services-bento-bg.svg"
                  alt="Services background pattern"
                  fill
                  className="object-cover object-bottom"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="animate-first absolute left-8 top-4 z-20 h-16 w-16 rounded-full bg-[radial-gradient(circle_at_center,_var(--gray-200)_0,_var(--gray-100)_50%)] md:h-32 md:w-32" />
      <div className="animate-fourth absolute bottom-16 right-0 z-20 h-16 w-16 rounded-full bg-[radial-gradient(circle_at_center,_var(--gray-100)_0,_var(--gray-200)_80%)] md:h-32 md:w-32" />
    </div>
  );
};

export default HeroSectionInner;
