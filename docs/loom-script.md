# Loom script — Task B walkthrough (target: 2:30–3:00)

**Setup before recording:** live site open in Chrome (normal window), a second tab with
DevTools Lighthouse scores already run (mobile), `OPTIMIZATION-CHANGELOG.md` open in a
third tab. Camera on if you're comfortable — they're hiring people, not sites.

Speak plainly. You know this project — every decision below is genuinely yours to explain.

---

**0:00 — Framing (15s)**
"Hi, I'm Akhil. For the web development task I built NorthPeak Digital — a one-page site
for a fictional web studio. Next.js with a fully static export, every line of CSS
hand-written, deployed on Netlify. Lighthouse is 99 performance and 100 accessibility on
mobile, 100 across the board on desktop. Here's the quick tour, three details I'm proud
of, and one thing I'd do differently."

**0:15 — Scroll the page top to bottom (25s)**
Scroll steadily. Name the sections as they pass: hero, services grid of six, results,
pricing, FAQ, contact. One sentence on the concept:
"The whole page is built on one idea — it's an ascent. Every section is a waypoint with an
altitude, and the contact form is the summit."

**0:40 — Detail #1: the ascent rail (30s)**
Point at the left rail while scrolling.
"Detail one: this altitude rail. It tracks your scroll as elevation — right now we're at
2,600 metres — and when you reach the contact form at the summit, a little orange flag
plants. It's decorative for screen readers and it respects reduced-motion, but for
everyone else it turns scrolling into the brand story. No template has this; that's the
point."

**1:10 — Detail #2: the form (30s)**
Click Send on the empty form. Show the errors, then fix one field.
"Detail two: the form is real. Validation is accessible — focus jumps to the first invalid
field, errors are announced to screen readers, and they clear as you type. Submissions go
through Netlify Forms, so a static site with no backend still lands leads in an inbox.
There's a honeypot for bots and a no-JavaScript fallback."

**1:40 — Detail #3: the performance story (35s)**
Switch to the Lighthouse tab, then the changelog.
"Detail three: the scores, and how I got them. I didn't build it fast by accident — I
measured. First audit was 77: the Google Fonts CDN was render-blocking, so I self-hosted
through next/font and paint time went from 3.5 seconds to 0.9. Then my own hero animation
was the bottleneck — fading in the headline delayed the largest paint by a full second, so
the headline now slides without fading. 99. Every change and what it bought is in this
changelog."

**2:15 — One thing I'd do differently (20s)**
"What I'd change: I designed the entrance animation before thinking about its performance
cost, and paid for it in the audit. Next build, the performance budget is there from the
first line of CSS, not discovered at the end. Cheap lesson at this scale — expensive on a
client project."

**2:35 — Close (10s)**
"Repo, live link, Lighthouse reports, and the changelog are all in the folder. Thanks for
looking — I'd love to talk through any of it."

---

**Don'ts:** don't read this word-for-word (bullet-point it on paper), don't apologize,
don't go past 3:15 — trim the tour before trimming the three details.
