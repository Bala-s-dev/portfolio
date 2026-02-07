"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send, CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Message Sent", description: "I'll get back to you shortly!" });
  };

  return (
    <section id="contact" className="py-24 container px-4 max-w-5xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Let's build something <span className="text-primary">secure</span>.</h2>
            <p className="text-xl text-muted-foreground">
              Interested in collaborating or hiring for a remote role? Drop me a message.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 group hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-medium">bala.sub@engineer.com</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="https://github.com" target="_blank" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                <Github className="w-5 h-5" /> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                <Linkedin className="w-5 h-5 text-[#0077B5]" /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-3xl glass-morphism border-white/5 relative overflow-hidden">
          {submitted ? (
            <div className="text-center py-12 animate-reveal">
              <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-2">Message Received</h3>
              <p className="text-muted-foreground">Thanks for reaching out! I'll be in touch soon.</p>
              <Button onClick={() => setSubmitted(false)} variant="link" className="mt-4">Send another</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input required placeholder="Your Name" className="bg-black/40 border-white/10" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input required type="email" placeholder="email@example.com" className="bg-black/40 border-white/10" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea required placeholder="Tell me about your project..." className="min-h-[120px] bg-black/40 border-white/10" />
              </div>
              <Button type="submit" className="w-full h-12 gap-2 bg-primary hover:bg-primary/90 text-lg font-bold">
                Send Message <Send className="w-4 h-4" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}