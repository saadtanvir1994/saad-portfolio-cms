import SimpleCta from "@/components/ui/simple-cta";
import Typography from "@/components/ui/typography";
import { CapabilitiesContent } from "@/lib/definitions";

const Capabilities = ({ content }: { content: CapabilitiesContent }) => {
  return (
    <section className="relative overflow-hidden bg-zinc-50 px-4 py-16 md:py-32">
      <div className="container">
        <div className="-m-4 mb-10 flex flex-wrap items-end md:mb-20">
          <div className="w-full p-4 md:w-1/2">
            <div className="flex flex-col md:col-span-6">
              <span className="md:text-md mb-4 text-sm font-light uppercase tracking-wider">
                {content.subtitle}
              </span>

              <Typography
                variant="display-2"
                className="mb-6 !w-[100%] uppercase"
              >
                {content.title.split(" ").map((word, index) =>
                  index === 0 ? (
                    word + " "
                  ) : index === 1 ? (
                    <>
                      <br />
                      {word + " "}
                    </>
                  ) : (
                    word + " "
                  )
                )}
              </Typography>
            </div>
          </div>
          <div className="w-full p-4 md:w-1/2">
            <p className="mb-6 text-lg tracking-tight text-[var(--text-tertiary)]">
              {content.paragraph}
            </p>
          </div>
        </div>
        <div className="-m-4 flex flex-wrap">
          {content.services.map((service, index) => (
            <div className="w-full p-4 sm:w-1/2 lg:w-1/4" key={index}>
              <p className="mb-8 font-semibold tracking-tight text-[var(--gray-900)]">
                {service.service}
              </p>
              <ul className="flex flex-col gap-4">
                {service.items.map((item, index) => (
                  <li key={index}>
                    <SimpleCta name={item.label} href={item.url} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
