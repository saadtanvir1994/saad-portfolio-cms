import About from "@/components/about/about";
import FunFacts from "@/components/about/fun-facts";
import AboutHeroWrapper from "@/components/about/about-hero";
import MilestonesHiring from "@/components/about/milestones-hiring";
import StatsCapabilities from "@/components/about/stats-capabilities";
import { getAboutPageMetadata } from "@/lib/actions";
import type { Metadata } from "next";
import AboutPageSchema from "@/components/schemas/about-page-schema";
import Head from "next/head";
import HrefLangTag from "@/components/shared/href-lang-tag";

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata = await getAboutPageMetadata();

  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    openGraph: {
      title: metadata.metaTitle,
      description: metadata.metaDescription,
      images: [metadata.metaImage],
      type: "website",
    },
    twitter: {
      title: metadata.metaTitle,
      description: metadata.metaDescription,
      images: [metadata.metaImage],
    },
    keywords: metadata.keywords,
  };
};

const AboutPage = () => {
  return (
    <>
      <Head>
        <HrefLangTag />
      </Head>
      <div>
        <AboutHeroWrapper />
        <About />
        <StatsCapabilities />
        <MilestonesHiring />
        <FunFacts />
      </div>
      <AboutPageSchema />
    </>
  );
};

export default AboutPage;
