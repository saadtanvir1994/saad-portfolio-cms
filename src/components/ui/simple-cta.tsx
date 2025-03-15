import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface SimpleCtaProps {
  href: string;
  name: string;
  className?: string;
  showIcon?: boolean;
  external?: boolean;
}

const SimpleCta = ({
  href,
  name,
  className = "",
  showIcon = true,
  external,
}: SimpleCtaProps) => {
  const baseClasses =
    "flex items-center py-1 justify-between gap-3 text-base capitalize text-[var(--gray-700)] font-normal transition-colors hover:text-[--orange-color] focus:outline-none focus:ring-0";
  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <Link href={href} className={combinedClasses} aria-label={name} target={external ? "_blank" : undefined}>
      <span>{name}</span>
      {showIcon && <ArrowUpRight className="h-4 w-4" />}
    </Link>
  );
};

export default SimpleCta;
