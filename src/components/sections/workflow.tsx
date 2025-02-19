import { getWorkflowContent } from "@/lib/actions";
import Technologies from "./technologies";
import ExpectationsSection from "../client/expectations-section";
import WorkStages from "./work-stages";

const Workflow = async () => {
  const workflowContent = await getWorkflowContent();

  return (
    <>
      <Technologies content={workflowContent.technologies} />
      <ExpectationsSection content={workflowContent.expectations} />
      <WorkStages content={workflowContent["work-stages"]} />
    </>
  )
}

export default Workflow;