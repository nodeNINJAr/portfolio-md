import Image from "next/image";
import { UserRound } from "lucide-react";

export function ProfilePortrait({ src, label }: { src?: string; label: string }) {
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-t-[5rem] rounded-b-2xl border border-dashed border-black/20 bg-black/[0.025]">
      {src ? (
        <Image src={src} alt={label} fill sizes="(min-width: 1280px) 22vw, (min-width: 768px) 50vw, 90vw" className="object-cover object-top" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 text-center">
          <span className="flex h-24 w-24 items-center justify-center rounded-full bg-[#CCED00]/25">
            <UserRound size={48} strokeWidth={1} aria-hidden="true" className="text-ink/40" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/50">{label}</span>
          <span className="text-xs text-stone">Photo coming soon</span>
        </div>
      )}
    </div>
  );
}
