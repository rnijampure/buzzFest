import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { CarouselClient } from "./CarouselClient";
import { CarouselShell, ITEMS } from "./CarouselShell";

export const BakeryFeaturedCarousel = () => {
  return (
    <div className="w-full">
      {/* MOBILE */}
      <div className="block md:hidden ">
        <div className="relative w-full h-55">
          <CloudinaryImage
            src={ITEMS[0].src}
            alt={ITEMS[0].name}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block ">
        <CarouselClient>
          <CarouselShell />
        </CarouselClient>
      </div>
    </div>
  );
};
