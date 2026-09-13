"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";
import { projects } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
        <SectionHeading
          eyebrow="Selected Projects"
          title="Representative Engagements"
          description="A selection of environmental, climate, and development projects reflecting the range of the practice."
          ghost="Work"
        />

        <div className="mt-12 border-t border-[var(--color-border)]">
          {projects.map((project, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal
                key={project.title}
                delay={Math.min(i, 6) * 0.03}
                direction={i % 2 === 0 ? "up" : "right"}
              >
                <div className="group relative border-b border-[var(--color-border)] overflow-hidden">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 top-1/2 -translate-y-1/2 font-display text-[5.5rem] sm:text-[7rem] leading-none text-ink/[0.03] transition-transform duration-500 group-hover:scale-110 group-hover:text-sage-deep/[0.06]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="relative w-full text-left py-8 flex flex-col gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-display text-sage-deep text-sm pt-1 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl leading-snug text-ink transition-transform duration-300 group-hover:translate-x-2 group-hover:text-sage-deep">
                        {project.title}
                      </h3>
                    </div>
                    <p className="pl-6 text-sm text-stone">
                      {project.role}
                      {project.organization ? ` — ${project.organization}` : ""}
                    </p>
                    <div className="pl-6 flex flex-wrap items-center justify-between gap-3">
                      <span className="inline-block text-xs tracking-[0.12em] uppercase text-sage-deep/80 border border-sage-deep/20 bg-sage-tint/40 rounded-full px-3 py-1">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-4">
                        {project.period && (
                          <span className="text-sm text-stone">{project.period}</span>
                        )}
                        <ArrowUpRight
                          size={18}
                          className="text-sage-deep opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                        />
                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="text-ink/50 group-hover:text-sage-deep"
                        >
                          <Plus size={20} />
                        </motion.span>
                      </div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="relative overflow-hidden"
                      >
                        <div className="pb-8 pl-6 max-w-2xl">
                          <p className="text-ink/70 leading-relaxed">
                            {project.description}
                          </p>
                          {project.contributions && (
                            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                              {project.contributions.map((c) => (
                                <li
                                  key={c}
                                  className="text-sm text-ink/60 flex gap-2"
                                >
                                  <span className="text-sage-deep">—</span>
                                  {c}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
    </>
  );
}
