"use client";

import React, { useState } from "react";
import { analyzeResume } from "@/ai/flows/resume-analysis-groq";
import { generateMockInterviewQuestions } from "@/ai/flows/mock-interview-questions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BrainCircuit, Loader2, Sparkles, Wand2, CheckCircle2, ChevronRight, Terminal, Cpu } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function AiLab() {
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [questions, setQuestions] = useState<string[]>([]);

  const handleAnalyzeResume = async () => {
    if (!resumeText) {
      toast({ title: "Memory Empty", description: "Inject resume data to begin analysis.", variant: "destructive" });
      return;
    }
    setIsLoading(true);
    try {
      const output = await analyzeResume({ resumeText, jobDescription });
      setResult(output.analysis);
      toast({ title: "Synthesis Complete", description: "Groq LPU has optimized your profile." });
    } catch (error) {
      toast({ title: "Neural Link Error", description: "AI service is currently non-responsive.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleMockInterview = async () => {
    if (!resumeText || !jobDescription) {
      toast({ title: "Data Conflict", description: "Requires bilateral context (Resume + Job).", variant: "destructive" });
      return;
    }
    setIsLoading(true);
    try {
      const output = await generateMockInterviewQuestions({ 
        resumeContent: resumeText, 
        jobDescription 
      });
      setQuestions(output.questions);
      toast({ title: "Simulation Ready", description: "Gemini 2.5 has prepared the protocol." });
    } catch (error) {
      toast({ title: "Protocol Failed", description: "Simulation engine error.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-lab" className="py-24 container px-4 max-w-5xl scroll-mt-20">
      <div className="flex flex-col items-center text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-400/10 border border-rose-400/20 text-[10px] font-black uppercase tracking-[0.3em] text-rose-400">
          <Cpu className="w-3.5 h-3.5" />
          <span>Neural Sandbox</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter">AI <span className="text-rose-400 italic">Playground</span></h2>
        <p className="text-muted-foreground text-lg max-w-2xl font-light">
          Real-time interaction with the systems I build. Experience high-speed inference via <span className="text-white">Groq</span> and <span className="text-white">Gemini</span>.
        </p>
      </div>

      <Card className="glass-morphism border-white/10 shadow-[0_0_100px_rgba(244,63,94,0.05)] overflow-hidden rounded-[3rem]">
        <CardContent className="p-0">
          <Tabs defaultValue="analyze" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-white/[0.02] p-2 h-16 rounded-none border-b border-white/5">
              <TabsTrigger value="analyze" className="gap-3 text-xs font-black uppercase tracking-widest data-[state=active]:bg-white/5 data-[state=active]:text-rose-400 transition-all">
                <Wand2 className="w-4 h-4" /> Optimizing Agent
              </TabsTrigger>
              <TabsTrigger value="interview" className="gap-3 text-xs font-black uppercase tracking-widest data-[state=active]:bg-white/5 data-[state=active]:text-cyan-400 transition-all">
                <Sparkles className="w-4 h-4" /> Interview Simulator
              </TabsTrigger>
            </TabsList>

            <div className="p-8 md:p-12 space-y-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between px-2">
                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] flex items-center gap-2">
                      <Terminal className="w-3 h-3 text-rose-400" /> Source Data
                    </label>
                    <span className="text-[9px] text-white/20 uppercase font-black tracking-widest">Input: Markdown/Text</span>
                  </div>
                  <Textarea 
                    placeholder="Paste professional logs..." 
                    className="min-h-[200px] bg-black/40 border-white/5 focus:border-rose-400/30 focus:ring-rose-400/10 transition-all text-xs leading-relaxed font-mono rounded-2xl"
                    value={resumeText}
                    onChange={(e) => setResumeText(e.target.value)}
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between px-2">
                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] flex items-center gap-2">
                      <Terminal className="w-3 h-3 text-cyan-400" /> Target Parameters
                    </label>
                    <span className="text-[9px] text-white/20 uppercase font-black tracking-widest">Context: Job Desc</span>
                  </div>
                  <Textarea 
                    placeholder="Paste objective description..." 
                    className="min-h-[200px] bg-black/40 border-white/5 focus:border-cyan-400/30 focus:ring-cyan-400/10 transition-all text-xs leading-relaxed font-mono rounded-2xl"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                  />
                </div>
              </div>

              <TabsContent value="analyze" className="mt-0 space-y-10">
                <Button 
                  onClick={handleAnalyzeResume} 
                  disabled={isLoading} 
                  className="w-full h-16 text-sm font-black uppercase tracking-widest shadow-xl shadow-rose-500/10 bg-rose-500 hover:bg-rose-600 transition-all hover:scale-[1.01]"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-3">
                      <Loader2 className="w-5 h-5 animate-spin" /> Executing Neural Inference...
                    </div>
                  ) : "INITIATE OPTIMIZATION"}
                </Button>
                {result && (
                  <div className="rounded-3xl overflow-hidden border border-rose-400/20 bg-rose-400/[0.02] animate-reveal">
                    <div className="bg-rose-400/10 px-8 py-4 flex items-center justify-between border-b border-rose-400/20">
                       <h4 className="font-black text-xs text-rose-400 uppercase tracking-widest flex items-center gap-2">
                         <Terminal className="w-4 h-4" /> COMPILATION OUTPUT
                       </h4>
                    </div>
                    <div className="p-8 prose prose-invert max-w-none text-muted-foreground/90 text-sm leading-loose font-mono">
                      {result.split('\n').map((line, i) => line ? <p key={i} className="mb-4">{line}</p> : null)}
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="interview" className="mt-0 space-y-10">
                <Button 
                  onClick={handleMockInterview} 
                  disabled={isLoading} 
                  className="w-full h-16 text-sm font-black uppercase tracking-widest shadow-xl shadow-cyan-500/10 bg-cyan-500 hover:bg-cyan-600 transition-all hover:scale-[1.01]"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-3">
                      <Loader2 className="w-5 h-5 animate-spin" /> Bootstrapping Simulation...
                    </div>
                  ) : "LAUNCH INTERVIEW PROTOCOL"}
                </Button>
                {questions.length > 0 && (
                  <div className="grid gap-4 animate-reveal">
                    <h4 className="font-black text-cyan-400 mb-2 uppercase tracking-[0.4em] text-[10px] text-center">Active Scenario Questions</h4>
                    {questions.map((q, i) => (
                      <div key={i} className="group p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 hover:bg-cyan-400/[0.02] transition-all flex gap-6 items-start">
                        <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 font-black text-xs">
                          {String(i+1).padStart(2, '0')}
                        </div>
                        <p className="text-muted-foreground group-hover:text-white transition-colors pt-2 text-base leading-relaxed">
                          {q}
                        </p>
                        <ChevronRight className="w-5 h-5 text-cyan-400/10 ml-auto group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
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
