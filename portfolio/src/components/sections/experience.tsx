import { experiences } from '@/lib/data';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            My Journey
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A timeline of my professional experience and education.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-1/2 -ml-px h-full w-0.5 bg-border"></div>
          {experiences.map((item, index) => (
            <div key={index} className="group relative mb-8 flex items-center">
              <div className="hidden md:flex w-1/2 pr-8 justify-end">
                {index % 2 === 0 && <ExperienceCard {...item} />}
              </div>
              <div className="hidden md:flex w-1/2 pl-8">
                {index % 2 !== 0 && <ExperienceCard {...item} />}
              </div>
              <div className="flex md:hidden w-full pl-8">
                 <ExperienceCard {...item} />
              </div>

              <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                {item.role.toLowerCase().includes('bachelor') ? (
                  <GraduationCap className="h-5 w-5" />
                ) : (
                  <Briefcase className="h-5 w-5" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ role, company, period, description }: typeof experiences[0]) => (
    <div className="w-full transform rounded-lg bg-background p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <p className="text-sm text-muted-foreground">{period}</p>
      <h3 className="mt-1 font-headline text-xl font-semibold text-primary">{role}</h3>
      <p className="mt-1 text-md font-medium">{company}</p>
      <p className="mt-3 text-sm text-foreground/80">{description}</p>
    </div>
)
