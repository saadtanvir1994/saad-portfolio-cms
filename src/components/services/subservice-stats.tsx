import Typography from "@/components/ui/typography";
import { SubserviceStats, SubserviceStatItem } from "@/lib/definitions";
import { DynamicIcon } from "lucide-react/dynamic";
import React from "react";

const StatItem = ({ icon, value, label }: SubserviceStatItem) => {
  return (
    <div className="group flex aspect-square flex-col items-start justify-between rounded-lg bg-[var(--gray-25)] p-4 transition-all duration-300 ease-in-out hover:bg-[var(--gray-50)] md:col-span-4">
      <div className="mb-6 text-[var(--gray-400)]">
        <DynamicIcon name={icon} size={36} />
      </div>
      <div className="gap flex flex-col">
        <Typography
          variant="h3"
          className="mb-1 !text-4xl tracking-wide group-hover:text-orange-500"
        >
          {value}
        </Typography>
        <Typography
          variant="p"
          className="mb-0 text-[var(--text-tertiary)] group-hover:text-[var(--gray-700)]"
        >
          {label}
        </Typography>
      </div>
    </div>
  );
};

const StatsBlock = ({ content }: { content: SubserviceStats }) => {
  const wrapperClass = content.mode === "dark"
    ? "dark bg-[var(--gray-0)] text-[var(--text-primary)]"
    : "bg-[var(--bg-primary)] text-[var(--text-primary)]";

  return (
    <section
      className={`relative overflow-hidden py-16 md:py-32 ${wrapperClass}`}
    >
      <div className="container mx-auto">
        <div className="mb-6 grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="hidden md:col-span-3 md:block" />
          <div className="section-header flex flex-col justify-center text-center md:col-span-6">
            <span className="md:text-md mb-2 text-sm font-light uppercase tracking-widest text-[var(--text-tertiary)]">
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
              className="mx-auto max-w-4xl text-center text-[var(--gray-500)]"
            >
              {content.description}
            </Typography>
          </div>
          <div className="hidden md:col-span-3 md:block" />
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-12">
          {content.items.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBlock;
