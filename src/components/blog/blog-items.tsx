import { getAllBlogs } from "@/lib/actions";
import BlogCard2 from "./blog-card2";

const BlogItems = async ({ category }: { category?: string }) => {
  const blogPosts = await getAllBlogs(category);

  return (
    <>
      {blogPosts.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {blogPosts.map((blog, index) => (
            <BlogCard2 blog={blog} key={index} />
          ))}
        </div>
      ) : (
        <div className="text-center w-full text-muted-foreground">No Posts Found</div>
      )}
    </>
  );
};

export default BlogItems;
