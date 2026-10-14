"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

export const CarouselClient = ({ children }: { children: React.ReactNode }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const plugin = React.useMemo(
    () => Autoplay({ delay: 3000, stopOnInteraction: false }),
    [],
  );

  React.useEffect(() => {
    if (!api) return;
    const handler = () => setCurrent(api.selectedScrollSnap());
    api.on("select", handler);
    return () => {
      api.off("select", handler);
    };
  }, [api]);

  const count = api?.scrollSnapList().length ?? 0;

  return (
    <div className="relative group">
      <Carousel
        setApi={setApi}
        plugins={[plugin]}
        onMouseEnter={plugin.stop}
        onMouseLeave={plugin.reset}
      >
        <CarouselContent>
          {React.Children.map(children, (child, i) => (
            <CarouselItem key={i}>{child}</CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-2 z-20">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={cn(
              "h-2 w-2 rounded-full transition-all duration-300",
              current === i ? "w-6 bg-brand-orange" : "bg-muted-foreground/30",
            )}
          />
        ))}
      </div>
    </div>
  );
};
