import { Skeleton } from "../ui/skeleton";

const BlogItemsSkeleton = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {Array.from(Array(4).keys()).map((_, id) => (
        <Skeleton key={id} className="h-80 w-96 rounded-lg" />
      ))}
    </div>
  )
}

export default BlogItemsSkeleton;