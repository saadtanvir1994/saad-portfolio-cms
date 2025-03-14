import TextSwap from "@/components/home/showcase/text-swap";

const TextSwaping = ({ prefix, roles }: { prefix: string; roles: string[] }) => {
  return (
    <section className="relative w-full bg-[--gray-25]">
      <div className="container mx-auto px-4 py-16 text-center md:py-32 md:pb-40">
        <TextSwap prefix={prefix} roles={roles} />
      </div>
    </section>
  );
};

export default TextSwaping;
