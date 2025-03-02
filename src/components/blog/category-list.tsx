import { getAllCategories } from "@/lib/actions";
import CategoryLink from "./category-link";

const CategoryList = async () => {
  const categories = await getAllCategories();
  return (
    <nav>
      <ul className="flex flex-wrap items-center justify-center gap-4 lg:flex-col lg:items-start lg:gap-2">
        {categories.map((cat) => (
          <CategoryLink category={cat} key={cat.slug} />
        ))}
      </ul>
    </nav>
  );
};

export default CategoryList;
