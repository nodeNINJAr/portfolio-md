import { publications } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Publications() {
  return (
    <>
      <SectionHeading
        eyebrow="Research & Publications"
        title="Contributions to the Field"
        description="Peer-reviewed and conference research on environmental and water-related challenges in Bangladesh."
      />

      <div className="mt-12 divide-y divide-[var(--color-border)] border-t border-b border-[var(--color-border)]">
        {publications.map((pub, i) => (
          <Reveal key={pub.title} delay={0.05 * i}>
            <div className="flex flex-col gap-1.5 py-6">
              <span className="font-display text-stone-2 text-sm">
                {pub.year}
              </span>
              <p className="font-display text-lg sm:text-xl leading-snug text-ink italic">
                &ldquo;{pub.title}&rdquo;
              </p>
              <p className="text-sm text-stone">{pub.venue}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
