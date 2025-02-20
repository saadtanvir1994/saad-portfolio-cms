import { getPricingFaqsContent } from "@/lib/actions";
import PricingSection from "@/components/pricing-faqs/pricing-section";
import FaqSection from "@/components/pricing-faqs/faq-section";

const PricingFaqs = async () => {
  const { pricing, faqs } = await getPricingFaqsContent();

  return (
    <>
      <PricingSection content={pricing} />
      <FaqSection content={faqs} />
    </>
  );
};

export default PricingFaqs;
