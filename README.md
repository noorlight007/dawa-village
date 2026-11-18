# Dawa Village — website

The landing page for Dawa Village, a family home stay in Kampala, Uganda.
Built with **Next.js 16** (App Router), **React 19** and **TypeScript**. No other dependencies.

## Run it

You need [Node.js](https://nodejs.org) 20.9 or newer.

```bash
npm install      # first time only
npm run dev      # local preview at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Things to fill in

Most details are in **`src/lib/site.ts`**:

| Setting | What to put |
| --- | --- |
| `whatsapp` | Your number, digits only, with country code, e.g. `256700123456`. Once set, every WhatsApp button opens a chat, and the stay planner pre-fills a message with the guest's dates. |
| `whatsappDisplay` | How the number shows in the footer, e.g. `+256 700 123 456` |
| `email` | Your contact email |
| `url` | Your live domain (used for Google and link previews), or set `NEXT_PUBLIC_SITE_URL` on your host |
| `maxGuests` | Highest guest count the planner allows (default 4) |

Text placeholders in [square brackets] still need your details:

- `src/components/Stay.tsx` — bathroom type, kitchen/dining access
- `src/components/Faq.tsx` — neighbourhood and drive times, payment method, check-in/out times

## Where things are

```
src/
  app/
    layout.tsx        page <head>: title, description, fonts, social sharing
    page.tsx          the page, section by section + Google structured data
    globals.css       all styles (colours are at the top as variables)
    icon.png, apple-icon.png, opengraph-image.jpg   browser tab icon + link-preview image
    sitemap.ts, robots.ts                           for search engines
  components/         one file per section (Navbar, Hero, StayPlanner, Gallery, …)
  lib/site.ts         business details (edit this)
  lib/photos.ts       photos, captions and alt text
  assets/             photos, logo, font
```

**Changing photos:** replace a file in `src/assets/gallery/` (same name), or add one and register it in
`src/lib/photos.ts`. Next.js resizes them, serves AVIF/WebP and adds blur placeholders automatically.

## What's optimised

- **Images:** `next/image` serves the right size for each screen in AVIF/WebP, lazy-loads everything
  below the fold, preloads the hero photo, and shows a blurred preview while loading.
- **Fonts:** Manrope is bundled with the site and preloaded (no Google request, no layout shift).
  Headings use Georgia, which every device already has.
- **Static:** the whole page is pre-rendered at build time. Only the navbar menu, stay planner and
  photo viewer load JavaScript.
- **SEO:** title/description, Open Graph + Twitter cards, sitemap, robots.txt, and schema.org
  `LodgingBusiness` + `FAQPage` data.
- **Accessibility:** skip link, keyboard-friendly menu and photo viewer (arrow keys, Escape),
  visible focus rings, alt text, and reduced-motion support.

## Deploying

The easiest host is [Vercel](https://vercel.com) (made by the Next.js team, free tier): push this folder
to GitHub, import it on Vercel, and add your domain. Netlify and any Node.js host also work.

> Tip: this folder sits in OneDrive. `node_modules` (created by `npm install`) holds thousands of
> files; you may want to pause OneDrive syncing while installing, or keep the project outside OneDrive.

Fonts: Manrope is licensed under the SIL Open Font License (see `src/assets/fonts/Manrope-OFL.txt`).
