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

export default function Home() {
  return (
    <div id="top">
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
