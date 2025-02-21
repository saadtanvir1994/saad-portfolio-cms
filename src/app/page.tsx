import Hero from "@/components/home/hero-section";
import LogosBlock from "@/components/home/logos-block";
import About from "@/components/home/about";
import Services from "@/components/services";
import Workflow from "@/components/workflow";
import Showcase from "@/components/showcase";
import PricingFaqs from "@/components/pricing-faqs";
import type { Metadata } from "next";
import { getHomepageMetadata } from "@/lib/actions";

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata = await getHomepageMetadata();
 
  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    openGraph: {
      title: metadata.metaTitle,
      description: metadata.metaDescription,
      images: [metadata.metaImage],
      tags: metadata.keywords,
    },
    twitter: {
      title: metadata.metaTitle,
      description: metadata.metaDescription,
      images: [metadata.metaImage],
    },
    keywords: metadata.keywords,
  }
}

const Home = async () => {
  return (
    <>
      <Hero />
      <LogosBlock />
      <About />
      <Services />
      <Workflow />
      <Showcase />
      <PricingFaqs />
    </>
  );
};

export default Home;
