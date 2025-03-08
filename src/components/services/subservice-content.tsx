import Typography from "@/components/ui/typography";
import { SubserviceContent as SubserviceContentType } from "@/lib/definitions";
import { getMediaUrl } from "@/utils/all";
import { DynamicIcon } from "lucide-react/dynamic";
import Image from "next/image";
import React from "react";

const SubserviceContent = ({ content }: { content: SubserviceContentType }) => {
  const wrapperClass =
    content.mode === "dark"
      ? "dark bg-[var(--gray-0)] text-[var(--text-primary)]"
      : "bg-[var(--bg-primary)] text-[var(--text-primary)]";

  return (
    <section
      className={`relative overflow-hidden py-16 md:py-32 ${wrapperClass}`}
    >
      <div className={`container mx-auto`}>
        <div className="mb-6 grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="hidden md:col-span-3 md:block" />
          <div className="section-header flex flex-col justify-center text-center md:col-span-6">
            <span className="md:text-md mb-2 text-sm font-light uppercase tracking-widest text-[var(--text-tertiary)]">
              {content.subtitle}
            </span>
            <Typography
              variant="display-2"
              className="mx-auto mb-2 !w-full uppercase text-[var(--text-primary)] md:max-w-[60%]"
            >
              {content.title}
            </Typography>
            <Typography
              variant="p"
              className="mx-auto max-w-4xl text-center text-[var(--gray-500)]"
            >
              {content.description}
            </Typography>
          </div>
          <div className="hidden md:col-span-3 md:block" />
        </div>

        {/* Features Grid with Center Image */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Left Column */}
          <div className="grid grid-rows-3 gap-4">
            {content.features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="rounded-lg border border-[var(--gray-100)] bg-[var(--gray-25)] p-5"
              >
                <div className="mb-4 flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--gray-50)] text-[var(--gray-600)]">
                    {feature.graphic === "image" ? (
                      <Image
                        src={getMediaUrl(feature.image) || "/images/sticker.svg"}
                        alt={feature.title + "- icon"}
                        width={24}
                        height={24}
                      />
                    ) : (
                      <DynamicIcon name={feature.icon} size={24} />
                    )}
                  </div>
                  <Typography
                    variant="h3"
                    className="ml-3 !text-xl font-semibold"
                  >
                    {feature.title}
                  </Typography>
                </div>
                <Typography
                  variant="p"
                  className="!text-base text-[var(--gray-700)]"
                >
                  {feature.description}
                </Typography>
              </div>
            ))}
          </div>

          {/* Center Column with Image */}
          <div className="flex items-center justify-center overflow-hidden rounded-lg bg-[var(--gray-50)] py-8 text-[var(--gray-600)] md:py-0">
            <div className="relative mx-auto aspect-square h-full w-full max-w-[90%] overflow-hidden">
              <Image
                src={getMediaUrl(content["center-image"])}
                alt={content["center-image"].caption || "center image"}
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-rows-3 gap-4">
            {content.features.slice(3, 6).map((feature, index) => (
              <div
                key={index}
                className="rounded-lg border border-[var(--gray-100)] bg-[var(--gray-25)] p-5"
              >
                <div className="mb-4 flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--gray-50)]">
                    {feature.graphic === "image" ? (
                      <Image
                        src={
                          getMediaUrl(feature.image) || "/images/sticker.svg"
                        }
                        alt="icon"
                        width={24}
                        height={24}
                      />
                    ) : (
                      <DynamicIcon name={feature.icon} size={24} />
                    )}
                  </div>
                  <Typography
                    variant="h3"
                    className="ml-3 !text-xl font-semibold"
                  >
                    {feature.title}
                  </Typography>
                </div>
                <Typography
                  variant="p"
                  className="!text-base text-[var(--gray-700)]"
                >
                  {feature.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubserviceContent;
