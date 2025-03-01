import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getLatestBlogs } from "@/lib/actions";
import BlogCard1 from "./blog-card1";

const BlogSection = async () => {
  const blogPosts = await getLatestBlogs(2);

  return (
    <section className="overflow-hidden py-24 lg:py-32 bg-white">
      <div className="container flex flex-col gap-8 lg:flex-row lg:gap-16">
        <div className="mb-8 md:mb-14 lg:min-w-[30%]">
          <p className="text-wider mb-4 text-sm font-medium text-muted-foreground">
            Eyebrow
          </p>
          <h2 className="mb-4 w-full text-4xl font-medium md:mb-5 md:text-5xl lg:mb-6 lg:max-w-xs lg:text-6xl">
            Blog
          </h2>
          <p className="md:mb-5 lg:mb-6 lg:max-w-xs">
            Duis sem sem, gravida vel porttitor eu, volutpat ut arcu
          </p>
          <Link href="/blog">
            <Button>View all posts</Button>
          </Link>
        </div>
        <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-6 lg:gap-y-12">
          {blogPosts.map((blog, index) => (
            <BlogCard1 blog={blog} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;