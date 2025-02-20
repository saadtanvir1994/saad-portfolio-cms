import { getShowcaseContent } from "@/lib/actions";
import TestimonialsSection from "./testimonials";
import PortfolioSection from "./portfoio-section";
import TextSwapWrapper from "./text-swap-wrapper";

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
