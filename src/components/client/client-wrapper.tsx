import Hero from "@/components/sections/hero";
import { getHeroContent, getServicesContent } from "@/lib/actions";
import LogosBlock from "@/components/sections/blocks/logos-block";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";

const ClientWrapper = async () => {
  const heroContent = await getHeroContent();
  const servicesContent = await getServicesContent();

  return (
    <>
      <Hero heroContent={heroContent} />
      <LogosBlock />
      <About />
      <Services servicesContent={servicesContent} />
    </>
  )
}

export default ClientWrapper;