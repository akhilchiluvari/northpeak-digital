import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Self-hosted via next/font: fonts are downloaded at build time and served
// from our own origin with automatic preload + size-adjusted fallbacks —
// no render-blocking third-party CSS, no layout shift on swap.
const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plexmono",
  display: "swap",
});

const SITE_URL = "https://northpeak-digital-demo.netlify.app";
const DESCRIPTION =
  "NorthPeak Digital is a small web studio for brands with steep ambitions — Shopify stores and marketing sites that load fast, rank well, and sell. Live in weeks, not quarters.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "NorthPeak Digital — Websites that climb",
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "NorthPeak Digital",
    title: "NorthPeak Digital — Websites that climb",
    description: DESCRIPTION,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "NorthPeak Digital — websites that climb" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NorthPeak Digital — Websites that climb",
    description: DESCRIPTION,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f6f1",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrument.variable} ${plexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
