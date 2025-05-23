/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import {
  IntroductionContent,
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
  MilestonesComparisonContent,
  PricingFaqsContent,
  ServiceContent,
  ServicesContent,
  ShowcaseContent,
  StatsCapabilitiesContent,
  WorkflowContent,
  AboutSectionContent,
  TestimonialContent,
  CertificatesContent,
  ContactSection,
} from "@/lib/definitions";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

const apiUrl = process.env.NEXT_PUBLIC_CMS_URL + "/api";

export const checkoutToStripe = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const unit_amount = Number(formData.get("unit_amount"));
  const currency = formData.get("currency") as string;
  const recurring = formData.get("recurring") === "true";
  const interval = formData.get("interval") as string;

  const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL + "/api/checkout-sessions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, description, unit_amount, currency, recurring, interval, }),
  });

  const { url } = await response.json();
  if (url) {
    redirect(url);
  }
}

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
};

const getMetadata = async (slug: string, ...params: string[]) => {
  let metadata = (await getResource(slug, ...params)).metadata as any;

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

export const getIntroductionContent = async () =>
  (await getContent("introduction")) as unknown as IntroductionContent;

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
  const item = await getResource("hero-inner", `where[slug]=${slug}`);

  return item.values as unknown as InnerHeroContent;
};

export const getAboutSectionContent = async () =>
  (await getContent("about-section")) as unknown as AboutSectionContent;

export const getStatsCapabilitiesContet = async () =>
  (await getContent(
    "stats-capabilities"
  )) as unknown as StatsCapabilitiesContent;

export const getMilestonesComparisonContent = async () =>
  (await getContent(
    "milestones-comparison"
  )) as unknown as MilestonesComparisonContent;

export const getAboutPageReviews = async () => {
  const content: any = await getContent("about-page-reviews-section");

  return content.items.map((item: any) => item.values) as TestimonialContent[];
};

export const getCertificatesContent = async () =>
  (await getContent("certificates-section")) as unknown as CertificatesContent;

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

  const item = items.find((item: any) => item.values.slug === slug) as any;

  if (!item) return null;

  const content = item.values;
  content.metadata = item.metadata;

  const sections = [
    "hero",
    "subservices",
    "subservice-tabs",
    "subservice-stats",
    "subservice-pricing",
    "subservice-problem",
    "subservice-content",
    "subservice-approach",
    "subservice-comparison",
    "subservice-faqs",
  ];

  sections.map((section) => {
    if (content[section]) content[section] = content[section].values;
  });

  return content as ServiceContent;
};

export const getPageUrls = async (pageSlug: string) => {
  const items = await getResources(pageSlug);

  return items.map((item: any) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}${item.values.slug}`,
    lastModified: item.updated_at,
    changeFrequency: "monthly",
  }));
};

export const getAllServicesUrls = async () => {
  const items = await getResources("service-page");

  return items.map((item: any) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}${item.values.slug}`,
    lastModified: item.updated_at,
    changeFrequency: "monthly",
  }));
};

export const getServiceMetadata = async (slug: string) => {
  const items = await getResources("service-page", `s=${slug}`);

  const item = items.find((item: any) => item.values.slug === slug) as any;

  return item.metadata as MetadataContent;
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
  item.category = item.category.values;
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
    category !== "all" ? `whereRelation[category][slug]=${category}` : ""
  );

  return blogItems.map(transformBlogItem) as BlogContent[];
};

export const getAllCategories = async () => {
  const categories = await getResources("blog-category");

  return [
    { name: "All", slug: "" },
    ...categories.map((cat: any) => cat.values),
  ] as BlogCategory[];
};

export const getAllCategoriesSlug = async () => {
  const categories = await getResources("blog-category");

  return categories.map((cat: any) => ({ category: cat.values.slug }));
};

export const getBlogBySlug = async (slug: string) => {
  const blog = await getResource("blog", `where[slug]=${slug}`);

  return transformBlogItem(blog);
};

export const getAllBlogsSlug = async () => {
  const blogs = await getResources("blog", "offset=1000");
  const transformedItems = blogs.map(transformBlogItem) as BlogContent[];

  return transformedItems.map((item) => ({
    category: item.category.name,
    slug: item.slug,
  }));
};

export const getAllBlogCategoriesUrl = async () => {
  const items = await getResources("blog-category");

  return items.map((item: any) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${item.values.slug}`,
    lastModified: item.updated_at,
    changeFrequency: "monthly",
  }));
};

export const getAllBlogsUrls = async () => {
  const items = await getResources("blog");

  return items.map((item: any) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${item.values.slug}`,
    lastModified: item.updated_at,
    changeFrequency: "monthly",
  }));
};

export const getContactSectionContent = async () =>
  (await getContent("contact-section")) as unknown as ContactSection;

export const getGeneralPageMetadata = async (slug: string) =>
  await getMetadata("general-page", `where[slug]=${slug}`);

export const getGeneralPageContent = async (slug: string) => {
  const content = await getResource("general-page", `where[slug]=${slug}`);
  const contentValues = content.values;

  return contentValues;
};