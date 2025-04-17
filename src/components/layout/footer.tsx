import AnimatedCTAButton from "@/components/ui/animated-cta-button";
import { getFooterContent } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import SimpleCta from "@/components/ui/simple-cta";
import { SparklesIcon } from "lucide-react";

const Footer = async () => {
  const footerContent = await getFooterContent();

  return (
    <footer className="bg-[var(--gray-25)] px-4 py-16 lg:px-16">
      <div className="container mx-auto">
        {/* Main content grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-12">
          {/* Left column - Call to action */}
          <div className="md:col-span-5">
            <h2 className="mb-6 max-w-md text-5xl font-bold">
              {footerContent.heading}
            </h2>

            {/* CTA button */}
            <AnimatedCTAButton
              text={footerContent["action-button"].label}
              ariaLabel={footerContent["action-button"].label}
              variant="simpleoutlined"
              href={footerContent["action-button"].href}
              external={footerContent["action-button"].external}
            />
          </div>

          {/* Middle column - Address */}
          <div className="md:col-span-3">
            <h3 className="mb-4 font-bold uppercase">Locations</h3>
            {footerContent.locations.map((loc, index) => (
              <address
                key={index}
                className={`mb-8 not-italic ${
                  index === 0 && "text-[var(--text-secondary)]"
                }`}
                dangerouslySetInnerHTML={{
                  __html: loc,
                }}
              />
            ))}

            <div className="mb-2">
              {footerContent["company-details"].map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>

          {/* Middle-right column - Social */}
          <div className="md:col-span-2">
            <h3 className="mb-4 font-bold uppercase">Social</h3>
            <ul className="max-w-40 space-y-0">
              {footerContent["social-links"].map((link, index) => (
                <li key={index}>
                  <SimpleCta
                    href={link.url}
                    name={link.label}
                    external={link.external}
                    className="py-2"
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Right column - Menu */}
          <div className="md:col-span-2">
            <h3 className="mb-4 font-bold uppercase">Contact</h3>

            <SimpleCta
              name={footerContent.email}
              href={`mailto:${footerContent.email}`}
              className="!text-lg !lowercase py-2"
            />

            <Image
              src="/images/payment-cards.png"
              width={240}
              height={30}
              alt="stripe payments accepted"
              className="mt-2"
            />
          </div>
        </div>
        <div className="footer-bottom grid grid-cols-1 justify-center md:grid-cols-2 content-center">
          <div className="mt-16 text-sm text-center md:text-left text-[var(--gray-500)]">
            <p> © {new Date().getFullYear()} {footerContent["left-text"]}</p>
          </div>
          
          <div className="mt-4 md:mt-16 text-center md:text-right text-sm text-[var(--gray-500)]">
            <ul className="flex justify-center md:justify-end space-x-3">
              {footerContent.links?.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} aria-label={link.label} target={link.external ? "_blank" : "_self"} className="py-2">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4 text-left border-xs border-[var(--gray-100)] rounded-lg px-4 py-4 text-sm text-[var(--gray-600)] flex gap-2 md:items-center bg-[var(--gray-50)]">
            <SparklesIcon className="h-5 w-5 text-[var(--gray-900)]" />
            <p
              dangerouslySetInnerHTML={{
                __html: footerContent["bottom-text"],
              }}
            />
          </div>
      </div>
    </footer>
  );
};

export default Footer;
