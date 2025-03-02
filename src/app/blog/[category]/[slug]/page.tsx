import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { getAllBlogsSlug, getBlogBySlug } from "@/lib/actions";
import {
  getMediaUrl,
  getSchemasFromMetadata,
  populateMetadata,
} from "@/utils/all";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import "./styles.css";
import ContentOutline from "@/components/blog/content-outline";
import PageSchema from "@/components/schemas/page-schema";
import type { Metadata } from "next";

interface PageProps {
  category: string;
  slug: string;
}

export const generateStaticParams = async () => await getAllBlogsSlug();

export const generateMetadata = async ({
  params,
}: {
  params: Promise<PageProps>;
}): Promise<Metadata> => {
  const slug = (await params).slug;
  const metadata = (await getBlogBySlug(slug)).metadata;

  return populateMetadata(metadata, "article");
};

const BlogInnerPage = async ({ params }: { params: Promise<PageProps> }) => {
  const slug = (await params).slug;

  const blogPost = await getBlogBySlug(slug);
  const schemas = await getSchemasFromMetadata(blogPost.metadata);

  return (
    <>
      <section className="py-32 bg-white">
        <div className="container">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-5">
            <Badge variant="secondary">{blogPost.category.name}</Badge>
            <h1 className="text-pretty text-center text-3xl font-medium lg:text-5xl">
              {blogPost.title}
            </h1>
            <p className="text-center text-muted-foreground lg:text-lg">
              {blogPost.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Avatar>
                <AvatarImage
                  src={getMediaUrl(blogPost.author.avatar)}
                  alt={blogPost.author.avatar.caption}
                />
                <AvatarFallback>ST</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{blogPost.author.name}</p>
                <p className="text-sm text-muted-foreground">
                  Updated on{" "}
                  {new Date(blogPost.updated_at).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
          <div className="relative z-0 mx-auto mt-12 border aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
            <Image
              src={getMediaUrl(blogPost["cover-image"])}
              alt={blogPost["cover-image"].caption}
              loading="eager"
              fill
              sizes="100vw"
              className="object-cover p-2 lg:rounded-lg"
            />
          </div>
          <div className="relative mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-4">
            <div className="sticky top-12 hidden h-fit lg:block">
              <span className="mb-6 text-lg">Content</span>
              <nav className="mt-2">
                <ContentOutline />
              </nav>
            </div>
            <div className="lg:col-span-3">
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{
                  __html: blogPost.content,
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <PageSchema schemas={schemas} />
    </>
  );
};

export default BlogInnerPage;
