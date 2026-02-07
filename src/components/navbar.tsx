"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, BrainCircuit, Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="w-full max-w-5xl glass-morphism rounded-full px-6 py-3 flex items-center justify-between border-white/5">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary/20 p-1.5 rounded-lg group-hover:bg-primary/30 transition-colors">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <span className="font-bold text-lg tracking-tight hidden sm:block">Bala.sub</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="#about" className="hover:text-foreground transition-colors">About</Link>
          <Link href="#skills" className="hover:text-foreground transition-colors">Skills</Link>
          <Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link>
          <Link href="#experience" className="hover:text-foreground transition-colors">Experience</Link>
          <Link href="#ai-lab" className="hover:text-foreground flex items-center gap-1.5 transition-colors">
            <BrainCircuit className="w-4 h-4" />
            AI Lab
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="#contact">
            <Button size="sm" className="rounded-full px-5">Hire Me</Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden rounded-full">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}