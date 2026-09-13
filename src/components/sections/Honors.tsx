import { Award, Medal, Trophy } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

// Fictional entries for layout preview. Replace with verified honors before launch.
const honors = [
  {
    year: "2025",
    title: "Environmental Leadership Award",
    organization: "Sample Sustainability Forum",
    description: "Recognizing contributions to environmental planning and community-focused climate resilience.",
    icon: Trophy,
  },
  {
    year: "2024",
    title: "Excellence in Applied Research",
    organization: "Sample Research Council",
    description: "Celebrating research that connects environmental evidence with practical development decisions.",
    icon: Award,
  },
  {
    year: "2023",
    title: "Community Impact Recognition",
    organization: "Sample Development Network",
    description: "Acknowledging knowledge sharing and technical advisory support for sustainable communities.",
    icon: Medal,
  },
];

export function Honors() {
  return (
    <>
      <SectionHeading
        eyebrow="Recognition"
        title="Honors & Awards"
        ghost="Honors"
        description="Celebrating contributions to environmental practice, research, and sustainable development."
      />
      <p className="mt-6 inline-flex rounded-full border border-dashed border-black/25 px-4 py-2 text-xs text-stone">
        Sample content — these awards are fictional placeholders.
      </p>
      <ol className="mt-10 space-y-5">
        {honors.map(({ year, title, organization, description, icon: Icon }, i) => (
          <li key={title} className="relative overflow-hidden rounded-2xl border border-dashed border-black/25 p-6 sm:p-8">
            <span aria-hidden="true" className="pointer-events-none absolute -right-1 -bottom-4 text-8xl font-bold leading-none text-black/[0.035]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="relative flex items-start gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#CCED00] text-black">
                <Icon size={23} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-stone">{year} / Recognition</p>
                <h3 className="mt-3 text-xl font-semibold leading-snug">{title}</h3>
                <p className="mt-2 text-xs font-medium text-stone">{organization}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">{description}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
