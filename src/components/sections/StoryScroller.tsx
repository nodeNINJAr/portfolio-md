"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Fragment, ReactNode, useEffect, useState } from "react";

export type StoryPanel = {
  kind: "panel";
  id: string;
  label: string;
  bg: string;
  image: string;
  content: ReactNode;
};

export type StoryBand = {
  kind: "band";
  key: string;
  content: ReactNode;
};

export type StoryBlock = StoryPanel | StoryBand;

const panelPadding =
  "px-6 sm:px-10 lg:pl-12 lg:pr-10 xl:pl-16 xl:pr-14 py-16 sm:py-24 lg:py-28";

export function StoryScroller({ blocks }: { blocks: StoryBlock[] }) {
  const panels = blocks.filter((b): b is StoryPanel => b.kind === "panel");
  const [active, setActive] = useState(panels[0]?.id);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const elements = panels
      .map((p) => document.getElementById(p.id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activePanel = panels.find((p) => p.id === active) ?? panels[0];
  const activeIndex = Math.max(0, panels.findIndex((p) => p.id === active));

  return (
    <div className="grid grid-cols-1 md:grid-cols-5">
      <div className="hidden md:block md:col-span-2">
        <div className="md:sticky md:top-0 md:h-full md:max-h-screen">
          <div className="relative w-full h-full bg-navy-2 overflow-hidden">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={activePanel?.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0"
              >
                {activePanel?.image && (
                  <motion.div
                    initial={reducedMotion ? false : { scale: 1.06 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activePanel.image}
                      alt={activePanel.label}
                      fill
                      sizes="40vw"
                      className="object-cover"
                    />
                  </motion.div>
                )}
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-black/15" />
                <div className="absolute right-7 top-8 text-right sm:right-10 sm:top-10">
                  <p className="text-[clamp(4rem,8vw,8rem)] font-black leading-[0.8] tracking-[-0.12em] text-transparent [text-stroke:1px_rgba(255,255,255,0.65)] [-webkit-text-stroke:1px_rgba(255,255,255,0.65)]">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.25em] text-white/65">
                    of {String(panels.length).padStart(2, "0")} stories
                  </p>
                </div>
                <div className="absolute bottom-7 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#CCED00] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-black">
                    <span className="h-1.5 w-1.5 rounded-full bg-black" />
                    Abu Jubayer / Field Notes
                  </div>
                  <div className="mt-3 max-w-[18rem] rounded-2xl border border-white/25 bg-black/35 p-4 backdrop-blur-md sm:p-5">
                    <p className="image-panel-title break-words text-[clamp(1.8rem,3.5vw,3.5rem)] text-white">
                      {activePanel?.label}
                    </p>
                    <div className="mt-4 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/65">
                      <span className="h-px w-8 bg-[#CCED00]" />
                      Explore the story
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="md:col-span-3">
        {blocks.map((block) =>
          block.kind === "panel" ? (
            <section key={block.id} id={block.id} className={block.bg}>
              <div className={panelPadding}>{block.content}</div>
            </section>
          ) : (
            <Fragment key={block.key}>{block.content}</Fragment>
          )
        )}
      </div>
    </div>
  );
}
