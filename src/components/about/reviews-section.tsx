import Typography from "@/components/ui/typography";
import { getAboutPageReviews } from "@/lib/actions";
import { getMediaUrl } from "@/utils/all";
import { QuoteIcon } from "lucide-react";
import Image from "next/image";

const ReviewsSection = async () => {
  const content = await getAboutPageReviews();

  return (
    <section className="relative overflow-hidden bg-[var(--gray-50)] px-4 py-16 md:py-32">
      <Image
        className="absolute -left-36 top-0 z-10 transform opacity-40"
        width={1000}
        height={1000}
        src="/images/radial2.svg"
        alt="background decoration"
        loading="lazy"
      />
      <div className="container relative z-30 px-0">
        <div className="flex flex-wrap md:-m-4">
          {content.map((item, index) => (
            <div key={index} className="z-40 w-full p-4 text-center lg:w-1/3">
              <div className="h-full border-b border-[var(--gray-200)] pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
                <QuoteIcon className="mx-auto mb-6 h-6 w-6 text-orange-500" />
                <h3 className="mb-8 text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <Typography
                  variant="p"
                  className="mx-auto mb-6 max-w-sm tracking-tight text-[var(--gray-700)] md:min-h-36"
                >
                  {item.message}
                </Typography>

                <div className="mb-6 flex flex-wrap items-center justify-center gap-4">
                  <Image
                    width={64}
                    height={64}
                    src={getMediaUrl(item.avatar)}
                    alt={item.designation}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-lg font-semibold tracking-tight">
                      {item.name}
                    </p>
                    <p className="text-sm tracking-tight text-gray-500">
                      {item.designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
