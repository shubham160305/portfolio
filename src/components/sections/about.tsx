import Image from 'next/image';
import { personalInfo } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full shadow-lg md:h-64 md:w-64">
             <Image
                src="https://picsum.photos/seed/shubham/600/600"
                alt="Shubham Bhagat"
                fill
                className="object-cover"
                data-ai-hint="professional portrait"
              />
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              About Me
            </h2>
            <p className="mt-6 text-lg leading-8 text-foreground/80">
              {personalInfo.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
