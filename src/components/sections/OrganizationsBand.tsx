"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "../ui/Reveal";

const organizations = [
  { name: "Asian Development Bank", mark: "ADB", logo: "/images/organizations/adb-blue-block-removebg-preview.png" },
  { name: "Local Government Engineering Department", mark: "LGED", logo: "/images/organizations/lged.png" },
  { name: "Palli Karma-Sahayak Foundation", mark: "PKSF", logo: "/images/organizations/Logo_of_PKSF.svg" },
  { name: "Roads and Highways Department", mark: "RHD", logo: "/images/organizations/rhd-logo-removebg-preview.png" },
  { name: "Japan International Cooperation Agency", mark: "JICA", logo: "/images/organizations/jica.svg" },
  { name: "Bangladesh University of Engineering and Technology", mark: "BUET", logo: "/images/organizations/buet.svg" },
  { name: "University of Southampton", mark: "SOUTHAMPTON", logo: "/images/organizations/southampton.svg" },
];

export function OrganizationsBand() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [16, -16]);

  return (
    <section ref={sectionRef} aria-labelledby="organisations-title" className="relative w-full overflow-hidden bg-[#141414] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-40 h-96 w-96 rounded-full bg-[#CCED00]/6 blur-3xl" />
      <Reveal className="relative flex flex-col gap-6 border-b border-white/10 pb-8">
        <div>
          <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#CCED00]">
            <span className="h-px w-8 bg-[#CCED00]" /> Professional context
          </p>
          <h2 id="organisations-title" className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Selected organisations <span className="text-white/45">&amp; institutions</span>
          </h2>
        </div>
        <span className="shrink-0 text-xs tracking-wide text-white/50">Development · Infrastructure · Academia</span>
      </Reveal>
      <motion.div
        style={reduceMotion ? undefined : { y }}
        className="relative mt-12 grid grid-cols-1 gap-4 pb-5 sm:grid-cols-2"
      >
        {organizations.map((organization, index) => (
          <Reveal key={organization.name} delay={Math.min(index, 3) * 0.05} className="h-full sm:last:col-span-2">
          <div className="group flex h-full min-h-36 w-full items-center gap-4 rounded-xl border border-dashed border-white/20 bg-white/[0.025] p-4 transition-colors duration-300 hover:border-[#CCED00]/60 hover:bg-white/[0.06] xl:p-6">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center p-3 xl:h-20 xl:w-20">
            {organization.logo ? (
              <Image src={organization.logo} alt="" aria-hidden="true" width={160} height={72} className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" />
            ) : (
              <span aria-hidden="true" className="text-base font-bold text-black">{organization.mark}</span>
            )}
            </span>
            <span className="min-w-0">
              <span className="block wrap-break-words text-lg font-bold tracking-[0.04em] text-[#CCED00]">{organization.mark}</span>
              <span className="mt-2 block text-xs leading-relaxed text-white/65">{organization.name}</span>
            </span>
          </div>
          </Reveal>
        ))}
      </motion.div>
    </section>
  );
}
