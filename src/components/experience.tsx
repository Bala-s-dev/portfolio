
import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from "lucide-react";

const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "Ernestwell",
    location: "Remote, UK",
    period: "Nov 2024 – Feb 2025",
    description: "Spearheaded the development of high-performance EdTech solutions with a focus on scalability and user experience.",
    achievements: [
      "Built Unibritend study abroad platform with high-performance architecture.",
      "Implemented dynamic search/filter capabilities across 400+ datasets.",
      "Developed a secure Admin Portal using Firebase Auth + Firestore.",
      "Integrated an FAQ chatbot that reduced support queries by 30%."
    ],
    skills: ["Next.js", "Firebase", "TypeScript", "AI Integration"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 container px-4 max-w-4xl">
      <div className="flex flex-col items-center text-center mb-20 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Professional Background</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter">Career <span className="text-emerald-400 italic">Evolution</span></h2>
        <p className="text-muted-foreground text-lg max-w-xl font-light">
          Strategic engineering roles in remote-first environments, delivering production-grade systems at scale.
        </p>
      </div>

      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-emerald-500/50 before:via-border before:to-transparent">
        {experience.map((item, i) => (
          <div key={i} className="relative flex items-start gap-8 group">
            {/* Timeline Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-emerald-400/30 bg-background shadow-[0_0_20px_rgba(52,211,153,0.1)] shrink-0 z-10 group-hover:border-emerald-400 group-hover:scale-110 transition-all duration-500">
              <Briefcase className="w-5 h-5 text-emerald-400" />
            </div>

            {/* Experience Card */}
            <div className="flex-1 p-8 md:p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden group/card">
              {/* Subtle Ambient Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-400/5 blur-[80px] rounded-full pointer-events-none group-hover/card:bg-emerald-400/10 transition-colors" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="font-black text-3xl mb-2 group-hover:text-emerald-400 transition-colors">{item.role}</h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                    <span className="text-white font-bold">{item.company}</span>
                    <span className="text-white/20 hidden sm:block">•</span>
                    <span className="text-muted-foreground flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-emerald-400/60" /> {item.location}
                    </span>
                  </div>
                </div>
                <div className="inline-flex items-center px-4 py-2 rounded-xl bg-emerald-400/5 border border-emerald-400/10 text-[10px] font-black uppercase tracking-widest text-emerald-400 whitespace-nowrap h-fit self-start md:self-center">
                  <Calendar className="w-3.5 h-3.5 mr-2" /> {item.period}
                </div>
              </div>

              <p className="text-muted-foreground mb-8 text-lg font-light leading-relaxed">
                {item.description}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {item.achievements.map((achievement, j) => (
                  <div key={j} className="flex items-start gap-3 p-4 rounded-2xl bg-black/20 border border-white/5 group/item hover:border-emerald-400/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0 group-hover/item:scale-110 transition-transform" />
                    <span className="text-sm text-muted-foreground leading-relaxed group-hover/item:text-white transition-colors">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, k) => (
                  <span key={k} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[9px] font-black uppercase tracking-widest text-white/40 group-hover/card:text-emerald-400/80 group-hover/card:border-emerald-400/20 transition-all">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-6 right-6 opacity-0 group-hover/card:opacity-100 transition-opacity translate-x-4 group-hover/card:translate-x-0 duration-500">
                <ChevronRight className="w-6 h-6 text-emerald-400/30" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
