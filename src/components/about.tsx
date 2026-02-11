import React from 'react';
import { ShieldCheck, Cpu, MessageSquareQuote, Lock } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: <Cpu className="w-5 h-5" />,
      title: 'AI Systems',
      description: 'Building production-grade AI tools using Gemini and Groq.',
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: 'Security First',
      description: 'Implementing RBAC, JWT, and E2EE for robust platforms.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: 'Real-time Tech',
      description: 'Leveraging Socket.io and Convex for low-latency features.',
    },
  ];

  return (
    <section
      id="about"
      className="
        py-16 sm:py-20 lg:py-28
      "
    >
      {/* ✅ Desktop Wide Container Upgrade */}
      <div
        className="
          container
          max-w-7xl xl:max-w-[1400px]
          px-4 sm:px-6 lg:px-10
        "
      >
        {/* ✅ Layout scales better across breakpoints */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Heading */}
            <h2
              className="
                text-3xl sm:text-4xl lg:text-5xl xl:text-6xl
                font-bold tracking-tight
              "
            >
              The Engineer Behind the Code
            </h2>

            {/* Paragraph 1 */}
            <p
              className="
                text-muted-foreground
                leading-relaxed
                text-sm sm:text-base lg:text-lg xl:text-xl
              "
            >
              I'm a Full Stack Developer obsessed with the intersection of{' '}
              <span className="text-foreground font-medium">
                Artificial Intelligence
              </span>{' '}
              and{' '}
              <span className="text-foreground font-medium">Cybersecurity</span>
              . My focus is on creating scalable, secure, and user-centric
              applications that solve real-world problems.
            </p>

            {/* Paragraph 2 */}
            <p
              className="
                text-muted-foreground
                leading-relaxed
                text-sm sm:text-base lg:text-lg
              "
            >
              From developing AI-powered EdTech platforms to building end-to-end
              encrypted messaging systems, I bring a security-first mindset to
              every line of code. I thrive in remote startup environments where
              agility and performance are paramount.
            </p>

            {/* Quote */}
            <div className="flex items-start gap-3 pt-4">
              <div className="hidden sm:block h-12 w-px bg-border" />

              <div className="italic text-muted-foreground text-xs sm:text-sm lg:text-base flex items-start gap-2 leading-relaxed">
                <MessageSquareQuote className="w-5 h-5 shrink-0 text-primary opacity-50 mt-0.5" />
                "I believe the best software is not just functional, but
                invisible, secure, and intelligent by default."
              </div>
            </div>
          </div>

          {/* Right Highlights */}
          <div
            className="
              grid gap-4 sm:gap-5 lg:gap-6
            "
          >
            {highlights.map((item, i) => (
              <div
                key={i}
                className="
                  p-5 sm:p-6 lg:p-8 xl:p-10
                  rounded-2xl
                  border border-white/5
                  bg-white/[0.02]
                  hover:bg-white/[0.04]
                  transition-colors
                  group
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-10 h-10 sm:w-12 sm:h-12
                    rounded-xl
                    bg-primary/10
                    flex items-center justify-center
                    text-primary
                    mb-4
                    group-hover:scale-110
                    transition-transform
                  "
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3
                  className="
                    font-bold
                    text-base sm:text-lg lg:text-xl
                    mb-1
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    text-xs sm:text-sm lg:text-base
                    text-muted-foreground
                    leading-relaxed
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
