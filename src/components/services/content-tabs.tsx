import Typography from "@/components/ui/typography";
import { SubserviceTabs } from "@/lib/definitions";
import Tabs from "./tabs";

const ContentTabs = ({ content }: { content: SubserviceTabs }) => {
  // Return early if no items
  if (!content.tabs || content.tabs.length === 0) {
    return <div>No tab items provided</div>;
  }

  return (
    <div className="overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="section-header flex flex-col md:col-span-5">
            <span className="md:text-md mb-2 text-sm font-light uppercase tracking-widest text-[var(--text-tertiary)]">
              {content.subtitle}
            </span>
            <Typography
              variant="display-2"
              className="mb-2 !w-full uppercase text-[var(--text-primary)]"
            >
              {content.title}
            </Typography>
            <Typography variant="p" className="text-[var(--gray-500)]">
              {content.description}
            </Typography>
          </div>
          <div className="hidden md:col-span-7 md:block" />
        </div>
        <Tabs items={content.tabs} />
      </div>
    </div>
  );
};

export default ContentTabs;
