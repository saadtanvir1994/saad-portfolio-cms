import About from "@/components/about/about";
import FunFacts from "@/components/about/fun-facts";
import MilestonesHiring from "@/components/about/milestones-hiring";
import StatsCapabilities from "@/components/about/stats-capabilities";
import HeroSectionInner from "@/components/shared/hero-inner";

const AboutPage = () => {
  return (
    <div>
      <HeroSectionInner path="about" />
      <About />
      <StatsCapabilities />
      <MilestonesHiring />
      <FunFacts />
    </div>
  )
}

export default AboutPage;