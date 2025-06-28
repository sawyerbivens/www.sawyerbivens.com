"use client";

import { GalleryPage } from "@/components/gallery-page";

export default function ArchitectureAlbum() {
  return (
    <GalleryPage
      active="/albums/architecture"
      filter={(photo) => photo.tags.includes("architecture")}
    />
  );
}
