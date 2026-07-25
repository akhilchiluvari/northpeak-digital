// Dev-only helper: renders the Open Graph card (1200x630) to public/og.png.
// Uses the same brand tokens as the site; fonts come from the CDN because
// this runs once at authoring time, not in the served page.
import puppeteer from "puppeteer-core";

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";

const html = `<!doctype html>
<html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400..700&family=IBM+Plex+Mono:wght@500&display=swap" rel="stylesheet">
<style>
  * { margin: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden; position: relative;
    background: #f4f6f1; color: #101915;
    font-family: Fraunces, Georgia, serif;
    padding: 72px 80px;
  }
  .mono { font-family: "IBM Plex Mono", monospace; font-weight: 500; letter-spacing: .09em; }
  .eyebrow { display: flex; align-items: center; gap: 14px; color: #0b5d4d; font-size: 22px; text-transform: uppercase; }
  .eyebrow::before { content: ""; width: 44px; height: 2px; background: #0e6f5c; }
  h1 { font-size: 118px; font-weight: 560; letter-spacing: -0.015em; line-height: 1.02; margin-top: 36px; }
  h1 .accent { color: #0e6f5c; }
  .sub { font-family: "IBM Plex Mono", monospace; color: #3d4a43; font-size: 24px; margin-top: 44px; letter-spacing: .06em; }
  .brand { position: absolute; bottom: 64px; left: 80px; font-size: 34px; font-weight: 600; }
  .brand .deg { color: #e4572e; }
  svg { position: absolute; right: -230px; top: -40px; width: 760px; color: #0e6f5c; }
</style></head>
<body>
  <svg viewBox="0 0 720 520" fill="none">
    <g stroke="currentColor" stroke-opacity="0.3" stroke-width="1.4">
      <path d="M470 152c22-2 38 14 36 32s-20 28-40 26-32-16-30-34 16-22 34-24Z"/>
      <path d="M468 122c38-4 68 20 66 54s-26 60-70 64-76-18-78-52 28-60 82-66Z"/>
      <path d="M470 88c58-4 104 30 102 78s-38 86-94 100-98 2-130-26c-26-23-18-67 14-99 30-30 58-48 108-53Z"/>
      <path d="M474 54c76-4 136 40 134 104s-48 116-114 138c-52 18-114 14-164-12-42-22-64-60-52-102 14-46 52-86 108-110 28-12 50-16 88-18Z"/>
      <path d="M478 20c94-4 168 50 166 130s-58 150-138 178c-64 24-140 20-200-12-54-28-84-76-72-128 14-58 62-106 132-142 36-18 64-24 112-26Z"/>
    </g>
    <path d="M150 470c70-30 110-58 150-98s60-72 100-102c40-30 56-56 62-90" stroke="currentColor" stroke-opacity="0.8" stroke-width="2" stroke-dasharray="1 9" stroke-linecap="round"/>
    <g transform="translate(462 148)">
      <path d="M0 32V0" stroke="#e4572e" stroke-width="3" stroke-linecap="round"/>
      <path d="M0 2h18L13 8.5 18 15H0z" fill="#e4572e"/>
    </g>
  </svg>
  <p class="eyebrow mono">Shopify &amp; web studio</p>
  <h1>Websites<br>that <span class="accent">climb</span>.</h1>
  <p class="sub">LIVE IN WEEKS · LIGHTHOUSE 90+ · BUILT TO SELL</p>
  <p class="brand">NorthPeak<span class="deg">°</span></p>
</body></html>`;

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new" });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: "networkidle0" });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: "public/og.png" });
await browser.close();
console.log("public/og.png written");
