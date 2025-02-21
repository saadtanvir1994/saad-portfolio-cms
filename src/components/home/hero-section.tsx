import { getHeroContent } from "@/lib/actions";
import Hero from "@/components/home/hero";

const HeroSection = async () => {
  const heroContent = await getHeroContent();

  return <Hero heroContent={heroContent} />;
};

export default HeroSection;
