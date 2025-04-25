import type { Metadata } from "next";
import { populateMetadata } from "@/utils/all";
import { getGeneralPageContent, getGeneralPageMetadata } from "@/lib/actions";
import DynamicZoneManager from "@/components/dynamic-zone-manager";

interface PageProps {
  slug: string[]
};

export const generateMetadata = async ({ params }: { params: Promise<PageProps> }): Promise<Metadata> => {
  const slug = (await params).slug;
  const joinedSlug = `/${slug.join("/")}`;

  const metadata = await getGeneralPageMetadata(joinedSlug);

  return populateMetadata(metadata, joinedSlug);
};

const Page = async ({ params }: { params: Promise<PageProps> }) => {
  const slug = (await params).slug;
  const joinedSlug = `/${slug.join("/")}`;

  const content = await getGeneralPageContent(joinedSlug);

  return (
    <div>
      <DynamicZoneManager content={content} />
    </div>
  )
}

export default Page;