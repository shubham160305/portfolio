import Image from 'next/image';
import { projects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Github, Globe } from 'lucide-react';

export default function Projects() {
  const getImageForProject = (id: string) => {
    return PlaceHolderImages.find((img) => img.id === id);
  };

  return (
    <section id="projects" className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            My Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Here are some of the projects I'm proud of.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => {
            const projectImage = getImageForProject(project.id);
            return (
              <Card key={project.id} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                {projectImage && (
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={projectImage.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={projectImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2 bg-muted/50 p-4">
                  <Button variant="ghost" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
