import AnimatedCTAButton from "@/components/ui/animated-cta-button";
import SimpleMarquee from "@/components/ui/star-marquee";
import Typography from "@/components/ui/typography";
import { getIntroductionContent } from "@/lib/actions";
import { getMediaUrl } from "@/utils/all";
import Image from "next/image";
import React from "react";
import InfiniteMarquee from "@/components/ui/infinite-marquee";

const About = async () => {
  const aboutContent = await getIntroductionContent();

  return (
    <section>
      <div className="bg-zinc-50 px-4 py-16 md:py-32">
        <div className="container relative mx-auto grid grid-cols-1 gap-0 md:grid-cols-12 md:gap-8">
          <div className="flex flex-col md:col-span-6">
            <span className="text-md dark mb-2 font-light uppercase tracking-widest text-[--text-dtertiary]">
              {aboutContent.tagline}
            </span>

            <Typography
              variant="display-2"
              className="mb-6 !w-[100%] uppercase"
            >
              {aboutContent.heading}
            </Typography>
          </div>
          <div className="flex items-end justify-end md:col-span-6">
            <AnimatedCTAButton
              ariaLabel={aboutContent["action-button"].label}
              href={aboutContent["action-button"].href}
              text={aboutContent["action-button"].label}
              variant="light"
              className="mb-0 ml-auto mr-0 md:mb-8"
            />
          </div>
        </div>

        <div className="relative mx-auto my-6 flex aspect-video w-full overflow-hidden rounded-2xl md:my-9 2xl:w-[90%]">
          <div className="absolute bottom-0 left-1/2 z-10 w-full -translate-x-1/2 bg-[#161616] px-2 py-2 text-center text-white">
            <span className="font-normal uppercase tracking-wider">
              {aboutContent.image.caption}
            </span>
          </div>
          <div className="relative h-full w-full overflow-hidden rounded-2xl">
            <Image
              src={getMediaUrl(aboutContent.image)}
              alt={aboutContent.image.caption || "setup"}
              fill
              loading="lazy"
              sizes="(min-width: 780px) 80vw, calc(100vw - 32px)"
              className="object-cover"
            />
          </div>
        </div>
        <div className="container relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="flex flex-col md:col-span-5">
              <div className="overflow-hidden rounded-full border border-gray-300 md:max-w-96">
                <SimpleMarquee
                  items={aboutContent["marquee-text"]}
                  gap={40}
                  className="text-xl font-semibold uppercase text-[--gray-900]"
                />
              </div>
            </div>

            <div className="md:col-span-7">
              <Typography
                variant="h3"
                className="mb-6 !w-full !text-2xl uppercase"
              >
                {aboutContent.headline}
              </Typography>

              {aboutContent.paragraphs.map((paragraph, idx) => (
                <Typography
                  variant="p"
                  className="text-[var(--text-tertiary)]"
                  key={idx}
                >
                  {paragraph}
                </Typography>
              ))}
            </div>
          </div>
        </div>
      </div>
      <InfiniteMarquee
        items={aboutContent["infinite-marquee-items"]}
        gap={40}
        className="text-5xl font-semibold uppercase text-[--gray-900]"
      />
    </section>
  );
};

export default About;
