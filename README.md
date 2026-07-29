# Easy Breathwork

Marketing site for Easy Breathwork™ (Tamara Edwards), rebuilt off Squarespace.

## Stack

- Next.js (App Router)
- Tailwind CSS v4
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

Set these in `.env.local` (and in Vercel project env for production):

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key |
| `CONTACT_TO_EMAIL` | Destination (`info@easybreathwork.com`) |
| `CONTACT_FROM_EMAIL` | Verified from address |

For production, verify `easybreathwork.com` in Resend and set something like:

`CONTACT_FROM_EMAIL=Easy Breathwork <hello@easybreathwork.com>`

Until the domain is verified, `onboarding@resend.dev` only sends to the Resend account email–useful for smoke tests.

## Deploy (Vercel)

1. Push the repo and import in Vercel
2. Add the three env vars above
3. Deploy
4. When ready for DNS cutover, point `easybreathwork.com` to Vercel and keep Squarespace parked until the new site is confirmed

## Pages

| Path | Content |
| --- | --- |
| `/` | Home + contact form |
| `/about` | Founder statement |
| `/bookings` | Sessions & classes (contact to book) |
| `/services` | Corporate, 1:1, multi-modality |
| `/live-events` | Upcoming inquiry + past archive |
| `/testimonials` | Client quotes |

No commerce–all booking CTAs go to contact.
