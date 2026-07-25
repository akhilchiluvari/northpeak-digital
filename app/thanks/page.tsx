import type { Metadata } from "next";
import Link from "next/link";

// No-JS fallback target for the contact form (Netlify posts here natively).
export const metadata: Metadata = {
  title: "Message received — NorthPeak Digital",
  robots: { index: false },
};

export default function Thanks() {
  return (
    <main className="section" style={{ borderTop: 0, minHeight: "72vh" }}>
      <div className="container">
        <p className="eyebrow">Message received</p>
        <h1 style={{ marginTop: "1rem", fontSize: "var(--fs-h2)" }}>You’re on the board.</h1>
        <p className="lede" style={{ marginTop: "1rem", color: "var(--ink-soft)", maxWidth: "34rem" }}>
          A real person reads every message the day it arrives. Expect a reply from
          hello@northpeak.digital within one working day.
        </p>
        <p style={{ marginTop: "2rem" }}>
          <Link className="btn btn-primary" href="/">
            Back to basecamp
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </p>
      </div>
    </main>
  );
}
