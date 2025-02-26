"use client";

import { usePathname } from "next/navigation";

const HrefLangTag = () => {
  const pathname = usePathname();

  return <link rel="alternate" href={`${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`} hrefLang="en" />
}

export default HrefLangTag;