import About from "@/components/about/about";
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
    </div>
  )
}

export default AboutPage;