import { MediaContent, MetadataContent } from "@/lib/definitions";
import type { Metadata } from "next";

export const getMediaUrl = (media: MediaContent) => {
  if (!media) return "";
  if (media.cloud_storage) return media.url;

  return process.env.NEXT_PUBLIC_CMS_URL + "/storage/" + media.url;
};

export const getSchemasFromMetadata = async (metadata: MetadataContent) => {
  let structuredData;
  try {
    structuredData = await JSON.parse(metadata?.structuredData || "");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    structuredData = null;
  }
  if (structuredData) {
    return structuredData.structuredSchemas as unknown[];
  }

  return [];
};

export const getSchemas = async (
  getMetadata: () => Promise<MetadataContent>
) => {
  const metadata = await getMetadata();

  return await getSchemasFromMetadata(metadata);
};

export const populateMetadata = (
  metadata: MetadataContent,
  type?:
    | "article"
    | "website"
    | "book"
    | "profile"
): Metadata => ({
  title: metadata.metaTitle,
  description: metadata.metaDescription,
  openGraph: {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    images: [metadata.metaImage],
    type: type || "website",
  },
  twitter: {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    images: [metadata.metaImage],
  },
  keywords: metadata.keywords,
});
