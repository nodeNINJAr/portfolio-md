import { publications } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Publications() {
  return (
    <>
      <SectionHeading
        ghost="Research"
        eyebrow="Research & Publications"
        title="Contributions to the Field"
        description="Peer-reviewed and conference research on environmental and water-related challenges in Bangladesh."
      />

      <div className="mt-12 divide-y divide-dashed divide-black/20 border-y border-dashed border-black/20">
        {publications.map((pub, i) => (
          <Reveal key={pub.title} delay={0.05 * i}>
            <div className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-5 gap-y-3 py-8 sm:grid-cols-[5rem_minmax(0,1fr)]">
              <span className="row-span-2 self-start border-t-4 border-[#CCED00] pt-2 text-lg font-bold tracking-tight text-ink">
                {pub.year}
              </span>
              <h3 className="text-lg sm:text-xl font-medium leading-snug text-ink">
                {pub.title}
              </h3>
              <p className="col-start-2 text-xs leading-relaxed text-stone">{pub.venue}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
