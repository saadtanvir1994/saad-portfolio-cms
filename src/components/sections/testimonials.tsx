import Typography from "@/components/typography";
import TestimonialsCarousel from "./blocks/testimonials-carousel";
import { TestimonialsContent } from "@/lib/definitions";

const TestimonialsSection = async ({
  content,
}: {
  content: TestimonialsContent;
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-[--gray-25]">
      <div className="container mx-auto h-full px-4 py-16 md:py-32">
        <Typography
          variant="display-2"
          className="mx-auto mb-16 text-center uppercase md:mb-24 md:!w-[25%]"
        >
          {content.title}
        </Typography>
        <TestimonialsCarousel testimonials={content.items} />
      </div>
    </section>
  );
};

export default TestimonialsSection;
