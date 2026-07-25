import Script from "next/script";
import Header from "@/components/Header";
import AscentRail from "@/components/AscentRail";
import ScrollFx from "@/components/ScrollFx";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Structured data: helps search engines (and AI answers) understand the
// business. Kept minimal and truthful to the page content.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "NorthPeak Digital",
  url: "https://northpeak-digital-demo.netlify.app",
  description:
    "A small web studio building Shopify stores and marketing sites that load fast, rank well, and sell.",
  email: "hello@northpeak.digital",
  priceRange: "$1,900–$9,500+",
};

export default function Home() {
  return (
    <div id="top">
      <Script
        id="ld-org"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <AscentRail />
      <main id="main">
        <Hero />
        <Clients />
        <Services />
        <Results />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <ScrollFx />
    </div>
  );
}
