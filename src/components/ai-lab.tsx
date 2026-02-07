
"use client";

import React, { useState } from "react";
import { analyzeResume } from "@/ai/flows/resume-analysis-groq";
import { suggestJobs } from "@/ai/flows/suggest-jobs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BrainCircuit, Loader2, Sparkles, Wand2, Terminal, Cpu, Target, Rocket, Zap, ChevronRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

export function AiLab() {
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [suggestedJobs, setSuggestedJobs] = useState<any[]>([]);

  const handleAnalyzeResume = async () => {
    if (!resumeText) {
      toast({ title: "Memory Empty", description: "Inject resume data to begin analysis.", variant: "destructive" });
      return;
    }
    setIsLoading(true);
    try {
      const output = await analyzeResume({ resumeText, jobDescription });
      setAnalysisResult(output.analysis);
      toast({ title: "Synthesis Complete", description: "Groq LPU has optimized your profile." });
    } catch (error) {
      toast({ title: "Neural Link Error", description: "AI service is currently non-responsive.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestJobs = async () => {
    if (!resumeText) {
      toast({ title: "Data Conflict", description: "Requires resume context for mapping.", variant: "destructive" });
      return;
    }
    setIsLoading(true);
    try {
      const output = await suggestJobs({ resumeText });
      setSuggestedJobs(output.suggestedRoles);
      toast({ title: "Mapping Complete", description: "Top roles identified based on your skills." });
    } catch (error) {
      toast({ title: "Protocol Failed", description: "Career mapping engine error.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-lab" className="py-24 container px-4 max-w-6xl scroll-mt-20">
      <div className="flex flex-col items-center text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-400/10 border border-rose-400/20 text-[10px] font-black uppercase tracking-[0.3em] text-rose-400">
          <Cpu className="w-3.5 h-3.5" />
          <span>Neural Sandbox</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter">AI <span className="text-rose-400 italic">Playground</span></h2>
        <p className="text-muted-foreground text-lg max-w-2xl font-light leading-relaxed">
          Real-time interaction with the systems I build. Experience high-speed inference via <span className="text-white">Groq</span> and <span className="text-white">Gemini</span>.
        </p>
      </div>

      <Card className="glass-morphism border-white/10 shadow-[0_0_100px_rgba(244,63,94,0.05)] overflow-hidden rounded-[3rem]">
        <CardContent className="p-0">
          <Tabs defaultValue="optimize" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-white/[0.02] p-2 h-20 rounded-none border-b border-white/5">
              <TabsTrigger value="optimize" className="gap-3 text-[11px] font-black uppercase tracking-widest data-[state=active]:bg-white/5 data-[state=active]:text-rose-400 transition-all">
                <Wand2 className="w-4 h-4" /> Resume Optimizer
              </TabsTrigger>
              <TabsTrigger value="match" className="gap-3 text-[11px] font-black uppercase tracking-widest data-[state=active]:bg-white/5 data-[state=active]:text-tech-cyan transition-all">
                <Target className="w-4 h-4" /> Career Matchmaker
              </TabsTrigger>
            </TabsList>

            <div className="p-8 md:p-12 space-y-12">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between px-2">
                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] flex items-center gap-2">
                      <Terminal className="w-3 h-3 text-rose-400" /> Resume Content
                    </label>
                    <span className="text-[9px] text-white/20 uppercase font-black tracking-widest">Input: Plain Text</span>
                  </div>
                  <Textarea 
                    placeholder="Paste your professional experience logs..." 
                    className="min-h-[300px] bg-black/40 border-white/5 focus:border-rose-400/30 focus:ring-rose-400/10 transition-all text-xs leading-relaxed font-mono rounded-[2rem] p-6"
                    value={resumeText}
                    onChange={(e) => setResumeText(e.target.value)}
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between px-2">
                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] flex items-center gap-2">
                      <Zap className="w-3 h-3 text-tech-cyan" /> Job Context (Optional)
                    </label>
                    <span className="text-[9px] text-white/20 uppercase font-black tracking-widest">Optional for Optimization</span>
                  </div>
                  <Textarea 
                    placeholder="Paste the job description you're targeting..." 
                    className="min-h-[300px] bg-black/40 border-white/5 focus:border-tech-cyan/30 focus:ring-tech-cyan/10 transition-all text-xs leading-relaxed font-mono rounded-[2rem] p-6"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                  />
                </div>
              </div>

              <TabsContent value="optimize" className="mt-0 space-y-10">
                <Button 
                  onClick={handleAnalyzeResume} 
                  disabled={isLoading} 
                  className="w-full h-20 text-sm font-black uppercase tracking-[0.2em] shadow-xl shadow-rose-500/10 bg-rose-500 hover:bg-rose-600 transition-all hover:scale-[1.01] rounded-2xl"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-3">
                      <Loader2 className="w-6 h-6 animate-spin" /> Executing Neural Inference...
                    </div>
                  ) : "Initiate Resume Optimization"}
                </Button>
                
                {analysisResult && (
                  <div className="rounded-[2.5rem] overflow-hidden border border-rose-400/20 bg-rose-400/[0.02] animate-reveal">
                    <div className="bg-rose-400/10 px-10 py-5 flex items-center justify-between border-b border-rose-400/20">
                       <h4 className="font-black text-[10px] text-rose-400 uppercase tracking-[0.3em] flex items-center gap-2">
                         <Terminal className="w-4 h-4" /> AI Feedback Synthesis
                       </h4>
                    </div>
                    <div className="p-10 prose prose-invert max-w-none text-muted-foreground/90 text-sm leading-loose font-mono">
                      {analysisResult.split('\n').map((line, i) => line ? <p key={i} className="mb-4">{line}</p> : null)}
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="match" className="mt-0 space-y-10">
                <Button 
                  onClick={handleSuggestJobs} 
                  disabled={isLoading} 
                  className="w-full h-20 text-sm font-black uppercase tracking-[0.2em] shadow-xl shadow-tech-cyan/10 bg-tech-cyan hover:bg-tech-cyan/90 text-black transition-all hover:scale-[1.01] rounded-2xl"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-3">
                      <Loader2 className="w-6 h-6 animate-spin text-black" /> Mapping Career Vector...
                    </div>
                  ) : "Calculate Market Fit"}
                </Button>

                {suggestedJobs.length > 0 && (
                  <div className="grid gap-6 animate-reveal">
                    <h4 className="font-black text-tech-cyan mb-2 uppercase tracking-[0.4em] text-[10px] text-center">Identified Career Opportunities</h4>
                    {suggestedJobs.map((job, i) => (
                      <div key={i} className="group p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-tech-cyan/30 hover:bg-tech-cyan/[0.02] transition-all flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-shrink-0 w-16 h-16 rounded-[1.5rem] bg-tech-cyan/10 flex flex-col items-center justify-center text-tech-cyan">
                          <span className="font-black text-xl">{job.matchPercentage}%</span>
                          <span className="text-[8px] font-black uppercase tracking-tighter">Match</span>
                        </div>
                        <div className="space-y-4 flex-grow">
                          <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-black text-white group-hover:text-tech-cyan transition-colors">{job.title}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed italic">
                            {job.reasoning}
                          </p>
                          <div className="flex flex-wrap gap-2 pt-2">
                            {job.skillGaps.map((skill: string, j: number) => (
                              <Badge key={j} variant="outline" className="border-rose-400/30 text-rose-400 bg-rose-400/5 font-black uppercase tracking-widest text-[9px]">
                                Skill Gap: {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="self-center">
                          <Rocket className="w-6 h-6 text-tech-cyan/20 group-hover:text-tech-cyan group-hover:-translate-y-1 transition-all" />
                        </div>
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
