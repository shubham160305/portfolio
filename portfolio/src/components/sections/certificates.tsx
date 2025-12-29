import { certificates } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Award } from 'lucide-react';

export default function Certificates() {
  return (
    <section id="certificates" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Certifications & Achievements
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A showcase of my commitment to continuous learning and professional development.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <Card key={index} className="flex flex-col text-left transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <div className="mb-4 flex justify-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Award className="h-6 w-6" />
                  </div>
                </div>
                <CardTitle className="font-headline text-xl">{cert.title}</CardTitle>
                <CardDescription className="text-md !mt-1 font-semibold">{cert.issuer}</CardDescription>
                <CardDescription>{cert.year}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
