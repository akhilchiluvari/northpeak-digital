const faqs = [
  {
    q: "How fast is “weeks”, exactly?",
    a: "Basecamp goes live about two weeks from kickoff; Ascent runs four to six. The honest variable is feedback speed — when decisions come back within a day, timelines hold.",
  },
  {
    q: "What do you need from us to start?",
    a: "Brand assets, product data or copy drafts, one decision-maker, and a 90-minute kickoff call. We send a one-page checklist before we begin — most clients gather everything in an afternoon.",
  },
  {
    q: "Who owns the code and the accounts?",
    a: "You do, completely: the repository, the Shopify store, the domain, the analytics. We hand over documentation at launch, and nothing is held hostage if we ever part ways.",
  },
  {
    q: "Shopify or a custom build?",
    a: "Rule of thumb: selling physical products, choose Shopify; content or services, choose a custom build. You’ll get a straight recommendation on the first call — we don’t upsell platforms.",
  },
  {
    q: "What happens after launch?",
    a: "Thirty days of included support on every build. After that, care plans from $190/month cover updates, monitoring, and small experiments — or take the docs and run it yourself. Both are fine with us.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="section cv-auto" aria-labelledby="faq-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Waypoint 04 — Alt 4,200 m</p>
          <h2 id="faq-title">Before you rope in.</h2>
          <p className="lede">The questions every client asks, answered the way we answer them.</p>
        </div>
        <div className="faq-list" data-reveal>
          {faqs.map((f) => (
            <details className="faq-item" key={f.q} name="faq">
              <summary>
                {f.q}
                <span className="faq-cross" aria-hidden="true" />
              </summary>
              <div className="faq-body">
                <p>{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
