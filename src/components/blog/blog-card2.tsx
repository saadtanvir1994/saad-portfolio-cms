import Link from "next/link";
import Image from "next/image";
import { BlogContent } from "@/lib/definitions";
import { getMediaUrl } from "@/utils/all";

const BlogCard2 = ({ blog }: { blog: BlogContent }) => {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="group relative isolate h-80 rounded-lg bg-gray-100"
    >
      <div className="z-10 flex h-full flex-col justify-between p-6">
        <p className="text-muted-foreground transition-colors duration-500 group-hover:text-background">
          {new Date(blog.updated_at).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
        <h2 className="line-clamp-2 text-xl font-medium transition-colors duration-500 group-hover:text-background">
          {blog.title}
        </h2>
      </div>
      <Image
        src={getMediaUrl(blog["cover-image"])}
        alt="image"
        className="ease-[cubic-bezier(0.77,0,0.175,1)] absolute inset-0 -z-10 size-full rounded-lg object-cover brightness-50 transition-all duration-500 [clip-path:inset(0_0_100%_0)] group-hover:[clip-path:inset(0_0_0%_0)]"
        height={320}
        width={220}
      />
    </Link>
  );
};

export default BlogCard2;
