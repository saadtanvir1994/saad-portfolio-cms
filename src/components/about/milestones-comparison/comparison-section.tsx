import Typography from "@/components/ui/typography";
import Image from "next/image";
import AnimatedCTAButton from "@/components/ui/animated-cta-button";
import { ComparisonContent } from "@/lib/definitions";
import { ComparisonItem } from "@/lib/definitions";
import { getMediaUrl } from "@/utils/all";
import { cn } from "@/lib/utils";

const colors = {
  pink: "bg-pink-50 text-pink-500",
  blue: "bg-blue-50 text-blue-500",
  amber: "bg-amber-50 text-amber-500",
  green: "bg-green-50 text-green-500",
  purple: "bg-purple-50 text-purple-500",
  sky: "bg-sky-50 text-sky-500",
  indigo: "bg-indigo-50 text-indigo-500",
  rose: "bg-rose-50 text-rose-500",
  teal: "bg-teal-50 text-teal-500",
};

const colSpans = [
  "md:col-span-8",
  "md:col-span-4",
  "md:col-span-6",
  "md:col-span-6",
  "md:col-span-4",
  "md:col-span-8",
  "md:col-span-6",
  "md:col-span-6",
  "md:col-span-12",
]

const ComparisonItemBlock = ({ item, index }: { item: ComparisonItem; index: number }) => {
  return (
    <div
      className={cn(
        "group rounded-xl border border-transparent bg-[var(--gray-50)] p-6 shadow-lg transition-all duration-300 hover:border-gray-300",
        colSpans[index]
      )}
    >
      <div className="mb-6">
        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            colors[item["subtitle-color"] || "sky"]
          }`}
        >
          {item.subtitle}
        </span>
      </div>
      <h3 className="mb-3 text-2xl font-semibold text-gray-900">
        {item.title}
      </h3>
      <p className="mb-8 text-gray-500">{item.description}</p>
      <div className="mt-auto overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
        <div
          className={cn(
            "relative w-full overflow-hidden",
            item.aspect && item.aspect === "square"
              ? "aspect-square"
              : "aspect-video"
          )}
          style={{
            height: item["image-height"] || "100%",
          }}
        >
          <Image
            src={getMediaUrl(item.image)}
            alt={item.image.caption || "saad vs platforms"}
            fill
            loading="lazy"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const ComparisonSection = ({ content }: { content: ComparisonContent }) => {
  return (
    <div className="w-full bg-[var(--gray-25)] py-20">
      <div className="md-8 container relative mx-auto grid grid-cols-1 gap-0 md:mb-16 md:grid-cols-12 md:gap-8">
        <div className="hidden items-center justify-center md:col-span-3 md:flex"></div>

        <div className="flex flex-col items-center md:col-span-6">
          <span className="mb-2 block text-base font-light uppercase tracking-wide">
            {content.subtitle}
          </span>
          <Typography
            variant="display-2"
            className="mb-6 !w-full text-center uppercase md:!w-[70%]"
          >
            {content.title}
          </Typography>
          <Typography
            variant="p"
            className="max-w-xl text-[var(--text-tertiary)]"
          >
            {content.description}
          </Typography>
        </div>
        <div className="hidden items-center justify-end md:col-span-3 md:flex"></div>
      </div>
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {content.items.map((item, index) => (
            <ComparisonItemBlock item={item} key={index} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <AnimatedCTAButton
            href={content["cta-button"].href}
            text={content["cta-button"].label}
            ariaLabel={content["cta-button"].label}
            external={content["cta-button"].external}
          />
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;
