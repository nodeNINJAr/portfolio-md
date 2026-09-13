"use client";

import { navLinks } from "@/lib/data";

export function SectionTabs({ active }: { active: string }) {
  return (
    <nav aria-label="Section tabs" className="w-full overflow-x-auto bg-[#191919]">
      <div className="flex min-w-max items-stretch">
        {navLinks.filter((link) => link.href !== "#home").map((link) => {
          const isActive = link.href === `#${active}`;
          return (
            <a
              key={link.href}
              href={link.href}
              aria-current={isActive ? "location" : undefined}
              className={`flex-1 whitespace-nowrap px-5 py-3.5 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white xl:px-7 ${
                isActive ? "bg-[#CCED00] text-[#000000]" : "text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
