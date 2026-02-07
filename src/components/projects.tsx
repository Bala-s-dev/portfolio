
import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight, Code2 } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projects = [
  {
    title: "Smart Exam Platform",
    category: "AI EdTech",
    imageId: "project-exam",
    tech: ["Next.js 15", "Gemini 2.5 Flash", "Prisma", "PostgreSQL"],
    description: "An AI-powered exam platform that generates high-quality MCQs, tracks student performance, and predicts future scores with secure RBAC-based grading.",
    link: "#",
    github: "#"
  },
  {
    title: "SecureChat",
    category: "Cybersecurity",
    imageId: "project-chat",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "AES-256"],
    description: "A real-time encrypted messaging system featuring AES-256 end-to-end encryption, JWT-secured APIs, and strong protection against web vulnerabilities.",
    link: "#",
    github: "#"
  },
  {
    title: "AI Voice Fitness Coach",
    category: "Real-time AI",
    imageId: "project-fitness",
    tech: ["Next.js", "Convex", "Vapi.ai", "Gemini API", "TypeScript"],
    description: "A conversational AI voice assistant that creates personalized workout plans in real time using structured AI outputs and secure session handling.",
    link: "#",
    github: "#"
  },
  {
    title: "AI Career Coach",
    category: "SaaS",
    imageId: "project-career",
    tech: ["MERN Stack", "Groq API", "OAuth2", "Helmet.js"],
    description: "An AI-driven career coaching platform that analyzes resumes instantly, generates mock interview questions, and applies strong backend security practices.",
    link: "#",
    github: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 container px-4 max-w-6xl">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          A showcase of complex systems built with a focus on intelligence, security, and performance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, i) => {
          const imageData = PlaceHolderImages.find(img => img.id === project.imageId);
          
          return (
            <Card key={i} className="group relative overflow-hidden bg-white/[0.02] border-white/5 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(79,70,229,0.15)] flex flex-col">
              <div className="relative aspect-video overflow-hidden">
                {imageData && (
                  <Image
                    src={imageData.imageUrl}
                    alt={imageData.description}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                    data-ai-hint={imageData.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60" />
                
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button variant="secondary" size="icon" className="h-9 w-9 rounded-full bg-background/50 backdrop-blur-md border-white/10 hover:bg-primary hover:text-white transition-all">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="secondary" size="icon" className="h-9 w-9 rounded-full bg-background/50 backdrop-blur-md border-white/10 hover:bg-primary hover:text-white transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <CardHeader className="space-y-1 pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    {project.category}
                  </span>
                </div>
                <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6 flex-grow">
                <CardDescription className="text-base leading-relaxed text-muted-foreground/90">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, j) => (
                    <Badge key={j} variant="outline" className="bg-white/5 border-white/5 text-[10px] uppercase font-bold tracking-wider py-1 px-3">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="pt-0 pb-8">
                 <Button variant="link" className="px-0 text-primary hover:text-primary/80 gap-2 h-auto py-0 font-bold group-hover:translate-x-2 transition-transform">
                   Case Study <ArrowUpRight className="w-4 h-4" />
                 </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
