"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { BlogCategory } from "@/lib/definitions";

const CategoryLink = ({ category }: { category: BlogCategory }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "all";

  const setCategory = (cat: string) => {
    const params = new URLSearchParams(searchParams);
    if (cat === "all") {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    router.replace(`${pathname}?${params.toString()}`);
  };


  return (
    <li onClick={() => setCategory(category.slug)} className={`hover:text-primary ${currentCategory == category.slug ? "text-primary" : "text-muted-foreground"}`}>
      {category.name}
    </li>
  );
};
export default CategoryLink;
