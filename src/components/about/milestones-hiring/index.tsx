import { getMilestonesHiringContent } from "@/lib/actions"
import MilestonesSection from "./milestones-section";
import WhyHireSection from "./why-hire-section";

const MilestonesHiring = async () => {
  const content = await getMilestonesHiringContent();

  return (
    <>
      <MilestonesSection content={content.milestones} />
      <WhyHireSection content={content.hiring} />
    </>
  )
}
export default MilestonesHiring