import SimpleCta from "@/components/ui/simple-cta";
import Typography from "@/components/ui/typography";
import { CapabilitiesContent } from "@/lib/definitions";
import React from "react";

const Capabilities = ({ content }: { content: CapabilitiesContent }) => {
  return (
    <section className="relative overflow-hidden bg-[var(--gray-50)] px-4 py-16 md:py-32">
      <div className="container relative mx-auto grid grid-cols-1 gap-0 md:grid-cols-12 md:gap-8">
        <div className="flex flex-col md:col-span-6">
          <span className="mb-2 block text-base font-light uppercase tracking-wide">
            {content.subtitle}
          </span>
          <Typography
            variant="display-2"
            className="mb-6 !w-full uppercase md:!w-[70%]"
          >
            {content.title}
          </Typography>
        </div>
        <div className="flex items-center justify-end md:col-span-6">
          <Typography
            variant="p"
            className="mx-auto max-w-lg text-[var(--text-tertiary)]"
          >
            {content.paragraph}
          </Typography>
        </div>
      </div>
      <div className="relative">
        <div className="container relative mx-auto grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-28">
          {content.services.map((service, index) => (
            <div className="w-full" key={index}>
              <h3 className="my-8 mb-4 font-semibold tracking-tight text-[var(--gray-900)] md:mb-0">
                {service.service}
              </h3>
              <ul className="flex flex-col gap-2 md:p-4 md:px-0">
                {service.items.map((item, id) => (
                  <li key={`${index}-${id}`}>
                    <SimpleCta name={item.label} href={item.url} external={item.external} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
