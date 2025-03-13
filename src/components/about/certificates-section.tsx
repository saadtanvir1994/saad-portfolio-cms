import { getCertificatesContent } from "@/lib/actions";
import Typography from "@/components/ui/typography";
import { BadgeCheckIcon } from "lucide-react";
import Image from "next/image";
import { getMediaUrl } from "@/utils/all";
import AnimatedCTAButton from "@/components/ui/animated-cta-button";

const CertificatesSection = async () => {
  const content = await getCertificatesContent();

  return (
    <section className="overflow-hidden bg-[--gray-25] px-4 py-16 md:py-32">
      <div className="container px-0">
        <div className="mx-auto lg:max-w-4xl">
          <div className="mb-20 text-center">
            <span className="mb-2 block text-base font-light uppercase tracking-wide text-[--text-tertiary]">
              {content.subtitle}
            </span>
            <h2 className="mb-6 text-5xl font-bold uppercase sm:text-6xl">
              {content.title}
            </h2>
            <Typography
              variant="p"
              className="mx-auto mb-6 max-w-sm px-4 text-[var(--gray-700)] md:max-w-lg"
            >
              {content.description}
            </Typography>
          </div>

          {/* Mobile View (Single Column Cards) */}
          <div className="flex flex-col gap-6 md:hidden">
            {content.items.map((cert, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="bg-gradient-gray p-6">
                  <div className="mb-4 flex items-center">
                    <BadgeCheckIcon className="mr-2 h-6 w-6 text-orange-500" />
                    <p className="text-lg font-semibold text-gray-900">
                      {cert.subtitle}
                    </p>
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                    {cert.title} <br />
                    <span className="text-base text-zinc-500">
                      <span className="text-zinc-700">by</span> {cert["awarded-by"]}
                    </span>
                  </h3>

                  <div className="relative mb-4 mt-6 aspect-square w-full rounded-xl bg-gradient-orange p-4">
                    <div className="relative h-full w-full">
                      <Image
                        className="transform transition duration-500 ease-in-out hover:scale-105"
                        fill
                        src={getMediaUrl(cert.image)}
                        alt={cert.image.caption}
                        loading="eager"
                      />
                    </div>
                    <div className="absolute bottom-4 right-4 z-30">
                      <AnimatedCTAButton
                        variant="icon-only"
                        ariaLabel="View Course"
                        className="bg-zinc-950"
                        href={cert.url}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View (Two Column Layout) */}
          <div className="hidden md:-m-3 md:flex md:flex-wrap">
            {content.items.map((cert, index) => (
              <div
                key={index}
                className={`mb-4 flex w-full flex-wrap rounded-xl bg-gradient-gray ${
                  index % 2 !== 0 ? "flex-row-reverse" : ""
                }`}
              >
                <div className="w-full p-3 md:w-1/2">
                  <div className="h-full p-10">
                    <div className="mb-32 flex flex-wrap items-center">
                      <div className="w-auto p-2">
                        <BadgeCheckIcon className="h-6 w-6 text-orange-500" />
                      </div>
                      <div className="w-auto p-2">
                        <p className="text-lg font-semibold text-gray-900">
                          {cert.subtitle}
                        </p>
                      </div>
                    </div>
                    <h3 className="text-3xl font-semibold text-gray-900">
                      {cert.title} <br />
                      <span className="text-lg text-zinc-500">
                        <span className="text-zinc-700">by</span> {cert["awarded-by"]}
                      </span>
                    </h3>
                  </div>
                </div>
                <div className="w-full p-3 md:w-1/2">
                  <div className="relative h-full rounded-2xl bg-gradient-orange p-8">
                    <div className="absolute bottom-4 right-4 z-30">
                      <AnimatedCTAButton
                        variant="icon-only"
                        ariaLabel="View Course"
                        className="bg-zinc-950"
                        href={cert.url}
                      />
                    </div>
                    <div className="relative top-0 mx-auto aspect-square">
                      <Image
                        className="transform transition duration-500 ease-in-out hover:scale-110"
                        fill
                        src={getMediaUrl(cert.image)}
                        alt={cert.image.caption}
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 text-center">
          <AnimatedCTAButton
            variant="dark"
            className="bg-zinc-950"
            ariaLabel={content["action-button"].label}
            text={content["action-button"].label}
            href={content["action-button"].href}
          />
        </div>
      </div>
    </section>
  );
};
export default CertificatesSection;
