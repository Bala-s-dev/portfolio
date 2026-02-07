"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, BrainCircuit, Menu, Zap } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-4xl glass-morphism rounded-full px-4 py-2 flex items-center justify-between border-white/10 animate-reveal">
        <Link href="/" className="flex items-center gap-2 group ml-2">
          <div className="bg-primary p-2 rounded-xl group-hover:rotate-[360deg] transition-transform duration-700 shadow-lg shadow-primary/20">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-black text-base tracking-tighter uppercase">Bala.Sub</span>
            <span className="text-[8px] font-black tracking-[0.3em] text-primary uppercase">v2025</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-muted-foreground/80">
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <Link href="#skills" className="hover:text-white transition-colors">Stack</Link>
          <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="#ai-lab" className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all text-primary">
            <BrainCircuit className="w-4 h-4" />
            AI Lab
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link href="#contact">
            <Button size="sm" className="rounded-full px-6 font-black text-[10px] uppercase tracking-widest bg-white text-black hover:bg-white/90">
              Start Project
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden rounded-full hover:bg-white/5">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
