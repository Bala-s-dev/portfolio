'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Github,
  Linkedin,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Terminal,
} from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center pt-24 sm:pt-28 lg:pt-32 overflow-hidden hero-gradient">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 
          w-[260px] sm:w-[380px] lg:w-[520px] 
          h-[260px] sm:h-[380px] lg:h-[520px]
          bg-primary/20 rounded-full blur-[90px] lg:blur-[140px]
          animate-pulse-glow"
        />

        <div
          className="absolute bottom-1/4 right-1/4 
          w-[260px] sm:w-[380px] lg:w-[520px]
          h-[260px] sm:h-[380px] lg:h-[520px]
          bg-accent/20 rounded-full blur-[90px] lg:blur-[140px]
          animate-pulse-glow"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Content */}
      <div className="container max-w-7xl xl:max-w-[1400px] px-4 sm:px-6 lg:px-10 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-primary mb-8 animate-float">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span>Engineer & Researcher</span>
          <span className="text-white/50 hidden sm:inline">v2025.01</span>
        </div>

        {/* Heading */}
        <h1
          className="
          text-5xl sm:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem]
          font-black tracking-tighter mb-8
          bg-clip-text text-transparent bg-gradient-to-b
          from-white via-white/90 to-white/20
          leading-[0.95]"
        >
          BALA <br className="hidden sm:block" /> SUBRAMANIAN
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
          <Tag icon={<ShieldCheck />} text="Security Architect" />
          <Tag icon={<Terminal />} text="Full-Stack Engineer" />
          <Tag icon={<Sparkles />} text="AI Specialist" />
        </div>

        {/* Description */}
        <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Building the next generation of{' '}
          <span className="text-white font-medium">
            resilient AI infrastructure
          </span>{' '}
          and hyper-secure real-time platforms.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <Link href="#projects" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full px-10 h-14 lg:h-16 text-base lg:text-lg font-bold gap-3 bg-primary hover:bg-primary/90 transition hover:scale-105"
            >
              View Portfolio{' '}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <div className="flex justify-center gap-4">
            <Social link="https://github.com">
              <Github className="w-6 h-6" />
            </Social>

            <Social link="https://linkedin.com">
              <Linkedin className="w-6 h-6" />
            </Social>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Helpers */
function Tag({ icon, text }: any) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5">
      {icon}
      <span className="text-xs sm:text-sm font-medium text-white/80">
        {text}
      </span>
    </div>
  );
}

function Social({ link, children }: any) {
  return (
    <Link href={link} target="_blank">
      <Button
        variant="outline"
        size="icon"
        className="h-12 w-12 lg:h-14 lg:w-14 rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:scale-110 transition"
      >
        {children}
      </Button>
    </Link>
  );
}
