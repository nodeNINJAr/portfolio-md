import { affiliations, education, trainings } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Credentials() {
  return (
    <>
      <SectionHeading
        eyebrow="Credentials"
        title="Professional Credentials"
        description="The academic foundation, technical training, and affiliations underpinning the practice."
      />

      <div className="mt-12 flex flex-col gap-12">
        <div>
          <Reveal>
            <h3 className="eyebrow">Education</h3>
          </Reveal>
          <div className="mt-6 flex flex-col gap-7 border-t border-[var(--color-border)] pt-7">
            {education.map((ed, i) => (
              <Reveal key={ed.degree} delay={0.06 * i}>
                <div>
                  <p className="font-display text-lg sm:text-xl text-ink leading-snug">
                    {ed.degree}
                  </p>
                  <p className="mt-1.5 text-stone">{ed.institution}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <h3 className="eyebrow">Training &amp; Professional Development</h3>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 border-t border-[var(--color-border)] pt-7">
            {trainings.map((t, i) => (
              <Reveal key={t} delay={0.04 * i}>
                <div className="flex gap-3">
                  <span className="text-sage-deep mt-1 shrink-0">—</span>
                  <p className="text-ink/75 leading-relaxed">{t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <h3 className="eyebrow">Professional Affiliations</h3>
          </Reveal>
          <div className="mt-6 flex flex-col gap-4 border-t border-[var(--color-border)] pt-7">
            {affiliations.map((a, i) => (
              <Reveal key={a} delay={0.05 * i}>
                <p className="text-ink/75 leading-relaxed">{a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
