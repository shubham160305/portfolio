import Image from 'next/image';
import { GalleryImages } from '@/lib/gallery-images';
import { Card } from '../ui/card';

export default function Gallery() {
  return (
    <section id="gallery" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Gallery
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A glimpse into my world beyond the code.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {GalleryImages.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-lg">
              <Card className="overflow-hidden">
                <Image
                  src={image.imageUrl}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  data-ai-hint={image.imageHint}
                />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
