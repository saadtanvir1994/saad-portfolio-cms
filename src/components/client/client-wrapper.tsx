import Hero from "@/components/sections/hero";
import { getHeroContent } from "@/lib/actions";
import LogosBlock from "@/components/sections/blocks/logos-block";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Workflow from "@/components/sections/workflow";
import Showcase from "@/components/sections/showcase";

const ClientWrapper = async () => {
  const heroContent = await getHeroContent();

  return (
    <>
      <Hero heroContent={heroContent} />
      <LogosBlock />
      <About />
      <Services />
      <Workflow />
      <Showcase />
    </>
  )
}

export default ClientWrapper;