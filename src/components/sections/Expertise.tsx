import { expertiseAreas } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Expertise() {
  return (
    <>
      <SectionHeading
        eyebrow="Expertise"
        title="Areas of Practice"
        description="A multidisciplinary practice spanning environmental management, climate strategy, carbon finance, and development advisory."
        ghost="Expertise"
      />

      <div className="mt-12 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
        {expertiseAreas.map((area, i) => (
          <Reveal key={area.number} delay={0.04 * i}>
            <div className="py-8">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-sage-deep text-lg">
                  {area.number}
                </span>
                <h3 className="font-display text-xl sm:text-2xl leading-snug text-ink">
                  {area.title}
                </h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 pl-9">
                {area.items.map((item) => (
                  <li key={item} className="text-ink/70 text-sm sm:text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
