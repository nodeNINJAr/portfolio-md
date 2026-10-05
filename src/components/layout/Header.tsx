"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/data";
import { SectionTabs } from "./SectionTabs";

const ease = [0.22, 1, 0.36, 1] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const navigation = document.getElementById("about-navigation");
      setStickyNav(!!navigation && navigation.getBoundingClientRect().top <= 68);
      let current = "about";
      for (const link of navLinks) {
        if (link.href === "#home") continue;
        const section = document.getElementById(link.href.slice(1));
        if (section && section.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = link.href.slice(1);
        }
      }
      setActive(current);
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`fixed top-0 left-0 z-50 bg-[#000000] ${stickyNav ? "w-full" : "w-full md:w-[40%]"}`}>
      <div className="flex flex-wrap items-center">
        <div className={`flex h-[68px] w-full shrink-0 items-stretch justify-between ${stickyNav ? "md:w-[40%]" : ""}`}>
          <a
            href="#home"
            aria-label="Abu Jubayer — Home"
            className="group flex min-w-[184px] items-center gap-3 bg-[#CCED00] px-5 text-black transition-colors hover:bg-white sm:min-w-[224px] sm:px-7"
          >
            <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-black text-[11px] font-black leading-none tracking-[-0.08em]">
              AJ
            </span>
            <span className="flex flex-col border-l border-black/30 pl-3 uppercase leading-none">
              <span className="text-[10px] font-medium tracking-[0.2em]">Abu</span>
              <span className="mt-1 text-[15px] font-black tracking-[0.08em]">Jubayer</span>
            </span>
          </a>

          <div className="flex items-center px-4">
            <span className="mr-4 h-10 w-px bg-white/10" />
            <button
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="text-cream"
            >
              <Menu size={32} strokeWidth={2} />
            </button>
          </div>
        </div>
        {stickyNav && (
          <div className="hidden min-w-0 px-2 md:block md:w-[60%] md:py-3 md:pr-6">
            <SectionTabs active={active} />
          </div>
        )}
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-[#000000]/40 backdrop-blur-[2px] z-40"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease }}
              className="fixed top-0 right-0 h-full w-full overflow-y-auto lg:w-[30%] lg:min-w-[380px] bg-[#000000] text-white z-50 flex flex-col justify-start pt-20 pb-8 px-8 sm:px-12 lg:justify-center lg:pt-8"
            >
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 sm:top-8 sm:right-8 text-cream"
              >
                <X size={26} />
              </button>

              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.05, ease }}
                    className="font-display text-2xl sm:text-4xl font-light py-2 sm:py-3 border-b border-cream/10 hover:text-[#CCED00] transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <a
                href={site.cvHref}
                download
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex w-fit items-center justify-center gap-3 rounded-full bg-[#CCED00] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#CCED00]"
              >
                <Download size={16} aria-hidden="true" />
                Download CV
              </a>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
