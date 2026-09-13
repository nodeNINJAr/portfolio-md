import { stats } from "@/lib/data";
import { Counter } from "../ui/Counter";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function AtAGlance() {
  return (
    <>
      <SectionHeading ghost="Experience" eyebrow="At a Glance" title="Experience in Numbers" />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-dashed border-black/25">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={0.1 * i} className="h-full">
            <div className={`flex h-full min-h-56 flex-col justify-between p-7 ${i === 0 ? "bg-[#CCED00] text-black" : "border-b border-dashed border-black/15"}`}>
              <p className={`${stat.number ? "text-7xl font-semibold tracking-tighter" : "text-2xl font-medium"} leading-snug text-ink`}>
                {stat.number ? (
                  <Counter value={stat.number} suffix={stat.suffix ?? ""} />
                ) : (
                  stat.value
                )}
              </p>
              <p className="mt-6 text-xs font-bold tracking-[0.12em] uppercase text-ink">
                {stat.label}
              </p>
              <p className="mt-2 text-xs text-ink/60">{stat.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
