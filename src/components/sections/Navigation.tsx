"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-panel border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-gradient neon-glow">V</span>
            <span className="text-foreground/90">ITO</span>
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="neon" size="sm">
              Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-40 md:hidden"
      >
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <motion.nav
          initial={false}
          animate={{
            x: isMobileMenuOpen ? 0 : "100%",
          }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="absolute top-16 right-0 bottom-0 w-64 glass-panel border-l border-border/50 p-6"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: 20 }}
                animate={
                  isMobileMenuOpen
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: 20 }
                }
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-lg font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
            <div className="mt-4 pt-4 border-t border-border/50">
              <Button variant="neon" className="w-full">
                Resume
              </Button>
            </div>
          </div>
        </motion.nav>
      </motion.div>
    </>
  );
}

