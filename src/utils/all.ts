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
): Metadata => {
  const result: Metadata = {};

  if (metadata.metaTitle) {
    result.title = metadata.metaTitle;
  }
  if (metadata.metaDescription) {
    result.description = metadata.metaDescription;
  }
  if (metadata.keywords) {
    result.keywords = metadata.keywords;
  }

  const openGraph: Record<string, unknown> = {};
  if (metadata.metaTitle) {
    openGraph.title = metadata.metaTitle;
  }
  if (metadata.metaDescription) {
    openGraph.description = metadata.metaDescription;
  }
  if (metadata.metaImage) {
    openGraph.images = [metadata.metaImage];
  }
  if (type) {
    openGraph.type = type;
  } else {
    openGraph.type = "website";
  }
  if (Object.keys(openGraph).length > 0) {
    result.openGraph = openGraph;
  }

  const twitter: Record<string, unknown> = {};
  if (metadata.metaTitle) {
    twitter.title = metadata.metaTitle;
  }
  if (metadata.metaDescription) {
    twitter.description = metadata.metaDescription;
  }
  if (metadata.metaImage) {
    twitter.images = [metadata.metaImage];
  }
  if (Object.keys(twitter).length > 0) {
    result.twitter = twitter;
  }

  return result;
};
