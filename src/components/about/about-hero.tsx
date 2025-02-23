import { getInnerHeroContent } from "@/lib/actions";
import HeroSectionInner from "@/components/shared/hero-inner";

const AboutHeroWrapper = async () => {
  const content = await getInnerHeroContent("/about");

  return <HeroSectionInner content={content} />;
};

export default AboutHeroWrapper;
