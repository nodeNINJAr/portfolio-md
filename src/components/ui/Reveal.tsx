"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 20,
  direction = "up",
  scale,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  direction?: "up" | "left" | "right";
  scale?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const initial =
    direction === "left"
      ? { opacity: 0, x: -y, y: 0, scale }
      : direction === "right"
        ? { opacity: 0, x: y, y: 0, scale }
        : { opacity: 0, y, scale };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
