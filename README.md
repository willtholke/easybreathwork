# Easy Breathwork

Marketing site for Easy Breathwork™ (Tamara Edwards), rebuilt off Squarespace.

## Stack

- Next.js (App Router)
- Tailwind CSS v4
- Lenis smooth scroll
- Resend (contact form email)

## Local development

```bash
pnpm install
cp .env.example .env.local
# Add RESEND_API_KEY from https://resend.com/api-keys
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form (Resend)

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key |
| `CONTACT_TO_EMAIL` | Destination (`info@easybreathwork.com`) |
| `CONTACT_FROM_EMAIL` | Verified from address |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (sitemap, OG, llms.txt) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional Search Console meta tag |

## SEO / AEO

- `/llms.txt` and `/llms-full.txt` for language models (linked from the homepage and footer)
- `/sitemap.xml` and `/robots.txt`
- JSON-LD: Organization, Person, ProfessionalService, WebSite, FAQPage
- Per-page titles, descriptions, canonicals, Open Graph, Twitter cards
- FAQ section on the homepage with matching FAQ schema

### Getting into Google Search

`llms.txt` helps AI tools; it is **not** a Google ranking factor. To appear in Google:

1. Deploy this site and set `NEXT_PUBLIC_SITE_URL` to the public URL
2. Add the property in [Google Search Console](https://search.google.com/search-console)
3. Paste the verification code into `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and redeploy
4. Submit `https://your-domain/sitemap.xml` under Sitemaps
5. Use URL Inspection → Request indexing on the homepage
6. When cutting over from Squarespace, point `easybreathwork.com` DNS to Vercel and update `NEXT_PUBLIC_SITE_URL` to `https://www.easybreathwork.com`

Indexing can take days to weeks for a new host.

## Deploy (Vercel)

Live: https://easybreathwork.vercel.app

When ready for DNS cutover, point `easybreathwork.com` to Vercel and update `NEXT_PUBLIC_SITE_URL`.

## Pages

| Path | Content |
| --- | --- |
| `/` | Home, FAQ, llms.txt intro, contact form |
| `/about` | Founder statement |
| `/bookings` | Sessions & classes (contact to book) |
| `/services` | Corporate, 1:1, multi-modality |
| `/live-events` | Upcoming inquiry + past archive |
| `/testimonials` | Client quotes |
| `/llms.txt` | AI site map |
| `/llms-full.txt` | Expanded AI summary |

No commerce–all booking CTAs go to contact.
