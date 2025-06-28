"use client";

import { GalleryPage } from "@/components/gallery-page";

export default function PortraitsPage() {
  return (
    <GalleryPage
      active="/albums/portraits"
      filter={(photo) => photo.tags.includes("portrait")}
    />
  );
}
