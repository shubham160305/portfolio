import data from './gallery-images.json';

export type GalleryImage = {
  id: string;
  imageUrl: string;
  imageHint: string;
  alt: string;
};

export const GalleryImages: GalleryImage[] = data.galleryImages;
