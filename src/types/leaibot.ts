export type GalleryCategory = "new" | "activities" | "news" | "cases";

export interface GalleryCardData {
  badge: string;
  description: string;
  image?: string;
  name: string;
  price: string;
  visualLabel?: string;
  visualTone?: "aubergine" | "lavender" | "slate";
}

export interface GalleryCategoryData {
  cards: GalleryCardData[];
  id: GalleryCategory;
  label: string;
}
