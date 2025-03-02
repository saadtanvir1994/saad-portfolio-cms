import { Suspense } from "react";
import BlogItems from "@/components/blog/blog-items";
import BlogItemsSkeleton from "@/components/skeletons/blog-items-skeleton";

const BlogListPage = () => {
  return (
    <Suspense fallback={<BlogItemsSkeleton />}>
      <BlogItems />
    </Suspense>
  );
};

export default BlogListPage;
