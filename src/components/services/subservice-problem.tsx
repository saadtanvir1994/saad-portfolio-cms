import Typography from "@/components/ui/typography";
import { SubserviceProblem as SubserviceProblemType } from "@/lib/definitions";
import { getMediaUrl } from "@/utils/all";
import { DynamicIcon } from "lucide-react/dynamic";
import Image from "next/image";

const SubserviceProblem = ({ content }: { content: SubserviceProblemType }) => {
  const wrapperClass =
    content.mode === "dark"
      ? "dark bg-[var(--gray-0)] text-[var(--text-primary)]"
      : "bg-[var(--bg-primary)] text-[var(--text-primary)]";

  return (
    <section
      className={`relative overflow-hidden py-16 md:py-32 ${wrapperClass}`}
    >
      <div className={`container mx-auto`}>
        <div className="mb-6 md:mb-8">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="section-header flex flex-col md:col-span-6">
              <span className="block md:text-md mb-2 text-sm font-light uppercase tracking-widest text-[var(--text-tertiary)]">
                {content.subtitle}
              </span>
              <Typography
                variant="display-2"
                className="mb-2 !w-full uppercase text-[var(--text-primary)]"
              >
                {content.title}
              </Typography>
              <Typography variant="p" className="text-base md:text-md lg:text-lg mb-4 md:max-w-[80%] text-[--text-tertiary]">
                {content.description}
              </Typography>
            </div>
            <div className="hidden md:col-span-6 md:block" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {content.items.map((card, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg bg-[var(--gray-25)] p-0"
            >
              <div className="flex items-start justify-between">
                <div className="w-3/4">
                  <div className="flex flex-col gap-6 border-b border-r border-[var(--gray-200)] p-8">
                    <span className="mb-2 block text-sm font-medium uppercase tracking-wide text-[var(--text-tertiary)]">
                      {card.subtitle}
                    </span>
                    <Typography
                      variant="h3"
                      className="mb-4 text-2xl font-bold capitalize tracking-tighter"
                    >
                      {card.title}
                    </Typography>
                  </div>
                </div>
                <div className="flex h-full w-3/12 items-center justify-center border-b border-[var(--gray-200)]">
                  {card.graphic === "image" ? (
                    <Image
                      src={getMediaUrl(card.image) || "/images/sticker.svg"}
                      alt="icon"
                      width={80}
                      height={80}
                      className="h-20 w-20"
                    />
                  ) : (
                    <DynamicIcon name={card.icon} size={64} />
                  )}
                </div>
              </div>
              <div className="p-8">
                <Typography variant="p" className="mb-6 text-[var(--gray-800)]">
                  {card.paragraph}
                </Typography>

                {card.list && card.list.length > 0 && (
                  <ul className="space-y-2 text-[var(--gray-600)]">
                    {card.list.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <span className="mr-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--gray-900)]"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubserviceProblem;
