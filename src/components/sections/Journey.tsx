import { journey } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Journey() {
  return (
    <>
      <SectionHeading
        eyebrow="Professional Journey"
        title="Career Path"
        description="A progression of roles across environmental consultancy, development advisory, and applied research."
      />

      <div className="mt-12 relative">
        <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-[var(--color-border)]" />
        <div className="flex flex-col">
          {journey.map((role, i) => (
            <Reveal
              key={role.organization + role.role}
              delay={0.05 * i}
              direction={i % 2 === 0 ? "up" : "right"}
            >
              <div className="relative pl-8 sm:pl-10 pb-12 last:pb-0">
                <span className="absolute left-0 top-1.5 w-[15px] h-[15px] sm:w-[19px] sm:h-[19px] rounded-full bg-cream-2 border-2 border-sage-deep" />
                {role.period && (
                  <p className="text-sm tracking-[0.15em] uppercase text-sage-deep font-medium">
                    {role.period}
                  </p>
                )}
                <p className="mt-1.5 text-lg sm:text-xl font-medium text-ink">
                  {role.organization}
                </p>
                <p className="mt-1 text-ink/60">{role.role}</p>
                {role.note && (
                  <p className="mt-1.5 text-sm text-stone italic">
                    {role.note}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
