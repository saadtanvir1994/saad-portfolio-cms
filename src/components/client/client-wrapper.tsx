import Hero from "@/components/sections/hero";
import { getHeroContent } from "@/lib/actions";

const ClientWrapper = async () => {
  const heroContent = await getHeroContent();

  return (
    <>
      <Hero heroContent={heroContent} />
    </>
  )
}

export default ClientWrapper;