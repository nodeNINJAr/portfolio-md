"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";
import { caseStudies, projects } from "@/lib/data";
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

        <div className="mt-12 space-y-6">
          {caseStudies.map((study, index) => (
            <Reveal key={study.project}>
              <article className="rounded-2xl border border-dashed border-black/25 p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-wider text-stone">Case study {String(index + 1).padStart(2, "0")} / {study.project}</p>
                <h3 className="mt-3 text-2xl font-semibold leading-snug">{study.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{study.organization}<br />{study.location} · {study.period}</p>
                <dl className="mt-6 space-y-5 border-t border-black/10 pt-6">
                  {[["The challenge", study.problem], ["My contribution", study.approach], ["Documented outputs", study.output]].map(([label, detail]) => (
                    <div key={label}>
                      <dt className="text-xs font-bold uppercase tracking-wider">{label}</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-ink/75">{detail}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
        <h3 className="mt-12 text-xs font-bold uppercase tracking-wider text-stone">Explore all engagements</h3>
        <div className="mt-6 space-y-4">
          {projects.map((project, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal
                key={project.title}
                delay={Math.min(i, 6) * 0.03}
                direction={i % 2 === 0 ? "up" : "right"}
              >
                <div className="group relative rounded-2xl border border-dashed border-black/25 px-5 sm:px-7 overflow-hidden transition-colors hover:border-black/50">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 top-1/2 -translate-y-1/2 font-display text-[5.5rem] sm:text-[7rem] leading-none text-ink/[0.03] transition-transform duration-500 group-hover:scale-110 group-hover:text-sage-deep/[0.06]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <button
                    aria-expanded={isOpen}
                    aria-controls={`project-details-${i}`}
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
                      <span className="inline-block text-xs tracking-[0.12em] uppercase text-ink/70 border border-black/15 bg-transparent rounded-full px-3 py-1">
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
                        id={`project-details-${i}`}
                        className="relative overflow-hidden"
                      >
                        <div className="pb-8 pl-6 max-w-2xl">
                          {project.location && <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-stone">{project.location}</p>}
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
