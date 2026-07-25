const tiers = [
  {
    name: "Basecamp",
    tagline: "A sharp one-page site that says one thing well.",
    price: "$1,900",
    per: "one-off",
    features: [
      "One page, hand-built — no template",
      "Copywriting polish included",
      "Lead form wired to your inbox",
      "Lighthouse 90+ guaranteed",
      "Live in about 2 weeks",
    ],
    cta: "Start at Basecamp",
    featured: false,
  },
  {
    name: "Ascent",
    tagline: "A full store or multi-page site, built to sell.",
    price: "$4,800",
    per: "one-off",
    features: [
      "Up to 12 pages or templates",
      "Shopify build or migration",
      "Conversion-first design in Figma",
      "SEO foundations + analytics",
      "30 days of post-launch support",
    ],
    cta: "Book the Ascent",
    featured: true,
  },
  {
    name: "Summit",
    tagline: "Custom scope for brands at altitude.",
    price: "$9,500+",
    per: "from",
    features: [
      "Custom features & integrations",
      "Dedicated design + dev pair",
      "CRO experiments programme",
      "Priority care plan included",
      "Quarterly performance reviews",
    ],
    cta: "Talk it through",
    featured: false,
  },
];

function Tick() {
  return (
    <svg
      className="tick"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 7.5 5.5 10.5 11.5 3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="section" aria-labelledby="pricing-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Waypoint 03 — Alt 3,500 m</p>
          <h2 id="pricing-title">Pick your route.</h2>
          <p className="lede">
            Fixed prices, stated up front — no discovery-call theatre. Half books the build,
            half is due at launch.
          </p>
        </div>
        <ul className="pricing-grid" role="list">
          {tiers.map((t, i) => (
            <li
              key={t.name}
              className={`price-card${t.featured ? " is-featured" : ""}`}
              data-reveal
              style={{ "--rd": `${i * 90}ms` } as React.CSSProperties}
            >
              {t.featured && <span className="price-flag">Most chosen</span>}
              <h3 className="price-tier">{t.name}</h3>
              <p className="price-for">{t.tagline}</p>
              <p className="price-amount">
                <span className="sum">{t.price}</span>
                <span className="per">{t.per}</span>
              </p>
              <ul className="price-list" role="list">
                {t.features.map((f) => (
                  <li key={f}>
                    <Tick />
                    {f}
                  </li>
                ))}
              </ul>
              <a className={`btn ${t.featured ? "btn-primary" : "btn-ghost"}`} href="#contact">
                {t.cta}
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="pricing-note" data-reveal>
          Prices in USD · Remote, worldwide · You own everything — code, store, accounts
        </p>
      </div>
    </section>
  );
}
