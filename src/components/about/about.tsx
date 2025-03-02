import Typography from "@/components/ui/typography";
import { getAboutSectionContent } from "@/lib/actions";
import ImageMarquee from "@/components/about/image-marquee";

const About = async () => {
  const content = await getAboutSectionContent();

  return (
    <section className="relative overflow-hidden bg-[var(--gray-25)] px-4 py-16 md:py-32">
      <div className="container relative mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="flex flex-col md:col-span-5">
            <div className="services-header flex flex-col md:col-span-5">
              <span className="mb-2 block text-base font-light uppercase tracking-wide text-[--text-tertiary]">
                {content.subtitle}
              </span>
              <Typography
                variant="display-2"
                className="mb-3 uppercase !text-[--text-primary] md:mb-6"
              >
                {content.title}
              </Typography>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="mx-auto mb-10 max-w-full md:mb-32 md:max-w-3xl md:pt-8">
              <Typography
                variant="h3"
                className="mb-6 !w-full !text-2xl font-medium capitalize !tracking-tight"
              >
                {content.headline}
              </Typography>

              {content.paragraphs.map((para, index) => (
                <Typography
                  variant="p"
                  className="text-[var(--text-tertiary)]"
                  key={index}
                >
                  {para}
                </Typography>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ImageMarquee images={content["marquee-images"]} />
    </section>
  );
};

export default About;
