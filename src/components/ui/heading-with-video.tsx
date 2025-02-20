import Typography from "@/components/ui/typography";
import { Play, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface VideoModalProps {
  youtubeUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<VideoModalProps> = ({ youtubeUrl, isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getYoutubeEmbedUrl = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const videoId = match?.[2];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-4xl px-4">
        <button
          onClick={onClose}
          className="absolute -right-2 -top-2 rounded-full bg-white p-2 text-gray-800 shadow-lg hover:bg-gray-100"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="overflow-hidden rounded-lg bg-black shadow-2xl">
          <div className="aspect-video w-full">
            <iframe
              src={getYoutubeEmbedUrl(youtubeUrl)}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const HeadingWithVideo = ({ videoUrl }: { videoUrl: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center gap-4">
      <Typography
        variant="display-2"
        className="mx-auto !w-full text-center uppercase md:!w-[40%] exact-2xl:!w-[30%]"
      >
        How Do I Go From An Idea To A Thriving Digital Presence?
      </Typography>

      <button
        onClick={() => setIsModalOpen(true)}
        className="group relative flex h-16 w-16 items-center justify-center"
      >
        <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg transition-all duration-200 group-hover:scale-105">
          <Image
            src="/images/animation-ui.gif"
            loading="lazy"
            alt="Work Stages explained"
            fill
            sizes=""
            className="object-cover"
            unoptimized
          />
          <Play className="h-6 w-6 text-gray-800 mix-blend-difference" />
        </div>
      </button>

      <Modal
        youtubeUrl={videoUrl}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default HeadingWithVideo;
