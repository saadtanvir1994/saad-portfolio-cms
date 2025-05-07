import { getMenuContent, getAllBlogsUrls, getAllBlogCategoriesUrl, getPageUrls } from "@/lib/actions";

const URL = process.env.NEXT_PUBLIC_SITE_URL;

export default async function sitemap() {
  const menuContent = await getMenuContent();

  const routes = menuContent.links.map(link => ({
    url: `${URL}${link.href}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 1,
  }));

  const services = await getPageUrls("service-page");
  const blogCategories = await getAllBlogCategoriesUrl();
  const blogs = await getAllBlogsUrls();
  const general = await getPageUrls("general-page");

  return [...routes, ...services, ...blogCategories, ...blogs, ...general];
}

export const revalidate = 10;