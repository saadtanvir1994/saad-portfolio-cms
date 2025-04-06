import Typography from "@/components/ui/typography";
import { Check } from "lucide-react";
import React from "react";
import AnimatedCTAButton from "@/components/ui/animated-cta-button";
import { SubservicePricing as SubservicePricingType } from "@/lib/definitions";

const SubservicePricing = ({ content }: { content: SubservicePricingType }) => {
  const wrapperClass =
    content.mode === "dark"
      ? "dark bg-[var(--gray-0)] text-[var(--text-primary)]"
      : "bg-[var(--bg-secondary)] text-[var(--text-primary)]";

    const chunkArray = (array: string[], size: number = 3) => {
      return array.reduce<string[][]>((acc, _, i) => {
        if (i % size === 0) acc.push(array.slice(i, i + size));
        return acc;
      }, []);
    }

  const features = chunkArray(content.features, 3)

  return (
    <section
      className={`relative overflow-hidden py-16 md:py-32 ${wrapperClass}`}
    >
      <div className={`container mx-auto`}>
        <div className="mb-6 grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="hidden md:col-span-2 md:block" />
          <div className="section-header flex flex-col justify-center text-center md:col-span-8">
            <span className="block md:text-md mb-2 text-sm font-light uppercase tracking-widest text-[var(--text-tertiary)]">
              {content.subtitle}
            </span>
            <Typography
              variant="display-2"
              className="mx-auto mb-2 !w-full max-w-[80%] uppercase text-[var(--text-primary)]"
            >
              {content.title}
            </Typography>
            <Typography
              variant="p"
              className="text-base md:text-md lg:text-lg mb-4 md:max-w-[80%] text-[--text-tertiary]"
            >
              {content.description}
            </Typography>
          </div>
          <div className="hidden md:col-span-2 md:block" />
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-8 mt-4 w-full max-w-md rounded-lg bg-[var(--gray-25)] p-8 shadow shadow-[var(--gray-200)]">
            <p className="mb-2 text-center text-[var(--gray-400)]">
              {content["price-subtitle"]}
            </p>

            <div className="mb-2 text-center">
              <Typography variant="h3" className="mx-auto text-4xl font-bold">
                <sup className="text-xl">$</sup>
                {content.price.replace("$", "")}
              </Typography>
            </div>

            <p className="mb-6 text-center text-md text-[var(--gray-500)]">
              {content["price-subtext"]}
            </p>

            <AnimatedCTAButton
              href={content["cta-button"].href}
              ariaLabel={content["cta-button"].label}
              text={content["cta-button"].label}
              external={content["cta-button"].external}
              variant="simple"
              className="mx-auto"
            />
          </div>

          <div className="w-full">
            <Typography variant="h4" className="mb-2 md:mb-6 md:text-center">
              {content["features-title"] || "What's included in the plan"}
            </Typography>

            <div className="mx-auto grid max-w-5xl grid-cols-1 place-content-center gap-x-8 sm:grid-cols-2 md:grid-cols-3 md:gap-y-4">
              {features.map((column, colIndex) => (
                <div key={colIndex}>
                  {column.map((feature, featureIndex) => (
                    <div key={featureIndex} className="mb-3 flex items-center">
                      <Check
                        size={20}
                        className="mr-2 text-[var(--gray-900)]"
                      />
                      <span className="text-[var(--gray-800)]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubservicePricing;
