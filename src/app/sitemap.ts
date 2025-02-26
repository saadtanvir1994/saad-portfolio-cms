import { getMenuContent, getAllServicesUrls } from "@/lib/actions";

const URL = process.env.NEXT_PUBLIC_SITE_URL;

export default async function sitemap() {
  const menuContent = await getMenuContent();

  const routes = menuContent.links.map(link => ({
    url: `${URL}${link.href}`,
    lastModified: new Date().toISOString(),
    frequency: "monthly",
    priority: 1,
  }));

  const services = await getAllServicesUrls();

  return [...routes, ...services];
}

export const revalidate = 10;