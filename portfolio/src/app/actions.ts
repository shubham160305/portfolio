'use server';

import {
  generatePersonalizedIntroduction,
  type PersonalizedIntroductionInput,
} from '@/ai/flows/personalized-ai-introduction';
import { personalInfo } from '@/lib/data';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors and try again.',
      success: false,
    };
  }

  // Here you would typically send an email or save to a database.
  // For this example, we'll just log it.
  console.log('Contact form submitted:');
  console.log(validatedFields.data);

  return {
    message: 'Thank you for your message! I will get back to you soon.',
    success: true,
  };
}

export async function getPersonalizedIntro(input: { jobTitle: string }) {
  if (!input.jobTitle) {
    return { introduction: personalInfo.bio };
  }

  const aiInput: PersonalizedIntroductionInput = {
    jobTitle: input.jobTitle,
    shubhamProfile: personalInfo.shubhamProfile,
  };

  try {
    const result = await generatePersonalizedIntroduction(aiInput);
    return { introduction: result.introduction };
  } catch (error) {
    console.error('Error generating personalized introduction:', error);
    // Fallback to the default bio on error
    return { introduction: personalInfo.bio };
  }
}
