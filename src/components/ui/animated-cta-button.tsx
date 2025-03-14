import { MoveRight, MoveUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface AnimatedCTAButtonProps {
  href: string;
  text?: string;
  className?: string;
  ariaLabel: string;
  align?: "left" | "right";
  variant?: "light" | "dark" | "icon-only" | "simple" | "simpleoutlined";
  external?: boolean;
}

const AnimatedCTAButton: React.FC<AnimatedCTAButtonProps> = ({
  href,
  text,
  className = "",
  ariaLabel,
  align = "right",
  variant = "light",
  external
}) => {
  // Simplified base classes using template literals
  const variantClasses = {
    "icon-only": "h-12 w-12 rounded-full bg-[#FF4102] hover:scale-110",
    simple:
      "bg-[#cc2a02]  text-white  hover:border hover:border-[#FF4102] hover:bg-[#FF4102]",
    simpleoutlined:
      "border border-neutral-500 hover:bg-[#FF4102] hover:text-white hover:border-[#FF4102]",
    light:
      "bg-gray-50 bg-[--gray-300] text-gray-800 border border-[--gray-100]",
    dark: "bg-[#FF4102] text-white",
  };

  // Icon-only variant
  if (variant === "icon-only") {
    return (
      <Link
        href={href}
        className={`group flex items-center justify-center overflow-hidden transition-all duration-300 ease-in-out ${variantClasses[variant]} ${className}`}
        aria-label={ariaLabel}
        target={external ? "_blank": undefined}
      >
        <MoveUpRight className="h-5 w-5 text-white transition-all duration-300 ease-in-out group-hover:-translate-x-8 group-hover:-translate-y-8 group-hover:opacity-0" />
        <MoveUpRight className="absolute h-5 w-5 translate-x-8 translate-y-8 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
      </Link>
    );
  }

  // Simple variants
  if (variant === "simple" || variant === "simpleoutlined") {
    return (
      <Link
        href={href}
        className={`flex w-fit items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-medium transition-all duration-300 ${
          variantClasses[variant]
        } ${align === "right" ? "flex-row" : "flex-row-reverse"} ${className}`}
        aria-label={ariaLabel}
      >
        {text && (
          <span className="text-md font-semibold uppercase">{text}</span>
        )}
        <MoveRight className="h-4 w-4" />
      </Link>
    );
  }

  // Standard variants (light/dark)
  return (
    <Link
      href={href}
      className={`group inline-flex w-fit items-center gap-2 rounded-full px-8 py-4 text-base font-medium transition-all duration-300 ease-in-out hover:scale-105 ${
        variantClasses[variant]
      } ${align === "right" ? "flex-row" : "flex-row-reverse"} ${className}`}
      aria-label={ariaLabel}
    >
      {text && <span className="text-md font-semibold uppercase">{text}</span>}
      <span
        className={`relative flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ease-in-out group-hover:scale-110 ${
          variant === "light" ? "bg-[#FF4102]" : "bg-white"
        } overflow-hidden`}
      >
        <span
          className={`h-2 w-2 rounded-full transition-all duration-300 ease-in-out group-hover:scale-0 group-hover:opacity-0 ${
            variant === "light" ? "bg-white" : "bg-[#FF4102]"
          }`}
        />
        <MoveRight
          className={`absolute h-4 w-4 translate-y-8 transition-all duration-300 ease-in-out group-hover:translate-y-0 ${
            variant === "light" ? "text-white" : "text-gray-800"
          }`}
        />
      </span>
    </Link>
  );
};

export default AnimatedCTAButton;
