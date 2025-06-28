"use client";

import { GalleryPage } from "@/components/gallery-page";

export default function LandscapesPage() {
  return (
    <GalleryPage
      active="/albums/landscapes"
      filter={(photo) => photo.tags.includes("landscape")}
    />
  );
}
