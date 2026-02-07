
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, BrainCircuit, ShieldAlert, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code2 className="w-4 h-4" />,
    skills: ["React", "Next.js", "Redux", "Tailwind", "Shadcn/UI", "Framer Motion"]
  },
  {
    title: "Backend",
    icon: <Server className="w-4 h-4" />,
    skills: ["Node.js", "Express", "Prisma", "REST APIs", "Socket.io", "Convex"]
  },
  {
    title: "AI & Auth",
    icon: <BrainCircuit className="w-4 h-4" />,
    skills: ["Gemini API", "Groq API", "Clerk", "OAuth2", "OpenAI"]
  },
  {
    title: "Security",
    icon: <ShieldAlert className="w-4 h-4" />,
    skills: ["RBAC", "JWT", "E2EE", "Web Security", "PenTesting", "AES-256"]
  },
  {
    title: "Cloud & Ops",
    icon: <Cloud className="w-4 h-4" />,
    skills: ["PostgreSQL", "MongoDB", "Firebase", "Docker", "AWS", "Vercel"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-black/40">
      <div className="container px-4">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Technical Arsenal</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A specialized stack focused on high-performance web systems and secure AI integration.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillCategories.map((category, i) => (
            <div 
              key={i} 
              className="p-8 rounded-[2rem] border border-white/5 bg-white/[0.01] hover:border-primary/50 hover:bg-primary/[0.02] transition-all group flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-primary/70 group-hover:text-primary transition-colors">
                  {category.icon}
                </div>
                <h3 className="font-bold text-lg tracking-tight group-hover:text-white transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill, j) => (
                  <Badge 
                    key={j} 
                    variant="secondary" 
                    className="bg-white/5 text-muted-foreground/80 hover:bg-primary/20 hover:text-primary transition-all border-none py-1.5 px-3 rounded-xl text-[11px] font-bold"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
