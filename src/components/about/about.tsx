import Typography from "@/components/ui/typography";
import { getAboutContent } from "@/lib/actions";
import ImageMarquee from "@/components/about/image-marquee";

const About = async () => {
  const aboutContent = await getAboutContent();

  return (
    <section className="relative overflow-hidden bg-zinc-50 px-4 py-16 md:py-32">
      <div className="container">
        <span className="md:text-md mb-4 text-sm font-light uppercase tracking-wider">
          {aboutContent.tagline}
        </span>
        <div className="-m-4 mb-20 flex flex-wrap">
          <div className="w-full p-4 lg:w-1/2">
            <Typography variant="display-2" className="mb-6 uppercase">
              {aboutContent.heading}
            </Typography>
          </div>
          <div className="w-full p-4 lg:w-1/2">
            <div className="w-full max-w-2xl">
              <p className="mb-4 text-lg font-medium tracking-tight text-[--text-primary]">
                {aboutContent.headline}
              </p>
              {aboutContent.paragraphs.map((item, index) => (
                <p key={index} className="mb-8 text-lg tracking-tight text-[var(--text-tertiary)]">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ImageMarquee images={aboutContent["marquee-images"]} />
    </section>
  );
};

export default About;
