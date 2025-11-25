"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

// Dynamic import for Three.js scene to avoid SSR issues
const Scene = dynamic(
  () => import("@/components/three/Scene").then((mod) => mod.Scene),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 -z-10 bg-background">
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>
    ),
  }
);

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* 3D Background */}
      <Scene />

      {/* Navigation */}
      <Navigation />

      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
