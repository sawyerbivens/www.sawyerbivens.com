"use client";

import { GalleryPage } from "@/components/gallery-page";

export default function RestarauntsPage() {
  return (
    <GalleryPage
      active="/albums/restaraunts"
      filter={(photo) => photo.tags.includes("restaraunt")}
    />
  );
}
