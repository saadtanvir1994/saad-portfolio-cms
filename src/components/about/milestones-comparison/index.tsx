import { getMilestonesComparisonContent } from "@/lib/actions";
import MilestonesSection from "./milestones-section";
import ComparisonSection from "./comparison-section";

const MilestonesComparisons = async () => {
  const content = await getMilestonesComparisonContent();

  return (
    <>
      <MilestonesSection content={content.milestones} />
      <ComparisonSection content={content.comparison} />
    </>
  );
};

export default MilestonesComparisons;
