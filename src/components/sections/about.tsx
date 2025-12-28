import { personalInfo } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            About Me
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            {personalInfo.bio}
          </p>
        </div>
      </div>
    </section>
  );
}
