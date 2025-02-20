import Hero from "@/components/home/hero";
import { getHeroContent } from "@/lib/actions";
import LogosBlock from "@/components/home/logos-block";
import About from "@/components/home/about";
import Services from "@/components/services";
import Workflow from "@/components/workflow";
import Showcase from "@/components/showcase";
import PricingFaqs from "@/components/pricing-faqs";

const Home = async () => {
  const heroContent = await getHeroContent();

  return (
    <>
      <Hero heroContent={heroContent} />
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
