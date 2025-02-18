"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

const CustomCursor = dynamic(() => import("@/components/client/custom-cursor"), {
  ssr: false,
});

const SmoothScroll = dynamic(() => import("@/components/client/smooth-scroll"), {
  ssr: false,
});

export default function ClientLayoutWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <CustomCursor
        color="white"
        size={{ small: 8, large: 32 }}
        borderWidth={0.6}
        followSpeed={6}
        initialDelay={0.2}
      />
      <SmoothScroll>{children}</SmoothScroll>
    </>
  );
}
