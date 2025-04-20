import { ImageWithDim } from "@/lib/definitions";
import { getMediaUrl } from "@/utils/all";
import Image from "next/image";

const ImageSet = ({ images }: { images: ImageWithDim[] }) => {
  return (
    <div className="flex items-center justify-space-between gap-4 w-[100vw]">
      {images.map((item, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg" >
          <Image
            src={getMediaUrl(item.image)}
            alt={item.image.caption || "Project Image"}
            width={item.width}
            height={item.height}
            className="object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}

export default ImageSet;