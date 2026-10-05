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

      <div className="mt-12 grid grid-cols-1 xl:grid-cols-2 gap-5">
        {expertiseAreas.map((area, i) => (
          <Reveal key={area.number} delay={0.04 * i} className="h-full">
            <div className="group h-full rounded-2xl border border-dashed border-black/20 p-6 transition-colors hover:border-black/50">
              <div className="flex items-baseline gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#CCED00] text-xs font-bold text-black">
                  {area.number}
                </span>
                <h3 className="text-lg font-semibold leading-snug text-ink">
                  {area.title}
                </h3>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {area.items.map((item) => (
                  <li key={item} className="rounded-full border border-black/10 px-3 py-1.5 text-xs leading-relaxed text-ink/70">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 grid gap-5 border-t border-dashed border-black/20 pt-8 sm:grid-cols-2">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-ink">Tools &amp; analysis</h3>
          <p className="mt-3 text-sm leading-relaxed text-stone">SPSS for statistical analysis; advanced Excel and Microsoft Access for data and land records; GIS and remote sensing for thematic maps; DGPS / RTK GPS for ground truthing; hydrological, flood inundation, air quality, surface-water, and groundwater modelling.</p>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-ink">Standards &amp; frameworks</h3>
          <p className="mt-3 text-sm leading-relaxed text-stone">ADB safeguard requirements, Bangladesh environmental rules, ISO 14001, climate policy commitments, and carbon accounting standards.</p>
        </div>
      </div>
    </>
  );
}
