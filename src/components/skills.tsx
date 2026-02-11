import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Code2, Server, BrainCircuit, ShieldAlert, Cloud } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code2 className="w-5 h-5" />,
    color: 'hsl(var(--tech-cyan))',
    glow: 'rgba(6, 182, 212, 0.15)',
    skills: [
      'React',
      'Next.js',
      'Redux',
      'Tailwind',
      'Shadcn/UI',
      'Framer Motion',
    ],
  },
  {
    title: 'Backend',
    icon: <Server className="w-5 h-5" />,
    color: 'hsl(var(--tech-emerald))',
    glow: 'rgba(16, 185, 129, 0.15)',
    skills: [
      'Node.js',
      'Express',
      'Prisma',
      'REST APIs',
      'Socket.io',
      'Convex',
    ],
  },
  {
    title: 'AI & Data',
    icon: <BrainCircuit className="w-5 h-5" />,
    color: 'hsl(var(--tech-rose))',
    glow: 'rgba(244, 63, 94, 0.15)',
    skills: ['Gemini API', 'Groq AI', 'Genkit', 'Vector DBs', 'Structured AI'],
  },
  {
    title: 'Security',
    icon: <ShieldAlert className="w-5 h-5" />,
    color: 'hsl(var(--tech-amber))',
    glow: 'rgba(245, 158, 11, 0.15)',
    skills: ['RBAC', 'JWT', 'E2EE', 'OAuth2', 'PenTesting', 'AES-256'],
  },
  {
    title: 'Cloud',
    icon: <Cloud className="w-5 h-5" />,
    color: 'hsl(var(--primary))',
    glow: 'rgba(79, 70, 229, 0.15)',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'Firebase',
      'Docker',
      'AWS',
      'App Hosting',
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-16 sm:py-20 lg:py-28 relative overflow-hidden bg-black/20"
    >
      {/* ✅ Wide Desktop Container */}
      <div className="container max-w-7xl xl:max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-14 sm:mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            Expertise
          </div>

          <h2
            className="
              text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
              font-black tracking-tight
            "
          >
            Technical Arsenal
          </h2>

          <p
            className="
              text-sm sm:text-base lg:text-lg xl:text-xl
              text-muted-foreground
              max-w-3xl mx-auto
              leading-relaxed
            "
          >
            A battle-tested stack architected for{' '}
            <span className="text-white font-medium">massive scalability</span>{' '}
            and ironclad security.
          </p>
        </div>

        {/* ✅ Responsive Grid Expansion */}
        <div
          className="
            grid gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            2xl:grid-cols-5
          "
        >
          {skillCategories.map((category, i) => (
            <div
              key={i}
              className="
                p-6 sm:p-8 lg:p-10
                rounded-[2.5rem]
                border border-white/5
                bg-white/[0.02]
                hover:bg-white/[0.04]
                transition-all
                group
                relative overflow-hidden
              "
              style={{ '--glow-color': category.glow } as React.CSSProperties}
            >
              {/* Glow */}
              <div
                className="
                  absolute -top-12 -right-12
                  w-32 h-32
                  blur-[70px]
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500
                "
                style={{ backgroundColor: category.color }}
              />

              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="
                    w-12 h-12 lg:w-14 lg:h-14
                    rounded-2xl
                    flex items-center justify-center
                    group-hover:scale-110
                    transition-transform duration-500
                  "
                  style={{
                    backgroundColor: `${category.color}20`,
                    color: category.color,
                  }}
                >
                  {category.icon}
                </div>

                <h3 className="font-bold text-lg sm:text-xl lg:text-2xl tracking-tight text-white/90">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <Badge
                    key={j}
                    variant="secondary"
                    className="
                      bg-white/5
                      text-muted-foreground/80
                      hover:bg-white/10
                      hover:text-white
                      transition-all
                      border-none
                      py-1.5 px-3
                      rounded-xl
                      text-[10px] sm:text-[11px] lg:text-[12px]
                      font-bold uppercase tracking-wide
                    "
                    style={{
                      borderLeft: `1px solid ${category.color}40`,
                    }}
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
