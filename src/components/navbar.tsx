"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BrainCircuit, Menu, Zap, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Stack" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <nav className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-5xl glass-morphism rounded-full px-4 py-2 flex items-center justify-between border-white/10 animate-reveal">
        <Link href="/" className="flex items-center gap-2 group ml-2">
          <div className="bg-primary p-2 rounded-xl group-hover:rotate-[360deg] transition-transform duration-700 shadow-lg shadow-primary/20">
            <Zap className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-black text-sm md:text-base tracking-tighter uppercase">Bala.Sub</span>
            <span className="text-[7px] md:text-[8px] font-black tracking-[0.3em] text-primary uppercase">v2025</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-muted-foreground/80">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
          <Link href="#ai-lab" className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all text-primary">
            <BrainCircuit className="w-4 h-4" />
            AI Lab
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link href="#contact" className="hidden sm:block">
            <Button size="sm" className="rounded-full px-6 font-black text-[10px] uppercase tracking-widest bg-white text-black hover:bg-white/90">
              Start Project
            </Button>
          </Link>

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden rounded-full hover:bg-white/5">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-white/10 p-8">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-8 mt-12">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-black uppercase tracking-tighter hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link 
                  href="#ai-lab" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 text-2xl font-black uppercase tracking-tighter text-primary"
                >
                  <BrainCircuit className="w-6 h-6" />
                  AI Lab
                </Link>
                <Link href="#contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full h-14 rounded-2xl font-black text-xs uppercase tracking-widest bg-primary text-white">
                    Start Project
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}