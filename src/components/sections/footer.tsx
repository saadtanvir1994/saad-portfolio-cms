import AnimatedCTAButton from "@/components/animated-cta-button";
import Typography from "@/components/typography";
import { getFooterContent } from "@/lib/actions";
import { getMediaUrl } from "@/utils/all";
import Image from "next/image";
import Link from "next/link";

const Footer = async () => {
  const footerContent = await getFooterContent();

  return (
    <section className="relative w-full overflow-hidden bg-[var(--st-green-color)] py-16 pb-24 md:py-32 md:pb-32">
      <div
        className="container mx-auto px-4 pb-12 md:pb-28"
        data-cursor="Lets Connect"
      >
        <Typography
          variant="display-2"
          className="mx-auto w-full text-center uppercase md:max-w-[40%]"
        >
          {footerContent.heading}
        </Typography>
        <div className="my-8 flex w-full flex-col items-center justify-center gap-4 md:flex-row">
          {footerContent["action-buttons"].map((btn, idx) => (
            <AnimatedCTAButton
              key={idx}
              href={btn.href}
              ariaLabel={btn.label}
              text={btn.label}
              className="!ml-0"
            />
          ))}
        </div>
      </div>
      <div className="container mx-auto border-t border-gray-900/15 px-0">
        <div className="flex flex-col items-center justify-center gap-4 py-6 md:flex-row md:justify-between">
          <div className="relative mx-auto h-10 w-10 md:ml-0">
            <Image
              src={getMediaUrl(footerContent.logo)}
              alt="Saad Tanvir Logo"
              fill
              priority
              sizes="(max-width: 768px) 40px"
              className="object-contain"
            />
          </div>
          <ul
            className="flex justify-center space-x-6"
            role="list"
            aria-label="Social media links"
          >
            {footerContent["social-links"].map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${link.label} profile`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
