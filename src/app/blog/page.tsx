import { Separator } from "@/components/ui/separator";
import { FileText } from "lucide-react";
import { getAllCategories } from "@/lib/actions";
import CategoryLink from "@/components/blog/category-link";
import BlogItems from "@/components/blog/blog-items";

interface PageParams {
  category?: string;
}

const BlogPage = async ({ searchParams }: { searchParams: Promise<PageParams> }) => {
  const category = (await searchParams).category || "all";

  const categories = await getAllCategories();

  return (
    <section className="bg-white py-32">
      <div className="container">
        <div className="relative mx-auto flex max-w-screen-xl flex-col gap-20 lg:flex-row">
          <header className="top-20 flex h-fit flex-col items-center gap-5 text-center lg:sticky lg:max-w-80 lg:items-start lg:gap-8 lg:text-left">
            <FileText size={48} />
            <h1 className="text-4xl font-extrabold lg:text-5xl">Blog Posts</h1>
            <p className="text-muted-foreground lg:text-xl">
              Blog posts are a great way to share your knowledge and expertise
              with the world.
            </p>
            <Separator />
            <nav>
              <ul className="flex flex-wrap items-center justify-center gap-4 lg:flex-col lg:items-start lg:gap-2">
                {categories.map((cat) => (
                  <CategoryLink category={cat} key={cat.slug} />
                ))}
              </ul>
            </nav>
          </header>
          <BlogItems category={category} />
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
