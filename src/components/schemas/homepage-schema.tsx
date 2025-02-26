import { getHomepageMetadata, getMenuContent } from "@/lib/actions";
import { getSchemas } from "@/utils/all";
import PageSchema from "./page-schema";

const getNavigationSchema = async () => {
  const menuContent = await getMenuContent();
  return {
    "@type": "SiteNavigationElement",
    name: menuContent.links.map((link) => link.label),
    url: menuContent.links.map(
      (link) => `${process.env.NEXT_PUBLIC_SITE_URL}${link.href}`
    ),
  };
};

const HomepageSchema = async () => {
  const navigationSchema = await getNavigationSchema();
  const otherSchemas = await getSchemas(getHomepageMetadata);

  return <PageSchema schemas={[navigationSchema, ...otherSchemas]} />
};

export default HomepageSchema;
