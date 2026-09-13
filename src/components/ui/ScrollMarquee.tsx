"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export function ScrollMarquee({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-16%"]);

  const line = items.join("   •   ") + "   •   ";

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={reduceMotion ? undefined : { x }}
        className="whitespace-nowrap font-display font-light uppercase tracking-tight"
      >
        {line}
        {line}
      </motion.div>
    </div>
  );
}
