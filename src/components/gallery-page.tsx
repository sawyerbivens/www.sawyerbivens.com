"use client";

import { Nav } from "@/components/nav";

import { photos, type Photo } from "@/app/lib/photos";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import JustifiedGallery from "./justified-gallery";
import { Footer } from "./footer";

// 💡 This disables SSR *and* delays the import until client runtime

const navWidth = 299;

export function GalleryPage({
  active,
  filter,
}: {
  active: string;
  filter?: (photo: Photo) => boolean;
}) {
  // tailwind media lg = 1024px

  const { width } = useWindowDimensions();

  return (
    <main className="flex flex-col lg:flex-row min-h-screen">
      <Nav active={active} />
      <div className="flex-1 p-12">
        <JustifiedGallery
          photos={filter ? photos.filter((photo) => filter(photo)) : photos}
          containerWidth={
            width !== null ? (width > 1024 ? width - navWidth : width) : 414
          }
          paddingX={48}
        />
        <Footer className="mt-12" />
      </div>
    </main>
  );
}
