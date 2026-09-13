import { ArrowDown, Building2 } from "lucide-react";
import { journey } from "@/lib/data";
import { SectionHeading } from "../ui/SectionHeading";

export function Journey() {
  return (
    <>
      <SectionHeading
        ghost="Journey"
        eyebrow="Professional Journey"
        title="Career Path"
        description="A progression of roles across environmental consultancy, development advisory, and applied research."
      />

      <div className="mt-10 flex items-center justify-between gap-4 border-b border-black/10 pb-4">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-stone">
          Experience & milestones
        </span>
        <span className="flex items-center gap-2 text-xs text-stone">
          Latest first <ArrowDown size={14} aria-hidden="true" />
        </span>
      </div>

      <ol aria-label="Career timeline, latest first" className="mt-8">
        {journey.map((role, i) => {
          const isCurrent = role.period?.includes("Present") ?? false;
          return (
            <li
              key={role.organization + role.role}
              className="group relative grid grid-cols-[24px_minmax(0,1fr)] gap-x-4 pb-7 last:pb-0 sm:grid-cols-[32px_minmax(0,1fr)] sm:gap-x-6"
            >
              {i < journey.length - 1 && (
                <span aria-hidden="true" className="absolute bottom-0 left-3 top-7 w-px bg-black/15 sm:left-4" />
              )}
              <span
                aria-hidden="true"
                className={`relative z-10 mt-6 flex h-6 w-6 items-center justify-center rounded-full border-4 border-cream sm:ml-1 ${isCurrent ? "bg-[#CCED00] ring-1 ring-black/15" : "bg-black"}`}
              >
                <span className={`h-1 w-1 rounded-full ${isCurrent ? "bg-black" : "bg-white"}`} />
              </span>

              <article className={`min-w-0 rounded-2xl border border-dashed bg-transparent p-5 transition-colors duration-200 sm:p-7 ${isCurrent ? "border-black/60 text-ink" : "border-black/25 text-ink hover:border-black/50"}`}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  {role.period && (
                    <p className={`text-xs font-bold uppercase tracking-[0.1em] ${isCurrent ? "text-ink" : "text-stone"}`}>
                      {role.period}
                    </p>
                  )}
                  {isCurrent && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#CCED00] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black">
                      <span className="h-1.5 w-1.5 rounded-full bg-black" />
                      Current
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight sm:text-xl">
                  {role.role}
                </h3>
                <p className={`mt-3 flex items-start gap-2.5 text-sm leading-relaxed ${isCurrent ? "text-ink/70" : "text-stone"}`}>
                  <Building2 size={16} aria-hidden="true" className={`mt-0.5 shrink-0 ${isCurrent ? "text-ink" : "text-ink/50"}`} />
                  {role.organization}
                </p>
                {role.note && (
                  <p className={`mt-5 border-t pt-4 text-sm leading-relaxed ${isCurrent ? "border-black/15 text-ink/80" : "border-black/10 text-stone"}`}>
                    {role.note}
                  </p>
                )}
              </article>
            </li>
          );
        })}
      </ol>
    </>
  );
}
