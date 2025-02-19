import AnimatedCTAButton from "@/components/animated-cta-button";
import Typography from "@/components/typography";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ logoUrl }: { logoUrl: string }) => {
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
          Ready to join hands and make some magic
        </Typography>
        <div className="my-8 flex w-full flex-col items-center justify-center gap-4 md:flex-row">
          <AnimatedCTAButton
            href="/about"
            ariaLabel="About"
            text="About"
            className="!mr-0"
          />

          <AnimatedCTAButton
            href="/services"
            ariaLabel="services"
            text="Services"
            className="!ml-0"
          />
        </div>
      </div>
      <div className="container mx-auto border-t border-gray-900/15 px-0">
        <div className="flex flex-col items-center justify-center gap-4 py-6 md:flex-row md:justify-between">
          <div className="relative mx-auto h-10 w-10 md:ml-0">
            <Image
              src={logoUrl}
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
            <li>
              <Link
                href="https://www.instagram.com/growwithsaad_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram profile"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                href="https://www.behance.net/saadtanvir"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Behance portfolio"
              >
                Behance
              </Link>
            </li>
            <li>
              <Link
                href="https://dribbble.com/uiinterfaces"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Dribbble profile"
              >
                Dribbble
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/saadtanvir1994"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our GitHub profile"
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/c/Prewebsolution"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our YouTube channel"
              >
                Youtube
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
