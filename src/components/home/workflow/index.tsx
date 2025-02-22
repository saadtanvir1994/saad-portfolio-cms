import { getWorkflowContent } from "@/lib/actions";
import Technologies from "@/components/home/workflow/technologies";
import ExpectationsSection from "@/components/home/workflow/expectations-section";
import WorkStages from "@/components/home/workflow/work-stages";

const Workflow = async () => {
  const {
    technologies,
    expectations,
    "work-stages": workStages,
  } = await getWorkflowContent();

  return (
    <>
      <Technologies content={technologies} />
      <ExpectationsSection content={expectations} />
      <WorkStages content={workStages} />
    </>
  );
};

export default Workflow;
