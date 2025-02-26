/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import {
  AboutContent,
  Content,
  FooterContent,
  FunfactsContent,
  HeroContent,
  InnerHeroContent,
  LogosContent,
  MainMenuContent,
  MetadataContent,
  MilestonesHireContent,
  PricingFaqsContent,
  ServiceContent,
  ServicesContent,
  ShowcaseContent,
  StatsCapabilitiesContent,
  WorkflowContent,
} from "@/lib/definitions";
import { exec } from "child_process";

const apiUrl = process.env.NEXT_PUBLIC_CMS_URL + "/api";

export const regenerateSitemap = async () => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    exec("pnpm run postbuild", (error, stdout, stderr) => {
      if (error) {
        console.error(`Error regenerating sitemap: ${error}`);
      }
      console.log(`Sitemap regenerated: ${stdout}`);
    });
  } catch (error) {
    console.error(`Error regenerating sitemap: ${error}`);
  }
};

const getResources = async (slug: string, query = "") => {
  const url = `${apiUrl}/collections/${slug}/content${
    query ? "?s=" + query : ""
  }`;
  const res = await fetch(url);
  const data = await res.json();

  return data.data!.content.data;
};

const getResource = async (slug: string) => (await getResources(slug))[0];

const getContent = async (slug: string) =>
  (await getResource(slug)).values as Content;

const getMetadata = async (slug: string) => {
  let metadata = (await getResource(slug)).metadata as any;

  if (typeof metadata.structuredData === "string") {
    try {
      const data = JSON.parse(metadata.structuredData);
      metadata = Object.assign(metadata, data);
    } catch {}
  }

  return metadata as MetadataContent;
};

export const getMenuContent = async () => {
  const menuContent = (await getContent(
    "main-menu"
  )) as unknown as MainMenuContent;

  menuContent.links = menuContent.links.map((item) => {
    if (typeof item.children === "string") {
      try {
        item.children = JSON.parse(item.children);
      } catch {
        item.children = undefined;
      }
    }
    return item;
  });

  return menuContent;
};

export const getHeroContent = async () =>
  (await getContent("hero")) as unknown as HeroContent;

export const getLogosContent = async () =>
  (await getContent("logos")) as unknown as LogosContent;

export const getAboutContent = async () =>
  (await getContent("about")) as unknown as AboutContent;

export const getServicesContent = async () => {
  const servicesContent = (await getContent("services")) as any;
  servicesContent.items = servicesContent.items.map((item: any) => item.values);

  return servicesContent as ServicesContent;
};

export const getWorkflowContent = async () =>
  (await getContent("workflow")) as unknown as WorkflowContent;

export const getShowcaseContent = async () => {
  const showcaseContent = (await getContent("showcase")) as any;

  showcaseContent.testimonials = showcaseContent.testimonials.values;
  showcaseContent.testimonials.items = showcaseContent.testimonials.items.map(
    (item: any) => item.values
  );
  showcaseContent.portfolio = showcaseContent.portfolio.values;
  showcaseContent.portfolio.items = showcaseContent.portfolio.items.map(
    (item: any) => item.values
  );

  return showcaseContent as ShowcaseContent;
};

export const getPricingFaqsContent = async () => {
  const pricingFaqsContent = (await getContent("pricing-faqs")) as any;

  pricingFaqsContent.pricing = pricingFaqsContent.pricing.values;
  pricingFaqsContent.faqs = pricingFaqsContent.faqs.values;

  return pricingFaqsContent as PricingFaqsContent;
};

export const getFooterContent = async () =>
  (await getContent("footer")) as unknown as FooterContent;

export const getHomepageContent = async () => await getContent("homepage");

export const getHomepageMetadata = async () => await getMetadata("homepage");

// About Page

export const getInnerHeroContent = async (slug: string) => {
  const items = await getResources("hero-inner");

  return items.find((item: any) => item.values.slug === slug)
    .values as unknown as InnerHeroContent;
};

export const getStatsCapabilitiesContet = async () =>
  (await getContent(
    "stats-capabilities"
  )) as unknown as StatsCapabilitiesContent;

export const getMilestonesHiringContent = async () =>
  (await getContent("milestones-hire")) as unknown as MilestonesHireContent;

export const getAboutFunFactsContent = async () =>
  (await getContent("about-fun-facts")) as unknown as FunfactsContent;

export const getAboutPageContent = async () => await getContent("about-page");

export const getAboutPageMetadata = async () => await getMetadata("about-page");

export const getAllServicesSlug = async () => {
  const items = (await getResources("service-page")).map(
    (item: any) => item.values
  );

  return items.map((item: any) => ({ slug: item.slug.split("/").slice(2) }));
};

export const getServiceContent = async (slug: string) => {
  const items = await getResources("service-page", slug);

  const content = items.find((item: any) => item.values.slug === slug)
    .values as any;

  content.hero = content.hero.values;
  content.subservices = content.subservices.values;

  return content as ServiceContent;
};

export const getAllServicesUrls = async () => {
  const items = await getResources("service-page");

  return items.map((item: any) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}${item.values.slug}`,
    lastModified: item.updated_at,
    changeFrequency: "monthly",
  }));
}