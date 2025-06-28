export type PhotoTag =
  | "35mm"
  | "portrait"
  | "landscape"
  | "restaraunt"
  | "animal"
  | "architecture"
  | "couple"
  | "family";

export interface Photo {
  src: string;
  height: number;
  width: number;
  alt?: string;
  tags: PhotoTag[];
}

// { src: "/img/IMG_1.jpg", width: 2, height: 3, tags: [""] },

export const photos: Photo[] = [
  { src: "/img/IMG_1.jpg", width: 2, height: 3, tags: ["portrait"] },
  { src: "/img/IMG_2.jpg", width: 2, height: 3, tags: ["restaraunt"] },
  { src: "/img/IMG_3.jpg", width: 4, height: 5, tags: ["restaraunt"] },
  { src: "/img/IMG_4.jpg", width: 16, height: 9, tags: ["restaraunt"] },
  { src: "/img/IMG_5.jpg", width: 4, height: 5, tags: ["restaraunt"] },
  { src: "/img/IMG_6.jpg", width: 3, height: 2, tags: ["35mm"] },
  { src: "/img/IMG_7.jpg", width: 2, height: 3, tags: ["portrait", "animal"] },
  { src: "/img/IMG_8.jpg", width: 2, height: 3, tags: ["portrait", "animal"] },
  { src: "/img/IMG_9.jpg", width: 3, height: 2, tags: ["restaraunt", "35mm"] },
  { src: "/img/IMG_10.jpg", width: 4, height: 5, tags: ["restaraunt", "35mm"] },
  { src: "/img/IMG_11.jpg", width: 2, height: 3, tags: ["restaraunt", "35mm"] },
  {
    src: "/img/IMG_12.jpg",
    width: 3,
    height: 2,
    tags: ["35mm", "architecture"],
  },
  { src: "/img/IMG_13.jpg", width: 3, height: 2, tags: ["35mm"] },
  { src: "/img/IMG_14.jpg", width: 2, height: 3, tags: ["35mm"] },
  { src: "/img/IMG_15.jpg", width: 4, height: 5, tags: ["portrait"] },
  { src: "/img/IMG_16.jpg", width: 2, height: 3, tags: ["portrait"] },
  { src: "/img/IMG_17.jpg", width: 3, height: 2, tags: ["portrait"] },
  { src: "/img/IMG_18.jpg", width: 3, height: 2, tags: ["35mm", "landscape"] },
  { src: "/img/IMG_19.jpg", width: 16, height: 9, tags: ["35mm", "landscape"] },
  { src: "/img/IMG_20.jpg", width: 2, height: 3, tags: ["35mm", "landscape"] },
  { src: "/img/IMG_21.jpg", width: 2, height: 3, tags: ["35mm", "portrait"] },
  { src: "/img/IMG_22.jpg", width: 3, height: 2, tags: ["35mm", "landscape"] },
  {
    src: "/img/IMG_23.jpg",
    width: 4,
    height: 5,
    tags: ["35mm", "portrait", "landscape"],
  },
  { src: "/img/IMG_24.jpg", width: 3, height: 2, tags: ["35mm", "portrait"] },
  {
    src: "/img/IMG_25.jpg",
    width: 2,
    height: 3,
    tags: ["35mm", "architecture"],
  },
  {
    src: "/img/IMG_26.jpg",
    width: 2,
    height: 3,
    tags: ["35mm", "landscape", "architecture"],
  },
  { src: "/img/IMG_27.jpg", width: 2, height: 3, tags: ["35mm", "restaraunt"] },
  { src: "/img/IMG_28.jpg", width: 3, height: 2, tags: ["animal"] },
  { src: "/img/IMG_29.jpg", width: 3, height: 2, tags: ["35mm"] },
  { src: "/img/IMG_30.jpg", width: 4, height: 5, tags: ["portrait"] },
  { src: "/img/IMG_31.jpg", width: 3, height: 2, tags: ["35mm", "restaraunt"] },
  {
    src: "/img/IMG_32.jpg",
    width: 2,
    height: 3,
    tags: ["35mm", "portrait", "couple"],
  },
  {
    src: "/img/IMG_33.jpg",
    width: 2,
    height: 3,
    tags: ["35mm", "architecture"],
  },
  { src: "/img/IMG_34.jpg", width: 2, height: 3, tags: ["portrait"] },
  {
    src: "/img/IMG_35.jpg",
    width: 16,
    height: 9,
    tags: ["portrait", "landscape"],
  },
  { src: "/img/IMG_36.jpg", width: 2, height: 3, tags: ["portrait"] },
  { src: "/img/IMG_37.jpg", width: 2, height: 3, tags: ["portrait"] },
  {
    src: "/img/IMG_38.jpg",
    width: 3,
    height: 2,
    tags: ["portrait", "restaraunt"],
  },
];
