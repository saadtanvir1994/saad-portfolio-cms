import { HireMeContent } from "@/lib/definitions";
import { getMediaUrl } from "@/utils/all";
import { DynamicIcon } from "lucide-react/dynamic";
import Image from "next/image";

const WhyHireSection = ({ content }: { content: HireMeContent }) => {
  return (
    <section className="relative overflow-hidden bg-zinc-50 px-4 py-16 md:py-32">
      <div className="container">
        <div className="relative mb-6 aspect-video overflow-hidden rounded-2xl">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={getMediaUrl(content.image)}
            alt={content.image.caption}
            fill
          />
          <div className="absolute bottom-8 left-8 md:bottom-14 md:left-14">
            <h2 className="max-w-sm text-4xl font-medium uppercase tracking-tight text-white md:max-w-xl md:text-5xl lg:max-w-2xl lg:text-6xl">
              {content.title}
            </h2>
          </div>
        </div>
        <div className="-m-4 flex flex-wrap">
          {content.reasons.map((item, id) => (
            <div className="w-full p-4 lg:w-1/3" key={id}>
              <div className="h-full rounded-2xl bg-gray-100 p-10">
                <div className="mb-10 flex h-20 w-20 items-center justify-center rounded-full bg-white">
                  <DynamicIcon name="circle-dollar-sign" size={38} color="#FF8A0A" />
                </div>
                <p className="mb-4 text-xl font-semibold tracking-tight">
                  {item.title}
                </p>
                <p className="max-w-xs tracking-tight text-gray-700">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireSection;
