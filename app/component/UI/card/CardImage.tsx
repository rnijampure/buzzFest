// app/component/UI/CardImage.tsx
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";

interface CardImageProps {
  src?: string;
  alt: string;
  aspectRatio?: "aspect-4/3" | "aspect-square" | "aspect-video";
}

export const CardImage = ({
  src,
  alt,
  aspectRatio = "aspect-4/3",
}: CardImageProps) => {
  // If no src is provided, render a placeholder div to prevent layout shift/crash
  if (!src) {
    return (
      <div
        className={`w-full bg-zinc-100 flex items-center justify-center ${aspectRatio}`}
        data-testid="image-placeholder"
      >
        <span className="text-zinc-400 text-xs">No Image Available</span>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden ${aspectRatio}`}
      data-testid="card-image-container"
    >
      <CloudinaryImage
        width="400"
        height="300"
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 max-h-[240px]"
      />
    </div>
  );
};
