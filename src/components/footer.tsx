import React from 'react';
import { Shield } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 sm:py-12 lg:py-16 border-t border-white/5 mt-20 relative overflow-hidden">
      {/* Gradient Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary animate-pulse" />

      {/* ✅ Wide Container */}
      <div className="container max-w-7xl xl:max-w-[1400px] px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          <span className="font-bold text-sm sm:text-base">
            Bala Subramanian
          </span>
        </div>

        {/* Copyright */}
        <div className="text-xs sm:text-sm lg:text-base text-muted-foreground text-center md:text-right leading-relaxed">
          <p>
            © {currentYear} • Built with Next.js, Genkit & Security in mind.
          </p>
        </div>

        {/* Links (Wrap on Mobile) */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Source
          </a>
        </div>
      </div>
    </footer>
  );
}
