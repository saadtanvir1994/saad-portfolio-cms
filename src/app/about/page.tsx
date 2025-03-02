import About from "@/components/about/about";
import FunFacts from "@/components/about/fun-facts";
import AboutHeroWrapper from "@/components/about/about-hero";
import MilestonesComparisons from "@/components/about/milestones-comparison";
import StatsCapabilities from "@/components/about/stats-capabilities";
import { getAboutPageMetadata } from "@/lib/actions";
import type { Metadata } from "next";
import AboutPageSchema from "@/components/schemas/about-page-schema";
import { populateMetadata } from "@/utils/all";
import ReviewsSection from "@/components/about/reviews-section";
import CertificatesSection from "@/components/about/certificates-section";
import ContactBlock from "@/components/shared/contact-block";

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
        <ReviewsSection />
        <FunFacts />
        <CertificatesSection />
        <ContactBlock />
      </div>
      <AboutPageSchema />
    </>
  );
};

export default AboutPage;
