import HeroSectionInner from "@/components/shared/hero-inner";
import { getAllServicesSlug, getServiceContent, getServiceMetadata } from "@/lib/actions";
import { notFound } from "next/navigation";
import SubServices from "@/components/services/sub-services";
import SubserviceTabs from "@/components/services/subservice-tabs";
import SubserviceStats from "@/components/services/subservice-stats";
import SubservicePricing from "@/components/services/subservice-pricing";
import SubserviceProblem from "@/components/services/subservice-problem";
import SubserviceContent from "@/components/services/subservice-content";
import SubserviceApproach from "@/components/services/subservice-approach";
import SubserviceComparison from "@/components/services/subservice-comparison";
import ContactBlock from "@/components/shared/contact-block";
import FaqSection from "@/components/home/pricing-faqs/faq-section";
import PageSchema from "@/components/schemas/page-schema";
import { getSchemasFromMetadata, populateMetadata } from "@/utils/all";
import type { Metadata } from "next";

export const generateStaticParams = async () => await getAllServicesSlug();

export const generateMetadata = async ({
  params,
}: {
  params:  Promise<{ slug: string[] }>
}): Promise<Metadata> => {
  const slug = (await params).slug;
  const metadata = await getServiceMetadata(`/services/${slug.join("/")}`);

  return populateMetadata(metadata, "website");
};

const ServicePage = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const slug = (await params).slug;
  const content = await getServiceContent(`/services/${slug.join("/")}`);

  if (!content) return notFound();

  const schemas = await getSchemasFromMetadata(content.metadata!);

  return (
    <>
      <div>
        <HeroSectionInner content={content.hero} />
        <SubServices content={content.subservices} />
        {content["subservice-tabs"] && (
          <SubserviceTabs content={content["subservice-tabs"]} />
        )}
        {content["subservice-stats"] && (
          <SubserviceStats content={content["subservice-stats"]} />
        )}
        {content["subservice-pricing"] && (
          <SubservicePricing content={content["subservice-pricing"]} />
        )}
        {content["subservice-problem"] && (
          <SubserviceProblem content={content["subservice-problem"]} />
        )}
        {content["subservice-content"] && (
          <SubserviceContent content={content["subservice-content"]} />
        )}
        {content["subservice-approach"] && (
          <SubserviceApproach content={content["subservice-approach"]} />
        )}
        {content["subservice-comparison"] && (
          <SubserviceComparison content={content["subservice-comparison"]} />
        )}
        {content["subservice-faqs"] && (
          <FaqSection content={content["subservice-faqs"]} />
        )}
        <ContactBlock />
      </div>
      <PageSchema schemas={schemas} />
    </>
  );
};

export default ServicePage;
