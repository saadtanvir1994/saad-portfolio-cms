import { getAboutPageMetadata } from "@/lib/actions";
import { getSchemas } from "@/utils/all";
import PageSchema from "./page-schema";

const AboutPageSchema = async () => {
  const otherSchemas = await getSchemas(getAboutPageMetadata);

  return <PageSchema schemas={otherSchemas} />
}

export default AboutPageSchema;