import BlogsPageHeader from "@/components/blog/blogs-page-header";
import PageSchema from "@/components/schemas/page-schema";
import { getBlogsPageContent, getBlogsPageMetadata } from "@/lib/actions";
import { getSchemasFromMetadata, populateMetadata } from "@/utils/all";
import type { Metadata } from "next";
import React from "react";

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata = await getBlogsPageMetadata();

  return populateMetadata(metadata, "/blogs");
}

const BlogListLayout = async ({ children }: { children: React.ReactNode }) => {
  const content = await getBlogsPageContent();
  const schemas = await getSchemasFromMetadata(content.metadata!);

  return (
    <>
      <section className="bg-white py-32">
        <div className="container">
          <div className="relative mx-auto flex max-w-screen-xl flex-col gap-20 lg:flex-row">
            <BlogsPageHeader content={content} />
            {children}
          </div>
        </div>
      </section>
      <PageSchema schemas={schemas} />
    </>
  );
}

export default BlogListLayout;