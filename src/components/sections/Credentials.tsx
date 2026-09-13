import { affiliations, education, trainings } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Credentials() {
  return (
    <>
      <SectionHeading
        ghost="Credentials"
        eyebrow="Credentials"
        title="Professional Credentials"
        description="The academic foundation, technical training, and affiliations underpinning the practice."
      />

      <div className="mt-12 flex flex-col gap-12">
        <div>
          <Reveal>
            <h3 className="inline-block border-b-2 border-[#CCED00] pb-2 text-sm font-bold uppercase text-ink">Education</h3>
          </Reveal>
          <div className="mt-6 grid gap-4">
            {education.map((ed, i) => (
              <Reveal key={ed.degree} delay={0.06 * i}>
                <div className="relative border-l-4 border-[#CCED00] rounded-r-xl bg-black/[0.025] px-6 py-5">
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
            <h3 className="inline-block border-b-2 border-[#CCED00] pb-2 text-sm font-bold uppercase text-ink">Training &amp; Professional Development</h3>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-3">
            {trainings.map((t, i) => (
              <Reveal key={t} delay={0.04 * i}>
                <div className="flex h-full gap-3 rounded-xl border border-dashed border-black/20 p-4">
                  <span className="mt-0.5 text-xs font-bold text-ink/40">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-sm text-ink/75 leading-relaxed">{t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <h3 className="inline-block border-b-2 border-[#CCED00] pb-2 text-sm font-bold uppercase text-ink">Professional Affiliations</h3>
          </Reveal>
          <div className="mt-6 flex flex-col gap-4 border-t border-dashed border-black/20 pt-7">
            {affiliations.map((a, i) => (
              <Reveal key={a} delay={0.05 * i}>
                <p className="text-sm text-ink/75 leading-relaxed">{a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
