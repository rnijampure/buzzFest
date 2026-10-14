"use client"; // Switch to a client wrapper to handle safe window-size mounts

import { useState, useEffect } from "react";
import { CarouselClient } from "./CarouselClient";
import { CarouselShell, ITEMS } from "./CarouselShell";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";

export const BakeryFeaturedCarousel = () => {
  const [mounted, setMounted] = useState(false);

  // Wait until the component mounts on the client before rendering the desktop carousel
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full">
      {/* MOBILE - Pure, raw, un-shifted HTML for instant LCP */}
      <div className="block md:hidden">
        <div className="relative w-full h-55">
          <CloudinaryImage
            src={ITEMS[0].src}
            alt={ITEMS[0].name}
            fill
            priority
            loading="eager"
            fetchPriority="high"
            className="object-cover"
          />
        </div>
      </div>

      {/* DESKTOP - Only mounts if on a real browser, completely hidden from mobile audits */}
      <div className="hidden md:block">
        {mounted && (
          <CarouselClient>
            {ITEMS.map((item, index) => (
              <CarouselShell key={item.src} item={item} isFirst={index === 0} />
            ))}
          </CarouselClient>
        )}
      </div>
    </div>
  );
};
