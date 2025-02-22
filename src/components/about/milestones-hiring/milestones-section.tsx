import AnimatedCTAButton from "@/components/ui/animated-cta-button";
import Typography from "@/components/ui/typography";
import { MilestonesContent } from "@/lib/definitions";
import Image from "next/image";

const MilestonesSection = ({ content }: { content: MilestonesContent }) => {
  return (
    <section className="dark relative bg-[--gray-0] px-4 py-16">
      <div className="container mx-auto pb-10 md:pb-60">
        <div className="-m-4 flex flex-wrap">
          <div className="w-full p-4 md:w-1/2">
            <div className="flex flex-col md:col-span-6">
              <span className="md:text-md mb-4 text-sm font-light uppercase tracking-wider text-[var(--gray-500)]">
                {content.subtitle}
              </span>

              <Typography variant="h3" className="mb-4 max-w-lg uppercase">
                {content.title}
              </Typography>
              <Typography
                variant="p"
                className="mb-6 max-w-lg text-[var(--gray-700)]"
              >
                {content.paragraph}
              </Typography>
              <AnimatedCTAButton
                href={content["action-button"].href}
                ariaLabel={content["action-button"].label}
                text={content["action-button"].label}
                variant="light"
              />
            </div>
          </div>
          <div className="w-full p-4 md:w-1/2">
            <div className="flex flex-col gap-6 md:gap-12">
              {content.statistics.map((item, id) => (
                <div className="flex flex-col gap-4" key={id}>
                  <h2 className="text-center text-7xl leading-none tracking-tight text-[var(--orange-color)] md:text-[160px]">
                    {item.number}
                  </h2>
                  <p className="mx-auto max-w-xs text-center text-xl font-medium tracking-tight text-[var(--gray-600)]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -left-24 bottom-6">
        <Image
          src="/images/logo-shape.svg"
          alt="Logo Shape"
          width={200}
          height={200}
          className="animate-spin-slow2 origin-center"
        />
      </div>
    </section>
  );
};

export default MilestonesSection;
