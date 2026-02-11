'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Send, CheckCircle2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: 'Message Sent',
      description: "I'll get back to you shortly!",
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28">
      {/* ✅ Wide Desktop Container */}
      <div className="container max-w-7xl xl:max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Side */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2
                className="
                  text-3xl sm:text-4xl lg:text-5xl xl:text-6xl
                  font-bold tracking-tight
                "
              >
                Let's build something{' '}
                <span className="text-primary">secure</span>.
              </h2>

              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Interested in collaborating or hiring for a remote role? Drop me
                a message.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-5">
              <div className="flex items-center gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/5 group hover:border-primary/50 transition-colors">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium text-sm sm:text-base">
                  bala.sub@engineer.com
                </span>
              </div>

              {/* Social Links Wrap Better */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
                >
                  <Github className="w-5 h-5" /> GitHub
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-[#0077B5]" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="p-6 sm:p-8 lg:p-10 xl:p-12 rounded-3xl glass-morphism border-white/5 relative overflow-hidden">
            {submitted ? (
              <div className="text-center py-12 animate-reveal">
                <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />

                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  Message Received
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Thanks for reaching out! I'll be in touch soon.
                </p>

                <Button
                  onClick={() => setSubmitted(false)}
                  variant="link"
                  className="mt-4"
                >
                  Send another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Inputs */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input
                      required
                      placeholder="Your Name"
                      className="bg-black/40 border-white/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input
                      required
                      type="email"
                      placeholder="email@example.com"
                      className="bg-black/40 border-white/10"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    required
                    placeholder="Tell me about your project..."
                    className="min-h-[140px] bg-black/40 border-white/10"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full h-12 sm:h-14 gap-2 bg-primary hover:bg-primary/90 text-base sm:text-lg font-bold rounded-xl"
                >
                  Send Message <Send className="w-4 h-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
