import Image from 'next/image';
import { personalInfo } from '@/lib/data';
import { PersonalizedIntro } from '../personalized-intro';
import { Button } from '../ui/button';
import { Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[calc(100dvh-5rem)] items-center bg-card">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white_0%,transparent_100%)] dark:bg-grid-slate-700/40"></div>
      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
          <div className="relative h-48 w-48 flex-shrink-0 overflow-hidden rounded-full shadow-lg md:h-56 md:w-56">
            <Image
              src="https://picsum.photos/seed/shubham/600/600"
              alt="Shubham Bhagat"
              fill
              className="object-cover"
              data-ai-hint="professional portrait"
              priority
            />
          </div>
          <div className="flex-grow">
            <h1 className="font-headline text-5xl font-bold tracking-tight text-primary sm:text-6xl md:text-7xl">
              {personalInfo.name}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground sm:text-xl md:text-2xl">
              {personalInfo.title}
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <PersonalizedIntro />
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#contact">
              Get in Touch
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
