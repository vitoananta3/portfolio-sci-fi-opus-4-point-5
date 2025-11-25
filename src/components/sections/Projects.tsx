"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Neural Dashboard",
    description:
      "AI-powered analytics dashboard with real-time data visualization and predictive insights. Built for enterprise-scale data processing.",
    image: "/project-1.jpg",
    tags: ["React", "TypeScript", "D3.js", "Python", "TensorFlow"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Quantum Commerce",
    description:
      "Next-generation e-commerce platform with AR product preview, AI recommendations, and seamless checkout experience.",
    image: "/project-2.jpg",
    tags: ["Next.js", "Three.js", "Stripe", "PostgreSQL"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Synapse Chat",
    description:
      "End-to-end encrypted real-time messaging platform with voice/video calls and collaborative workspaces.",
    image: "/project-3.jpg",
    tags: ["WebRTC", "Socket.io", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "DevFlow CLI",
    description:
      "Developer productivity tool for automating workflows, managing environments, and streamlining deployments.",
    image: "/project-4.jpg",
    tags: ["Rust", "CLI", "Docker", "GitHub Actions"],
    github: "#",
    live: "#",
    featured: false,
  },
];

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`group ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
    >
      <Card
        variant="glass"
        className="h-full overflow-hidden hover:neon-border transition-all duration-500"
      >
        {/* Project image placeholder */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20">
            <div className="absolute inset-0 grid-pattern opacity-40" />
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-16 h-16 border border-primary/30 rounded-lg" />
            <div className="absolute bottom-4 right-4 w-24 h-24 border border-accent/30 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-primary/10" style={{ fontFamily: "var(--font-display)" }}>
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardContent className="p-6 space-y-4">
          {/* Title */}
          <div className="flex items-start justify-between gap-4">
            <h3
              className="text-xl font-semibold group-hover:text-gradient transition-all duration-300"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {project.title}
            </h3>
            {project.featured && (
              <Badge variant="holographic" className="shrink-0">
                Featured
              </Badge>
            )}
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="neon" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4 border-t border-border/50">
            <a href={project.github} className="flex-1">
              <Button
                variant="outline"
                size="sm"
                className="w-full group/btn"
              >
                <Github className="w-4 h-4 mr-2" />
                Code
              </Button>
            </a>
            <a href={project.live} className="flex-1">
              <Button
                variant="neon"
                size="sm"
                className="w-full group/btn"
              >
                Live Demo
                <ArrowUpRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="projects"
      className="relative py-32 px-4 overflow-hidden"
    >
      {/* Background */}
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
            {"// PROJECTS_ARCHIVE"}
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-gradient">Featured Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in building
            modern, scalable, and visually stunning applications.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="group">
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

