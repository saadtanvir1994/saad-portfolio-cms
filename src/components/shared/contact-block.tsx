import { getContactSectionContent } from "@/lib/actions";
import { getMediaUrl } from "@/utils/all";
import Image from "next/image";
import React from "react";

const ContactBlock = async () => {
  const content = await getContactSectionContent();

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-32">
      <div className="container relative rounded-2xl bg-[var(--gray-50)] px-0">
        <div className="absolute right-4 top-4 h-24 w-24 origin-center animate-spin-slow2 md:h-52 md:w-52">
          <Image
            className="rounded-2xl"
            src={getMediaUrl(content.image)}
            alt={content.image.caption || "decoration"}
            fill
          />
        </div>
        <div className="relative z-50 p-8 md:p-24">
          <p className="mb-6 font-semibold tracking-tight text-orange-400">
            {content.subtitle}
          </p>
          <h2 className="mb-32 max-w-xs text-4xl font-medium tracking-tight sm:max-w-lg sm:text-6xl">
            {content.heading}
          </h2>
          <div className="flex max-w-5xl flex-wrap justify-between gap-12">
            {content["text-items"].map((item, index) => (
              <div key={index}>
                <p className="text-xl font-medium tracking-tight text-black text-opacity-60">
                  {item.title}
                </p>
                {item.items.map((i, id) => (
                  <p className="text-xl font-medium tracking-tight" key={id}>
                    {i}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBlock;
