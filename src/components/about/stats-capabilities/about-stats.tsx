import { StatsContent } from "@/lib/definitions";
import Image from "next/image";
import { getMediaUrl } from "@/utils/all";

const AboutStats = ({ content }: { content: StatsContent }) => {
  return (
    <section className="dark bg-[--gray-0] px-4 py-16">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {/* Main Image - Spans 2 rows */}
          <div className="relative md:col-span-6">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={getMediaUrl(content["main-image"])}
                alt={content["main-image"].caption}
                className="object-cover"
                fill
                loading="lazy"
              />
            </div>
          </div>

          {/* Surface Laptop Image */}
          <div className="grid grid-rows-2 gap-4 md:col-span-3">
            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={getMediaUrl(content["first-stat-image"].image)}
                  alt={content["first-stat-image"].image.caption}
                  className="object-cover"
                  loading="lazy"
                  fill
                />
              </div>

              <div className="absolute left-6 top-8">
                <p className="text-sm text-[var(--gray-900)] mix-blend-difference">
                  {content["first-stat-image"].text}
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-lg bg-[var(--gray-50)] p-8">
              <p className="mb-4 text-sm text-[var(--gray-600)]">
                {content["first-stat-text"].text}
              </p>
              <h3 className="text-5xl font-bold text-white">
                {content["first-stat-text"].number}
              </h3>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4 md:col-span-3">
            <div className="relative rounded-lg bg-[var(--gray-50)] p-8">
              <p className="mb-4 text-sm text-[var(--gray-600)]">
                {content["second-stat-text"].text}
              </p>
              <h3 className="text-5xl font-bold text-[var(--gray-900)]">
                {content["second-stat-text"].number}
              </h3>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={getMediaUrl(content["second-stat-image"].image)}
                alt={content["second-stat-image"].image.caption}
                className="object-cover"
                fill
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
