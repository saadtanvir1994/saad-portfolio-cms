import { getPricingFaqsContent } from "@/lib/actions";
import PricingSection from "./pricing-section";
import FaqSection from "./faq-section";

const PricingFaqs = async () => {
  const { pricing, faqs } = await getPricingFaqsContent();

  return (
    <>
      <PricingSection content={pricing} />
      <FaqSection content={faqs} />
    </>
  )
}

export default PricingFaqs;