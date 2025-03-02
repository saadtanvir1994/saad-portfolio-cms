import Image from "next/image";
import React from "react";

const ContactBlock = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-32">
      <div className="container relative rounded-2xl bg-[var(--gray-50)] px-0">
        <div className="absolute right-4 top-4 h-24 w-24 origin-center animate-spin-slow2 md:h-52 md:w-52">
          <Image
            className="rounded-2xl"
            src="/images/arrow-circle-saad-outline.svg"
            alt="decoration"
            fill
          />
        </div>
        <div className="relative z-50 p-8 md:p-24">
          <p className="mb-6 font-semibold tracking-tight text-orange-400">
            👋 Say hello
          </p>
          <h2 className="mb-32 max-w-xs text-4xl font-medium tracking-tight sm:max-w-lg sm:text-6xl">
            Want to connect?
          </h2>
          <div className="flex max-w-5xl flex-wrap justify-between gap-12">
            <div>
              <p className="text-xl font-medium tracking-tight text-black text-opacity-60">
                Monday-Friday
              </p>
              <p className="text-xl font-medium tracking-tight">
                9:00 am - 9:00 pm
              </p>
            </div>
            <div>
              <p className="text-xl font-medium tracking-tight text-black text-opacity-60">
                Send a mail
              </p>
              <p className="text-xl font-medium tracking-tight">
                info@saadtanvir.com
              </p>
            </div>
            <div>
              <p className="text-xl font-medium tracking-tight text-black text-opacity-60">
                Call directly
              </p>
              <p className="text-xl font-medium tracking-tight">
                PAK: +92 331 610 59 76
              </p>
              <p className="text-xl font-medium tracking-tight">
                UK: +44 7377 540166
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBlock;
