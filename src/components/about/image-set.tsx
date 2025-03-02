import { ImageWithDim } from "@/lib/definitions";
import { getMediaUrl } from "@/utils/all";
import Image from "next/image";

const ImageSet = ({ images }: { images: ImageWithDim[] }) => {
  return (
    <div className="flex items-center justify-center gap-12">
      {images.map((item, index) => (
        <div key={index} className="relative overflow-hidden rounded-3xl" style={{ height: item.height, width: item.width }}>
          <Image
            src={getMediaUrl(item.image)}
            alt={item.image.caption || "Project Image"}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}

export default ImageSet;