import { getShowcaseContent } from "@/lib/actions";
import TestimonialsSection from "@/components/showcase/testimonials";
import PortfolioSection from "@/components/showcase/portfoio-section";
import TextSwapWrapper from "@/components/showcase/text-swap-wrapper";

const Showcase = async () => {
  const { testimonials, portfolio, roles } = await getShowcaseContent();

  return (
    <>
      <TestimonialsSection content={testimonials} />
      <PortfolioSection content={portfolio} />
      <TextSwapWrapper roles={roles} />
    </>
  );
};

export default Showcase;
