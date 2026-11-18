import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import "./globals.css";

// Manrope (variable weight), bundled with the site: preloaded, no layout shift,
// no request to Google. Headings use Georgia, which is built into every device.
const manrope = localFont({
  src: "../assets/fonts/Manrope-Variable.woff2",
  weight: "200 800",
  display: "swap",
  variable: "--font-sans",
  fallback: ["system-ui", "Segoe UI", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — A family home stay in ${site.city}, ${site.country}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Dawa Village",
    "Kampala guest room",
    "Kampala homestay",
    "Uganda accommodation",
    "private room Kampala",
    "family home stay Uganda",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    locale: "en_UG",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#12301E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
