// components/CloudinaryImage.tsx
"use client";

import { CldImage } from "next-cloudinary";
import type { CldImageProps } from "next-cloudinary";

export function CloudinaryImage(props: CldImageProps) {
  return <CldImage {...props} />;
}
