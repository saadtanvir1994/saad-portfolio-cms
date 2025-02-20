import Typography from "@/components/ui/typography";
import PortfolioItems from "@/components/showcase/portfolio-items";
import { PortfolioContent } from "@/lib/definitions";

const PortfolioSection = ({ content }: { content: PortfolioContent }) => {
  return (
    <section className="dark relative w-full bg-[--gray-25]">
      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="services-header flex flex-col md:col-span-5">
            <span className="text-md dark mb-2 font-light uppercase tracking-widest text-[--text-tertiary]">
              {content.tagline}
            </span>
            <Typography
              variant="display-2"
              className="mb-3 uppercase !text-[--text-primary] md:mb-6"
            >
              {content.heading}
            </Typography>
            <Typography
              variant="p"
              className="w-[90%] text-[--text-secondary] sm:w-[70%] md:w-full"
            >
              {content.description}
            </Typography>
          </div>
          <div className="hidden md:col-span-7 md:block" />
        </div>

        <PortfolioItems projects={content.items} />
      </div>
    </section>
  );
};

export default PortfolioSection;
