import Typography from "@/components/ui/typography";
import { TechnologiesContent } from "@/lib/definitions";
import React from "react";
import WorkflowTools from "./workflow-tools";

const Technologies = ({ content }: { content: TechnologiesContent }) => {
  return (
    <section className="block bg-[var(--gray-0)]">
      <div className="container relative mx-auto text-center pt-16 md:pt-32">
        <div className="grid grid-cols-1 justify-center gap-16 md:grid-cols-12">
          <div className="hidden md:col-span-1 md:block xl:col-span-1"></div>

          <div className="flex flex-col justify-center bg-[var(--gray-0)] md:col-span-10 xl:col-span-10">
            <span className="text-md dark mb-2 font-light uppercase tracking-widest text-[--text-dtertiary]">
              {content.tagline}
            </span>
            <Typography variant="display-2" className="!mx-auto mb-6 uppercase">
              {content.heading}
            </Typography>
            <Typography
              variant="p"
              className="mx-auto w-[85%] text-[--text-tertiary]"
            >
              {content.paragraph}
            </Typography>
          </div>
          <div className="hidden md:col-span-1 md:block xl:col-span-1"></div>
        </div>
      </div>
      <WorkflowTools />
    </section>
  );
};

export default Technologies;
