import { SubserviceTabs as SubserviceTabsType } from "@/lib/definitions";
import ContentTabs from "./content-tabs";

export default function SubserviceTabs({ content }: { content: SubserviceTabsType }) {
  const wrapperClass =
    content.mode === "dark"
      ? "dark bg-[var(--gray-0)] text-[var(--text-primary)]"
      : "bg-[var(--bg-primary)] text-[var(--text-primary)]";


  return (
    <section className={`bg-[var(--gray-0)] py-16 ${wrapperClass}`}>
      <div className="container mx-auto px-4">
        <ContentTabs content={content} />
      </div>
    </section>
  );
}
