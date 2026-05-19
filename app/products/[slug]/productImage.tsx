"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { Button } from "@/components/ui/button";

// If your carousel re-exports Embla types, you can import it; otherwise keep as any
// import type { EmblaCarouselType } from "embla-carousel";

type Props = {
  images: string[];
  name: string;
};

export default function ProductImageCarousel({ images, name }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Magnifier state
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({});
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setActiveIndex(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => api.off("select", onSelect);
  }, [api]);

  if (!images || images.length === 0) return null;

  const scrollTo = (index: number) => {
    if (!api) return;
    api.scrollTo(index);
  };

  // Magnifier handlers
  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(2)",
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ transform: "scale(1)" });
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {/* MAIN CAROUSEL */}
      <Carousel className="w-full" opts={{ loop: true }} setApi={setApi}>
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <Card className="border-0">
                <CardContent className="p-0">
                  <div
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => setIsModalOpen(true)}
                    className="overflow-hidden rounded-2xl cursor-zoom-in"
                  >
                    <CloudinaryImage
                      width="500"
                      height="500"
                      src={img}
                      alt={`${name}-${index}`}
                      className="w-full h-full object-cover transition-transform duration-300"
                      style={zoomStyle}
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* NAV BUTTONS BELOW IMAGE */}
      {images.length > 1 && (
        <div className="flex justify-center gap-4">
          <Button variant="outline" onClick={() => api?.scrollPrev()}>
            Previous
          </Button>
          <Button variant="outline" onClick={() => api?.scrollNext()}>
            Next
          </Button>
        </div>
      )}

      {/* THUMBNAILS */}
      <div className="flex gap-2 overflow-x-auto">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition ${
              activeIndex === index
                ? "border-black"
                : "border-transparent opacity-60"
            }`}
          >
            <CloudinaryImage
              width="100"
              height="100"
              src={img}
              alt={`thumb-${index}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* FULLSCREEN MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="max-w-4xl w-full p-4">
            <CloudinaryImage
              width="1000"
              height="800"
              src={images[activeIndex]}
              alt="fullscreen"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
