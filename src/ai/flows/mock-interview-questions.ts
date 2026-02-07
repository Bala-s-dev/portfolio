'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating tailored mock interview questions based on a user's resume and job description, leveraging the Gemini API.
 *
 * - generateMockInterviewQuestions - A function that generates mock interview questions.
 * - MockInterviewQuestionsInput - The input type for the generateMockInterviewQuestions function.
 * - MockInterviewQuestionsOutput - The output type for the generateMockInterviewQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MockInterviewQuestionsInputSchema = z.object({
  resumeContent: z.string().describe('The content of the resume as plain text.'),
  jobDescription: z.string().describe('The job description for the target role.'),
});
export type MockInterviewQuestionsInput = z.infer<typeof MockInterviewQuestionsInputSchema>;

const MockInterviewQuestionsOutputSchema = z.object({
  questions: z.array(z.string()).describe('An array of tailored mock interview questions.'),
});
export type MockInterviewQuestionsOutput = z.infer<typeof MockInterviewQuestionsOutputSchema>;

export async function generateMockInterviewQuestions(
  input: MockInterviewQuestionsInput
): Promise<MockInterviewQuestionsOutput> {
  return generateMockInterviewQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'mockInterviewQuestionsPrompt',
  input: {schema: MockInterviewQuestionsInputSchema},
  output: {schema: MockInterviewQuestionsOutputSchema},
  prompt: `You are an expert career coach specializing in preparing candidates for job interviews.

  Given the following resume content and job description, generate a list of mock interview questions that are highly relevant to the candidate's skills and the requirements of the role.

  Resume Content:
  {{resumeContent}}

  Job Description:
  {{jobDescription}}

  Focus on behavioral questions, technical questions, and questions that assess the candidate's fit for the company culture.
  Provide at least 5 questions.

  Output the questions as a JSON array of strings. Do not include any introductory or concluding remarks.`,
});

const generateMockInterviewQuestionsFlow = ai.defineFlow(
  {
    name: 'generateMockInterviewQuestionsFlow',
    inputSchema: MockInterviewQuestionsInputSchema,
    outputSchema: MockInterviewQuestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
