import React from "react";
import { Briefcase, Calendar } from "lucide-react";

const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "Ernestwell",
    location: "Remote, UK",
    period: "Nov 2024 – Feb 2025",
    achievements: [
      "Built Unibritend study abroad platform with high-performance architecture.",
      "Implemented dynamic search/filter capabilities across 400+ datasets.",
      "Developed a secure Admin Portal using Firebase Auth + Firestore.",
      "Integrated an FAQ chatbot that reduced support queries by 30%."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 container px-4 max-w-4xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
      </div>

      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {experience.map((item, i) => (
          <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            {/* Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>

            {/* Content */}
            <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-xl">{item.role}</h3>
                <time className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <Calendar className="w-3 h-3" /> {item.period}
                </time>
              </div>
              <div className="text-primary font-medium mb-4 flex items-center gap-2">
                {item.company} <span className="text-muted-foreground/30">•</span> {item.location}
              </div>
              <ul className="space-y-2">
                {item.achievements.map((achievement, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}