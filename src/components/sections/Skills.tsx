"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Boxes,
  Cloud,
  Database,
  Globe,
  Laptop,
  Server,
  Smartphone,
  Workflow,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Laptop,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Three.js",
      "Motion",
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Python", "Go", "GraphQL", "REST APIs", "WebSockets"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Prisma",
      "Drizzle",
      "Supabase",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "DevOps",
    icon: Cloud,
    skills: ["Docker", "AWS", "Vercel", "CI/CD", "Linux", "Nginx"],
    color: "from-orange-500 to-red-500",
  },
];

const techStack = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 92 },
  { name: "Node.js", level: 88 },
  { name: "Next.js", level: 90 },
  { name: "Python", level: 85 },
  { name: "PostgreSQL", level: 82 },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="skills"
      className="relative py-32 px-4 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider">
            {"// TECH_STACK"}
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-gradient">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                variant="glass"
                className="h-full hover:neon-border transition-all duration-300 group"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-20`}
                    >
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: 0.3 + index * 0.1 + skillIndex * 0.05,
                        }}
                      >
                        <Badge
                          variant="neon"
                          className="group-hover:shadow-[0_0_8px_oklch(0.75_0.15_195_/_30%)] transition-shadow"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Proficiency bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card variant="glass" className="p-8">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold mb-8 font-mono flex items-center gap-2">
                <Workflow className="w-5 h-5 text-primary" />
                <span>Core Proficiencies</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{tech.name}</span>
                      <span className="text-primary font-mono">
                        {tech.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${tech.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.8 + index * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        style={{
                          boxShadow: "0 0 10px oklch(0.75 0.15 195 / 50%)",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

