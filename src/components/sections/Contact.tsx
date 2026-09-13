import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { TextReveal } from "../ui/TextReveal";

export function Contact() {
  return (
    <>
      <div className="relative">
        <SectionHeading eyebrow="Get in Touch" title="Contact" ghost="Contact" />

        <Reveal delay={0.18} scale={0.98}>
          <TextReveal
            as="h3"
            text="Let's Work Toward More Sustainable Solutions"
            delay={0.2}
            stagger={0.04}
            className="font-display mt-10 block text-2xl sm:text-3xl md:text-[2.25rem] leading-[1.2] font-normal uppercase text-ink max-w-xl"
          />
        </Reveal>
        <Reveal delay={0.24}>
          <p className="mt-5 max-w-lg text-base sm:text-lg text-stone leading-relaxed">
            For consulting engagements, project advisory, research
            collaboration, or speaking inquiries, get in touch directly.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="px-7 py-4 bg-[#CCED00] text-black text-sm font-semibold rounded-full hover:bg-black hover:text-[#CCED00] transition-colors"
            >
              Get in Touch
            </a>
            <a
              href={site.cvHref}
              className="px-7 py-4 border border-dashed border-black/30 text-ink text-sm font-semibold rounded-full hover:bg-black hover:text-white transition-colors"
            >
              Download CV
            </a>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-1 xl:grid-cols-2 gap-5 border-t border-dashed border-black/25 pt-8">
        <Reveal delay={0.1} direction="left">
          <a
            href={`tel:${site.phone.replace(/\s+/g, "")}`}
            className="flex min-h-16 items-center gap-3 rounded-xl border border-dashed border-black/20 px-4 py-3 text-sm break-all text-ink hover:text-sage-deep transition-colors"
          >
            <Phone size={17} className="text-sage-deep shrink-0" />
            {site.phone}
          </a>
        </Reveal>
        <Reveal delay={0.16} direction="left">
          <span className="flex min-h-16 items-center gap-3 rounded-xl border border-dashed border-black/20 px-4 py-3 text-sm break-all text-ink">
            <MapPin size={17} className="text-sage-deep shrink-0" />
            {site.location}
          </span>
        </Reveal>
        <Reveal delay={0.22} direction="left">
          <a
            href={`mailto:${site.email}`}
            className="flex min-h-16 items-center gap-3 rounded-xl border border-dashed border-black/20 px-4 py-3 text-sm break-all text-ink hover:text-sage-deep transition-colors"
          >
            <Mail size={17} className="text-sage-deep shrink-0" />
            {site.email}
          </a>
        </Reveal>
        <Reveal delay={0.28} direction="left">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-16 items-center gap-3 rounded-xl border border-dashed border-black/20 px-4 py-3 text-sm break-all text-ink hover:text-sage-deep transition-colors"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-sage-deep shrink-0"
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55z" />
            </svg>
            Connect on LinkedIn
          </a>
        </Reveal>
      </div>
    </>
  );
}
