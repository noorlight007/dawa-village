import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Stay from "@/components/Stay";
import Spaces from "@/components/Spaces";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

// Structured data so search engines understand this is a place to stay.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: site.name,
  description: site.description,
  slogan: site.tagline,
  url: site.url,
  image: `${site.url}/opengraph-image.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressCountry: site.countryCode,
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Private guest room", value: true },
    { "@type": "LocationFeatureSpecification", name: "Garden", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free parking on site", value: true },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Highlights />
        <Stay />
        <Spaces />
        <Gallery />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
