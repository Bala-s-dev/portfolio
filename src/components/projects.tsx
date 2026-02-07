
import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight, Sparkles, Shield, Code2, Rocket } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projects = [
  {
    title: "Smart Exam AI Platform",
    category: "AI EdTech",
    imageId: "project-exam",
    icon: <Rocket className="w-4 h-4 text-rose-400" />,
    color: "hsl(var(--tech-rose))",
    tech: ["Next.js 15", "Gemini 2.5", "Firebase", "PostgreSQL"],
    description: "Enterprise-grade AI exam orchestrator featuring automated MCQ synthesis and performance predictive modeling with 98% accuracy.",
    link: "https://example.com",
    github: "https://github.com"
  },
  {
    title: "SecureChat Protocol",
    category: "Cybersecurity",
    imageId: "project-chat",
    icon: <Shield className="w-4 h-4 text-emerald-400" />,
    color: "hsl(var(--tech-emerald))",
    tech: ["Socket.io", "AES-256", "Node.js", "Redis"],
    description: "Post-quantum ready E2EE messaging layer implementing double-ratchet encryption and perfect forward secrecy.",
    link: "https://example.com",
    github: "https://github.com"
  },
  {
    title: "Conversational Fitness AI",
    category: "Real-time AI",
    imageId: "project-fitness",
    icon: <Sparkles className="w-4 h-4 text-cyan-400" />,
    color: "hsl(var(--tech-cyan))",
    tech: ["Convex", "Vapi.ai", "React", "Gemini"],
    description: "Low-latency voice assistant utilizing LLM function calling to dynamically adjust workout parameters mid-session.",
    link: "https://example.com",
    github: "https://github.com"
  },
  {
    title: "AI Career Accelerator",
    category: "SaaS",
    imageId: "project-career",
    icon: <Code2 className="w-4 h-4 text-amber-400" />,
    color: "hsl(var(--tech-amber))",
    tech: ["MERN", "Groq AI", "OAuth 2.0", "Redis"],
    description: "Advanced resume parsing engine leveraging Mixtral-8x7B for semantic extraction and targeted career mapping.",
    link: "https://example.com",
    github: "https://github.com"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 container px-4 max-w-6xl">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold uppercase tracking-widest text-primary">
            Portfolio
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Featured <span className="text-white/40 italic">Impact</span></h2>
          <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
            A selection of mission-critical systems where <span className="text-white">security meets intelligence</span>.
          </p>
        </div>
        <Button variant="outline" className="rounded-full px-8 h-12 border-white/10 hover:bg-white/5 font-bold">
          View All Projects
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => {
          const imageData = PlaceHolderImages.find(img => img.id === project.imageId);
          
          return (
            <Card key={i} className="group relative overflow-hidden bg-white/[0.01] border-white/5 card-hover-effect flex flex-col rounded-[2.5rem] shadow-2xl">
              <div className="relative aspect-[16/10] overflow-hidden">
                {imageData && (
                  <Image
                    src={imageData.imageUrl}
                    alt={imageData.description}
                    width={800}
                    height={500}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000"
                    data-ai-hint={imageData.imageHint}
                  />
                )}
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
                
                {/* Floating Tech Badges */}
                <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t, j) => (
                    <span key={j} className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/90">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <CardHeader className="space-y-4 pt-8 px-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    {project.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                    {project.category}
                  </span>
                </div>
                <CardTitle className="text-3xl font-black group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="px-8 pb-8 flex-grow">
                <CardDescription className="text-lg leading-relaxed text-muted-foreground/80 font-light">
                  {project.description}
                </CardDescription>
              </CardContent>
              
              <CardFooter className="px-8 pb-8 pt-0 flex gap-4">
                <Button 
                  asChild
                  className="rounded-full bg-white text-black hover:bg-white/90 font-black text-[10px] uppercase tracking-widest h-12 px-8 shadow-xl shadow-white/5 transition-all hover:scale-105 active:scale-95"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Live Demo <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 font-black text-[10px] uppercase tracking-widest h-12 px-8 transition-all hover:scale-105 active:scale-95"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-white">
                    Source <Github className="w-4 h-4" />
                  </a>
                </Button>
              </CardFooter>

              {/* Hover Glow Background */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] pointer-events-none transition-opacity duration-700"
                style={{ backgroundColor: project.color }}
              />
            </Card>
          );
        })}
      </div>
    </section>
  );
}
