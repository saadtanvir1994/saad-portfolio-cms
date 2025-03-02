"use client";

import { useTableOfContents } from "@/hooks/table-of-contents";

const ContentOutline = () => {
  const { headings, activeId } = useTableOfContents();

  return (
    <ul className="space-y-2">
      {headings.map((heading) => (
        <li key={heading.id}>
          <a
            href={`#${heading.id}`}
            className={`block py-1 transition-colors duration-200 text-muted-foreground hover:text-primary ${
              activeId === heading.id
                ? "text-primary font-medium"
                : "text-muted-foreground"
            }`}
          >
            {heading.text}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default ContentOutline;
