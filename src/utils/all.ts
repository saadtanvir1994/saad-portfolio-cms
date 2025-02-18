import { MediaResponse } from "@/lib/definitions";

export const getMediaUrl = (media: MediaResponse) => {
  if (media.cloud_storage) return media.url;

  return process.env.NEXT_PUBLIC_CMS_URL + "/storage/" + media.url;
};
