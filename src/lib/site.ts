/**
 * Everything you may want to edit about the business lives here.
 * Fill in the empty values and the site updates everywhere.
 */
export const site = {
  name: "Dawa Village",
  tagline: "Luxury beyond home. Your elite cottage escape.",
  description:
    "A private guest room in our family home at Dawa Village, Kampala, Uganda. Landscaped gardens, a quiet courtyard and hosts who know the city well.",
  // Your live domain, e.g. "https://dawavillage.com" (used for SEO & sharing).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dawavillage.com",
  city: "Kampala",
  country: "Uganda",
  countryCode: "UG",

  // WhatsApp number in international format, digits only, e.g. "256700123456".
  // Leave empty until you have it — buttons fall back to the contact section.
  whatsapp: "",
  // Shown in the footer, e.g. "+256 700 123 456".
  whatsappDisplay: "[+256 ___ ___ ___]",
  email: "[hello@dawavillage.com]",

  maxGuests: 4,
};

/** Builds a WhatsApp click-to-chat link, or falls back to the contact section. */
export function whatsappLink(message?: string) {
  if (!site.whatsapp) return "#contact";
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${site.whatsapp}${text}`;
}
