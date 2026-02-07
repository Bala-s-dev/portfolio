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
    link: "#",
    github: "#"
  },
  {
    title: "SecureChat Protocol",
    category: "Cybersecurity",
    imageId: "project-chat",
    icon: <Shield className="w-4 h-4 text-emerald-400" />,
    color: "hsl(var(--tech-emerald))",
    tech: ["Socket.io", "AES-256", "Node.js", "Redis"],
    description: "Post-quantum ready E2EE messaging layer implementing double-ratchet encryption and perfect forward secrecy.",
    link: "#",
    github: "#"
  },
  {
    title: "Conversational Fitness AI",
    category: "Real-time AI",
    imageId: "project-fitness",
    icon: <Sparkles className="w-4 h-4 text-cyan-400" />,
    color: "hsl(var(--tech-cyan))",
    tech: ["Convex", "Vapi.ai", "React", "Gemini"],
    description: "Low-latency voice assistant utilizing LLM function calling to dynamically adjust workout parameters mid-session.",
    link: "#",
    github: "#"
  },
  {
    title: "AI Career Accelerator",
    category: "SaaS",
    imageId: "project-career",
    icon: <Code2 className="w-4 h-4 text-amber-400" />,
    color: "hsl(var(--tech-amber))",
    tech: ["MERN", "Groq AI", "OAuth 2.0", "Redis"],
    description: "Advanced resume parsing engine leveraging Mixtral-8x7B for semantic extraction and targeted career mapping.",
    link: "#",
    github: "#"
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
            <Card key={i} className="group relative overflow-hidden bg-white/[0.01] border-white/5 card-hover-effect flex flex-col rounded-[2rem]">
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
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                
                {/* Floating Tech Badges */}
                <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t, j) => (
                    <span key={j} className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/80">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="absolute top-6 right-6 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Button variant="secondary" size="icon" className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-xl border-white/10 hover:bg-primary hover:text-white transition-all">
                    <Github className="w-5 h-5" />
                  </Button>
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
              
              <CardFooter className="px-8 pb-8 pt-0">
                 <Button variant="link" className="px-0 text-white hover:text-primary gap-2 h-auto py-0 font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                   EXPLORE ARCHITECTURE <ArrowUpRight className="w-4 h-4 text-primary" />
                 </Button>
              </CardFooter>

              {/* Hover Glow Background */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] pointer-events-none transition-opacity duration-500"
                style={{ backgroundColor: project.color }}
              />
            </Card>
          );
        })}
      </div>
    </section>
  );
}
