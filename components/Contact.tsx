import ContactForm from "./ContactForm";

const steps = [
  {
    num: "01",
    title: "You write",
    body: "Two sentences about your brand and what you need. That’s genuinely enough.",
  },
  {
    num: "02",
    title: "Route call",
    body: "Thirty minutes to scope it honestly — what to build, what to skip, what it costs.",
  },
  {
    num: "03",
    title: "Fixed quote",
    body: "A one-page proposal with a fixed price and a start date, within 48 hours.",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div data-reveal>
          <p className="eyebrow">Summit — Alt 4,810 m</p>
          <h2 id="contact-title" style={{ marginTop: "0.9rem" }}>
            Make the summit push.
          </h2>
          <p className="lede" style={{ marginTop: "1rem", color: "var(--ink-soft)" }}>
            Tell us where you’re headed. A real person replies within one working day — no
            autoresponders, no sales sequence.
          </p>
          <ol className="contact-steps">
            {steps.map((s) => (
              <li key={s.num}>
                <span className="step-num" aria-hidden="true">
                  {s.num}
                </span>
                <div>
                  <strong>{s.title}</strong>
                  <span>{s.body}</span>
                </div>
              </li>
            ))}
          </ol>
          <p className="contact-alt">
            Prefer email? <a href="mailto:hello@northpeak.digital">hello@northpeak.digital</a>
          </p>
        </div>
        <div data-reveal style={{ "--rd": "120ms" } as React.CSSProperties}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
