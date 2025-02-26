import { MediaContent, MetadataContent } from "@/lib/definitions";

export const getMediaUrl = (media: MediaContent) => {
  if (!media) return "";
  if (media.cloud_storage) return media.url;

  return process.env.NEXT_PUBLIC_CMS_URL + "/storage/" + media.url;
};

export const getSchemas = async (getMetadata: () => Promise<MetadataContent>) => {
  const metadata = await getMetadata();

  const structuredData = await JSON.parse(metadata.structuredData);
  if (structuredData) {
    return structuredData.structuredSchemas as unknown[];
  }

  return [];
}