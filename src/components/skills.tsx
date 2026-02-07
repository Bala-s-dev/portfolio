import React from "react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Redux", "Tailwind", "Shadcn/UI", "Framer Motion"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Prisma", "REST APIs", "Socket.io", "Convex"]
  },
  {
    title: "AI & Auth",
    skills: ["Gemini API", "Groq API", "Clerk", "OAuth2", "OpenAI"]
  },
  {
    title: "Security",
    skills: ["RBAC", "JWT", "E2EE", "Web Security", "PenTesting", "AES-256"]
  },
  {
    title: "Cloud & Ops",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "Docker", "AWS", "Vercel"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-black/20">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Arsenal</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated stack of technologies I use to build robust, scalable, and secure applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillCategories.map((category, i) => (
            <div 
              key={i} 
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-primary/50 hover:bg-primary/[0.02] transition-all group"
            >
              <h3 className="font-bold text-lg mb-4 text-primary/80 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <Badge 
                    key={j} 
                    variant="secondary" 
                    className="bg-white/5 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors border-none"
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