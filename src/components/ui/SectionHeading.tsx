import { Reveal } from "./Reveal";
import { TextReveal } from "./TextReveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  ghost,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  ghost?: string;
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`relative max-w-2xl ${alignClass}`}>
      {ghost && (
        <span
          aria-hidden="true"
          className="ghost-text"
          style={{ color: dark ? "rgba(248,245,239,0.05)" : "rgba(26,31,36,0.045)" }}
        >
          {ghost}
        </span>
      )}
      <Reveal>
        <span className={dark ? "eyebrow-light" : "eyebrow"}>{eyebrow}</span>
      </Reveal>
      <TextReveal
        as="h2"
        text={title}
        delay={0.1}
        stagger={0.05}
        className={`font-display mt-5 block text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.15] font-light ${
          dark ? "text-cream" : "text-ink"
        }`}
      />
      {description && (
        <Reveal delay={0.3}>
          <p
            className={`mt-5 text-base sm:text-lg leading-relaxed ${
              dark ? "text-stone-2" : "text-stone"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
