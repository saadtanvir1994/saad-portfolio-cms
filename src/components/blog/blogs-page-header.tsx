import { Separator } from "@/components/ui/separator";
import { FileText } from "lucide-react";
import CategoryList from "@/components/blog/category-list";
import { BlogsPageContent } from "@/lib/definitions";

const BlogsPageHeader = ({ content }: { content: BlogsPageContent }) => {
  return (
    <header className="top-20 flex h-fit flex-col items-center gap-5 text-center lg:sticky lg:max-w-80 lg:items-start lg:gap-8 lg:text-left">
      <FileText size={48} />
      <h1 className="text-4xl font-extrabold lg:text-5xl">{content.title}</h1>
      <p className="text-muted-foreground lg:text-xl">
        {content.description}
      </p>
      <Separator />
      <CategoryList />
    </header>
  );
};

export default BlogsPageHeader;
