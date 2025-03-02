import { MediaContent, MetadataContent } from "@/lib/definitions";

export const getMediaUrl = (media: MediaContent) => {
  if (!media) return "";
  if (media.cloud_storage) return media.url;

  return process.env.NEXT_PUBLIC_CMS_URL + "/storage/" + media.url;
};

export const getSchemasFromMetadata = async (metadata: MetadataContent) => {
  const structuredData = await JSON.parse(metadata.structuredData);
  if (structuredData) {
    return structuredData.structuredSchemas as unknown[];
  }

  return [];
}

export const getSchemas = async (
  getMetadata: () => Promise<MetadataContent>
) => {
  const metadata = await getMetadata();

  return await getSchemasFromMetadata(metadata);
};

export const populateMetadata = (metadata: MetadataContent) => ({
  title: metadata.metaTitle,
  description: metadata.metaDescription,
  openGraph: {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    images: [metadata.metaImage],
    type: "website",
  },
  twitter: {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    images: [metadata.metaImage],
  },
  keywords: metadata.keywords,
});
