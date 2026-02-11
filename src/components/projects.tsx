import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ExternalLink,
  Github,
  Sparkles,
  Shield,
  Code2,
  Rocket,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  {
    title: 'Smart Exam AI Platform',
    category: 'AI EdTech',
    imageId: 'project-exam',
    icon: <Rocket className="w-4 h-4 text-rose-400" />,
    color: 'hsl(var(--tech-rose))',
    tech: ['Next.js 15', 'Gemini 2.5', 'Firebase', 'PostgreSQL'],
    description:
      'Enterprise-grade AI exam orchestrator featuring automated MCQ synthesis and performance predictive modeling with 98% accuracy.',
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'SecureChat Protocol',
    category: 'Cybersecurity',
    imageId: 'project-chat',
    icon: <Shield className="w-4 h-4 text-emerald-400" />,
    color: 'hsl(var(--tech-emerald))',
    tech: ['Socket.io', 'AES-256', 'Node.js', 'Redis'],
    description:
      'Post-quantum ready E2EE messaging layer implementing double-ratchet encryption and perfect forward secrecy.',
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'Conversational Fitness AI',
    category: 'Real-time AI',
    imageId: 'project-fitness',
    icon: <Sparkles className="w-4 h-4 text-cyan-400" />,
    color: 'hsl(var(--tech-cyan))',
    tech: ['Convex', 'Vapi.ai', 'React', 'Gemini'],
    description:
      'Low-latency voice assistant utilizing LLM function calling to dynamically adjust workout parameters mid-session.',
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'AI Career Accelerator',
    category: 'SaaS',
    imageId: 'project-career',
    icon: <Code2 className="w-4 h-4 text-amber-400" />,
    color: 'hsl(var(--tech-amber))',
    tech: ['MERN', 'Groq AI', 'OAuth 2.0', 'Redis'],
    description:
      'Advanced resume parsing engine leveraging Mixtral-8x7B for semantic extraction and targeted career mapping.',
    link: 'https://example.com',
    github: 'https://github.com',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-28">
      {/* ✅ Wide Container */}
      <div className="container max-w-7xl xl:max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-14 sm:mb-20 gap-8">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-primary">
              Portfolio
            </div>

            <h2
              className="
                text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
                font-black tracking-tighter
              "
            >
              Featured <span className="text-white/40 italic">Impact</span>
            </h2>

            <p
              className="
                text-sm sm:text-base lg:text-lg xl:text-xl
                text-muted-foreground
                max-w-2xl
                leading-relaxed
              "
            >
              A selection of mission-critical systems where{' '}
              <span className="text-white">security meets intelligence</span>.
            </p>
          </div>

          {/* Button stays premium */}
          <Button
            variant="outline"
            className="
              rounded-full
              px-8
              h-12
              border-white/10
              hover:bg-white/5
              font-bold
              w-fit
            "
          >
            View All Projects
          </Button>
        </div>

        {/* ✅ Responsive Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
          {projects.map((project, i) => {
            const imageData = PlaceHolderImages.find(
              (img) => img.id === project.imageId,
            );

            return (
              <Card
                key={i}
                className="
                  group relative overflow-hidden
                  bg-white/[0.01]
                  border-white/5
                  flex flex-col
                  rounded-[2.5rem]
                  shadow-2xl
                "
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  {imageData && (
                    <Image
                      src={imageData.imageUrl}
                      alt={imageData.description}
                      width={900}
                      height={600}
                      className="
                        object-cover w-full h-full
                        group-hover:scale-110
                        transition-transform duration-1000
                      "
                      data-ai-hint={imageData.imageHint}
                    />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />

                  {/* Floating Tech Pills */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((t, j) => (
                      <span
                        key={j}
                        className="
                          px-3 py-1
                          rounded-full
                          bg-black/60 backdrop-blur-xl
                          border border-white/10
                          text-[8px] sm:text-[9px] lg:text-[10px]
                          font-black uppercase tracking-widest
                          text-white/90
                        "
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Header */}
                <CardHeader className="space-y-4 pt-6 sm:pt-8 px-5 sm:px-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                      {project.icon}
                    </div>

                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                      {project.category}
                    </span>
                  </div>

                  <CardTitle
                    className="
                      text-2xl sm:text-3xl lg:text-4xl
                      font-black
                      group-hover:text-primary
                      transition-colors
                    "
                  >
                    {project.title}
                  </CardTitle>
                </CardHeader>

                {/* Content */}
                <CardContent className="px-5 sm:px-8 pb-6 flex-grow">
                  <CardDescription
                    className="
                      text-sm sm:text-base lg:text-lg xl:text-xl
                      leading-relaxed
                      text-muted-foreground/80
                      font-light
                    "
                  >
                    {project.description}
                  </CardDescription>
                </CardContent>

                {/* Footer */}
                <CardFooter className="px-5 sm:px-8 pb-6 flex flex-col sm:flex-row gap-4">
                  {/* Live Demo */}
                  <Button
                    asChild
                    className="
                      w-full sm:w-auto
                      rounded-full
                      bg-white text-black
                      hover:bg-white/90
                      font-black
                      text-[10px]
                      uppercase tracking-widest
                      h-12
                      px-8
                      shadow-xl
                      transition-all hover:scale-105
                    "
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Live Demo <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>

                  {/* Source */}
                  <Button
                    asChild
                    variant="outline"
                    className="
                      w-full sm:w-auto
                      rounded-full
                      border-white/10
                      bg-white/5
                      hover:bg-white/10
                      font-black
                      text-[10px]
                      uppercase tracking-widest
                      h-12
                      px-8
                      transition-all hover:scale-105
                    "
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-white/80 hover:text-white"
                    >
                      Source <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </CardFooter>

                {/* Hover Glow */}
                <div
                  className="
                    absolute inset-0
                    opacity-0
                    group-hover:opacity-[0.05]
                    pointer-events-none
                    transition-opacity duration-700
                  "
                  style={{ backgroundColor: project.color }}
                />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
