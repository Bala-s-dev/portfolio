
'use server';

/**
 * @fileOverview A Career Matchmaker AI flow that suggests roles based on resume skills.
 *
 * - suggestJobs - A function that suggests job roles and skill gaps.
 * - SuggestJobsInput - The input type for the suggestJobs function.
 * - SuggestJobsOutput - The return type for the suggestJobs function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestJobsInputSchema = z.object({
  resumeText: z.string().describe('The content of the user resume.'),
});
export type SuggestJobsInput = z.infer<typeof SuggestJobsInputSchema>;

const SuggestJobsOutputSchema = z.object({
  suggestedRoles: z.array(z.object({
    title: z.string().describe('Job title'),
    matchPercentage: z.number().describe('How well the resume fits this role'),
    reasoning: z.string().describe('Why this is a good fit'),
    skillGaps: z.array(z.string()).describe('Skills to learn to be perfect for this role'),
  })),
});
export type SuggestJobsOutput = z.infer<typeof SuggestJobsOutputSchema>;

export async function suggestJobs(input: SuggestJobsInput): Promise<SuggestJobsOutput> {
  return suggestJobsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestJobsPrompt',
  input: {schema: SuggestJobsInputSchema},
  output: {schema: SuggestJobsOutputSchema},
  prompt: `You are an AI recruitment specialist. Analyze the following resume content and suggest the top 3 most relevant job roles the candidate should apply for. 
  
  For each role, provide:
  1. A clear Job Title.
  2. A match percentage based on their current skills.
  3. A brief reasoning based on their experience.
  4. A list of 2-3 specific "Skill Gaps" they should fill to be more competitive.

  Resume Content:
  {{resumeText}}

  Focus on high-growth tech roles like AI Engineer, Full-Stack Developer, Security Specialist, etc.`,
});

const suggestJobsFlow = ai.defineFlow(
  {
    name: 'suggestJobsFlow',
    inputSchema: SuggestJobsInputSchema,
    outputSchema: SuggestJobsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
