import { FeaturesSectionType } from "@/lib/definitions";
import Typography from "@/components/ui/typography";

const FeaturesSection = ({ subtitle, title, list }: FeaturesSectionType) => {
  return (
    <div className="py-8 bg-[var(--gray-0)] text-[var(--text-primary)] px-16">
      <span className="block md:text-md mb-2 text-sm font-light text-center uppercase tracking-widest text-[var(--text-tertiary)]">
        {subtitle}
      </span>
      <Typography
        variant="display-2"
        className="mx-auto mb-2 !w-full text-center uppercase text-[var(--text-primary)]"
      >
        {title}
      </Typography>
      <ul className="mx-auto">
        {list.map((i, id) => (
          <li className="text-center text-base" key={id}>{i}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturesSection;
