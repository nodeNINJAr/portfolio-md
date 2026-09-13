import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const categories = [
  "Environmental Training",
  "Climate Change Workshops",
  "Policy Consultation",
  "Professional Training",
  "Academic Knowledge Sharing",
];

export function Speaking() {
  return (
    <>
      <SectionHeading
        ghost="Speaking"
        eyebrow="Knowledge Sharing"
        title="Knowledge Sharing & Professional Engagements"
        description="Contributions to environmental training, climate workshops, and policy consultation across government, development, and academic settings."
      />

      <div className="mt-10 flex flex-col">
        {categories.map((c, i) => (
          <Reveal key={c} delay={0.06 * i}>
            <div className="flex items-center gap-5 border-b border-dashed border-black/20 py-5">
              <span className="text-xs font-bold text-ink/40">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-lg font-medium text-ink">{c}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <div className="mt-10 border-l-4 border-[#CCED00] bg-black/[0.025] rounded-r-2xl py-8 px-6">
          <p className="text-ink/60 leading-relaxed">
            Specific engagements will be listed here as they are confirmed.
          </p>
          <a
            href="#contact"
            className="mt-5 inline-block rounded-full bg-[#CCED00] px-5 py-3 text-sm font-semibold text-black hover:bg-black hover:text-[#CCED00] transition-colors"
          >
            Get in touch about speaking opportunities
          </a>
        </div>
      </Reveal>
    </>
  );
}
