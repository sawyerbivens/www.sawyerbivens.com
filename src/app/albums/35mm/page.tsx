"use client";

import { GalleryPage } from "@/components/gallery-page";

export default function Film35mmPage() {
  return (
    <GalleryPage
      active="/albums/35mm"
      filter={(photo) => photo.tags.includes("35mm")}
    />
  );
}
