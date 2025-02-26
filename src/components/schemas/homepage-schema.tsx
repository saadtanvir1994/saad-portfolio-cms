import { getHomepageMetadata, getMenuContent } from "@/lib/actions";

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

const getOtherSchemas = async () => {
  const homepageMetadata = await getHomepageMetadata();

  const structuredData = await JSON.parse(homepageMetadata.structuredData);
  if (structuredData) {
    return structuredData.structuredSchemas as unknown[];
  }

  return []
}

const HomepageSchema = async () => {
  const navigationSchema = await getNavigationSchema();
  const otherSchemas = await getOtherSchemas();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            navigationSchema,
            ...otherSchemas,
          ],
        }),
      }}
    />
  );
};

export default HomepageSchema;
