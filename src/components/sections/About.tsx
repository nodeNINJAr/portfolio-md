import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const domains = [
  "Environmental Management",
  "Climate Change",
  "Sustainability",
  "Development Planning",
  "Water Resources",
  "Disaster Risk Reduction",
  "Carbon Markets",
  "Policy & Strategy",
];

export function About() {
  return (
    <>
      <SectionHeading
        eyebrow="About"
        title="Environmental Expertise for a Changing World"
        ghost="About"
      />
      <Reveal delay={0.3}>
        <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-stone">
          Abu Jubayer works at the intersection of{" "}
          <span className="text-sage-deep font-medium">
            environmental science
          </span>
          , climate policy, and development planning — advising on projects
          that require both technical rigor and practical, on-the-ground
          judgment. His work centers on translating{" "}
          <span className="text-sage-deep font-medium">
            climate resilience
          </span>{" "}
          and evidence-based analysis into{" "}
          <span className="text-sage-deep font-medium">
            sustainable development
          </span>{" "}
          outcomes for governments, development partners, and communities.
        </p>
      </Reveal>
      <Reveal delay={0.4}>
        <a
          href="#expertise"
          className="mt-8 inline-block text-sm font-medium tracking-wide text-navy border-b border-navy/30 hover:border-navy pb-1"
        >
          View Full Profile
        </a>
      </Reveal>

      <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-8 gap-y-6 border-t border-[var(--color-border)] mt-12 pt-8">
        {domains.map((domain, i) => (
          <Reveal key={domain} delay={0.05 * i}>
            <div className="flex items-baseline gap-3 border-b border-[var(--color-border)] pb-5">
              <span className="font-display text-sage-deep text-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-ink/85 text-base sm:text-lg">
                {domain}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
