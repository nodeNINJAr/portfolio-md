import { SectionBackdrop } from "./SectionBackdrop";

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
  return (
    <div className={`relative isolate max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}>
      {ghost && <SectionBackdrop text={ghost} dark={dark} />}
      <span className="relative inline-block bg-[#CCED00] px-7 py-3.5 text-sm font-bold uppercase text-black after:absolute after:top-full after:right-0 after:border-t-[10px] after:border-l-[10px] after:border-t-[#CCED00] after:border-l-transparent">
        {eyebrow}
      </span>
      <h2 className={`mt-6 text-3xl font-bold uppercase leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem] ${dark ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      <div aria-hidden="true" className={`mt-4 h-px w-44 bg-[#CCED00] ${align === "center" ? "mx-auto" : ""}`}>
        <span className="block h-1 w-12 bg-[#CCED00]" />
      </div>
      {description && (
        <p className={`mt-7 text-base leading-relaxed ${dark ? "text-white/70" : "text-stone"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
