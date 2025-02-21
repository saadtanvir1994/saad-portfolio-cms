import Typography from "@/components/ui/typography";
import { getLogosContent } from "@/lib/actions";
// import { getMediaUrl } from "@/utils/all";
// import Image from "next/image";
import React from "react";
import SpriteIcon from "../ui/sprite-icon";

const LogosBlock = async () => {
  const logosContent = await getLogosContent();

  return (
    <section className="bg-[var(--gray-900)] py-12">
      <div className="container mx-auto px-4">
        <Typography
          variant="h3"
          className="mb-8 text-center text-[var(--gray-200)] !w-full md:!w-full"
        >
          {logosContent.text.map((text, index) => (
            <React.Fragment key={index}>
              {text} {index !== logosContent.text.length - 1 && <br />}
            </React.Fragment>
          ))}
        </Typography>
        <div className="my-4">
          <div className="overflow-hidden">
            <div>
              <div className="w-full flex-shrink-0">
                <div className="-mx-4 -mb-16 flex flex-wrap items-center justify-center xl:justify-between">
                  {logosContent.logos.map((logo, idx) => (
                    <div className="mb-16 w-1/4 px-4 py-4 xl:w-auto w-40" key={idx}>
                      {/* <Image
                        className="mx-auto block"
                        src={getMediaUrl(logo)}
                        alt={"Client Logo " + idx}
                        width={100}
                        height={40}
                      /> */}
                      <SpriteIcon
                        name={logo.caption}
                        className="w-[100px] h-[40px]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosBlock;
