
import React from "react";
import Image from "next/image";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

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
  const imageData = PlaceHolderImages.find(img => img.id === 'experience-office');

  return (
    <section id="experience" className="py-24 container px-4 max-w-6xl">
      <div className="flex flex-col items-center text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Professional Journey</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Career <span className="text-emerald-400 italic">Timeline</span></h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: Interactive Timeline */}
        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experience.map((item, i) => (
            <div key={i} className="relative flex items-start gap-8 group">
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-2xl border border-white/10 bg-background shadow-xl shrink-0 z-10 group-hover:border-emerald-400/50 transition-colors">
                <Briefcase className="w-5 h-5 text-emerald-400" />
              </div>

              {/* Content Card */}
              <div className="flex-1 p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all card-hover-effect">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-black text-2xl mb-1">{item.role}</h3>
                    <div className="text-emerald-400 font-bold flex items-center gap-2 text-sm">
                      {item.company} <span className="text-white/20">•</span> <MapPin className="w-3 h-3" /> {item.location}
                    </div>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-muted-foreground whitespace-nowrap">
                    <Calendar className="w-3.5 h-3.5 inline mr-2 mb-0.5" /> {item.period}
                  </div>
                </div>
                
                <ul className="grid gap-3">
                  {item.achievements.map((achievement, j) => (
                    <li key={j} className="text-sm text-muted-foreground/90 flex items-start gap-3 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Immersive Image */}
        <div className="relative group lg:sticky lg:top-32">
          <div className="absolute -inset-4 bg-emerald-400/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl">
            {imageData && (
              <Image 
                src={imageData.imageUrl} 
                alt={imageData.description}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                data-ai-hint={imageData.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-8 left-8 right-8 p-6 glass-morphism rounded-2xl border-white/10">
              <p className="text-xs font-black uppercase tracking-widest text-emerald-400 mb-2">Work Ethic</p>
              <p className="text-sm font-light text-white/80 leading-relaxed italic">
                "Scaling systems requires not just technical precision, but a deep understanding of the human-computer interaction loop."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
