import { getBlogsPageContent, getLatestBlogs } from "@/lib/actions";
import BlogCard3 from "./blog-card3";
import Typography from "../ui/typography";
import AnimatedCTAButton from "../ui/animated-cta-button";

const BlogSection = async () => {
  const content = await getBlogsPageContent();
  const blogPosts = await getLatestBlogs(2);

  return (
    <section className="overflow-hidden py-24 lg:py-32 bg-white">
      <div className="container flex flex-col gap-4 md:gap-8 lg:flex-row lg:gap-16">
        <div className="mb-0 md:mb-14 lg:min-w-[30%]">
          <span className="text-md dark mb-2 font-light uppercase tracking-widest text-[--text-tertiary]">
            {content.subtitle}
          </span>
          <Typography variant="display-2" className="mb-4">
            {content["title-alt"]}
          </Typography>
          <Typography variant="p" className="md:max-w-xs">
            {content["description-alt"]}
          </Typography>
          <AnimatedCTAButton 
            variant="light"
            href={content.button.href}
            ariaLabel={content.button.label}
          text={content.button.label}
          />
          
        </div>
        <div className="flex gap-0 flex-col w-full">
          {blogPosts.map((blog, index) => (
            <BlogCard3 blog={blog} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;