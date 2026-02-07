import React from "react";
import { BadgeCheck, FileText, Shield } from "lucide-react";

export function Certifications() {
  const certs = [
    "Network Security",
    "Cryptography",
    "Penetration Testing",
    "Red Hat System Administration"
  ];

  return (
    <section id="certifications" className="py-24 bg-white/[0.01]">
      <div className="container px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Patents & Innovation</h2>
              <p className="text-muted-foreground">My work often pushes beyond standard engineering into research and experimental systems.</p>
            </div>
            
            <div className="p-6 rounded-2xl border border-primary/20 bg-primary/[0.03] flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Patent Filed (2024)</div>
                <h3 className="text-xl font-bold mb-2">Animal Sound-Based Audiometry Test Using Software</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Innovative research focused on utilizing algorithmic sound processing for specialized audiometry testing.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Security Credentials</h2>
              <p className="text-muted-foreground">Formal certifications supporting my deep-tech and cybersecurity focus.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certs.map((cert, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                  <BadgeCheck className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}