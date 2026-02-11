import React from 'react';
import { BadgeCheck, FileText } from 'lucide-react';

export function Certifications() {
  const certs = [
    'Network Security',
    'Cryptography',
    'Penetration Testing',
    'Red Hat System Administration',
  ];

  return (
    <section
      id="certifications"
      className="py-16 sm:py-20 lg:py-28 bg-white/[0.01]"
    >
      {/* ✅ Wide Desktop Container */}
      <div className="container max-w-7xl xl:max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/* Responsive Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left Side */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2
                className="
                  text-3xl sm:text-4xl lg:text-5xl
                  font-bold tracking-tight
                "
              >
                Patents & Innovation
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
                My work often pushes beyond standard engineering into research
                and experimental systems.
              </p>
            </div>

            {/* Patent Card */}
            <div className="p-6 sm:p-8 lg:p-10 rounded-2xl border border-primary/20 bg-primary/[0.03] flex items-start gap-6 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>

              <div>
                <div className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest mb-2">
                  Patent Filed (2024)
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3">
                  Animal Sound-Based Audiometry Test Using Software
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Innovative research focused on utilizing algorithmic sound
                  processing for specialized audiometry testing.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2
                className="
                  text-3xl sm:text-4xl lg:text-5xl
                  font-bold tracking-tight
                "
              >
                Security Credentials
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Formal certifications supporting my deep-tech and cybersecurity
                focus.
              </p>
            </div>

            {/* Certifications Grid */}
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
              {certs.map((cert, i) => (
                <div
                  key={i}
                  className="
                    flex items-center gap-3
                    p-4 sm:p-5
                    rounded-xl
                    border border-white/5
                    bg-white/[0.02]
                    hover:bg-white/[0.04]
                    transition-colors
                  "
                >
                  <BadgeCheck className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0" />

                  <span className="font-medium text-sm sm:text-base">
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
