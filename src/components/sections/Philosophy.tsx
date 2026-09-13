import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

export function Philosophy() {
  return (
    <>
      <SectionHeading
        eyebrow="Approach"
        title="Professional Philosophy"
        ghost="Philosophy"
      />
      <Reveal delay={0.1}>
        <blockquote className="relative mt-10 border-l-4 border-[#CCED00] py-3 pl-6 text-2xl sm:text-3xl leading-[1.4] font-medium tracking-tight text-ink">
          &ldquo;Evidence-based environmental decisions create stronger, more
          resilient communities.&rdquo;
        </blockquote>
      </Reveal>

      <div className="mt-10 flex flex-col gap-6 text-sm text-stone leading-relaxed">
        <Reveal delay={0.18}>
          <p className="border-t border-dashed border-black/20 pt-6"><strong className="mb-3 block text-xs uppercase tracking-wider text-ink">01 / Evidence first</strong>
            Sound environmental and climate decisions are built on careful
            analysis, not assumption. Grounding project design and policy
            advice in verified data and field-tested methods leads to
            outcomes that hold up over time — for communities, institutions,
            and the environments they depend on.
          </p>
        </Reveal>
        <Reveal delay={0.26}>
          <p className="border-t border-dashed border-black/20 pt-6"><strong className="mb-3 block text-xs uppercase tracking-wider text-ink">02 / Resilience by design</strong>
            Sustainability and climate resilience are not separate concerns
            from development — they are the conditions that make development
            durable. Planning that accounts for environmental and climate
            risk from the outset avoids costs that are far harder to manage
            later.
          </p>
        </Reveal>
        <Reveal delay={0.34}>
          <p className="border-t border-dashed border-black/20 pt-6"><strong className="mb-3 block text-xs uppercase tracking-wider text-ink">03 / Research into practice</strong>
            Research is most valuable when it reaches the people making
            decisions. Translating technical findings into practical guidance
            for governments, development partners, and communities is
            central to work that has lasting impact.
          </p>
        </Reveal>
      </div>
    </>
  );
}
