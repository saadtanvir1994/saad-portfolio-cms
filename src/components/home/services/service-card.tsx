import Typography from "@/components/ui/typography";
import AnimatedCTAButton from "@/components/ui/animated-cta-button";
import { DynamicIcon } from "lucide-react/dynamic";
import { ServiceItem } from "@/lib/definitions";
import ServiceCardWrapper from "@/components/home/services/service-card-wrapper";
import { getMediaUrl } from "@/utils/all";
import Image from "next/image";
const ServiceCard = ({
  item,
  index,
}: {
  item: ServiceItem;
  index: number;
}) => {
  return (
    <ServiceCardWrapper index={index}>
      {/* Front side */}
      <div className="front-side flex h-full flex-col justify-between">
        <div className="d-block relative z-20 mb-8 h-16 w-16 scale-100 transition duration-300 ease-in-out group-hover/item:scale-90 mix-blend-exclusion">
       {getMediaUrl(item["icon-image"]) ? (
          <Image
          src={getMediaUrl(item["icon-image"])}
          alt={item["icon-image"].caption || ''}
          width={46}
          height={46}
          />
        ) 
        :  (
<DynamicIcon
            size={46}
            name={item.icon}
            style={{ color: item["icon-color"] }}
          />
        )}          
        </div>

        <Typography
          variant="h2"
          className="mt-32 w-[70%] uppercase !text-white transition group-hover/item:-translate-y-8 md:mt-auto md:max-w-[30%]"
        >
          {item.title}
        </Typography>

        <Typography
          variant="p"
          className="mt-2 block !text-[--text-tertiary] transition group-hover/item:-translate-y-8 md:mt-3 2xl:hidden"
        >
          {item.description}
        </Typography>

        <div className="flex flex-wrap gap-2 pb-12 md:my-4">
          {item["sub-services"].map((service, i) => (
            <span
              key={i}
              className="font-nortica rounded-full border border-[--gray-100] px-3 py-1 text-sm uppercase tracking-wide text-slate-50"
            >
              {service}
            </span>
          ))}
        </div>
        <div className="block 2xl:hidden">
          <AnimatedCTAButton
            ariaLabel={`View ${item.title}`}
            href={item.href}
            text="View Service"
            variant="icon-only"
          />
        </div>
      </div>

      {/* Back side */}
      <div
        className={`absolute inset-0 z-10 bg-gradient-to-br 2xl:flex dark flex h-full w-full translate-y-full flex-col justify-end rounded-lg bg-gray-100 p-4 transition-transform delay-100 duration-700 ease-in-out group-hover/item:translate-y-0`}
      >
        <Typography variant="p" className="dark !text-[--text-dtertiary]">
          {item.description}
        </Typography>
        <AnimatedCTAButton
          ariaLabel={`View ${item.title}`}
          href={item.href}
          text="View Service"
          variant="icon-only"
        />
      </div>
      {/* </div> */}
    </ServiceCardWrapper>
  );
};

export default ServiceCard;
