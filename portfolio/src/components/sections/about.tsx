import { personalInfo } from '@/lib/data';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
           <div className="relative aspect-square max-w-md mx-auto">
                <Image
                src=""
                alt="Shubham Bhagat"
                width={600}
                height={600}
                className="rounded-full object-cover shadow-lg"
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
