import { Header } from "@/components/layout/Header";
import { FixedFooterReveal } from "@/components/layout/FixedFooterReveal";
import { SectionRail } from "@/components/layout/SectionRail";
import { SectionTabs } from "@/components/layout/SectionTabs";
import { Hero } from "@/components/sections/Hero";
import { FocusBand } from "@/components/sections/FocusBand";
import { About } from "@/components/sections/About";
import { AtAGlance } from "@/components/sections/AtAGlance";
import { Expertise } from "@/components/sections/Expertise";
import { Projects } from "@/components/sections/Projects";
import { Journey } from "@/components/sections/Journey";
import { Publications } from "@/components/sections/Publications";
import { Credentials } from "@/components/sections/Credentials";
import { Honors } from "@/components/sections/Honors";
import { Speaking } from "@/components/sections/Speaking";
import { Philosophy } from "@/components/sections/Philosophy";
import { Contact } from "@/components/sections/Contact";
import { StoryScroller, StoryBlock } from "@/components/sections/StoryScroller";

// One continuous pinned image runs the entire story below, from "about"
// through "contact" — it never releases until the whole story ends, only
// crossfading as each panel's content scrolls into view. Sections that
// aren't their own nav item (At a Glance, Journey, Credentials, Philosophy)
// display their corresponding story images as they scroll into view.

const storyBlocks: StoryBlock[] = [
  {
    kind: "band",
    key: "about-navigation",
    content: (
      <div id="about-navigation" className="hidden bg-black px-2 py-3 md:block">
        <SectionTabs active="about" />
      </div>
    ),
  },
  {
    kind: "panel",
    id: "about",
    label: "About Abu Jubayer",
    bg: "bg-cream",
    image: "/images/story/about.jpg",
    content: <About />,
  },
  {
    kind: "panel",
    id: "glance",
    label: "At a Glance",
    bg: "bg-cream",
    image: "/images/story/glance.jpg",
    content: <AtAGlance />,
  },
  {
    kind: "panel",
    id: "expertise",
    label: "Expertise",
    bg: "bg-cream",
    image: "/images/story/expertise.jpg",
    content: <Expertise />,
  },
  {
    kind: "panel",
    id: "projects",
    label: "Selected Projects",
    bg: "bg-cream",
    image: "/images/story/projects.jpg",
    content: <Projects />,
  },
  {
    kind: "panel",
    id: "journey",
    label: "Career Path",
    bg: "bg-cream",
    image: "/images/story/journey.jpg",
    content: <Journey />,
  },
  {
    kind: "panel",
    id: "publications",
    label: "Research & Field Notes",
    bg: "bg-cream",
    image: "/images/story/publications.jpg",
    content: <Publications />,
  },
  {
    kind: "panel",
    id: "education",
    label: "Education & Credentials",
    bg: "bg-cream",
    image: "/images/story/education.jpg",
    content: <Credentials />,
  },
  {
    kind: "panel",
    id: "honors",
    label: "Honors & Awards",
    bg: "bg-cream",
    image: "/images/story/education.jpg",
    content: <Honors />,
  },
  {
    kind: "panel",
    id: "speaking",
    label: "Workshops & Training",
    bg: "bg-cream",
    image: "/images/story/speaking.jpg",
    content: <Speaking />,
  },
  {
    kind: "panel",
    id: "philosophy",
    label: "Field Philosophy",
    bg: "bg-cream",
    image: "/images/story/philosophy.jpg",
    content: <Philosophy />,
  },
  {
    kind: "panel",
    id: "contact",
    label: "Get in Touch",
    bg: "bg-cream",
    image: "/images/story/contact.jpg",
    content: (
      <div className="min-h-[140vh] flex flex-col justify-center">
        <Contact />
      </div>
    ),
  },
  { kind: "band", key: "footer", content: <FixedFooterReveal /> },
];

export default function Home() {
  return (
    <>
      <div className="relative z-10">
        <Header />
        <SectionRail />
        <main>
          <Hero />
          <FocusBand />
          <StoryScroller blocks={storyBlocks} />
        </main>
      </div>
    </>
  );
}
