"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
      />

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm text-primary">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-muted-foreground mb-4 font-mono"
        >
          {"// SYSTEM.INITIALIZE()"}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="text-gradient neon-glow">VITO</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl text-foreground/90 font-light">
            <span className="text-primary">&lt;</span>
            Full Stack Developer
            <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground mt-2 text-lg">
            Crafting digital experiences from the future
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed"
        >
          I build elegant, high-performance web applications with modern
          technologies. Passionate about clean code, intuitive interfaces, and
          pushing the boundaries of what's possible on the web.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Button variant="neon" size="lg" className="group">
            <span>View Projects</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            >
              →
            </motion.span>
          </Button>
          <Button variant="outline" size="lg">
            Get in Touch
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: Github, label: "GitHub", href: "#" },
            { icon: Linkedin, label: "LinkedIn", href: "#" },
            { icon: Mail, label: "Email", href: "#" },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-lg glass-panel hover:neon-border transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 text-primary" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-mono uppercase tracking-wider">
            Scroll
          </span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}

