import Image from "next/image";
import Link from "next/link";
import { Asterisk, Check } from "lucide-react";
import Typography from "@/components/ui/typography";
import PortfolioItemsWrapper from "@/components/showcase/portfolio-items-wrapper";
import { PortfolioItemContent } from "@/lib/definitions";
import { getMediaUrl } from "@/utils/all";

const PortfolioItems = ({ projects }: { projects: PortfolioItemContent[] }) => {
  return (
    <PortfolioItemsWrapper>
      {projects.map((project, index) => (
        <div
          key={index}
          className="portfolio-item group relative overflow-hidden rounded-xl"
        >
          <div className="relative z-20 h-fit p-4">
            <div className="dark flex h-full flex-col justify-between">
              <div className="mr-20">
                <Typography
                  variant="h3"
                  className="!w-full !text-xl !font-medium uppercase text-[var(--gray-50)]"
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="p"
                  className="md:!md-6 !mb-4 !text-sm !text-[var(--gray-300)]"
                >
                  {project["short-description"]}
                </Typography>
              </div>

              <Link
                href={project.href}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="absolute right-4 top-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--gray-50)] duration-200 group-hover:bg-[var(--orange-color)]"
                aria-label={`Visit ${project.title} project website`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M14.6931 0H6.67872V1.33573H13.7487L0.0288086 15.0556L0.973167 16L14.6931 2.28009V9.35009H16.0288V1.33573C16.0288 0.599073 15.4297 0 14.6931 0Z"
                    className="fill-[var(--gray-900)]"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="relative z-30 aspect-[4/3] overflow-hidden">
            <Image
              src={getMediaUrl(project["bg-image"])}
              alt={project.title}
              fill
              sizes="(min-width: 1920px) calc(40.37vw - 42px), (min-width: 780px) calc(45.36vw - 40px), calc(151.74vw - 52px)"
              loading="lazy"
              className="t-0 absolute left-0 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="opacity-1 absolute left-0 top-0 z-10 h-full w-full bg-[var(--gray-900)]" />
          <div className="opacity-1 relative bottom-2 z-20 w-full bg-[var(--gray-900)] px-4 py-6">
            <div className="flex flex-wrap items-center gap-2 p-4 pb-0 pl-0">
              <span className="w-full font-bold capitalize">Challenge:</span>
              <ul className="flex flex-wrap gap-2">
                {project.challenges?.map((challenge) => (
                  <li
                    key={challenge}
                    className="text-md flex w-full gap-2 font-medium capitalize text-[var(--gray-50)]"
                  >
                    <Asterisk className="!text-sm text-[var(--gray-400)]" />{" "}
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap items-center gap-2 p-4 pb-0 pl-0">
              <span className="w-full font-bold capitalize">
                Solution (Strategy):
              </span>
              <ul className="flex flex-wrap gap-2">
                {project.solutions?.map((sol) => (
                  <li
                    key={sol}
                    className="text-md flex w-full gap-2 font-medium capitalize text-[var(--gray-50)]"
                  >
                    <Check size={24} className="text-[var(--gray-400)]" /> {sol}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 px-0 pb-0">
              <span className="mb-2 inline-block font-bold capitalize">
                Skills:&nbsp;
              </span>
              <ul className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border-xs border-[var(--gray-50)] px-3 py-1 !text-xs font-medium uppercase !tracking-tight text-[var(--gray-200)]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </PortfolioItemsWrapper>
  );
};

export default PortfolioItems;
