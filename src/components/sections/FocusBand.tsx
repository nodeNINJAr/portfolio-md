import { ScrollMarquee } from "../ui/ScrollMarquee";

const focusAreas = [
  "Environment",
  "Climate",
  "Water",
  "Carbon",
  "Sustainability",
  "Policy",
  "GIS",
  "Development",
];

export function FocusBand() {
  return (
    <div className="bg-cream-2 border-y border-[var(--color-border)] py-8 sm:py-10">
      <ScrollMarquee
        items={focusAreas}
        className="text-3xl sm:text-5xl md:text-6xl text-ink/15"
      />
    </div>
  );
}
