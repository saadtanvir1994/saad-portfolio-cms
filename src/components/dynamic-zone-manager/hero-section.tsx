import { HeroSectionType } from "@/lib/definitions";
import Typography from "@/components/ui/typography";

const HeroSection = ({ subtitle, title, description }: HeroSectionType) => {
  return (
    <div className="py-8 dark bg-[var(--gray-0)] text-[var(--text-primary)] px-16">
      <span className="block md:text-md mb-2 text-sm font-light text-center uppercase tracking-widest text-[var(--text-tertiary)]">
        {subtitle}
      </span>
      <Typography
        variant="display-2"
        className="mx-auto mb-2 !w-full text-center uppercase text-[var(--text-primary)]"
      >
        {title}
      </Typography>
      <Typography
        variant="p"
        className="text-base md:text-md lg:text-lg mb-4 md:max-w-[80%] text-[--text-tertiary] text-center mx-auto"
      >
        {description}
      </Typography>
    </div>
  );
};

export default HeroSection;
