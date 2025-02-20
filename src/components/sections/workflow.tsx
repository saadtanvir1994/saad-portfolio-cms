import { getWorkflowContent } from "@/lib/actions";
import Technologies from "./technologies";
import ExpectationsSection from "../client/expectations-section";
import WorkStages from "./work-stages";

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
