import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';

const experience = [
  {
    role: 'Full Stack Intern',
    company: 'Ernestwell',
    location: 'Remote, UK',
    period: 'Nov 24 – Feb 25',
    description:
      'Architected high-performance EdTech solutions with a focus on security and scalable architecture.',
    achievements: [
      "Engineered 'Unibritend' study platform core architecture.",
      'Optimized search performance for 400+ dynamic datasets.',
      'Built secure Admin Portal via Firebase Auth & Firestore.',
      'Deployed AI chatbot reducing support load by 30%.',
    ],
    skills: ['Next.js', 'Firebase', 'TypeScript', 'AI Integration'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-28">
      {/* ✅ Wide Desktop Container */}
      <div className="container max-w-6xl xl:max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">
            <Briefcase className="w-4 h-4" />
            <span>Professional Background</span>
          </div>

          <h2
            className="
              text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
              font-black tracking-tighter
            "
          >
            Career <span className="text-emerald-400 italic">Evolution</span>
          </h2>

          <p
            className="
              text-sm sm:text-base lg:text-lg xl:text-xl
              text-muted-foreground
              max-w-3xl
              font-light leading-relaxed
            "
          >
            Strategic engineering roles in remote-first environments, delivering
            production-grade systems at scale.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative space-y-10">
          {/* ✅ Timeline Line (hidden only on very small screens) */}
          <div className="hidden sm:block absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-emerald-500/50 via-border to-transparent" />

          {experience.map((item, i) => (
            <div
              key={i}
              className="relative flex items-start gap-6 sm:gap-10 group"
            >
              {/* Timeline Icon */}
              <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-emerald-400/30 bg-background shadow-[0_0_20px_rgba(52,211,153,0.12)] shrink-0 z-10 group-hover:border-emerald-400 group-hover:scale-110 transition-all duration-500">
                <Briefcase className="w-5 h-5 text-emerald-400" />
              </div>

              {/* Card */}
              <div
                className="
                  flex-1
                  p-6 sm:p-8 lg:p-10 xl:p-12
                  rounded-[2.5rem]
                  border border-white/5
                  bg-white/[0.02]
                  hover:bg-white/[0.04]
                  transition-all duration-500
                  relative overflow-hidden
                  group/card
                "
              >
                {/* Glow */}
                <div className="absolute -top-24 -right-24 w-56 h-56 bg-emerald-400/5 blur-[90px] rounded-full pointer-events-none group-hover/card:bg-emerald-400/10 transition-colors" />

                {/* Role + Period */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <h3
                      className="
                        font-black
                        text-2xl sm:text-3xl lg:text-4xl
                        mb-2
                        group-hover:text-emerald-400
                        transition-colors
                      "
                    >
                      {item.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm lg:text-base">
                      <span className="text-white font-bold">
                        {item.company}
                      </span>

                      <span className="text-muted-foreground flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-emerald-400/60" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="inline-flex items-center px-4 py-2 rounded-xl bg-emerald-400/5 border border-emerald-400/10 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-emerald-400 whitespace-nowrap h-fit self-start md:self-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.period}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground mb-8 font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Achievements */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {item.achievements.map((achievement, j) => (
                    <div
                      key={j}
                      className="
                        flex items-start gap-3
                        p-4
                        rounded-2xl
                        bg-black/20
                        border border-white/5
                        hover:border-emerald-400/20
                        transition-colors
                      "
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />

                      <span className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed hover:text-white transition-colors">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, k) => (
                    <span
                      key={k}
                      className="
                        px-3 py-1
                        rounded-lg
                        bg-white/5
                        border border-white/5
                        text-[9px] sm:text-[10px]
                        font-black uppercase tracking-widest
                        text-white/40
                        group-hover/card:text-emerald-400/80
                        group-hover/card:border-emerald-400/20
                        transition-all
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Chevron Hover */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover/card:opacity-100 transition-opacity translate-x-4 group-hover/card:translate-x-0 duration-500 hidden sm:block">
                  <ChevronRight className="w-7 h-7 text-emerald-400/30" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
