import { ContentSectionType } from "@/lib/definitions";
import Typography from "@/components/ui/typography";

const ContentSection = ({ title, content }: ContentSectionType) => {
  return (
    <div className="py-8 bg-[var(--gray-0)] text-[var(--text-primary)] px-16">
      <Typography
        variant="display-2"
        className="mx-auto mb-2 !w-full text-center uppercase text-[var(--text-primary)]"
      >
        {title}
      </Typography>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default ContentSection;