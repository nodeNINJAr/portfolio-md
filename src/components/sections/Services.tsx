import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const services = [
  ["Environmental assessments", "EIA / IEE, safeguards, compliance, and practical mitigation plans.", "An assessment report with identified risks, mitigation measures, and an environmental management plan."],
  ["Project proposals & appraisal", "DPP preparation, review, feasibility studies, and M&E frameworks.", "A project proposal or review covering scope, costs, procurement, implementation, and monitoring."],
  ["Climate & carbon advisory", "Climate risk, adaptation, carbon accounting, MRV, and credit mechanisms.", "A climate risk or carbon assessment with practical recommendations and a monitoring framework."],
  ["Water, GIS & risk studies", "Flood studies, hydrological analysis, spatial mapping, and multi-hazard assessment.", "Maps, spatial datasets, and a technical report explaining water-related risks and planning options."],
  ["Training & capacity building", "Clear, applied training modules for institutions, teams, and decision makers.", "A tailored training module, learning materials, and an applied workshop for your team."],
];

export function Services() {
  return (
    <>
      <SectionHeading
        eyebrow="What I Can Do"
        title="Practical advice for complex environmental decisions"
        ghost="Services"
        description="Focused support from assessment and planning through implementation, monitoring, and learning."
      />
      <div className="mt-10 divide-y divide-dashed divide-black/20 border-y border-dashed border-black/20">
        {services.map(([title, description, deliverable], index) => (
          <article key={title} className="group grid gap-4 py-6 sm:grid-cols-[3rem_1fr_auto] sm:items-center sm:gap-6">
            <span className="text-xs font-bold text-ink/40">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone">{description}</p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/80"><span className="font-semibold">You receive: </span>{deliverable}</p>
            </div>
            <a href="#contact" className="inline-flex w-fit items-center gap-2 rounded-full border border-black/20 px-4 py-2 text-xs font-semibold transition-colors hover:bg-[#CCED00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">Work with me <ArrowUpRight size={14} aria-hidden="true" /></a>
          </article>
        ))}
      </div>
      <a href="#contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#CCED00] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-black hover:text-[#CCED00]">
        Work with me <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </>
  );
}
