import React from "react";

type TypographyProps = {
  variant:
    | "display-1"
    | "display-2"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "span"
    | "p";
  children: React.ReactNode;
  className?: string;
};

const Typography = ({ variant, children, className = "" }: TypographyProps) => {
  let Element: keyof HTMLElementTagNameMap = "h1";
  let styles = "";

  switch (variant) {
    case "display-1":
      Element = "h1";
      styles =
        "w-[60%] md:w-[80%] text-3xl lg:text-5xl text-[--text-primary] font-medium tracking-tight";
      break;
    case "display-2":
      Element = "h2";
      styles =
        "w-[60%] md:w-[80%] text-3xl lg:text-5xl text-[--text-primary] font-medium tracking-tight";
      break;
    case "h1":
      Element = "h1";
      styles =
        "w-[60%] md:w-[80%] text-3xl lg:text-5xl text-[--text-primary] font-medium tracking-tight";
      break;
    case "h2":
      Element = "h2";
      styles =
        "w-[60%] md:w-[80%] text-2xl lg:text-4xl text-[--text-primary] font-medium tracking-tight";
      break;
    case "h3":
      Element = "h3";
      styles =
        "w-[60%] md:w-[80%] text-xl lg:text-3xl text-[--text-primary] font-medium tracking-tight";
      break;
    case "h4":
      Element = "h4";
      styles =
        "text-lg lg:text-2xl text-[--text-primary] font-medium tracking-tight";
      break;
    case "h5":
      Element = "h5";
      styles =
        "text-base lg:text-xl text-[--text-primary] font-medium tracking-tight";
      break;
    case "h6":
      Element = "h6";
      styles =
        "text-sm lg:text-lg text-[--text-primary] font-medium tracking-tight";
      break;
    case "span":
      Element = "span";
      styles = "text-sm lg:text-lg text-[--text-tertiary]";
      break;
    case "p":
      Element = "p";
      styles = "text-base md:text-md lg:text-lg text-[--text-secondary] mb-4";
      break;
  }

  return React.createElement(
    Element,
    { className: `${styles} ${className}`.trim() },
    children,
  );
};

export default Typography;
