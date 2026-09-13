"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ElementType } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function TextReveal({
  text,
  as: Tag = "span",
  className = "",
  delay = 0,
  stagger = 0.07,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (reduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-top pb-[0.15em] -mb-[0.15em]"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.7,
              ease,
              delay: delay + i * stagger,
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
