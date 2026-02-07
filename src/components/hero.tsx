"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowRight, Sparkles, ShieldCheck, Terminal } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden hero-gradient">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      </div>

      <div className="container px-4 relative z-10 text-center">
        <div className="animate-reveal [animation-fill-mode:backwards]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-primary mb-8 animate-float shadow-2xl shadow-primary/10">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Engineer & Researcher</span>
            <div className="w-1 h-1 rounded-full bg-white/20 mx-1" />
            <span className="text-white/60">v2025.01</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/20 leading-[0.9] px-2">
            BALA <br /> SUBRAMANIAN
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium text-white/80">Security Architect</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-medium text-white/80">Full-Stack Engineer</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
              <Sparkles className="w-5 h-5 text-rose-400" />
              <span className="text-sm font-medium text-white/80">AI Specialist</span>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light px-4">
            Building the next generation of <span className="text-white font-medium">resilient AI infrastructure</span> and hyper-secure real-time platforms.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="#projects">
              <Button size="lg" className="group rounded-full px-10 h-16 text-lg font-bold gap-3 bg-primary hover:bg-primary/90 shadow-[0_0_40px_rgba(79,70,229,0.3)] transition-all hover:scale-105">
                View Portfolio <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="https://github.com" target="_blank">
                <Button variant="outline" size="icon" className="h-14 w-14 rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all hover:scale-110">
                  <Github className="w-6 h-6" />
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <Button variant="outline" size="icon" className="h-14 w-14 rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:border-accent/50 transition-all hover:scale-110">
                  <Linkedin className="w-6 h-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 group cursor-pointer hover:opacity-100 transition-opacity">
        <span className="text-[9px] uppercase tracking-[0.6em] font-black">Scroll For Impact</span>
        <div className="relative w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
