import React from "react";
import { Shield } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 mt-20 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary animate-pulse" />
      
      <div className="container px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          <span className="font-bold">Bala Subramanian</span>
        </div>
        
        <div className="text-sm text-muted-foreground text-center md:text-right">
          <p>© {currentYear} • Built with Next.js, Genkit & Security in mind.</p>
        </div>

        <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-primary transition-colors">Source</a>
        </div>
      </div>
    </footer>
  );
}