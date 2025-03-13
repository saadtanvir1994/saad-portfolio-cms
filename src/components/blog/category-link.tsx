"use client";

import { usePathname } from "next/navigation";
import { BlogCategory } from "@/lib/definitions";
import Link from "next/link";

const CategoryLink = ({ category }: { category: BlogCategory }) => {
  const pathname = usePathname();
  const currentCategory = pathname.split("/").slice(-1)[0];
  
  return (
    <li
      className={`hover:text-primary ${
        currentCategory == category.slug ||
        (pathname === "/blogs" && category.slug === "")
          ? "text-primary"
          : "text-muted-foreground"
      }`}
    >
      <Link href={`/blogs/${category.slug}`}>{category.name}</Link>
    </li>
  );
};

export default CategoryLink;
