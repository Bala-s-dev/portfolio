"use client";

import React, { useState } from "react";
import { analyzeResume } from "@/ai/flows/resume-analysis-groq";
import { generateMockInterviewQuestions } from "@/ai/flows/mock-interview-questions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BrainCircuit, Loader2, Sparkles, Wand2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function AiLab() {
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [questions, setQuestions] = useState<string[]>([]);

  const handleAnalyzeResume = async () => {
    if (!resumeText) {
      toast({ title: "Error", description: "Please paste your resume text.", variant: "destructive" });
      return;
    }
    setIsLoading(true);
    try {
      const output = await analyzeResume({ resumeText, jobDescription });
      setResult(output.analysis);
      toast({ title: "Analysis Complete", description: "Your resume has been processed by Groq AI." });
    } catch (error) {
      toast({ title: "Error", description: "Failed to analyze resume.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleMockInterview = async () => {
    if (!resumeText || !jobDescription) {
      toast({ title: "Error", description: "Both resume and job description are required for interview prep.", variant: "destructive" });
      return;
    }
    setIsLoading(true);
    try {
      const output = await generateMockInterviewQuestions({ 
        resumeContent: resumeText, 
        jobDescription 
      });
      setQuestions(output.questions);
      toast({ title: "Questions Generated", description: "Gemini AI has prepared your mock interview." });
    } catch (error) {
      toast({ title: "Error", description: "Failed to generate questions.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-lab" className="py-24 container px-4 max-w-4xl scroll-mt-20">
      <div className="text-center mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
          <BrainCircuit className="w-3.5 h-3.5" />
          <span>Interactive AI Playground</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">AI Lab Demo</h2>
        <p className="text-muted-foreground">
          Experience the power of the AI tools I build. Analyze your resume or prepare for interviews instantly.
        </p>
      </div>

      <Card className="glass-morphism border-white/5">
        <CardHeader>
          <Tabs defaultValue="analyze" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-white/5">
              <TabsTrigger value="analyze" className="gap-2">
                <Wand2 className="w-4 h-4" /> Resume Analysis
              </TabsTrigger>
              <TabsTrigger value="interview" className="gap-2">
                <Sparkles className="w-4 h-4" /> Mock Interview
              </TabsTrigger>
            </TabsList>

            <CardContent className="pt-8 space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Resume Text</label>
                  <Textarea 
                    placeholder="Paste your resume content here..." 
                    className="min-h-[150px] bg-black/40 border-white/10"
                    value={resumeText}
                    onChange={(e) => setResumeText(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Job Description (Optional for Analysis)</label>
                  <Textarea 
                    placeholder="Paste the target job description here..." 
                    className="min-h-[100px] bg-black/40 border-white/10"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                  />
                </div>
              </div>

              <TabsContent value="analyze">
                <Button 
                  onClick={handleAnalyzeResume} 
                  disabled={isLoading} 
                  className="w-full h-12 text-lg font-bold"
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Analyze with Groq AI"}
                </Button>
                {result && (
                  <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20 animate-reveal">
                    <h4 className="font-bold text-primary mb-4">Analysis Results</h4>
                    <div className="prose prose-invert max-w-none text-muted-foreground">
                      {result.split('\n').map((line, i) => <p key={i}>{line}</p>)}
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="interview">
                <Button 
                  onClick={handleMockInterview} 
                  disabled={isLoading} 
                  className="w-full h-12 text-lg font-bold"
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Generate Mock Questions with Gemini"}
                </Button>
                {questions.length > 0 && (
                  <div className="mt-8 space-y-4 animate-reveal">
                    <h4 className="font-bold text-accent mb-4">Interview Prep Questions</h4>
                    {questions.map((q, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors">
                        <span className="text-accent font-bold mr-2">Q{i+1}:</span> {q}
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>
            </CardContent>
          </Tabs>
        </CardHeader>
      </Card>
    </section>
  );
}