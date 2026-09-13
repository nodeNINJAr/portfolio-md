"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
            className="flex min-w-[160px] flex-col justify-center bg-[#CCED00] px-6 text-[17px] uppercase leading-[0.95] tracking-tight sm:min-w-[200px] sm:px-8"
          >
            <span className="font-normal text-[#000000]">Abu</span>
            <span className="font-bold text-[#000000]">Jubayer</span>
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
              className="fixed top-0 right-0 h-full w-full lg:w-[30%] lg:min-w-[380px] bg-[#000000] text-white z-50 flex flex-col justify-center px-8 sm:px-12"
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
                    className="font-display text-3xl sm:text-4xl font-light py-3 border-b border-cream/10 hover:text-[#CCED00] transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <motion.a
                href={site.cvHref}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + navLinks.length * 0.05,
                  ease,
                }}
                className="mt-10 inline-block w-fit text-sm font-medium uppercase tracking-[0.08em] px-6 py-3.5 border border-cream/35 rounded-sm hover:bg-cream hover:text-navy transition-colors"
              >
                Download CV
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
