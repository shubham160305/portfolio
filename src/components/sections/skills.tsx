'use client';

import { skills } from '@/lib/data';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { ChartContainer, ChartTooltipContent } from '../ui/chart';

import { 
  FirebaseIcon,
  NextjsIcon, 
  NodejsIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon
} from '../icons';

const iconMap: { [key: string]: React.ElementType } = {
  React: ReactIcon,
  'Next.js': NextjsIcon,
  TypeScript: TypescriptIcon,
  'Tailwind CSS': TailwindIcon,
  'Node.js': NodejsIcon,
  Firebase: FirebaseIcon,
};


export default function Skills() {
  return (
    <section id="skills" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            My Expertise
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A look at my proficiency across different domains and the technologies I work with.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Skill Proficiency</CardTitle>
              <CardDescription>My confidence level in various development areas.</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  level: {
                    label: 'Proficiency',
                    color: 'hsl(var(--primary))',
                  },
                }}
                className="h-[300px] w-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={skills.chartData} layout="vertical" margin={{ left: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                    <XAxis type="number" hide />
                    <YAxis
                      dataKey="name"
                      type="category"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: 'hsl(var(--foreground))', fontSize: 14 }}
                      width={80}
                    />
                    <Tooltip cursor={{ fill: 'hsl(var(--muted))' }} content={<ChartTooltipContent indicator="dot" />} />
                    <Bar dataKey="level" radius={[0, 4, 4, 0]} fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
          {skills.tech.map((category) => (
            <Card key={category.category}>
              <CardHeader className="flex-row items-center gap-4 space-y-0 pb-2">
                  <category.icon className="h-6 w-6 text-primary" />
                  <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.list.map((tech) => {
                    const Icon = iconMap[tech];
                    return (
                      <div key={tech} className="flex items-center gap-2 rounded-full border bg-muted px-3 py-1 text-sm">
                        {Icon && <Icon className="h-4 w-4" />}
                        <span>{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
          </div>

        </div>
      </div>
    </section>
  );
}
