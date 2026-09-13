"use client";

import { useEffect, useRef, useState } from "react";
import { Footer } from "./Footer";

export function FixedFooterReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setHeight(el.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <div style={{ height }} aria-hidden="true" />
      <div ref={ref} className="fixed bottom-0 inset-x-0 z-0">
        <Footer />
      </div>
    </>
  );
}
