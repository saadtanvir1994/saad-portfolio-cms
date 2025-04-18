import FaqItem from "@/components/home/pricing-faqs/faq-item";
import Typography from "@/components/ui/typography";
import { FaqsContent } from "@/lib/definitions";

const FaqSection = ({ content }: { content: FaqsContent }) => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 pb-0 md:py-32 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Typography
            variant="display-2"
            className="mx-auto mb-6 text-center uppercase"
          >
            {content.title}
          </Typography>
          {content.description && (
            <Typography
              variant="p"
              className="mb-16 text-[var(--text-tertiary)]"
            >
              {content.description}
            </Typography>
          )}
        </div>

        <div className="mx-auto my-6 px-1 max-w-3xl divide-y divide-[var(--gray-200)] md:my-12">
          {content.items.map((faq, id) => (
            <FaqItem key={id} question={faq.ques} answer={faq.ans} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
