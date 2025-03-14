import Typography from "@/components/ui/typography";
import { SubserviceApproach as SubserviceApproachType } from "@/lib/definitions";
import MobileTabs from "./subservice-approach-mobile-tabs";
import { DynamicIcon } from "lucide-react/dynamic";

const SubserviceApproach = ({ content }: { content: SubserviceApproachType }) => {
  const wrapperClass =
    content.mode === "dark"
      ? "dark bg-[var(--gray-0)] text-[var(--text-primary)]"
      : "bg-[var(--bg-primary)] text-[var(--text-primary)]";

  return (
    <section
      className={`relative overflow-hidden px-4 py-16 md:py-32 ${wrapperClass}`}
    >
      <div className={`container mx-auto`}>
        {/* Header (optional) */}
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

        <MobileTabs tabs={content.tabs} />

        {/* Desktop Layout */}
        <div className="mt-6 hidden md:block">
          <div className="grid grid-cols-4 gap-6">
            {content.tabs.map((tab, index) => (
              <div key={index} className="flex flex-col">
                {/* Tab Header */}
                <div className="mb-4 flex items-center justify-between space-x-3 rounded-lg bg-[var(--gray-25)] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div
                      className="flex h-8 w-2 items-center justify-center rounded"
                      style={{ backgroundColor: tab.color }}
                    ></div>
                    <h3 className="font-semibold">{tab.label}</h3>
                  </div>

                  <div className="ml-auto">
                    <DynamicIcon name={tab.icon} size={20} />
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between rounded-lg bg-[var(--gray-25)] px-4 py-6 md:min-h-[80vh]">
                  {/* Tab Description */}
                  <p className="mb-8 text-base text-[var(--gray-600)]">
                    {tab.description}
                  </p>

                  {/* Deliverables */}
                  <div className="mt-auto">
                    <h3 className="mb-4 text-sm font-semibold uppercase text-[var(--gray-500)]">
                      {tab["deliverables-label"]}
                    </h3>
                    <ul className="space-y-2">
                      {tab.deliverables.map((item, index) => (
                        <li
                          key={index}
                          className="rounded-lg border-xs border-[var(--gray-50)] bg-[var(--gray-50)] p-3 text-[var(--gray-700)] transition-all duration-300 hover:border-[var(--gray-100)]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubserviceApproach;
