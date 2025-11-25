"use client";

import { motion } from "motion/react";
import { Github, Heart, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 border-t border-border/30">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span
              className="text-xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="text-gradient">V</span>
              <span className="text-foreground/90">ITO</span>
            </span>
            <p className="text-sm text-muted-foreground font-mono">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Built with */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm text-muted-foreground flex items-center gap-1"
          >
            Built with{" "}
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />{" "}
            using Next.js, Three.js & Motion
          </motion.p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Terminal-style footer line */}
        <div className="mt-8 pt-6 border-t border-border/30">
          <p className="text-center text-xs font-mono text-muted-foreground/60">
            <span className="text-primary">{">"}</span>{" "}
            System.status: OPERATIONAL | Last updated: {currentYear}.11.25 |
            Version: 1.0.0
          </p>
        </div>
      </div>
    </footer>
  );
}

