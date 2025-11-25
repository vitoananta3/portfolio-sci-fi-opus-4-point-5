"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Cpu, Sparkles, Terminal } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "5+", icon: Terminal },
  { label: "Projects Completed", value: "50+", icon: Code2 },
  { label: "Technologies", value: "20+", icon: Cpu },
  { label: "Lines of Code", value: "500K+", icon: Sparkles },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-32 px-4 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider">
            {"// ABOUT_MODULE"}
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-gradient">System Profile</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card variant="glass" className="p-8">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center gap-3 text-primary font-mono text-sm">
                  <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span>STATUS: ONLINE</span>
                </div>

                <p className="text-foreground/90 leading-relaxed text-lg">
                  I'm a passionate full-stack developer with a focus on building
                  exceptional digital experiences. My journey in tech began with
                  curiosity and has evolved into a deep expertise in modern web
                  technologies.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies,
                  contributing to open-source projects, or optimizing systems for
                  peak performance. I believe in writing clean, maintainable code
                  that stands the test of time.
                </p>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground font-mono">
                    <span className="text-primary">{">"}</span> Current Focus:{" "}
                    <span className="text-foreground">
                      AI Integration, Performance Optimization
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group"
              >
                <Card
                  variant="holographic"
                  className="p-6 text-center hover:neon-border transition-all duration-300"
                >
                  <CardContent className="p-0">
                    <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p
                      className="text-3xl md:text-4xl font-bold text-gradient mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground font-mono">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

