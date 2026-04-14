// components/CloudinaryImage.tsx
"use client";

import { CldImage } from "next-cloudinary";
import type { CldImageProps } from "next-cloudinary";

export function CloudinaryImage(props: CldImageProps) {
  return <CldImage {...props} />;
}

// // app/page.tsx (Server Component - no 'use client' needed)
// import { getCldImageUrl } from 'next-cloudinary';
// import { CloudinaryImage } from '@/components/CloudinaryImage';

// export default async function Page() {
//   // Server-side data fetching and processing
//   const imageUrl = getCldImageUrl({ src: 'sample', width: 100 });
//   const response = await fetch(imageUrl);
//   const arrayBuffer = await response.arrayBuffer();
//   const buffer = Buffer.from(arrayBuffer);
//   const base64 = buffer.toString("base64");
//   const blurDataURL = `data:${response.type};base64,${base64}`;

//   return (
//     <CloudinaryImage
//       src="sample"
//       width="600"
//       height="400"
//       placeholder="blur"
//       blurDataURL={blurDataURL}
//       alt="Image with blur placeholder"
//     />
//   );
// }
