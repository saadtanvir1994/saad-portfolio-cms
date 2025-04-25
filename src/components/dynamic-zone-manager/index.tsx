/* eslint-disable @typescript-eslint/no-explicit-any */
import { GeneralPageContent } from "@/lib/definitions";
import dynamic from "next/dynamic";

const componentMapping: Record<string, any> = {
  contentSection: dynamic(() => import("./content-section")),
  heroSection: dynamic(() => import("./hero-section")),
  featuresSection: dynamic(() => import("./features-section")),
};

const DynamicZoneManager = ({ content }: { content: GeneralPageContent }) => {
  return (
    <div className="my-20 bg-white">
      {Object.keys(content).map((key) => {
        const Component = componentMapping[key];

        const value = content[key as keyof GeneralPageContent];
        if (!Component || (typeof value === "object" && !value?.included)) {
          console.warn(`No component found for: ${key}`);
          return null;
        }

        const props = content[key as keyof GeneralPageContent];
        return (
          <Component key={key} {...(typeof props === "object" ? props : {})} />
        );
      })}
    </div>
  );
};

export default DynamicZoneManager;
