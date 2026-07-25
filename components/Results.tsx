const cases = [
  {
    metric: "+38%",
    what: "checkout conversion, 60 days after replatforming",
    quote:
      "NorthPeak rebuilt in five weeks what our previous agency couldn’t ship in five months. The store finally feels like our brand.",
    name: "Maya Trent",
    role: "Founder, Cairn Supply Co.",
    initials: "MT",
  },
  {
    metric: "0.9s",
    what: "mobile LCP, down from 4.2s",
    quote:
      "Pages load before customers finish blinking. Subscription sign-ups doubled in the second month — same traffic, same offer.",
    name: "Daniel Okafor",
    role: "Co-founder, Loam & Ridge",
    initials: "DO",
  },
  {
    metric: "2.1×",
    what: "organic sessions within 90 days",
    quote:
      "We hit page one for ‘commuter e-bike’ right before peak season. That single keyword pays our rent.",
    name: "Priya Raman",
    role: "Marketing Lead, Kestrel Bikes",
    initials: "PR",
  },
];

export default function Results() {
  return (
    <section id="results" className="section results" aria-labelledby="results-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Waypoint 02 — Alt 2,600 m</p>
          <h2 id="results-title">Proof from the route.</h2>
          <p className="lede">
            Numbers first, adjectives second — and the people who were on the rope with us.
          </p>
        </div>
        <ul className="results-grid" role="list">
          {cases.map((c, i) => (
            <li
              key={c.name}
              className="result-card"
              data-reveal
              style={{ "--rd": `${i * 90}ms` } as React.CSSProperties}
            >
              <p className="result-metric">{c.metric}</p>
              <p className="result-what">{c.what}</p>
              <blockquote className="result-quote">
                <p>{c.quote}</p>
              </blockquote>
              <div className="result-attrib">
                <span className="result-avatar" aria-hidden="true">
                  {c.initials}
                </span>
                <p className="who">
                  <strong>{c.name}</strong>
                  {c.role}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
