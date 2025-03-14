import { getShowcaseContent } from "@/lib/actions";
import TestimonialsSection from "@/components/home/showcase/testimonials";
import PortfolioSection from "@/components/home/showcase/portfoio-section";
import TextSwapWrapper from "@/components/home/showcase/text-swap-wrapper";

const Showcase = async () => {
  const { testimonials, portfolio, "swapping-text": swappinText } = await getShowcaseContent();

  return (
    <>
      <TestimonialsSection content={testimonials} />
      <PortfolioSection content={portfolio} />
      <TextSwapWrapper prefix={swappinText.prefix} roles={swappinText.items} />
    </>
  );
};

export default Showcase;
