import BlogItems from "@/components/blog/blog-items";
import BlogsPageHeader from "@/components/blog/blogs-page-header";
import PageSchema from "@/components/schemas/page-schema";
import BlogItemsSkeleton from "@/components/skeletons/blog-items-skeleton";
import { getBlogsPageContent, getBlogsPageMetadata } from "@/lib/actions";
import { getSchemasFromMetadata, populateMetadata } from "@/utils/all";
import type { Metadata } from "next";
import { Suspense } from "react";

interface PageParams {
  category?: string;
}

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata = await getBlogsPageMetadata();

  return populateMetadata(metadata);
}

const BlogsPage = async ({ searchParams }: { searchParams: Promise<PageParams> }) => {
  const category = (await searchParams).category || "all";
  const content = await getBlogsPageContent();
  const schemas = await getSchemasFromMetadata(content.metadata!);

  return (
    <>
      <section className="bg-white py-32">
        <div className="container">
          <div className="relative mx-auto flex max-w-screen-xl flex-col gap-20 lg:flex-row">
            <BlogsPageHeader content={content} />
            <Suspense fallback={<BlogItemsSkeleton />}>
              <BlogItems category={category} />
            </Suspense>
          </div>
        </div>
      </section>
      <PageSchema schemas={schemas} />
    </>
  );
};

export default BlogsPage;
