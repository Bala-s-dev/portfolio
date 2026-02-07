import React from "react";
import { ShieldCheck, Cpu, MessageSquareQuote, Lock } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "AI Systems",
      description: "Building production-grade AI tools using Gemini and Groq."
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Security First",
      description: "Implementing RBAC, JWT, and E2EE for robust platforms."
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Real-time Tech",
      description: "Leveraging Socket.io and Convex for low-latency features."
    }
  ];

  return (
    <section id="about" className="py-24 container px-4 max-w-5xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">The Engineer Behind the Code</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm a Full Stack Developer obsessed with the intersection of <span className="text-foreground font-medium">Artificial Intelligence</span> and <span className="text-foreground font-medium">Cybersecurity</span>. 
            My focus is on creating scalable, secure, and user-centric applications that solve real-world problems.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From developing AI-powered EdTech platforms to building end-to-end encrypted messaging systems, I bring a security-first mindset to every line of code. I thrive in remote startup environments where agility and performance are paramount.
          </p>
          
          <div className="flex items-center gap-4 pt-4">
             <div className="h-12 w-px bg-border hidden sm:block" />
             <div className="italic text-muted-foreground text-sm flex items-start gap-2">
                <MessageSquareQuote className="w-5 h-5 shrink-0 text-primary opacity-50" />
                "I believe the best software is not just functional, but invisible, secure, and intelligent by default."
             </div>
          </div>
        </div>

        <div className="grid gap-4">
          {highlights.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}