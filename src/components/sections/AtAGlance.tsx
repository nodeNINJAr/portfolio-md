import { stats } from "@/lib/data";
import { Counter } from "../ui/Counter";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function AtAGlance() {
  return (
    <>
      <SectionHeading eyebrow="At a Glance" title="Experience in Numbers" />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={0.1 * i}>
            <div className="border-t border-[var(--color-border)] pt-6">
              <p className="font-display text-2xl sm:text-3xl leading-snug text-ink">
                {stat.number ? (
                  <Counter value={stat.number} suffix={stat.suffix ?? ""} />
                ) : (
                  stat.value
                )}
              </p>
              <p className="mt-2 text-sm tracking-[0.15em] uppercase text-sage-deep">
                {stat.label}
              </p>
              <p className="mt-1 text-sm text-stone">{stat.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
