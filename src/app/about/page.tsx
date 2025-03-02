import About from "@/components/about/about";
import FunFacts from "@/components/about/fun-facts";
import AboutHeroWrapper from "@/components/about/about-hero";
import MilestonesComparisons from "@/components/about/milestones-comparison";
import StatsCapabilities from "@/components/about/stats-capabilities";
import { getAboutPageMetadata } from "@/lib/actions";
import type { Metadata } from "next";
import AboutPageSchema from "@/components/schemas/about-page-schema";
import { populateMetadata } from "@/utils/all";

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata = await getAboutPageMetadata();

  return populateMetadata(metadata);
};

const AboutPage = () => {
  return (
    <>
      <div>
        <AboutHeroWrapper />
        <About />
        <StatsCapabilities />
        <MilestonesComparisons />
        <FunFacts />
      </div>
      <AboutPageSchema />
    </>
  );
};

export default AboutPage;
