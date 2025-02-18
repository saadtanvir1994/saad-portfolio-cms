"use server";

import { MainMenuResponse } from "./definitions";

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
  )) as unknown as MainMenuResponse;

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

export const getHomepageContent = async () => await getContent("homepage");
