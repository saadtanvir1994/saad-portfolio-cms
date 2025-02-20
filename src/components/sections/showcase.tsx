import { getShowcaseContent } from "@/lib/actions";
import TestimonialsSection from "./testimonials";
import PortfolioSection from "./portfoio-section";
import TextSwaping from "./text-swapping-wrapper";

const Showcase = async () => {
  const showcaseContent = await getShowcaseContent();

  return (
    <>
      <TestimonialsSection content={showcaseContent.testimonials} />
      <PortfolioSection content={showcaseContent.portfolio} />
      <TextSwaping roles={showcaseContent.roles} />
    </>
  );
};

export default Showcase;
