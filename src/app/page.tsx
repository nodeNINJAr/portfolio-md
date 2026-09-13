import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionRail } from "@/components/layout/SectionRail";
import { SectionTabs } from "@/components/layout/SectionTabs";
import { Hero } from "@/components/sections/Hero";
import { FocusBand } from "@/components/sections/FocusBand";
import { About } from "@/components/sections/About";
import { AtAGlance } from "@/components/sections/AtAGlance";
import { Expertise } from "@/components/sections/Expertise";
import { Projects } from "@/components/sections/Projects";
import { Journey } from "@/components/sections/Journey";
import { ClimateBand } from "@/components/sections/ClimateBand";
import { Publications } from "@/components/sections/Publications";
import { Credentials } from "@/components/sections/Credentials";
import { Speaking } from "@/components/sections/Speaking";
import { Philosophy } from "@/components/sections/Philosophy";
import { Contact } from "@/components/sections/Contact";
import { StoryScroller, StoryBlock } from "@/components/sections/StoryScroller";

// One continuous pinned image runs the entire story below, from "about"
// through "contact" — it never releases until the whole story ends, only
// crossfading as each panel's content scrolls into view. Sections that
// aren't their own nav item (At a Glance, Journey, Credentials, Philosophy)
// share the same image as the nav item before them. ClimateBand has no
// image of its own — the pin just keeps showing the previous panel's image
// while it scrolls by.

const storyBlocks: StoryBlock[] = [
  {
    kind: "band",
    key: "about-navigation",
    content: (
      <div id="about-navigation" className="bg-black px-2 py-3">
        <SectionTabs active="about" />
      </div>
    ),
  },
  {
    kind: "panel",
    id: "about",
    label: "Portrait",
    bg: "bg-cream",
    image: "/images/story/about.jpg",
    content: <About />,
  },
  {
    kind: "panel",
    id: "glance",
    label: "15+ Years",
    bg: "bg-cream",
    image: "/images/story/glance.jpg",
    content: <AtAGlance />,
  },
  {
    kind: "panel",
    id: "expertise",
    label: "Field Assessment",
    bg: "bg-cream",
    image: "/images/story/expertise.jpg",
    content: <Expertise />,
  },
  {
    kind: "panel",
    id: "projects",
    label: "Project Sites",
    bg: "bg-cream",
    image: "/images/story/projects.jpg",
    content: <Projects />,
  },
  {
    kind: "panel",
    id: "journey",
    label: "Career Milestones",
    bg: "bg-cream",
    image: "/images/story/journey.jpg",
    content: <Journey />,
  },
  { kind: "band", key: "climate", content: <ClimateBand /> },
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
    label: "Certifications",
    bg: "bg-cream",
    image: "/images/story/education.jpg",
    content: <Credentials />,
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
    label: "Dhaka, Bangladesh",
    bg: "bg-cream",
    image: "/images/story/contact.jpg",
    content: (
      <div className="min-h-[140vh] flex flex-col justify-center">
        <Contact />
      </div>
    ),
  },
  { kind: "band", key: "footer", content: <Footer /> },
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
