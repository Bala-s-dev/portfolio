
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowRight, Sparkles, MoveDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden hero-gradient">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-40 pointer-events-none">
        <div className="absolute top-[15%] left-[5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[160px] animate-pulse-glow" />
        <div className="absolute bottom-[15%] right-[5%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[160px] animate-pulse-glow" />
      </div>

      <div className="container px-4 relative z-10 text-center animate-reveal">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold uppercase tracking-widest text-primary mb-8 animate-float shadow-xl shadow-primary/5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Available for New Remote Opportunities</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 leading-[1.1]">
          Bala <br className="sm:hidden" /> Subramanian
        </h1>
        
        <p className="text-xl md:text-3xl font-medium text-muted-foreground mb-6 max-w-3xl mx-auto tracking-tight">
          Crafting <span className="text-white border-b-2 border-primary/50">Secure AI Systems</span> & <span className="text-white border-b-2 border-accent/50">Real-Time Experiences</span>
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground/70 mb-12 max-w-xl mx-auto leading-relaxed font-light">
          Full Stack Developer specialized in MERN, Next.js, and integrating production-grade GenAI.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="#projects">
            <Button size="lg" className="rounded-full px-10 h-14 text-lg font-bold gap-3 bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/20">
              Explore My Work <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="https://github.com" target="_blank">
              <Button variant="outline" size="icon" className="h-14 w-14 rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all">
                <Github className="w-6 h-6" />
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Button variant="outline" size="icon" className="h-14 w-14 rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all">
                <Linkedin className="w-6 h-6" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground/30">
        <span className="text-[10px] uppercase tracking-[0.4em] font-black">Scroll Down</span>
        <div className="h-16 w-[1px] bg-gradient-to-b from-primary/50 via-accent/30 to-transparent rounded-full animate-bounce" />
      </div>
    </section>
  );
}
