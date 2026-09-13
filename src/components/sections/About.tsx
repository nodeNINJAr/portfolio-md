import { aboutMedia } from "@/lib/data";
import { ProfilePortrait } from "../ui/ProfilePortrait";
import { ArrowUpRight, MapPin, Film } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const domains = [
  "Environmental Management",
  "Climate Change",
  "Sustainability",
  "Development Planning",
  "Water Resources",
  "Disaster Risk Reduction",
  "Carbon Markets",
  "Policy & Strategy",
];

export function About() {
  return (
    <>
      <SectionHeading
        eyebrow="Profile"
        title="About"
        ghost="About"
      />
      <p className="mt-12 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-stone">Abu Jubayer</p>
      <h3 className="mt-4 max-w-xl border-l-4 border-[#CCED00] pl-5 text-2xl font-medium uppercase leading-snug sm:text-3xl">
        Environmental Expertise for a Changing World
      </h3>
      <Reveal delay={0.3}>
        <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-stone">
          Abu Jubayer works at the intersection of{" "}
          <span className="text-sage-deep font-medium">
            environmental science
          </span>
          , climate policy, and development planning — advising on projects
          that require both technical rigor and practical, on-the-ground
          judgment. His work centers on translating{" "}
          <span className="text-sage-deep font-medium">
            climate resilience
          </span>{" "}
          and evidence-based analysis into{" "}
          <span className="text-sage-deep font-medium">
            sustainable development
          </span>{" "}
          outcomes for governments, development partners, and communities.
        </p>
      </Reveal>
      <div className="mt-12 grid items-start gap-8 xl:grid-cols-[0.85fr_1.15fr]">
        <figure className="relative pb-7 pr-5">
          <ProfilePortrait src={aboutMedia.portrait} label="Abu Jubayer — profile portrait" />
          <div className="absolute bottom-0 right-0 rounded-xl bg-[#CCED00] px-6 py-4 text-black">
            <span className="block text-4xl font-semibold tracking-tighter">15+</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Years of experience</span>
          </div>
        </figure>

        <div className="pt-2">
          <p className="flex items-center gap-2 text-xs font-medium text-stone">
            <MapPin size={14} aria-hidden="true" /> Dhaka, Bangladesh
          </p>
          <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-tight">
            From environmental evidence to practical impact.
          </h3>
          <div className="mt-5 space-y-4 text-sm leading-7 text-ink/70">
            <p>
              As a Senior Environmental Specialist and Environmental &amp; Climate
              Consultant, Abu Jubayer brings together environmental management,
              climate resilience, and development planning. His experience spans
              government initiatives, development projects, and applied research.
            </p>
            <p>
              From environmental assessments and water resources research to
              carbon frameworks and project appraisal, his work connects
              technical analysis with the decisions that shape communities.
            </p>
          </div>
          <a href="#journey" className="mt-6 inline-flex items-center gap-3 border-b border-black/30 pb-2 text-xs font-semibold uppercase tracking-wider transition-colors hover:border-black hover:text-black">
            Explore the career path <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="mt-14 grid items-center gap-8 border-t border-dashed border-black/20 pt-12 xl:grid-cols-[1.15fr_0.85fr]">
        <figure className="xl:order-2">
          <ProfilePortrait src={aboutMedia.fieldPortrait} label="Abu Jubayer — in the field" />
          <figcaption className="mt-4 flex items-center gap-3 text-xs font-medium text-stone">
            <span className="h-px w-8 bg-[#CCED00]" /> Practice, people &amp; perspective
          </figcaption>
        </figure>
        <div className="xl:order-1">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-stone">Beyond the desk</p>
          <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight">Bringing knowledge closer to the people who use it.</h3>
          <p className="mt-5 text-sm leading-7 text-ink/70">
            Environmental work connects research, planning, and the realities of
            the communities a project serves. Abu Jubayer’s practice brings these
            perspectives together through environmental advisory, applied research,
            and professional knowledge sharing.
          </p>
          <p className="mt-4 text-sm leading-7 text-ink/70">
            Climate workshops, policy consultation, and technical training provide
            opportunities to turn complex environmental questions into practical
            conversations and informed decisions.
          </p>
          <a href="#speaking" className="mt-6 inline-flex items-center gap-3 border-b border-black/30 pb-2 text-xs font-semibold uppercase tracking-wider hover:border-black">
            Knowledge sharing <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>

      <section aria-labelledby="about-video-title" className="mt-12 overflow-hidden rounded-2xl border border-dashed border-black/25">
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-5">
          <h3 id="about-video-title" className="text-sm font-semibold">A closer look at the practice</h3>
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-stone">In conversation</span>
        </div>
        {aboutMedia.video ? (
          <video controls playsInline preload="metadata" poster={aboutMedia.videoPoster} className="aspect-video w-full bg-black" aria-label="Abu Jubayer — introduction">
            <source src={aboutMedia.video} />
            Your browser does not support video playback. <a href={aboutMedia.video}>Download the video</a>.
          </video>
        ) : (
          <div className="flex aspect-video flex-col items-center justify-center gap-4 bg-[#191919] p-6 text-center text-white">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#CCED00]/50 text-[#CCED00]">
              <Film size={26} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <p className="text-lg font-medium">Meet Abu Jubayer</p>
            <p className="text-xs text-white/55">Introduction video coming soon</p>
          </div>
        )}
      </section>

      <aside className="relative mt-10 rounded-2xl border border-dashed border-black/25 px-6 py-8 sm:px-8">
        <span aria-hidden="true" className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#CCED00] pt-3 text-4xl font-bold text-black">“</span>
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-stone">The guiding principle</p>
        <p className="mt-4 max-w-xl text-xl font-medium leading-relaxed tracking-tight sm:text-2xl">
          Evidence-based environmental decisions create stronger, more resilient communities.
        </p>
        <a href="#philosophy" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-ink/70 hover:text-black">
          Read the professional philosophy <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </aside>

      <div className="flex flex-wrap gap-3 border-t border-dashed border-black/20 mt-12 pt-8">
        {domains.map((domain, i) => (
          <Reveal key={domain} delay={0.05 * i}>
            <div className="flex items-center gap-2.5 rounded-full border border-dashed border-black/25 px-4 py-3">
              <span className="text-[10px] font-bold text-ink/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-ink/85 text-xs font-medium">
                {domain}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
