# Submission checklist — Digital Heroes, Web Development (Tasks A + B)

Deadline: **24 hours from receiving the brief.** Work through this top to bottom.

## 1. Deploy (≈15 min, needs your logins)

**GitHub**
1. Create a public repo at github.com/new named `northpeak-digital` (no README — we have one).
2. In the project folder:
   ```bash
   git remote add origin https://github.com/<YOUR_USERNAME>/northpeak-digital.git
   git push -u origin main
   ```
   (Windows will pop a browser window to sign in the first time.)

**Netlify — site already live as `northpeak-digital-demo.netlify.app`, form detection enabled ✓**

What remains is one redeploy (registers the form AND ships the corrected canonical URLs):
1. If the site is **connected to the GitHub repo**: just push (step above) — it
   auto-deploys. Otherwise (drag-and-drop deploy): run `npm run build`, then drag the
   `out` folder onto the site's **Deploys** page again.
2. Optional but recommended: connect the repo (Project configuration → Build & deploy →
   **Link repository**) so every push deploys — build command and publish folder come
   from `netlify.toml` automatically.
3. Test on the live URL: submit the form once with a real message → you should see the
   "You're on the board." success state → check Netlify → **Forms → contact** for the
   submission. Also submit empty once to show the validation errors work.

## 2. Lighthouse screenshots (required Task B deliverable)

On the **live** URL, in a **fresh incognito window** (extensions skew scores):
1. DevTools (F12) → Lighthouse tab → Mode: Navigation, Device: **Mobile**, all four
   categories → Analyze. Screenshot the score header (Win+Shift+S), save as
   `lighthouse-mobile.png`.
2. Repeat with Device: **Desktop** → `lighthouse-desktop.png`.
3. Also screenshot the site itself: full hero on desktop + one mobile view (DevTools
   device toolbar, 360×780) — reviewers open images before links.

Note: live-site scores can wobble ±1–2 points run-to-run (network variance). Anything
90+ satisfies the brief; our local production audits were mobile 99/100/100/100 and
desktop 100/100/100/100 (HTML reports in `docs/lighthouse/` as backup evidence).

## 3. Record the Loom (2:30–3:00)

Follow `docs/loom-script.md`. One take is fine; two is plenty.

## 4. Google Drive folder

Create a folder named exactly: **`WebDevelopment_AkhilChiluvari`**
Sharing: **Anyone with the link → Viewer.** Test the link in incognito before sending.

Contents:
```
WebDevelopment_AkhilChiluvari/
├── 01-README-FIRST.pdf        (export of SUBMISSION-NOTE below — links + AI note + assumptions)
├── 02-lighthouse-mobile.png
├── 03-lighthouse-desktop.png
├── 04-site-desktop.png
├── 05-site-mobile.png
├── 06-optimization-changelog.pdf  (export OPTIMIZATION-CHANGELOG.md → PDF)
└── 07-loom-link.txt           (or put the Loom link in 01 as well)
```

**SUBMISSION-NOTE contents (make this a short doc, first file in the folder):**
- Live site: `https://northpeak-digital-demo.netlify.app`
- GitHub repo: `https://github.com/<YOUR_USERNAME>/northpeak-digital`
- Loom: `<link>`
- **AI usage (required):** copy the "AI usage" paragraph from `README.md`.
- **Assumptions (the brief rewards stating them):**
  - NorthPeak Digital is fictional, so clients, metrics, and prices are invented but
    kept realistic for a two-person studio serving small brands; the footer discloses
    the fiction.
  - "Lighthouse 90+" was treated as mobile *and* desktop, on the live deployed site.
  - The single Loom covers Task B's walkthrough requirement (Task A specifies none).
  - Contact form uses Netlify Forms so the deployed site takes real submissions
    without a backend.

## 5. Send it

1. **Follow** @realshreyanshsingh on Instagram first (unfollowed DMs land in Requests —
   their rules say they likely won't see it).
2. DM — short and complete:

   > Hi! Submitting my Web Development qualification task (Task A + B).
   > Drive folder (everything inside): `<drive link>`
   > Live site: https://northpeak-digital-demo.netlify.app
   > Repo: https://github.com/<YOUR_USERNAME>/northpeak-digital
   > Loom: `<loom link>`
   > — Akhil Chiluvari

3. Don't follow up repeatedly (their rule); you're reachable because you follow them.

## Final sanity pass (2 min)

- [ ] Drive link opens in incognito
- [ ] Live site loads on your phone (real device)
- [ ] Form submission appears in Netlify → Forms
- [ ] Footer shows "Built for Digital Heroes Training Task" linking to digitalheroesco.com
- [ ] Repo is public (open it logged-out)
- [ ] Loom plays for "anyone with link"
