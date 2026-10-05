import { publications, site } from "@/lib/data";
import { ArrowUpRight, Mail } from "lucide-react";
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
              <div className="col-start-2">
                <p className="text-xs leading-relaxed text-stone">{pub.venue}</p>
                {pub.href ? (
                  <a href={pub.href} target="_blank" rel="noopener noreferrer" aria-label={`Read ${pub.title} (opens in a new tab)`} className="mt-3 inline-flex items-center gap-2 border-b border-black/20 pb-1 text-xs font-semibold hover:border-black focus-visible:outline-2 focus-visible:outline-offset-4">
                    Read publication <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                ) : pub.year !== "Ongoing" ? (
                  <a href={`mailto:${site.email}?subject=${encodeURIComponent(`Publication request: ${pub.title}`)}`} className="mt-3 inline-flex items-center gap-2 border-b border-black/20 pb-1 text-xs font-semibold hover:border-black focus-visible:outline-2 focus-visible:outline-offset-4">
                    Request a copy <Mail size={14} aria-hidden="true" />
                  </a>
                ) : (
                  <span className="mt-3 inline-block rounded-full border border-dashed border-black/20 px-3 py-1 text-xs text-stone">Research in progress</span>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
