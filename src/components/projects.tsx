import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code2 } from "lucide-react";

const projects = [
  {
    title: "Smart Exam Platform",
    category: "AI EdTech",
    tech: ["Next.js 15", "Gemini 2.5 Flash", "Prisma", "PostgreSQL"],
    description: "An AI-powered exam platform that generates high-quality MCQs, tracks student performance, and predicts future scores with secure RBAC-based grading.",
    link: "#",
    github: "#"
  },
  {
    title: "SecureChat",
    category: "Cybersecurity",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "AES-256"],
    description: "A real-time encrypted messaging system featuring AES-256 end-to-end encryption, JWT-secured APIs, and strong protection against web vulnerabilities.",
    link: "#",
    github: "#"
  },
  {
    title: "AI Voice Fitness Coach",
    category: "Real-time AI",
    tech: ["Next.js", "Convex", "Vapi.ai", "Gemini API", "TypeScript"],
    description: "A conversational AI voice assistant that creates personalized workout plans in real time using structured AI outputs and secure session handling.",
    link: "#",
    github: "#"
  },
  {
    title: "AI Career Coach",
    category: "SaaS",
    tech: ["MERN Stack", "Groq API", "OAuth2", "Helmet.js"],
    description: "An AI-driven career coaching platform that analyzes resumes instantly, generates mock interview questions, and applies strong backend security practices.",
    link: "#",
    github: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 container px-4">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A showcase of complex systems built with a focus on intelligence, security, and performance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <Card key={i} className="group relative overflow-hidden bg-white/[0.01] border-white/5 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(79,70,229,0.1)]">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Code2 className="w-24 h-24" />
            </div>
            
            <CardHeader className="relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">{project.category}</span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <CardTitle className="text-2xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <CardDescription className="text-base leading-relaxed text-muted-foreground/80">
                {project.description}
              </CardDescription>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, j) => (
                  <Badge key={j} variant="outline" className="bg-white/5 border-white/10 text-[10px] uppercase font-bold tracking-wider">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="pt-0">
               <Button variant="link" className="px-0 text-primary hover:text-primary/80 gap-2 h-auto py-0 font-bold group-hover:translate-x-1 transition-transform">
                 Learn more <ArrowRight className="w-4 h-4" />
               </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

const ArrowRight = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);