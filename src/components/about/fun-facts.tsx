import { getAboutFunFactsContent } from "@/lib/actions";
import Typography from "@/components/ui/typography";
import Image from "next/image";
import { getMediaUrl } from "@/utils/all";

const bottomPos = ["bottom-4", "bottom-7", "bottom-14", "bottom-10", "bottom-7"];

const FunFacts = async () => {
  const content = await getAboutFunFactsContent();

  return (
    <section className="relative overflow-x-hidden bg-white px-8 py-32 md:px-24">
      <div className="container px-0">
        <div className="absolute right-4 top-8 h-40 w-40 animate-bounce mix-blend-exclusion md:bottom-4 md:left-4 md:top-auto md:h-56 md:w-56">
          <Image
            src="/images/shape-global.png"
            fill
            alt="freelancer working globally illustration"
            loading="lazy"
          />
        </div>

        <div className="flex flex-wrap md:-m-4">
          <div className="w-full md:w-1/3">
            <span className="mb-2 block text-base font-light uppercase tracking-wide text-[--text-tertiary]">
              {content.subtitle}
            </span>
            <Typography variant="h3" className="mb-4 max-w-lg uppercase">
              {content.title}
            </Typography>

            <p className="text-7xl leading-none tracking-tight text-[var(--orange-color)] md:text-[160px]">
              {content.number}
            </p>

            <Typography
              variant="p"
              className="my-6 max-w-lg text-[var(--text-tertiary)]"
            >
              {content["first-paragraph"]}
            </Typography>
          </div>
          <div className="w-full md:w-2/3">
            <div className="flex flex-col gap-1 md:flex-row">
              <div className="w-full md:w-1/3">
                <Typography
                  variant="p"
                  className="!mb-20 w-full text-[var(--text-tertiary)]"
                >
                  {content["second-paragraph"]}
                </Typography>
              </div>
              <div className="flex w-full flex-wrap justify-between gap-2 md:w-2/3 md:justify-center md:gap-3">
                {content.items.map((item, index) => (
                  <div key={index}>
                    <div className="relative mb-4 h-[460px] w-16 rounded-full bg-zinc-100 md:w-20">
                      <div className="absolute bottom-0 left-0 right-0">
                        <div
                          className="rounded-full bg-zinc-900"
                          style={{ height: item.height }}
                        >
                          <div
                            className={`absolute left-1/2 -translate-x-1/2 -rotate-90 transform whitespace-nowrap font-medium tracking-tight mix-blend-difference ${bottomPos[index]}`}
                          >
                            <div className="flex items-center gap-4">
                              <Image
                                src={getMediaUrl(item.image)}
                                width={48}
                                height={48}
                                alt={item.image.caption}
                                loading="lazy"
                                className="h-12 w-12 rounded-full border-xs border-gray-300 object-cover"
                              />
                              <span className="text-white">{item.label}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="block text-center text-2xl font-medium tracking-tight">
                      {item.number}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
