import Hero from "@/components/home/hero-section";
import LogosBlock from "@/components/home/logos-block";
import About from "@/components/home/about";
import Services from "@/components/home/services";
import Workflow from "@/components/home/workflow";
import Showcase from "@/components/home/showcase";
import PricingFaqs from "@/components/home/pricing-faqs";
import type { Metadata } from "next";
import { getHomepageMetadata } from "@/lib/actions";
import { Suspense } from "react";
import HomepageSchema from "@/components/schemas/homepage-schema";

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata = await getHomepageMetadata();

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

const Home = () => {
  return (
    <>
      <Suspense>
        <Hero />
      </Suspense>
      <Suspense>
        <LogosBlock />
      </Suspense>
      <Suspense>
        <About />
      </Suspense>
      <Suspense>
        <Services />
      </Suspense>
      <Suspense>
        <Workflow />
      </Suspense>
      <Suspense>
        <Showcase />
      </Suspense>
      <Suspense>
        <PricingFaqs />
      </Suspense>
      <HomepageSchema />
    </>
  );
};

export default Home;
