import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { BlogContent } from "@/lib/definitions";
import { getMediaUrl } from "@/utils/all";
import Image from "next/image";
const BlogCard3 = ({ blog }: { blog: BlogContent }) => {
  return (
    <Link  href={`/blog/${blog.slug}`}  className="block border-t py-6 first:border-t-0 md:hover:bg-[var(--gray-50)] md:px-4 group duration-300 transition-all">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
          <div className="flex w-full h-full relative md:h-16 md:w-16 aspect-video md:aspect-auto items-center justify-center rounded-lg md:rounded-full overflow-hidden border-xs border-[var(--gray-100)]">
           <Image
                       src={getMediaUrl(blog["cover-image"])}
                       alt="alt"
                       className="object-cover object-center h-full w-full absolute t-0 left-0"
                       fill
                       loading="lazy"
                     />
          </div>
          
          <div className="mt-3 sm:mt-0">
            <div className="text-xs text-muted-foreground mt-1">
              {new Date(blog.updated_at).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })} • {blog["reading-time"]} min read
            </div>
          </div>
        </div>

        <h3 className="text-xl font-medium sm:max-w-md md:text-2xl">
          {blog.title}
        </h3>
        
        <div
          className="flex items-center justify-center rounded-full border border-border p-2 transition-colors hover:bg-muted group-hover:bg-[var(--orange-color)] group-hover:text-white w-16 h-16"
        >
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard3;
