"use client";

import { useEffect, useState } from "react";

const items = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Publications" },
  { id: "honors", label: "Awards" },
  { id: "speaking", label: "Speaking" },
  { id: "contact", label: "Contact" },
];

export function SectionRail() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const elements = items
      .map((item) => document.getElementById(item.id))
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
  }, []);

  if (active === "home") return null;

  return (
    <nav
      aria-label="Section navigation"
      style={{ mixBlendMode: "difference" }}
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-4"
    >
      
      {items.map((item) => {
        const isActive = active === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group flex items-center gap-3"
          >
            <span
              className={`text-xs tracking-wide uppercase whitespace-nowrap text-white transition-all duration-300 ${
                isActive
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
              }`}
            >
              {item.label}
            </span>
            <span
              className={`block rounded-full bg-white transition-all duration-300 ${
                isActive ? "w-2.5 h-2.5" : "w-1.5 h-1.5 opacity-50 group-hover:opacity-100"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
