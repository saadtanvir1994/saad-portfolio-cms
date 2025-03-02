import { Suspense } from "react";
import BlogItems from "@/components/blog/blog-items";
import BlogItemsSkeleton from "@/components/skeletons/blog-items-skeleton";
import { getAllCategories } from "@/lib/actions";

interface PageProps {
  category: string;
}

export const generateStaticParams = async () => {
  const categories = await getAllCategories();

  return categories.map(category => ({ category: category.slug }));
}

const BlogCategoryPage = async ({ params }: { params: Promise<PageProps> }) => {
  const category = (await params).category;
  return (
    <Suspense fallback={<BlogItemsSkeleton />}>
      <BlogItems category={category} />
    </Suspense>
  )
}

export default BlogCategoryPage;