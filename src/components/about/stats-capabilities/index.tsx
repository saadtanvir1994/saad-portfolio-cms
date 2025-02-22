import { getStatsCapabilitiesContet } from "@/lib/actions"
import AboutStats from "@/components/about/stats-capabilities/about-stats";
import Capabilities from "@/components/about/stats-capabilities/capabilities";

const StatsCapabilities = async () => {
  const content = await getStatsCapabilitiesContet();

  return (
    <>
      <AboutStats content={content.stats} />
      <Capabilities content={content.capabilities} />
    </>
  )
}

export default StatsCapabilities;