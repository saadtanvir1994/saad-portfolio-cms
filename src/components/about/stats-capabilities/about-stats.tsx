import { StatsItemContent } from "@/lib/definitions";
import React from "react";

const AboutStats = ({ content }: { content: StatsItemContent[] }) => {
  return (
    <section className="content-statsgrid dark bg-[var(--gray-25)] px-4 py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {content.map((item, index) => (
            <React.Fragment key={index}>
              {item.empty ? (
                <div className="hidden md:block" />
              ) : (
                <div className="flex flex-col justify-between rounded-lg bg-[var(--gray-50)] p-8">
                  <h2 className="mb-12 text-5xl font-semibold text-[var(--gray-700)] md:mb-24">
                    {item.number}
                  </h2>
                  <div>
                    <h3 className="mb-2 text-2xl text-[var(--gray-900)]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--gray-400)] md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
