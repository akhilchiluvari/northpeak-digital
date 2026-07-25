# Optimization changelog — NorthPeak Digital

**Method:** every change below was measured, not guessed. Lighthouse (v13, CLI) ran against
the production static build served locally, before and after each change — mobile emulation
(Moto G Power, slow 4G, 4× CPU throttle) and desktop. Reports live in
[`docs/lighthouse/`](docs/lighthouse/), and the git history mirrors this document
commit-by-commit.

## Scoreboard

| Run | Perf (mobile) | A11y | Best Practices | SEO | FCP | LCP | TBT | CLS |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| v1 baseline | 77 | 100¹ | 100 | 90 | 3.5 s | 3.8 s | 160 ms | 0 |
| + self-hosted fonts, metadata | 93 | 93¹ | 100 | 100 | 0.9 s | 2.9 s | 70 ms | 0 |
| **final** | **99** | **100** | **100** | **100** | **0.9 s** | **1.8 s** | **80 ms** | **0** |
| final (desktop) | 100 | 100 | 100 | 100 | 0.2 s | 0.6 s | 0 ms | 0 |

¹ The category read 100, but the axe scan was already flagging a label/name mismatch on the
wordmark link; the second run surfaced two more latent issues (hint-text contrast at 3.09:1,
footer links under 24px). All three are fixed — the 100 is now deterministic, not lucky.

## The changes, and what each one bought

### 1. Self-hosted fonts via `next/font` (replaced the Google Fonts CDN)
**Before:** the page render-blocked on `fonts.googleapis.com` CSS, which then chained a
second request to `fonts.gstatic.com` — two extra origins and a full network round-trip
chain before any text could paint.
**After:** fonts are downloaded at build time, served from our own origin with automatic
preload, and `next/font` generates a size-adjusted fallback font so the swap causes zero
layout shift.
**Bought:** FCP 3.5 s → 0.9 s, LCP 3.8 s → 2.9 s, performance 77 → 93. The single biggest
win on the page.

### 2. Real metadata + Open Graph + structured data
**Before:** only a `<title>`. **After:** meta description, canonical URL, Open Graph +
Twitter cards with a generated 1200×630 image, `theme-color`, and JSON-LD
(`ProfessionalService`) so search engines and AI answer engines can parse the business.
**Bought:** SEO 90 → 100, and links shared to Slack/WhatsApp/LinkedIn now unfurl with a
branded card instead of a naked URL.

### 3. LCP-safe hero animation
**Before:** the H1 faded in (`opacity 0 → 1`) as part of the entrance sequence. Chrome
doesn't count an invisible element as painted, so on a throttled phone the *largest*
element painted ~1.1 s later than the page itself.
**After:** the H1 animates `transform` only — it slides, but it is painted (and counted)
from the first frame. Supporting elements keep the fade.
**Bought:** LCP 2.9 s → 1.8 s, performance 93 → 99. Lesson kept for every future build:
never fade the LCP element.

### 4. Accessibility pass (the boring fixes that make 100 deterministic)
- Hint/caption color tokens darkened for ≥4.5:1 contrast everywhere they appear.
- Footer links given `inline-block` + vertical padding to hit the WCAG 2.2 ≥24px target
  size.
- The wordmark's accessible name now contains its visible text (axe
  `label-content-name-mismatch`).
**Bought:** accessibility 100 on every run, not just runs where axe's sampling was kind.

### 5. `content-visibility: auto` on below-fold sections
Services, results, pricing, and FAQ skip layout/paint work until scrolled near;
`contain-intrinsic-size` keeps the scrollbar and anchor jumps stable. The contact section
is deliberately excluded — the conversion form should always be fully rendered.
**Bought:** a share of the TBT drop (160 ms → 80 ms, alongside the font change); on this
one-pager it's a modest win, but it's the habit that keeps 20-page sites fast.

## Decisions made before the first audit (the invisible changelog)

These don't show up as diffs because they were the budget from line one:

- **No hero image.** The LCP element is text; nothing beats text for paint speed.
- **All artwork is inline SVG** (topo contours, icons, favicon) — zero image requests,
  zero layout shift, and the whole set costs ~4 KB.
- **Zero third-party requests at runtime.** No analytics, no icon fonts, no CDN
  dependencies — every byte served is ours.
- **Static export** (`output: 'export'`): the page is pre-rendered HTML on a CDN. There is
  no server to be slow.
- **Reduced motion respected** and reveal effects gated on JS actually running — content
  is never invisible without JavaScript.

## Reproduce it

```bash
npm run build
npx serve out -l 4173
npx lighthouse http://localhost:4173 --output=html --view          # mobile
npx lighthouse http://localhost:4173 --preset=desktop --output=html --view
```
