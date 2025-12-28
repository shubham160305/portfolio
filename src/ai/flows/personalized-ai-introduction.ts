'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a personalized AI introduction for Shubham's portfolio.
 *
 * - generatePersonalizedIntroduction - A function that generates a personalized introduction based on the viewer's job title.
 * - PersonalizedIntroductionInput - The input type for the generatePersonalizedIntroduction function.
 * - PersonalizedIntroductionOutput - The return type for the generatePersonalizedIntroduction function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedIntroductionInputSchema = z.object({
  jobTitle: z
    .string()
    .describe('The job title of the person viewing the portfolio.'),
  viewerProfile: z
    .string()
    .optional()
    .describe('Optional profile information about the viewer.'),
  shubhamProfile: z.string().describe("Information about Shubham Bhagat, including skills, experience, and interests."),
});
export type PersonalizedIntroductionInput = z.infer<
  typeof PersonalizedIntroductionInputSchema
>;

const PersonalizedIntroductionOutputSchema = z.object({
  introduction: z
    .string()
    .describe('A personalized introduction for Shubham Bhagat.'),
});
export type PersonalizedIntroductionOutput = z.infer<
  typeof PersonalizedIntroductionOutputSchema
>;

export async function generatePersonalizedIntroduction(
  input: PersonalizedIntroductionInput
): Promise<PersonalizedIntroductionOutput> {
  return personalizedIntroductionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedIntroductionPrompt',
  input: {
    schema: PersonalizedIntroductionInputSchema,
  },
  output: {
    schema: PersonalizedIntroductionOutputSchema,
  },
  prompt: `You are an AI assistant specializing in creating personalized introductions.

You are creating an introduction for Shubham Bhagat, a candidate whose portfolio is being viewed by a potential employer.

The potential employer's job title is: {{{jobTitle}}}
{{#if viewerProfile}}Potential employer profile information: {{{viewerProfile}}}{{/if}}

Shubham Bhagat's profile information: {{{shubhamProfile}}}

Your goal is to create a brief, engaging, and professional introduction that highlights Shubham's relevant skills and experience, tailored to the viewer's job title.
Reason whether including a personal message that alludes to shared interests/experiences/values will improve their impression of the profile. If there is no clear shared interests then do not include any personal message.

Introduction:`, // Removed the json formatting instruction to prevent the LLM from only outputting json
});

const personalizedIntroductionFlow = ai.defineFlow(
  {
    name: 'personalizedIntroductionFlow',
    inputSchema: PersonalizedIntroductionInputSchema,
    outputSchema: PersonalizedIntroductionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
