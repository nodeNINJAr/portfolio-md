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
        eyebrow="Knowledge Sharing"
        title="Knowledge Sharing & Professional Engagements"
        description="Contributions to environmental training, climate workshops, and policy consultation across government, development, and academic settings."
      />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 border-t border-[var(--color-border)] pt-8">
        {categories.map((c, i) => (
          <Reveal key={c} delay={0.06 * i}>
            <div className="flex items-baseline gap-3">
              <span className="text-sage-deep">—</span>
              <span className="text-ink/75">{c}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <div className="mt-10 border border-dashed border-[var(--color-border)] rounded-sm py-10 px-8">
          <p className="text-ink/60 leading-relaxed">
            Specific engagements will be listed here as they are confirmed.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-block text-sm font-medium tracking-wide text-navy border-b border-navy/30 hover:border-navy pb-1"
          >
            Get in touch about speaking opportunities
          </a>
        </div>
      </Reveal>
    </>
  );
}
