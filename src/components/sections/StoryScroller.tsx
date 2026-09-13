"use client";

import { AnimatePresence, motion } from "framer-motion";
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
                  <Image
                    src={activePanel.image}
                    alt={activePanel.label}
                    fill
                    sizes="40vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-navy/35" />
                <span className="absolute bottom-8 left-8 right-8 font-display text-cream text-sm uppercase tracking-[0.1em]">
                  {activePanel?.label}
                </span>
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
