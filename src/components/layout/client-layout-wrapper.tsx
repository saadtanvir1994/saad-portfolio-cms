import { ReactNode } from "react";
import CustomCursor from "@/components/ui/custom-cursor";
import SmoothScroll from "@/components/ui/smooth-scroll";

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
