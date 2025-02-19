// import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import Typography from "@/components/typography";
import ServiceCard from "./blocks/service-card";
import { ServicesContent } from "@/lib/definitions";
import ServicesWrapper from "./services-wrapper";

const Services = ({ servicesContent }: { servicesContent: ServicesContent }) => {
  // const sectionRef = useRef<HTMLDivElement>(null);

  // useGSAP(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.from(".services-header > *", {
  //       opacity: 0,
  //       y: 30,
  //       stagger: 0.2,
  //       duration: 0.8,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: ".services-header",
  //         start: "top bottom-=200",
  //         once: true,
  //       },
  //     });
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <ServicesWrapper>
    {/* <section ref={sectionRef} className="dark relative w-full bg-[--gray-25]"> */}
      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="services-header flex flex-col md:col-span-5">
            <span className="text-md dark mb-2 font-light uppercase tracking-widest text-[--text-tertiary]">
              {servicesContent.tagline}
            </span>
            <Typography
              variant="display-2"
              className="mb-3 uppercase !text-[--text-primary] md:mb-6"
            >
              {servicesContent.heading}
            </Typography>
            <Typography
              variant="p"
              className="w-[90%] text-[--text-tertiary] sm:w-[70%] md:w-full"
            >
              {servicesContent.description}
            </Typography>
          </div>
          <div className="hidden md:col-span-7 md:block" />
        </div>

        <div className="mt-9 grid grid-cols-1 gap-8 md:grid-cols-2 2xl:grid-cols-3">
          {servicesContent.items.map((service, index) => (
            <ServiceCard key={index} item={service} index={index} />
          ))}
        </div>
      </div>
    {/* </section> */}
    </ServicesWrapper>
  );
};

export default Services;