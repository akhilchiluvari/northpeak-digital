const services = [
  {
    title: "Shopify builds & migrations",
    body: "New stores, replatforms from WooCommerce or Wix, and rescues of builds gone sideways. Clean theme code, no app bloat.",
    note: "From $4,800",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 9l1.2-4.5A1 1 0 0 1 6.2 4h11.6a1 1 0 0 1 1 .5L20 9" />
        <path d="M4 9h16v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9Z" />
        <path d="M9 13h6" />
      </svg>
    ),
  },
  {
    title: "Marketing sites",
    body: "From a sharp one-pager to a 20-page company site. Semantic HTML, hand-tuned CSS, and a CMS only if you’ll really use it.",
    note: "From $1,900",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="1.5" />
        <path d="M3 9h18M8 13h8M8 16h5" />
      </svg>
    ),
  },
  {
    title: "Conversion-first design",
    body: "Layouts argued from your analytics, not our moodboard. Wireframes to high-fidelity in Figma, then shipped for real.",
    note: "Included in builds",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4l7.5 16 2-6.5L20 11.5 4 4Z" />
        <path d="M13.5 13.5 19 19" />
      </svg>
    ),
  },
  {
    title: "Performance & Core Web Vitals",
    body: "Every kilobyte is budgeted. 90+ Lighthouse scores are written into the contract — not listed as a stretch goal.",
    note: "90+ or we fix it free",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 20a8 8 0 1 1 8-8" />
        <path d="M12 12l5-3" />
        <path d="M18.5 17.5 20 20" />
      </svg>
    ),
  },
  {
    title: "SEO foundations",
    body: "Structured data, intent-mapped pages, titles people actually click. Rankings compound; tricks decay.",
    note: "From $900",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="6.5" />
        <path d="M15.8 15.8 21 21" />
        <path d="M8.5 11h5M11 8.5v5" />
      </svg>
    ),
  },
  {
    title: "Care plans",
    body: "Updates, experiments, and a human reply within one working day. Your site keeps climbing long after launch.",
    note: "From $190/mo",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.5 6.5a3.5 3.5 0 0 0-4.8 4.3L4 16.5V20h3.5l5.7-5.7a3.5 3.5 0 0 0 4.3-4.8l-2.4 2.4-2.4-.6-.6-2.4 2.4-2.4Z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Waypoint 01 — Alt 1,400 m</p>
          <h2 id="services-title">Six things we do properly.</h2>
          <p className="lede">
            No sprawling service menu. A tight kit, sharpened on every climb — and honest
            starting prices next to each one.
          </p>
        </div>
        <ul className="services-grid" role="list">
          {services.map((s, i) => (
            <li
              key={s.title}
              className="service-card"
              data-reveal
              style={{ "--rd": `${(i % 3) * 70}ms` } as React.CSSProperties}
            >
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <span className="service-note">{s.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
