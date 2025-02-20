import Hero from "@/components/home/hero-section";
import LogosBlock from "@/components/home/logos-block";
import About from "@/components/home/about";
import Services from "@/components/services";
import Workflow from "@/components/workflow";
import Showcase from "@/components/showcase";
import PricingFaqs from "@/components/pricing-faqs";

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
