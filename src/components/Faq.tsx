import { IconPlus } from "./Icons";

const faqs = [
  {
    q: "What's private and what's shared?",
    a: "Your bedroom is yours alone for the length of your stay. The gardens, terraces and courtyard are shared with our family, and we'll walk you through the house when you arrive.",
  },
  {
    q: "Where exactly is Dawa Village?",
    a: "We're in a residential development in Kampala, Uganda — [neighbourhood, approx. drive time to the city centre and to Entebbe Airport]. We share the exact location once your stay is confirmed.",
  },
  {
    q: "How do I confirm and pay?",
    a: "Send us your dates on WhatsApp. Once we confirm availability we'll share the total and [payment method — e.g. mobile money or bank transfer].",
  },
  {
    q: "What time is check-in and check-out?",
    a: "Check-in from [2:00 pm], check-out by [11:00 am]. Arriving early or leaving late? Let us know and we'll do our best.",
  },
];

// FAQ structured data can earn rich results in Google search.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Faq() {
  return (
    <section id="faq" className="wrap faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <div className="faq__intro">
        <p className="eyebrow">Before you visit</p>
        <h2 className="h2">Good to know</h2>
        <p className="muted">Anything else on your mind? Message us — we&apos;re happy to help.</p>
      </div>
      <div className="faq__list">
        {faqs.map((f) => (
          <details key={f.q} className="faq__item">
            <summary>
              {f.q}
              <IconPlus size={22} className="faq__plus" />
            </summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
