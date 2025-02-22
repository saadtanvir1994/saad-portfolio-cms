import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface SimpleCtaProps {
  href: string;
  name: string;
  className?: string;
  showIcon?: boolean;
}

const SimpleCta = ({
  href,
  name,
  className = "",
  showIcon = true,
}: SimpleCtaProps) => {
  const baseClasses =
    "flex items-center py-1 justify-between gap-3 text-sm capitalize text-[var(--gray-700)] font-medium transition-colors hover:text-[--orange-color] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded-sm";
  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <Link href={href} className={combinedClasses} aria-label={name}>
      <span>{name}</span>
      {showIcon && (
        <ArrowUpRight
          className="h-6 w-6"
          aria-hidden="true"
          role="presentation"
        />
      )}
    </Link>
  );
};

export default SimpleCta;
