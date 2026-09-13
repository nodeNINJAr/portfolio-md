import Image from "next/image";
import { Oswald } from "next/font/google";
import { site } from "@/lib/data";

const headingFont = Oswald({ subsets: ["latin"], weight: "600", display: "swap" });

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh items-center overflow-hidden bg-[#090b14] text-white"
    >
      {/* Replace this temporary image with the final landscape portrait. */}
      <Image
        src="/images/story/about.jpg"
        alt=""
        fill
        sizes="100vw"
        preload
        className="object-cover object-[35%_center]"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050716]/30 via-[#050716]/20 to-[#050716]/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050716]/70 via-transparent to-transparent md:hidden" />

      <div
        className="relative z-10 ml-6 mr-6 mt-20 w-full border-l-[4px] border-[#CCED00] py-2 pl-5 text-white sm:ml-10 sm:mr-10 sm:pl-6 md:ml-[40%] md:mr-[4%] md:mt-12 md:w-[56%]"
      >
        <h1
          id="hero-title"
          className={`${headingFont.className} text-[clamp(3.25rem,5.2vw,6.5rem)] font-semibold uppercase leading-[1.12] tracking-[-0.035em]`}
        >
          {site.name}
        </h1>
        <p className="mt-3 max-w-4xl text-sm font-semibold uppercase leading-relaxed tracking-[0.01em] sm:text-base lg:text-lg xl:text-xl">
          {site.title} <span aria-hidden="true">&middot;</span>{" "}
          {site.subtitle}
        </p>
      </div>
    </section>
  );
}
