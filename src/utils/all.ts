import { MediaContent, MetadataContent, PricingItemContent } from "@/lib/definitions";
import type { Metadata } from "next";
import Stripe from "stripe"

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

const toMetadatabaseUrl = (url: string) => {
  try {
    const urlObj = new URL(url.startsWith("http") ? url : "https://" + url);

    if (!urlObj.hostname.startsWith("www.")) {
      urlObj.hostname = "www." + urlObj.hostname;
    }

    return urlObj;
  } catch (error) {
    console.error("Invalid URL:", error);
    return null;
  }
};

const toCanonicalUrl = (url: string) => {
  try {
    const urlObj = new URL(url.startsWith("http") ? url : "https://" + url);

    if (urlObj.hostname.startsWith("www.")) {
      urlObj.hostname = urlObj.hostname.replace(/^www\./, "");
    }

    return urlObj;
  } catch (error) {
    console.error("Invalid URL:", error);
    return null;
  }
};

export const populateMetadata = (
  metadata: MetadataContent,
  slug: string,
  type?: "article" | "website" | "book" | "profile"
): Metadata => {
  const url = process.env.NEXT_PUBLIC_SITE_URL + slug;
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
  if (metadata.canonicalUrl) {
    result.metadataBase = toMetadatabaseUrl(metadata.canonicalUrl);
    result.alternates = {
      canonical: toCanonicalUrl(metadata.canonicalUrl),
    };
  } else {
    result.metadataBase = toMetadatabaseUrl(url);
    result.alternates = {
      canonical: toCanonicalUrl(url),
    };
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

export const transformPricingItem = (product: Stripe.Product) => {
  const item = {
      name: product.name!,
      description: product.description!,
      "short-description": product.metadata.short_description!,
      "features-heading": product.metadata.features_heading!,
      frequency: product.metadata.frequency!,
      "link-text": product.metadata.button_text!,
      primary: product.metadata.primary! === "1",
      "price-id":
        typeof product.default_price === "string"
          ? "0"
          : product.default_price!.id!,
      price:
        typeof product.default_price === "string"
          ? "0"
          : `$ ${product.default_price!.unit_amount! / 100}`,
      recurring: typeof product.default_price === "string" ? false : product.default_price!.type === "recurring",
      features: product.marketing_features.map((feature) => feature.name),
    };
  
  return item as PricingItemContent;
}