'use client';

import { skills } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

import { 
  FirebaseIcon,
  NextjsIcon, 
  NodejsIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon
} from '../icons';
import { BrainCircuit } from 'lucide-react';

// Dummy icons for Database and Cloud if they are not in lucide-react
const Database = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
);

const Cloud = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
);

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);


const iconMap: { [key: string]: React.ElementType } = {
  React: ReactIcon,
  'Next.js': NextjsIcon,
  TypeScript: TypescriptIcon,
  'Tailwind CSS': TailwindIcon,
  'Node.js': NodejsIcon,
  Firebase: FirebaseIcon,
  Python: BrainCircuit,
  'Scikit-learn': BrainCircuit,
  Pandas: BrainCircuit,
  Genkit: BrainCircuit,
  'Express.js': NodejsIcon,
  GraphQL: BrainCircuit,
  MongoDB: Database,
  PostgreSQL: Database,
  Docker: Cloud,
  'Google Cloud': Cloud,
  Vercel: Cloud,
  Git: Github,
};


export default function Skills() {
  return (
    <section id="skills" className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            My Expertise
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A look at the technologies and tools I work with.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {skills.tech.map((category) => (
            <Card key={category.category} className="overflow-hidden">
              <CardHeader className="flex-row items-center gap-4 space-y-0 bg-muted p-4">
                  <category.icon className="h-6 w-6 text-primary" />
                  <CardTitle className="m-0 font-headline text-xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {category.list.map((tech) => {
                    const Icon = iconMap[tech] || BrainCircuit;
                    return (
                      <div key={tech} className="flex flex-col items-center gap-2 rounded-lg border bg-background p-4 transition-transform hover:scale-105 hover:shadow-md">
                        <Icon className="h-8 w-8 text-accent" />
                        <span className="text-sm font-medium text-center">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
