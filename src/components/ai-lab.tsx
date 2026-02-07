
"use client";

import React, { useState } from "react";
import { analyzeResume } from "@/ai/flows/resume-analysis-groq";
import { generateMockInterviewQuestions } from "@/ai/flows/mock-interview-questions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BrainCircuit, Loader2, Sparkles, Wand2, CheckCircle2, ChevronRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function AiLab() {
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [questions, setQuestions] = useState<string[]>([]);

  const handleAnalyzeResume = async () => {
    if (!resumeText) {
      toast({ title: "Input Required", description: "Please paste your resume text to begin.", variant: "destructive" });
      return;
    }
    setIsLoading(true);
    try {
      const output = await analyzeResume({ resumeText, jobDescription });
      setResult(output.analysis);
      toast({ title: "Analysis Complete", description: "Groq AI has finished processing your resume." });
    } catch (error) {
      toast({ title: "Analysis Failed", description: "There was an error connecting to the AI service.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleMockInterview = async () => {
    if (!resumeText || !jobDescription) {
      toast({ title: "More Context Needed", description: "Both resume and job description are required for interview prep.", variant: "destructive" });
      return;
    }
    setIsLoading(true);
    try {
      const output = await generateMockInterviewQuestions({ 
        resumeContent: resumeText, 
        jobDescription 
      });
      setQuestions(output.questions);
      toast({ title: "Preparation Ready", description: "Gemini AI has generated your custom interview questions." });
    } catch (error) {
      toast({ title: "Generation Failed", description: "Failed to generate mock interview questions.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-lab" className="py-24 container px-4 max-w-4xl scroll-mt-20">
      <div className="text-center mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-wider">
          <BrainCircuit className="w-3.5 h-3.5" />
          <span>Intelligent Lab</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Interactive AI Demos</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Try the AI systems I develop. These tools use Groq (Mixtral) and Google (Gemini) for high-performance reasoning.
        </p>
      </div>

      <Card className="glass-morphism border-white/5 shadow-2xl">
        <CardContent className="p-1">
          <Tabs defaultValue="analyze" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-white/[0.03] p-1 rounded-t-xl h-14">
              <TabsTrigger value="analyze" className="gap-2 text-sm font-bold data-[state=active]:bg-white/10 data-[state=active]:text-primary transition-all">
                <Wand2 className="w-4 h-4" /> Resume Analysis
              </TabsTrigger>
              <TabsTrigger value="interview" className="gap-2 text-sm font-bold data-[state=active]:bg-white/10 data-[state=active]:text-accent transition-all">
                <Sparkles className="w-4 h-4" /> Mock Interview
              </TabsTrigger>
            </TabsList>

            <div className="p-8 space-y-8">
              <div className="grid gap-6">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary" /> Resume Content
                  </label>
                  <Textarea 
                    placeholder="Paste your professional experience here..." 
                    className="min-h-[160px] bg-black/40 border-white/5 focus:border-primary/50 transition-all text-sm leading-relaxed"
                    value={resumeText}
                    onChange={(e) => setResumeText(e.target.value)}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-accent" /> Target Job Description
                  </label>
                  <Textarea 
                    placeholder="Paste the job you're aiming for..." 
                    className="min-h-[100px] bg-black/40 border-white/5 focus:border-accent/50 transition-all text-sm leading-relaxed"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                  />
                </div>
              </div>

              <TabsContent value="analyze" className="mt-0 space-y-8">
                <Button 
                  onClick={handleAnalyzeResume} 
                  disabled={isLoading} 
                  className="w-full h-14 text-lg font-bold shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-3">
                      <Loader2 className="w-5 h-5 animate-spin" /> Analyzing with Mixtral...
                    </div>
                  ) : "Analyze with Groq AI"}
                </Button>
                {result && (
                  <div className="rounded-2xl overflow-hidden border border-primary/20 bg-primary/[0.03] animate-reveal">
                    <div className="bg-primary/10 px-6 py-3 flex items-center justify-between border-b border-primary/20">
                       <h4 className="font-bold text-primary flex items-center gap-2">
                         <CheckCircle2 className="w-4 h-4" /> AI Feedback
                       </h4>
                    </div>
                    <div className="p-6 prose prose-invert max-w-none text-muted-foreground/90 text-sm leading-loose">
                      {result.split('\n').map((line, i) => line ? <p key={i} className="mb-4">{line}</p> : null)}
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="interview" className="mt-0 space-y-8">
                <Button 
                  onClick={handleMockInterview} 
                  disabled={isLoading} 
                  className="w-full h-14 text-lg font-bold shadow-lg shadow-accent/20 bg-accent hover:bg-accent/90"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-3">
                      <Loader2 className="w-5 h-5 animate-spin" /> Generating Questions...
                    </div>
                  ) : "Generate Questions with Gemini"}
                </Button>
                {questions.length > 0 && (
                  <div className="grid gap-4 animate-reveal">
                    <h4 className="font-bold text-accent mb-2 uppercase tracking-widest text-xs">Interview Roadmap</h4>
                    {questions.map((q, i) => (
                      <div key={i} className="group p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-accent/30 hover:bg-accent/[0.02] transition-all flex gap-4 items-start">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-black text-xs">
                          {i+1}
                        </div>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors pt-1">
                          {q}
                        </p>
                        <ChevronRight className="w-4 h-4 text-accent/20 ml-auto group-hover:text-accent group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
}
