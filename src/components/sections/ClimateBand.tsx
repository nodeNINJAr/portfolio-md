import { ParallaxImage } from "../ui/ParallaxImage";
import { Reveal } from "../ui/Reveal";

export function ClimateBand() {
  return (
    <section className="relative">
      <ParallaxImage strength={16} className="h-[55vh] sm:h-[65vh] bg-navy-2">
        <svg
          className="w-full h-full opacity-30"
          viewBox="0 0 1200 600"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <rect width="1200" height="600" fill="#16283A" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path
              key={i}
              d={`M -50 ${80 + i * 95} C 250 ${10 + i * 95}, 450 ${
                160 + i * 95
              }, 750 ${70 + i * 95} S 1150 ${140 + i * 95}, 1300 ${
                60 + i * 95
              }`}
              stroke="#5B7A62"
              strokeOpacity="0.4"
              strokeWidth="1.5"
            />
          ))}
        </svg>
      </ParallaxImage>
      <div className="absolute inset-0 flex items-end">
        <div className="container-page pb-10 sm:pb-14">
          <Reveal>
            <p className="text-cream/70 text-sm tracking-[0.15em] uppercase">
              Fieldwork &amp; Landscape Context — Bangladesh
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
