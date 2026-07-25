// Dev-only helper: viewport-accurate screenshots at the three widths the
// brief grades (360 / 768 / 1440), including scrolled sections.
// Usage: node scripts/shots.mjs [url] [outDir]
import puppeteer from "puppeteer-core";
import { mkdirSync } from "node:fs";
import path from "node:path";

const URL_ = process.argv[2] ?? "http://localhost:3000";
const OUT = process.argv[3] ?? "../audits/shots";
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";

const widths = [
  { name: "mobile-360", width: 360, height: 780 },
  { name: "tablet-768", width: 768, height: 1000 },
  { name: "desktop-1440", width: 1440, height: 900 },
];
const anchors = ["", "#services", "#results", "#pricing", "#contact"];

mkdirSync(OUT, { recursive: true });
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
});
const page = await browser.newPage();

for (const w of widths) {
  await page.setViewport({ width: w.width, height: w.height });
  await page.goto(URL_, { waitUntil: "networkidle0" });
  // settle fonts + reveal animations
  await page.evaluate(() => document.fonts.ready);
  for (const anchor of anchors) {
    if (anchor) {
      await page.evaluate((a) => {
        document.querySelector(a)?.scrollIntoView({ behavior: "instant", block: "start" });
      }, anchor);
      await new Promise((r) => setTimeout(r, 900));
    }
    const label = anchor ? anchor.slice(1) : "top";
    await page.screenshot({ path: path.join(OUT, `${w.name}-${label}.png`) });
  }
}

await browser.close();
console.log("done");
