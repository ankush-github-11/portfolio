"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "left" | "right" | "down";
  delay?: number;
  duration?: number;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
}: ScrollRevealProps) {
  const getInitialPosition = () => {
    const px = 80;
    switch (direction) {
      case "left":
        return { opacity: 0, x: px };
      case "right":
        return { opacity: 0, x: -px };
      case "down":
        return { opacity: 0, y: -px };
      case "up":
      default:
        return { opacity: 0, y: px };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
