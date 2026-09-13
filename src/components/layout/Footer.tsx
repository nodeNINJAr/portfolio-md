"use client";

import { ChevronsUp, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/data";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function LinkedinIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="site-footer bg-[#191919] text-white">
      <div className="px-6 py-16 sm:px-10 lg:px-12 lg:py-24 xl:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 xl:grid-cols-3 gap-10 xl:gap-6">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide pb-2 border-b-2 border-[#CCED00] inline-block">
              Find Me
            </h2>
            <div className="mt-10 flex gap-3">
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="w-10 h-10 flex items-center justify-center bg-[#CCED00] text-black rounded-sm hover:bg-cream transition-colors"
              >
                <Mail size={17} />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center bg-[#CCED00] text-black rounded-sm hover:bg-cream transition-colors"
              >
                <LinkedinIcon size={17} />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide pb-2 border-b-2 border-[#CCED00] inline-block">
              Contact Info
            </h2>
            <ul className="mt-10 flex flex-col gap-3 text-xs font-semibold uppercase text-white/65">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-[#CCED00] mt-0.5 shrink-0" />
                <a
                  href={`tel:${site.phone.replace(/\s+/g, "")}`}
                  className="hover:text-[#CCED00] transition-colors"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#CCED00] mt-0.5 shrink-0" />
                <span>{site.location}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-[#CCED00] mt-0.5 shrink-0" />
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-[#CCED00] transition-colors"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide pb-2 border-b-2 border-[#CCED00] inline-block">
              Quick Links
            </h2>
            <ul className="mt-10 flex flex-col gap-3 text-xs font-semibold uppercase text-white/65">
              {navLinks.map((link) => (
                <li key={link.href} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#CCED00] shrink-0" />
                  <a
                    href={link.href}
                    className="hover:text-[#CCED00] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="px-6 py-8 sm:px-10 lg:px-12 xl:px-16 flex items-center justify-between gap-4">
          <div className="border-l-2 border-[#CCED00] py-4 pl-4">
            <p className="text-[10px] font-semibold uppercase leading-relaxed text-white/80">
              &copy; {new Date().getFullYear()} {site.name}. All rights
              reserved.
            </p>
          </div>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-12 h-14 shrink-0 flex items-center justify-center bg-[#CCED00] text-black rounded-sm hover:bg-cream transition-colors"
          >
            <ChevronsUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
