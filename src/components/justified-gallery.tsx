// components/JustifiedGallery.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import justifiedLayout from "justified-layout";

interface Photo {
  src: string;
  width: number;
  height: number;
  alt?: string;
}
type Photos = Photo[];

// const photos = [
//   { src: "/img/IMG_1.jpg", width: 2, height: 3 },
// ];

export default function JustifiedGallery({
  photos,
  containerWidth,
  paddingX,
}: {
  photos: Photos;
  containerWidth: number;
  paddingX?: number;
}) {
  const [layout, setLayout] = useState<any | null>(null);

  useEffect(() => {
    // const containerWidth = window.innerWidth - 32;

    const aspectRatios = photos.map((p) => p.width / p.height);
    const geometry = justifiedLayout(aspectRatios, {
      containerWidth: containerWidth - (paddingX ? paddingX : 0) * 2,
      targetRowHeight: 300,
      boxSpacing: 10,
    });

    setLayout(geometry);
  }, [containerWidth, paddingX, photos]);

  if (!layout) return null;

  return (
    <div
      className="relative"
      style={{
        width: layout.containerWidth,
        position: "relative",
        height: layout.containerHeight,
      }}
    >
      {layout.boxes.map((box: any, idx: any) => {
        const photo = photos[idx];
        return (
          <div
            key={idx}
            style={{
              position: "absolute",
              top: box.top,
              left: box.left,
              width: box.width,
              height: box.height,
            }}
          >
            <Image
              src={photo.src}
              alt={`Photo ${idx}`}
              width={box.width}
              height={box.height}
              className="object-cover w-full h-full"
              sizes="(max-width: 1024px) 100vw, 1000px"
            />
          </div>
        );
      })}
    </div>
  );
}
