"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function SectionBackdrop({ text, dark }: { text: string; dark: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [14, -14]);
  const width = Math.max(400, text.length * 78);

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-8 -z-10 select-none sm:-top-12">
      <motion.svg
        viewBox={`0 0 ${width} 150`}
        className={`h-auto max-h-28 w-full overflow-visible font-sans font-bold uppercase ${dark ? "text-white/[0.08]" : "text-black/[0.06]"}`}
        style={reducedMotion ? undefined : { y }}
        focusable="false"
      >
        <text
          x={width / 2}
          y="120"
          textAnchor="middle"
          fill="currentColor"
          fontSize="120"
          textLength={width - 24}
          lengthAdjust="spacingAndGlyphs"
        >
          {text.toUpperCase()}
        </text>
      </motion.svg>
    </div>
  );
}
