"use client";

import { useState } from "react";

type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(data: { name: string; email: string; message: string }): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = "Please tell us your name.";
  if (!data.email.trim()) {
    errors.email = "Please add your email so we can reply.";
  } else if (!EMAIL_RE.test(data.email.trim())) {
    errors.email = "That email doesn’t look right — check for typos.";
  }
  if (data.message.trim().length < 10) {
    errors.message = "Give us a sentence or two about the project.";
  }
  return errors;
}

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");
}

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");

  const clearError = (field: Field) =>
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      budget: String(fd.get("budget") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const nextErrors = validate(data);
    setErrors(nextErrors);
    const firstInvalid = (Object.keys(nextErrors) as Field[])[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      // Netlify Forms accepts URL-encoded POSTs to any path on the site.
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          "bot-field": String(fd.get("bot-field") ?? ""),
          ...data,
        }),
      });
      if (!res.ok) throw new Error(`Form POST failed: ${res.status}`);
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-card form-success" role="status">
        <p className="eyebrow">Message received</p>
        <h3>You’re on the board.</h3>
        <p>
          A real person reads every message the day it arrives. Expect a reply from
          hello@northpeak.digital within one working day.
        </p>
      </div>
    );
  }

  return (
    <form
      className="form-card form-grid"
      name="contact"
      method="POST"
      action="/thanks"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      noValidate
      onSubmit={handleSubmit}
    >
      {/* Netlify needs the form name in the payload of JS submissions */}
      <input type="hidden" name="form-name" value="contact" />
      <p className="visually-hidden" aria-hidden="true">
        <label>
          Don’t fill this out if you’re human:{" "}
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="form-row">
        <div className="field">
          <label htmlFor="cf-name">Name</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "cf-name-error" : undefined}
            onInput={() => clearError("name")}
          />
          {errors.name && (
            <p className="field-error" id="cf-name-error">
              {errors.name}
            </p>
          )}
        </div>
        <div className="field">
          <label htmlFor="cf-email">Email</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "cf-email-error" : undefined}
            onInput={() => clearError("email")}
          />
          {errors.email && (
            <p className="field-error" id="cf-email-error">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="cf-budget">
          Budget <span className="hint">(optional)</span>
        </label>
        <select id="cf-budget" name="budget" defaultValue="Not sure yet">
          <option>Not sure yet</option>
          <option>Under $2,000</option>
          <option>$2,000–5,000</option>
          <option>$5,000–10,000</option>
          <option>$10,000+</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="cf-message">Project details</label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          required
          placeholder="What are you building, and when does it need to be live?"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "cf-message-error" : undefined}
          onInput={() => clearError("message")}
        />
        {errors.message && (
          <p className="field-error" id="cf-message-error">
            {errors.message}
          </p>
        )}
      </div>

      <div className="form-actions">
        <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? (
            "Sending…"
          ) : (
            <>
              Send it up
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </>
          )}
        </button>
        <p className="form-status" aria-live="polite">
          {status === "failed" && (
            <>
              Couldn’t send just now — email us instead at{" "}
              <a href="mailto:hello@northpeak.digital">hello@northpeak.digital</a>.
            </>
          )}
        </p>
      </div>
    </form>
  );
}
