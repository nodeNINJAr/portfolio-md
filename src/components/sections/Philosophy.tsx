import { Reveal } from "../ui/Reveal";

export function Philosophy() {
  return (
    <>
      <Reveal>
        <span className="eyebrow">Professional Philosophy</span>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="font-display mt-6 text-2xl sm:text-3xl md:text-4xl leading-[1.35] font-light italic text-ink">
          &ldquo;Evidence-based environmental decisions create stronger, more
          resilient communities.&rdquo;
        </p>
      </Reveal>

      <div className="mt-8 flex flex-col gap-5 text-stone leading-relaxed">
        <Reveal delay={0.18}>
          <p>
            Sound environmental and climate decisions are built on careful
            analysis, not assumption. Grounding project design and policy
            advice in verified data and field-tested methods leads to
            outcomes that hold up over time — for communities, institutions,
            and the environments they depend on.
          </p>
        </Reveal>
        <Reveal delay={0.26}>
          <p>
            Sustainability and climate resilience are not separate concerns
            from development — they are the conditions that make development
            durable. Planning that accounts for environmental and climate
            risk from the outset avoids costs that are far harder to manage
            later.
          </p>
        </Reveal>
        <Reveal delay={0.34}>
          <p>
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
