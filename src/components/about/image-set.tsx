import { MediaContent } from "@/lib/definitions";
import { getMediaUrl } from "@/utils/all";
import Image from "next/image";

const ImageSet = ({ images }: { images: MediaContent[] }) => {
  return (
    <div className="flex items-center justify-center gap-12">
      {images.map((image, index) => (
        <div key={index} className="relative h-[390px] w-[410px] overflow-hidden rounded-3xl">
          <Image
            src={getMediaUrl(image)}
            alt={image.caption || "Project Image"}
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