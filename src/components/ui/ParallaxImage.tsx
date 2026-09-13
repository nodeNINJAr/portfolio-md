"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ReactNode, useRef } from "react";

export function ParallaxImage({
  className = "",
  strength = 14,
  children,
}: {
  className?: string;
  strength?: number;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={reduceMotion ? undefined : { y }}
        className="absolute inset-x-0 -top-[16%] -bottom-[16%]"
      >
        {children}
      </motion.div>
    </div>
  );
}
