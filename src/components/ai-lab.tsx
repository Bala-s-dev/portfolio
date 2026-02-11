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
    <section id="ai-lab" className="py-16 sm:py-20 lg:py-28 scroll-mt-24">
      {/* ✅ Wide Desktop Container */}
      <div className="container max-w-7xl xl:max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-400/10 border border-rose-400/20 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-rose-400">
            <Cpu className="w-4 h-4" />
            <span>Neural Sandbox</span>
          </div>

          {/* ✅ Better Typography Ladder */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black tracking-tighter">
            AI <span className="text-rose-400 italic">Playground</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl font-light leading-relaxed">
            Real-time interaction with the systems I build. Experience
            high-speed inference via <span className="text-white">Groq</span>{' '}
            and <span className="text-white">Gemini</span>.
          </p>
        </div>

        {/* Main Card */}
        <Card className="glass-morphism border-white/10 shadow-[0_0_120px_rgba(244,63,94,0.06)] overflow-hidden rounded-[2rem] lg:rounded-[3rem]">
          <CardContent className="p-0">
            <Tabs defaultValue="optimize" className="w-full">
              {/* Tabs Header */}
              <TabsList
                className="
              grid w-full grid-cols-2
              bg-white/[0.02]
              p-1 sm:p-2
              h-16 sm:h-18 lg:h-20
              rounded-none
              border-b border-white/5
            "
              >
                <TabsTrigger
                  value="optimize"
                  className="
                gap-2 sm:gap-3
                text-[9px] sm:text-[11px]
                font-black uppercase tracking-widest
                data-[state=active]:bg-white/5
                data-[state=active]:text-rose-400
              "
                >
                  <Wand2 className="w-4 h-4" /> Optimizer
                </TabsTrigger>

                <TabsTrigger
                  value="match"
                  className="
                gap-2 sm:gap-3
                text-[9px] sm:text-[11px]
                font-black uppercase tracking-widest
                data-[state=active]:bg-white/5
                data-[state=active]:text-tech-cyan
              "
                >
                  <Target className="w-4 h-4" /> Matchmaker
                </TabsTrigger>
              </TabsList>

              {/* Content Padding Scales Smoothly */}
              <div className="p-5 sm:p-8 lg:p-12 xl:p-14 space-y-10">
                {/* Inputs */}
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
                  {/* Resume */}
                  <div className="space-y-4">
                    <label className="text-[9px] sm:text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-rose-400" />
                      Resume Content
                    </label>

                    <Textarea
                      placeholder="Paste your professional experience logs..."
                      className="
                    min-h-[220px] sm:min-h-[280px] lg:min-h-[340px]
                    bg-black/40 border-white/5
                    focus:border-rose-400/30
                    text-xs sm:text-sm
                    font-mono rounded-2xl lg:rounded-[2rem]
                    p-4 sm:p-6
                  "
                      value={resumeText}
                      onChange={(e) => setResumeText(e.target.value)}
                    />
                  </div>

                  {/* Job Context */}
                  <div className="space-y-4">
                    <label className="text-[9px] sm:text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] flex items-center gap-2">
                      <Zap className="w-4 h-4 text-tech-cyan" />
                      Context (Optional)
                    </label>

                    <Textarea
                      placeholder="Paste target job description..."
                      className="
                    min-h-[220px] sm:min-h-[280px] lg:min-h-[340px]
                    bg-black/40 border-white/5
                    focus:border-tech-cyan/30
                    text-xs sm:text-sm
                    font-mono rounded-2xl lg:rounded-[2rem]
                    p-4 sm:p-6
                  "
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
                    />
                  </div>
                </div>

                {/* Tabs Content remains SAME below */}
                {/* Keep your optimize + match blocks exactly as you wrote */}
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}