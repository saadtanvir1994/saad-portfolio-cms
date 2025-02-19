/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import {
  AboutContent,
  FooterContent,
  HeroContent,
  LogosContent,
  MainMenuContent,
  ServicesContent,
  WorkflowContent,
} from "@/lib/definitions";

const apiUrl = process.env.NEXT_PUBLIC_CMS_URL + "/api";

const getContent = async (slug: string) => {
  const url = `${apiUrl}/collections/${slug}/content`;
  const res = await fetch(url);
  const data = await res.json();

  return data.data!.content.data[0]!.values as Response;
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

export const getFooterContent = async () =>
  (await getContent("footer")) as unknown as FooterContent;

export const getHomepageContent = async () => await getContent("homepage");
