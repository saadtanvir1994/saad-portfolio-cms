// import Image from 'next/image';
import SpriteIcon from '../ui/sprite-icon';

const WorkflowTools = () => {
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
    <div className="container mx-auto px-4 overflow-hidden pb-32 pt-8">
      <div className="relative mx-auto max-w-4xl overflow-hidden">
        <div className="-m-1.5 flex flex-wrap justify-center">
          {logos.map((logo, index) =>
            <div className="w-auto p-1.5 transition duration-200" key={index}>
              <div className="flex items-center rounded-full border border-gray-300 bg-white px-6 py-2.5 transition duration-200 hover:bg-gray-100">
                {/* <Image
                  src={logo.src}
                  alt={logo.name}
                  height={22}
                  width={22}
                /> */}
                <SpriteIcon
                  name={logo.name}
                  height={22}
                  width={22}
                />
                <span className="font-bold ml-3 tracking-tight">{logo.name}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkflowTools;
