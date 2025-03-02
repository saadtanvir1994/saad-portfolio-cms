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
import BlogSection from "@/components/blog/blog-section";
import { populateMetadata } from "@/utils/all";

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata = await getHomepageMetadata();

  return populateMetadata(metadata);
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
      <BlogSection />
      <HomepageSchema />
    </>
  );
};

export default Home;
