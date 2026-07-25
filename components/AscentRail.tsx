"use client";

import { useEffect, useRef } from "react";

// The signature element: a fixed altitude track that fills as you scroll.
// Purely decorative (aria-hidden) — the section eyebrows carry the same
// waypoint structure for everyone else.
const SUMMIT_M = 4810;
const TICKS = [0, 0.29, 0.54, 0.73, 0.87, 1];

export default function AscentRail() {
  const rootRef = useRef<HTMLDivElement>(null);
  const flagRef = useRef<SVGSVGElement>(null);
  const readoutRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      root.style.setProperty("--ascent", p.toFixed(4));
      if (readoutRef.current) {
        const alt = Math.round((p * SUMMIT_M) / 5) * 5;
        readoutRef.current.textContent = `ALT ${alt.toLocaleString("en-US")} M`;
      }
      flagRef.current?.classList.toggle("is-summit", p > 0.985);
    };

    const request = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    return () => {
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="ascent-rail" aria-hidden="true" ref={rootRef}>
      <svg
        ref={flagRef}
        className="rail-flag"
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
      >
        <path d="M2 15V1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M2 2h9L8.5 5 11 8H2z" fill="currentColor" />
      </svg>
      <div className="rail-track">
        {TICKS.map((t) => (
          <span key={t} className="rail-tick" style={{ bottom: `${t * 100}%` }} />
        ))}
        <div className="rail-fill" />
      </div>
      <span ref={readoutRef} className="rail-readout">
        ALT 0 M
      </span>
    </div>
  );
}
