import AnimatedCTAButton from "@/components/ui/animated-cta-button";
import Typography from "@/components/ui/typography";
import { PricingItemContent } from "@/lib/definitions";
import { Check } from "lucide-react";

const PricingItem = ({ item }: { item: PricingItemContent }) => {
  return (
    <div className="w-full p-3 md:w-1/2 lg:w-1/3">
      <div className="h-full transform rounded-3xl bg-white p-8 py-12 transition duration-500 hover:-translate-y-2">
        <div className="text-left">
          <div className="h-auto md:h-36">
            <h3 className="mb-2 text-3xl font-medium tracking-tight">
              {item.name}
            </h3>
            <Typography variant="p" className="!text-base text-gray-500">
              {item.description}
            </Typography>
          </div>
          <div className="flex items-baseline gap-2">
            <h4
              className={`mb-2 mt-4 text-center text-6xl tracking-tighter md:mt-8 md:text-left md:text-7xl ${
                !item.primary && "font-heading"
              }`}
            >
              {item.price}
            </h4>
            {item.frequency && (
              <span className="linear-gro !text-md">{item.frequency}</span>
            )}
          </div>
          <Typography variant="p" className="text-gray-500">
            {item["short-description"]}
          </Typography>

          <AnimatedCTAButton
            ariaLabel="Web design pricing"
            href="/"
            text="Start Today"
            variant={item.primary ? "simple" : "simpleoutlined"}
            className="my-6 w-full"
          />
          <h5 className="mt-8 text-xl font-semibold text-gray-950">
            What&apos;s Included
          </h5>
          <ul className="text-md pt-6 text-base text-gray-600">
            {item.features.map((feat, index) => (
              <li className="mb-2.5 flex flex-wrap items-center" key={index}>
                <Check className="mr-2 h-4 w-5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default PricingItem;
