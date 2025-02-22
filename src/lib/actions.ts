/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import {
  AboutContent,
  Content,
  FooterContent,
  HeroContent,
  LogosContent,
  MainMenuContent,
  MetadataContent,
  MilestonesHireContent,
  PricingFaqsContent,
  ServicesContent,
  ShowcaseContent,
  StatsCapabilitiesContent,
  WorkflowContent,
} from "@/lib/definitions";

const apiUrl = process.env.NEXT_PUBLIC_CMS_URL + "/api";

const getResource = async (slug: string) => {
  const url = `${apiUrl}/collections/${slug}/content`;
  const res = await fetch(url);
  const data = await res.json();

  return data.data!.content.data[0];
};

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

export const getStatsCapabilitiesContet = async () =>
  (await getContent(
    "stats-capabilities"
  )) as unknown as StatsCapabilitiesContent;

export const getMilestonesHiringContent = async () =>
  (await getContent("milestones-hire")) as unknown as MilestonesHireContent;
