import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BlogContent } from "@/lib/definitions";
import { getMediaUrl } from "@/utils/all";

const BlogCard1 = ({ blog }: { blog: BlogContent }) => {
  return (
    <Link
      key={blog.title}
      href={`/blog/${blog.category.slug}/${blog.slug}`}
      className="group flex flex-col"
    >
      <div className="mb-4 flex overflow-clip rounded-xl md:mb-5 border h-[300px] w-[400px]">
        <div className="transition duration-300 group-hover:scale-105 h-full w-full">
          <Image
            src={getMediaUrl(blog["cover-image"])}
            alt="alt"
            className="aspect-[3/2] object-cover object-center h-full w-full"
            height={400}
            width={300}
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex w-fit items-center rounded-full border border-border p-1">
        <Badge className="hover:bg-primary">{blog.category.name}</Badge>
        <div className="mx-2 text-xs font-medium">
          {blog["reading-time"]} min read
        </div>
      </div>
      <div className="mb-2 flex items-start gap-4 pt-4 md:mb-3 md:pt-4 lg:pt-4">
        <span className="line-clamp-3 flex-1 break-words text-lg font-medium md:text-2xl lg:text-2xl xl:text-3xl">
          {blog.title}
        </span>
        <ArrowUpRight />
      </div>
      <div className="mb-4 line-clamp-2 text-sm text-muted-foreground md:mb-5 md:text-base">
        {blog.excerpt}
      </div>
      <div className="flex items-center gap-2">
        <Avatar className="size-12">
          <AvatarImage
            src={getMediaUrl(blog.author.avatar)}
            alt={blog.author.avatar.caption}
            className="aspect-square size-full"
          />
          <AvatarFallback>ST</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-px">
          <span className="text-xs font-medium">{blog.author.name}</span>
          <span className="text-xs text-muted-foreground">
            {new Date(blog.updated_at).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard1;
