// Topographic contour lines with a plotted summit route — the hero's
// backdrop. Inline SVG: no image request, no layout shift, ~1.6 KB.
export default function TopoArt() {
  return (
    <svg
      className="hero-topo"
      viewBox="0 0 720 520"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.2">
        <path d="M470 152c22-2 38 14 36 32s-20 28-40 26-32-16-30-34 16-22 34-24Z" />
        <path d="M468 122c38-4 68 20 66 54s-26 60-70 64-76-18-78-52 28-60 82-66Z" />
        <path d="M470 88c58-4 104 30 102 78s-38 86-94 100-98 2-130-26c-26-23-18-67 14-99 30-30 58-48 108-53Z" />
        <path d="M474 54c76-4 136 40 134 104s-48 116-114 138c-52 18-114 14-164-12-42-22-64-60-52-102 14-46 52-86 108-110 28-12 50-16 88-18Z" />
        <path d="M478 20c94-4 168 50 166 130s-58 150-138 178c-64 24-140 20-200-12-54-28-84-76-72-128 14-58 62-106 132-142 36-18 64-24 112-26Z" />
      </g>
      <path
        d="M150 470c70-30 110-58 150-98s60-72 100-102c40-30 56-56 62-90"
        stroke="currentColor"
        strokeOpacity="0.8"
        strokeWidth="1.6"
        strokeDasharray="1 8"
        strokeLinecap="round"
      />
      <g fill="currentColor" fillOpacity="0.85">
        <circle cx="150" cy="470" r="4" />
        <circle cx="300" cy="372" r="4" />
        <circle cx="404" cy="278" r="4" />
      </g>
      <g transform="translate(462 148)">
        <path d="M0 32V0" stroke="#e4572e" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M0 2h16L11.5 8 16 14H0z" fill="#e4572e" />
      </g>
    </svg>
  );
}
