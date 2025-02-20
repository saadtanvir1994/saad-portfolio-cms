import TechLogos from "@/components/ui/tech-logos";
import Typography from "@/components/ui/typography";
import { TechnologiesContent } from "@/lib/definitions";
import React from "react";

const Technologies = ({ content }: { content: TechnologiesContent }) => {
  const logos = [
    { name: "Ant Design", src: "/images/techlogo/Ant Design.svg" },
    { name: "BitBucket", src: "/images/techlogo/BitBucket.svg" },
    { name: "Bootstrap", src: "/images/techlogo/Bootstrap.svg" },
    { name: "Cloudflare", src: "/images/techlogo/Cloudflare.svg" },
    { name: "CodeIgniter", src: "/images/techlogo/CodeIgniter.svg" },
    { name: "CSS3", src: "/images/techlogo/CSS3.svg" },
    { name: "D3.js", src: "/images/techlogo/D3.js.svg" },
    { name: "ESLint", src: "/images/techlogo/ESLint.svg" },
    { name: "Express", src: "/images/techlogo/Express.svg" },
    { name: "Figma", src: "/images/techlogo/Figma.svg" },
    { name: "Git", src: "/images/techlogo/Git.svg" },
    { name: "GitHub", src: "/images/techlogo/GitHub.svg" },
    { name: "GraphQL", src: "/images/techlogo/GraphQL.svg" },
    { name: "Gulp.js", src: "/images/techlogo/Gulp.js.svg" },
  ];
  const logos2 = [
    { name: "HTML5", src: "/images/techlogo/HTML5.svg" },
    { name: "JavaScript", src: "/images/techlogo/JavaScript.svg" },
    { name: "Jira", src: "/images/techlogo/Jira.svg" },
    { name: "jQuery", src: "/images/techlogo/jQuery.svg" },
    { name: "Materialize", src: "/images/techlogo/Materialize.svg" },
    { name: "MongoDB", src: "/images/techlogo/MongoDB.svg" },
    { name: "MySQL", src: "/images/techlogo/MySQL.svg" },
    { name: "Next.js", src: "/images/techlogo/Next.js.svg" },
    { name: "Node.js", src: "/images/techlogo/Node.js.svg" },
    { name: "NPM", src: "/images/techlogo/NPM.svg" },
    { name: "PHP", src: "/images/techlogo/PHP.svg" },
    { name: "Postman", src: "/images/techlogo/Postman.svg" },
    { name: "React Bootstrap", src: "/images/techlogo/React Bootstrap.svg" },
    { name: "React", src: "/images/techlogo/React.svg" },
    { name: "Redux", src: "/images/techlogo/Redux.svg" },
    { name: "Sass", src: "/images/techlogo/Sass.svg" },
    { name: "Slack", src: "/images/techlogo/Slack.svg" },
    { name: "Swagger", src: "/images/techlogo/Swagger.svg" },
    { name: "Tailwind CSS", src: "/images/techlogo/Tailwind CSS.svg" },
    { name: "Trello", src: "/images/techlogo/Trello.svg" },
    { name: "TypeScript", src: "/images/techlogo/TypeScript.svg" },
    { name: "Vuetify", src: "/images/techlogo/Veutify.svg" },
  ];
  return (
    <section className="block bg-[var(--gray-0)]">
      <TechLogos logos={logos} />

      <div className="container relative mx-auto text-center">
        <div className="grid grid-cols-1 justify-center gap-16 md:grid-cols-12">
          <div className="hidden md:col-span-1 md:block xl:col-span-3"></div>

          <div className="flex flex-col justify-center bg-[var(--gray-0)] md:col-span-10 xl:col-span-6">
            <span className="text-md dark mb-2 font-light uppercase tracking-widest text-[--text-dtertiary]">
              {content.tagline}
            </span>
            <Typography variant="display-2" className="!mx-auto mb-6 uppercase">
              {content.heading}
            </Typography>
            <Typography
              variant="p"
              className="mx-auto w-[85%] text-[--text-tertiary]"
            >
              {content.paragraph}
            </Typography>
          </div>
          <div className="hidden md:col-span-1 md:block xl:col-span-3"></div>
        </div>
      </div>
      <TechLogos direction={true} logos={logos2} />
    </section>
  );
};

export default Technologies;
