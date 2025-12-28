'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

import { submitContactForm } from '@/app/actions';
import { personalInfo } from '@/lib/data';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Smartphone } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [state, formAction] = useActionState(submitContactForm, { message: '', success: false });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Success!' : 'Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        form.reset();
      }
    }
  }, [state, toast, form]);

  return (
    <section id="contact" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question or want to work together? Leave me a message.
          </p>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-8">
              <Card>
                  <CardHeader className="flex-row items-start gap-4 space-y-0">
                      <Mail className="h-8 w-8 text-primary"/>
                      <div>
                          <CardTitle>Email</CardTitle>
                          <CardDescription>
                            <a href={`mailto:${personalInfo.contact.email}`} className="hover:underline">
                              {personalInfo.contact.email}
                            </a>
                          </CardDescription>
                      </div>
                  </CardHeader>
              </Card>
              <Card>
                  <CardHeader className="flex-row items-start gap-4 space-y-0">
                      <Smartphone className="h-8 w-8 text-primary"/>
                      <div>
                          <CardTitle>Phone</CardTitle>
                          <CardDescription>{personalInfo.contact.phone}</CardDescription>
                      </div>
                  </CardHeader>
              </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form action={formAction} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your message..." {...field} rows={5} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <SubmitButton />
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}
