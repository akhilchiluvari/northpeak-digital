"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#results", label: "Results" },
  { href: "#pricing", label: "Plans" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="container header-inner">
          <a className="wordmark" href="#top">
            NorthPeak
            <span className="degree" aria-hidden="true">
              °
            </span>
            <span className="visually-hidden"> Digital — back to top</span>
          </a>
          <nav className="primary-nav" aria-label="Primary">
            <ul>
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a className="btn btn-primary header-cta" href="#contact">
            Start a project
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </a>
          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
            <span className="bar" aria-hidden="true" />
            <span className="bar" aria-hidden="true" />
            <span className="bar" aria-hidden="true" />
          </button>
        </div>
      </header>
      <nav id="mobile-nav" className={`mobile-nav${open ? " is-open" : ""}`} aria-label="Mobile">
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="btn btn-primary mobile-cta" href="#contact" onClick={() => setOpen(false)}>
          Start a project
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </a>
      </nav>
    </>
  );
}
