import AnimatedCTAButton from "@/components/ui/animated-cta-button";
import TopRightCTA from "@/components/ui/top-cta";
import Typography from "@/components/ui/typography";
import { PricingContent } from "@/lib/definitions";
// import PricingItem from "@/components/home/pricing-faqs/pricing-item";
import { getContactSectionContent } from "@/lib/actions";
import DynamicPricingItems from "./dynamic-pricing-items";

const ContactSection = async () => {
  const content = await getContactSectionContent();

  return (
    <div className="mt-6 flex flex-wrap">
      <div className="h-full w-full transform rounded-3xl bg-white p-8 py-12 transition duration-500 hover:-translate-y-2">
        <div className="text-left">
          <div className="h-auto">
            <h3 className="mb-2 text-3xl font-medium capitalize tracking-tight">
              {content.title}
            </h3>
            <Typography variant="p" className="text-gray-500">
              {content.description}
            </Typography>
          </div>
          <div className="flex !max-w-[40%] gap-4 overflow-hidden">
            {content.buttons.map((item, index) => (
              <AnimatedCTAButton
                key={index}
                ariaLabel={item.label}
                href={item.href}
                text={item.label}
                variant={item.primary ? "simple" : "simpleoutlined"}
                external={item.external}
                className="my-6 w-full"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingSection = async ({ content }: { content: PricingContent }) => {
  return (
    <section className="dark overflow-hidden bg-[--gray-25] py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <TopRightCTA />
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="services-header flex flex-col md:col-span-5">
            <span className="text-md dark mb-2 font-light uppercase tracking-widest text-[--text-tertiary]">
              {content.tagline}
            </span>
            <Typography
              variant="display-2"
              className="mb-3 uppercase !text-[--text-primary] md:mb-6"
            >
              {content.text}
            </Typography>
            <Typography
              variant="p"
              className="w-[90%] text-[--text-secondary] sm:w-[70%] md:w-full"
            >
              {content.description}
            </Typography>
          </div>
          <div className="hidden md:col-span-7 md:block" />
        </div>
        {/* <div className="-m-3 mt-6 flex flex-wrap md:mt-12">
          {content.items.map((item, index) => (
            <PricingItem item={item} key={index} />
          ))}
        </div> */}
        <DynamicPricingItems itemIds={content["product-items"]} products={content["packages"]} />
        <ContactSection />
      </div>
    </section>
  );
};

export default PricingSection;
