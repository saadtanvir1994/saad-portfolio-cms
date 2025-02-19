import Hero from "@/components/sections/hero";
import { getHeroContent } from "@/lib/actions";
import LogosBlock from "@/components/sections/blocks/logos-block";
import About from "../sections/about";

const ClientWrapper = async () => {
  const heroContent = await getHeroContent();

  return (
    <>
      <Hero heroContent={heroContent} />
      <LogosBlock />
      <About />
    </>
  )
}

export default ClientWrapper;