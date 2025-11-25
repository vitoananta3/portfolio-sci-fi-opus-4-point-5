"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Terminal,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@vito.dev",
    href: "mailto:hello@vito.dev",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Earth, Milky Way",
    href: "#",
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formState);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-32 px-4 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider">
            {"// ESTABLISH_CONNECTION"}
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's create something amazing together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card variant="glass" className="p-8">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-mono text-muted-foreground"
                    >
                      {">"} Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 outline-none"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-mono text-muted-foreground"
                    >
                      {">"} Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 outline-none"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-mono text-muted-foreground"
                    >
                      {">"} Message
                    </label>
                    <textarea
                      id="message"
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 outline-none resize-none"
                      placeholder="Your message..."
                      required
                    />
                  </div>

                  {/* Submit button */}
                  <Button
                    type="submit"
                    variant="neon"
                    size="lg"
                    className="w-full group"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Terminal-style info */}
            <Card variant="glass" className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border/50">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground ml-2">
                    contact.terminal
                  </span>
                </div>

                <div className="font-mono text-sm space-y-3">
                  <p className="text-muted-foreground">
                    <span className="text-primary">$</span> cat contact_info.txt
                  </p>
                  <div className="pl-4 space-y-2">
                    {contactInfo.map((info) => (
                      <a
                        key={info.label}
                        href={info.href}
                        className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors group"
                      >
                        <info.icon className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">
                          {info.label}:
                        </span>
                        <span className="group-hover:underline">
                          {info.value}
                        </span>
                      </a>
                    ))}
                  </div>
                  <p className="text-muted-foreground pt-2">
                    <span className="text-primary">$</span>{" "}
                    <span className="animate-pulse">_</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-mono flex items-center gap-2">
                <Terminal className="w-5 h-5 text-primary" />
                <span>Social Links</span>
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 rounded-lg glass-panel hover:neon-border transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-primary" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability status */}
            <Card variant="holographic" className="p-6">
              <CardContent className="p-0 flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-green-400/30 animate-ping" />
                </div>
                <div>
                  <p className="font-semibold">Currently Available</p>
                  <p className="text-sm text-muted-foreground">
                    Open for freelance & full-time opportunities
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

