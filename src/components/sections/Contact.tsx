import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { TextReveal } from "../ui/TextReveal";

export function Contact() {
  return (
    <>
      <div className="relative">
        <div className="relative inline-block">
          <span
            aria-hidden="true"
            className="pointer-events-none select-none absolute -top-1 left-0 whitespace-nowrap font-display font-semibold uppercase text-ink/[0.07] text-6xl sm:text-7xl md:text-8xl leading-none"
          >
            Contact
          </span>
          <Reveal>
            <span className="relative inline-block bg-sage text-cream text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] px-5 py-3 rounded-sm">
              Get in Touch
            </span>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-semibold uppercase tracking-tight text-ink">
            Contact
          </h2>
          <span className="mt-4 block h-[3px] w-20 bg-sage" />
        </Reveal>

        <Reveal delay={0.18} scale={0.98}>
          <TextReveal
            as="h3"
            text="Let's Work Toward More Sustainable Solutions"
            delay={0.2}
            stagger={0.04}
            className="font-display mt-10 block text-2xl sm:text-3xl md:text-[2.25rem] leading-[1.2] font-light text-ink max-w-xl"
          />
        </Reveal>
        <Reveal delay={0.24}>
          <p className="mt-5 max-w-lg text-base sm:text-lg text-stone leading-relaxed">
            For consulting engagements, project advisory, research
            collaboration, or speaking inquiries, get in touch directly.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={`mailto:${site.email}`}
              className="px-7 py-3.5 bg-navy text-cream text-sm font-medium uppercase tracking-[0.1em] rounded-sm hover:bg-sage-deep transition-colors"
            >
              Get in Touch
            </a>
            <a
              href={site.cvHref}
              className="px-7 py-3.5 border border-navy/25 text-navy text-sm font-medium uppercase tracking-[0.1em] rounded-sm hover:bg-navy hover:text-cream transition-colors"
            >
              Download CV
            </a>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5 border-t border-[var(--color-border)] pt-8">
        <Reveal delay={0.1} direction="left">
          <a
            href={`tel:${site.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2.5 text-ink hover:text-sage-deep transition-colors"
          >
            <Phone size={17} className="text-sage-deep shrink-0" />
            {site.phone}
          </a>
        </Reveal>
        <Reveal delay={0.16} direction="left">
          <span className="flex items-center gap-2.5 text-ink">
            <MapPin size={17} className="text-sage-deep shrink-0" />
            {site.location}
          </span>
        </Reveal>
        <Reveal delay={0.22} direction="left">
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-2.5 text-ink hover:text-sage-deep transition-colors"
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
            className="flex items-center gap-2.5 text-ink hover:text-sage-deep transition-colors"
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
