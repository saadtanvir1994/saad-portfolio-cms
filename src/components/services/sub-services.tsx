import { SubserviceItem, SubservicesContent } from "@/lib/definitions";
import { DynamicIcon } from "lucide-react/dynamic";
import Typography from "@/components/ui/typography";

const SubServices = ({ content }: { content: SubservicesContent }) => {
  // Dividing services into columns
  const services = content.subservices;

  const firstColumn = [services[0]];
  const secondColumn = services.slice(1, 3);
  const thirdColumn = services.slice(3, 6);
  const fourthColumn = services.slice(6, 10);

  const ServiceCard = ({
    service,
  }: {
    service: SubserviceItem;
    index: number;
  }) => (
    <div className="group relative flex aspect-[3/5] w-full flex-col items-center justify-between overflow-hidden rounded-full border border-[var(--gray-600)] px-8 py-8 text-center transition-transform duration-300 hover:-translate-y-1 md:aspect-[2/4] lg:aspect-[3/5] lg:px-12 lg:py-16">
      <div className="mb-4 inline-block p-3 text-[var(--gray-400)]">
        <DynamicIcon name={service["icon-name"]} className="h-6 w-6" />
      </div>
      <h3 className="mb-2 mt-auto max-w-28 text-lg font-semibold capitalize text-[var(--gray-500)]">
        {service.title}
      </h3>
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-black/60 opacity-0 backdrop-blur-sm transition-all duration-700 group-hover:visible group-hover:opacity-100">
        <p className="px-4 py-6 text-sm text-[var(--gray-700)]">
          {service.description}
        </p>
      </div>
    </div>
  );

  return (
    <section className="dark py-16 pb-32">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="mb-12">
            <span className="md:text-md mb-2 text-sm font-light uppercase tracking-widest text-[var(--text-tertiary)]">
              {content.subtitle || "Our Offering"}
            </span>
            <Typography
              variant="display-2"
              className="mb-2 !w-full uppercase text-[var(--text-primary)]"
            >
              {content.title}
            </Typography>
            <Typography variant="p" className="text-[var(--gray-500)]">
              {content.description}
            </Typography>
          </div>
        </div>

        <div className="ml-auto mr-0 max-w-6xl">
          <div className="grid grid-cols-2 gap-4 md:flex md:gap-0 lg:gap-4">
            {/* First Column - One Element with More Padding */}
            <div className="flex md:w-1/4 md:items-center md:justify-center md:px-2 lg:px-8">
              {firstColumn.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>

            {/* Second Column - Three Elements */}
            <div className="flex flex-col gap-4 md:w-1/4 md:justify-center md:px-2 lg:px-4">
              {secondColumn.map((service, index) => (
                <ServiceCard key={index + 1} service={service} index={index} />
              ))}
            </div>

            {/* Third Column - Three Elements */}
            <div className="flex flex-col gap-4 md:w-1/4 md:justify-center md:px-2 xl:px-6">
              {thirdColumn.map((service, index) => (
                <ServiceCard key={index + 3} service={service} index={index} />
              ))}
            </div>

            {/* Fourth Column - Three Elements */}
            <div className="flex flex-col gap-4 md:w-1/4 md:justify-center md:px-2">
              {fourthColumn.map((service, index) => (
                <ServiceCard key={index + 7} service={service} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubServices;
