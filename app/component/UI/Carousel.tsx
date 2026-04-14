"use client";
import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi, // Import the API type
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils"; // shadcn helper for conditional classes
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";

export function BakeryFeaturedCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const items = [
    {
      name: "Sourdough Bread",
      baker: "Sarah's Kitchen",
      src: "1_withoutLogo_ejducv",
    },
    {
      name: "Chocolate Ganache",
      baker: "Maria's Sweets",
      src: "2_pf3lhm",
    },
    { name: "Lemon Tart", baker: "Emma's Pastries", src: "3_r0f7fx" },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  );

  // Initialize the API and listeners
  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full relative group">
      <Carousel
        setApi={setApi} // Attach the API
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-117 overflow-hidden">
                <CloudinaryImage
                  src={item.src}
                  alt={item.name}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-fill transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-end p-2 justify-end">
                  <div className="text-white  px-5 rounded-xl">
                    <CloudinaryImage
                      src="logo.new_ndfwmw"
                      alt={item.name}
                      width={200}
                      height={200}
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-fill transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* --- Dots Navigation --- */}
      <div className="flex justify-center gap-2 mt-0  top-[60%] z-20 absolute left-[50%] ">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={cn(
              "h-2 w-2 rounded-full transition-all duration-300",
              current === i
                ? "bg-orange-500 w-6" // Active dot is wider (Bakery Orange)
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
