import { personalInfo } from '@/lib/data';
import { PersonalizedIntro } from '../personalized-intro';
import { Button } from '../ui/button';
import { Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[calc(100dvh-5rem)] items-center bg-card">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white_0%,transparent_100%)] dark:bg-grid-slate-700/40"></div>
      <div className="container relative z-10 mx-auto px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="font-headline text-5xl font-bold tracking-tight text-primary sm:text-6xl md:text-7xl lg:text-8xl">
          {personalInfo.name}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground sm:text-xl md:text-2xl">
          {personalInfo.title}
        </p>
        <div className="mt-8">
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
