import TextSwap from "./blocks/text-swap";

const TextSwaping = ({ roles }: { roles: string[] }) => {
  return (
    <section className="relative w-full bg-[--gray-25]">
      <div className="container mx-auto px-4 py-16 text-center md:py-32 md:pb-40">
        <TextSwap roles={roles} />
      </div>
    </section>
  );
};

export default TextSwaping;
