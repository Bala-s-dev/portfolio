"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden hero-gradient">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-30 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse-glow" />
      </div>

      <div className="container px-4 relative z-10 text-center animate-reveal">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary mb-6 animate-float">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Available for Remote Roles</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
          Bala Subramanian
        </h1>
        
        <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-4 max-w-2xl mx-auto">
          Full Stack Developer | <span className="text-primary">MERN</span> • <span className="text-primary">Next.js</span> • AI & Real-Time Systems
        </p>
        
        <p className="text-lg text-muted-foreground/80 mb-10 max-w-xl mx-auto leading-relaxed">
          Building secure AI-powered web applications for modern startups.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#projects">
            <Button size="lg" className="rounded-full px-8 gap-2 bg-primary hover:bg-primary/90">
              View Projects <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="https://github.com" target="_blank">
              <Button variant="outline" size="icon" className="rounded-full hover:border-primary/50">
                <Github className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Button variant="outline" size="icon" className="rounded-full hover:border-primary/50">
                <Linkedin className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/40 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted-foreground/40 to-transparent" />
      </div>
    </section>
  );
}