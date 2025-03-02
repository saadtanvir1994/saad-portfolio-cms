/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import {
  AboutContent,
  BlogCategory,
  BlogContent,
  BlogsPageContent,
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
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

const apiUrl = process.env.NEXT_PUBLIC_CMS_URL + "/api";

const getResources = async (slug: string, ...params: string[]) => {
  const url = `${apiUrl}/collections/${slug}/content${
    params ? "?" + params.join("&") : ""
  }`;
  const res = await fetch(url);
  const data = await res.json();

  return data.data!.content.data;
};

const getResource = async (slug: string, ...params: string[]) =>
  (await getResources(slug, ...params))[0];

const getContent = async (slug: string, setMetadata: boolean = false) => {
  const resource = await getResource(slug);
  const content = resource.values;

  if (setMetadata) {
    content.metadata = resource.metadata;
  }

  return content as Content;
}

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

export const revalidatePage = async (
  path: string,
  type?: "layout" | "page"
) => {
  revalidatePath(path, type);
  return NextResponse.json({
    message: "Cache revalided successully!",
  });
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
  const items = await getResources("service-page", `s=${slug}`);

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
};

// Blogs

export const getBlogsPageContent = async () =>
  (await getContent("blogs-page", true)) as BlogsPageContent;

export const getBlogsPageMetadata = async () => await getMetadata("blogs-page");

const transformBlogItem = (item: any) => {
  const properties = ["created_at", "updated_at", "published_at"];
  const propertiesObj = properties.reduce(
    (obj, prop) => ({ ...obj, [prop]: item[prop] }),
    {}
  );

  const metadata = item.metadata;
  item = item.values;
  item.author = item?.author?.values;
  item.categories = item.categories.map((category: any) => category.values);
  item.metadata = metadata;

  return Object.assign(item, propertiesObj) as BlogContent;
};

export const getLatestBlogs = async (amount: number = 2) => {
  const blogItems = await getResources("blog", `offset=${amount}`);

  return blogItems.map(transformBlogItem) as BlogContent[];
};

export const getAllBlogs = async (category: string = "all") => {
  const blogItems = await getResources(
    "blog",
    category !== "all" ? `whereRelation[categories][slug]=${category}` : ""
  );

  return blogItems.map(transformBlogItem) as BlogContent[];
};

export const getAllCategories = async () => {
  const categories = await getResources("blog-category");

  return [
    { name: "All", slug: "all" },
    ...categories.map((cat: any) => cat.values),
  ] as BlogCategory[];
};

export const getBlogBySlug = async (slug: string) => {
  const blog = await getResource("blog", `where[slug]=${slug}`);

  return transformBlogItem(blog);
};

export const getAllBlogsSlug = async () => {
  const blogs = await getResources("blog", "offset=1000");
  const transformedItems = blogs.map(transformBlogItem) as BlogContent[];

  return transformedItems.map((item) => ({ slug: item.slug }));
};
