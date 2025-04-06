import Typography from "@/components/ui/typography";
import { SubserviceComparison as SubserviceComparisonType } from "@/lib/definitions";
import { getMediaUrl } from "@/utils/all";
import {
  BadgeCheck,
  Minus
} from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";
import Image from "next/image";

const SubserviceComparison = ({
  content,
}: {
  content: SubserviceComparisonType;
}) => {
  const renderStatus = (status: string | boolean, value: string ) => {
    if (status === "true") {
      return (
        <div className="flex justify-center">
          <BadgeCheck size={24} className="stroke-1 text-green-500" />
        </div>
      );
    } else if (status === "partial") {
      return (
        <div className="flex flex-col items-center">
          <div className="flex justify-center">
            <Minus size={24} className="text-gray-400" />
          </div>
        </div>
      );
    } else if(status === "value"){
      return (
        <div className="flex justify-center">
          {value}
        </div>
      );
    }else{
      return (
        <div className="flex justify-center">
          <Minus size={24} className="text-gray-400" />
        </div>
      );
    }
  };

  return (
    <div className="overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 text-center md:mb-12">
        <div className="mb-6 grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="hidden md:col-span-2 md:block" />
          <div className="section-header flex flex-col justify-center text-center md:col-span-8">
            <span className="md:text-md mb-2 text-sm font-light uppercase tracking-widest text-[var(--text-tertiary)]">
              {content.subtitle}
            </span>
            <Typography
              variant="display-2"
              className="mx-auto mb-2 !w-full max-w-[80%] uppercase text-[var(--text-primary)]"
            >
              {content.title}
            </Typography>
            <Typography
              variant="p"
              className="text-base md:text-md lg:text-lg mb-4 md:max-w-[80%] text-[--text-tertiary] mx-auto"
            >
              {content.description}
            </Typography>
          </div>
          <div className="hidden md:col-span-2 md:block" />
        </div>
        </div>

        <div className="overflow-hidden rounded-xl bg-white shadow-md">
          {/* Table Header */}
          <div className="grid grid-cols-12 border-b bg-[var(--gray-50)]">
            <div className="col-span-6 flex items-center px-2 py-6 text-left md:p-6 md:px-6">
              <h3 className="text-sm font-semibold text-[var(--gray-800)] md:text-xl">
                {content["first-column-label"]}
              </h3>
            </div>
            <div className="col-span-3 text-wrap border-l px-2 py-6 text-center md:p-6">
              <h3 className="break-words text-sm font-bold text-[var(--gray-950)] md:text-xl">
                {content["second-column-label"]}
              </h3>
            </div>
            <div className="col-span-3 border-l px-2 py-6 text-center md:p-6">
              <Image
                src={getMediaUrl(content.avatar)}
                width={40}
                height={40}
                loading="lazy"
                alt="saad tanvir avatar"
                className="mx-auto"
              />
              <h3 className="break-words text-sm font-bold text-[var(--gray-950)] md:text-xl">
                {content["third-column-label"]}
              </h3>
            </div>
          </div>

          {/* Feature Rows */}
          {content.features.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-12 border-b last:border-b-0"
            >
              <div className="col-span-6 flex flex-col items-start gap-4 px-2 py-4 md:flex-row md:p-6">
                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-[var(--gray-50)]">
                  <DynamicIcon name={feature.icon} size={20} />
                </div>
                <div>
                  <h4 className="mb-1 font-medium text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
              <div className="col-span-3 flex items-center justify-center border-l px-2 py-3 md:p-6">
                {renderStatus(feature.others,feature.othertextvalue)}
              </div>
              <div className="col-span-3 flex items-center justify-center border-l bg-neutral-50 px-2 py-3 md:p-6">
                {renderStatus(feature.me,feature.mytextvalue)}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="mt-12 text-center">
          <button className="bg-orange-color rounded-full px-8 py-3 font-medium text-white transition-colors hover:bg-orange-600">
            Get in Touch
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default SubserviceComparison;
