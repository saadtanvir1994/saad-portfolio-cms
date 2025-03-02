"use client";

import { useEffect, useState } from "react";

export function useTableOfContents() {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".blog-content h2"));
    const headingElements = elements.map((element) => {
      // Ensure each heading has an id
      if (!element.id) {
        element.id =
          element.textContent?.toLowerCase().replace(/\W+/g, "-") ?? "";
      }
      return {
        id: element.id,
        text: element.textContent ?? "",
      };
    });
    setHeadings(headingElements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return { headings, activeId };
}
