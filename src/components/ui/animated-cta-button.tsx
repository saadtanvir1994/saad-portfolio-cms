"use client";

import { MoveRight, MoveUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface BaseProps {
  text?: string;
  className?: string;
  ariaLabel: string;
  align?: "left" | "right";
  variant?: "light" | "dark" | "icon-only" | "simple" | "simpleoutlined";
}

interface LinkProps extends BaseProps {
  href?: string;
  external?: boolean;
  onClick?: never;
  type?: never;
}

interface ButtonProps extends BaseProps {
  type?: "button" | "submit" | "reset";
  href?: never;
  external?: never;
}

type AnimatedCTAButtonProps = LinkProps | ButtonProps;

const AnimatedCTAButton: React.FC<AnimatedCTAButtonProps> = (props) => {
  const {
    text,
    className = "",
    ariaLabel,
    align = "right",
    variant = "light",
  } = props;

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

  const commonClassNames = {
    "icon-only": `group flex items-center justify-center overflow-hidden transition-all duration-300 ease-in-out ${variantClasses[variant]} ${className}`,
    simple: `flex w-fit items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-medium transition-all duration-300 ${
      variantClasses[variant]
    } ${align === "right" ? "flex-row" : "flex-row-reverse"} ${className}`,
    standard: `group inline-flex w-fit items-center gap-2 rounded-full px-8 py-4 text-base font-medium transition-all duration-300 ease-in-out hover:scale-105 ${
      variantClasses[variant]
    } ${align === "right" ? "flex-row" : "flex-row-reverse"} ${className}`,
  };

  const renderContent = () => {
    if (variant === "icon-only") {
      return (
        <>
          <MoveUpRight className="h-5 w-5 text-white transition-all duration-300 ease-in-out group-hover:-translate-x-8 group-hover:-translate-y-8 group-hover:opacity-0" />
          <MoveUpRight className="absolute h-5 w-5 translate-x-8 translate-y-8 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
        </>
      );
    }

    if (variant === "simple" || variant === "simpleoutlined") {
      return (
        <>
          {text && (
            <span className="text-md font-semibold uppercase">{text}</span>
          )}
          <MoveRight className="h-4 w-4" />
        </>
      );
    }

    return (
      <>
        {text && (
          <span className="text-md font-semibold uppercase">{text}</span>
        )}
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
      </>
    );
  };

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        className={
          variant === "icon-only"
            ? commonClassNames["icon-only"]
            : variant === "simple" || variant === "simpleoutlined"
            ? commonClassNames["simple"]
            : commonClassNames["standard"]
        }
        aria-label={ariaLabel}
        target={props.external ? "_blank" : "_self"}
      >
        {renderContent()}
      </Link>
    );
  }

  return (
    <button
      type={props.type || "button"}
      className={
        variant === "icon-only"
          ? commonClassNames["icon-only"]
          : variant === "simple" || variant === "simpleoutlined"
          ? commonClassNames["simple"]
          : commonClassNames["standard"]
      }
      aria-label={ariaLabel}
    >
      {renderContent()}
    </button>
  );
};

export default AnimatedCTAButton;
