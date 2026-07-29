import { FAQ, SITE, absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

function buildLlmsFull() {
  const faqs = FAQ.map(
    (item) => `### ${item.question}\n\n${item.answer}`,
  ).join("\n\n");

  return `# Easy Breathwork™ – Full site summary for language models

Source: ${SITE.url}
Contact: ${SITE.email} | ${SITE.phone}
Instagram: ${SITE.instagram}

## One-sentence summary

${SITE.shortDescription}

## What Easy Breathwork™ is

${SITE.description}

Easy Breathwork™ is not a controlled nor forceful technique. It is gentle, nourishing, and safe–a natural way of breathing and releasing tension. The methodology recognizes that no one outside of you can know your internal wisdom of how to approach regeneration.

Through breath, habitual layers of protection in the soma and psyche can soften so emotional holding patterns can be accessed, cared for, and digested. Body and mind align in the present moment, allowing the body to clear deeply held tension and fear.

## Founder

${SITE.founder.name} is the founder of Easy Breathwork™. ${SITE.founder.description}

She studied for five years with Jesse Torgerson in a technique that inspired this method. Tamara resisted intense breathwork for years because many styles felt unsafe. Easy Breathwork™ was developed as a gentler, empowering path to awaken the inner healer. She has worked with hundreds of clients worldwide and now focuses on training practitioners and writing a book on Easy Breathwork™.

About page: ${absoluteUrl("/about")}

## Offerings

### 1:1 and couples sessions
Private in-person (Bay Area) or remote sessions of 40, 60, or 90 minutes. Sessions begin with guided meditation and body scan, conversation about what needs care, Easy Breathwork and somatic emotional release tailored to the client, then integration. Themes may include stress, emotional balance, trauma, PTSD, anxiety, psychedelic preparation and integration, injury, addiction recovery, pain management, and personal growth. Pricing starts from about $150. Book by contacting ${SITE.email} or texting ${SITE.phone}.
Page: ${absoluteUrl("/bookings")}

### Intro to Easy Breathwork™ (online)
Weekly group class on Tuesdays, 6:00–6:45pm PT via Zoom. About $30 per class; first class free. Includes guided meditation, introduction to the method, optional group check-in, practice, and integration tips for daily life.
Page: ${absoluteUrl("/bookings")}

### Corporate and group training
Remote and in-person programs for medical staff, health practitioners, facilitators, therapists, and companies. Custom length, frequency, and focus. Clients have included Beond, Califia, Mountain, Paradigm Talent Agency, Gobbler, and Nue.Life.
Page: ${absoluteUrl("/services")}

### Multi-modality healing sessions
Tune Up: Breath, Soma, Energy–breathwork with bodywork and energy healing, in person (Bay Area) or remote.
Page: ${absoluteUrl("/services")}

### Live events
Seasonal outdoor gatherings in Marin County featuring Easy Breathwork™, cacao, sound therapy, and somatic integration. Upcoming events by inquiry; past gatherings include Heart Happening series, Solstice Ceremony, Super Bloom, and Spring Renewal.
Page: ${absoluteUrl("/live-events")}

## How to book

There is no self-serve checkout on this site. Email ${SITE.email}, text ${SITE.phone}, or use the contact form at ${absoluteUrl("/")}#contact.

## FAQ

${faqs}

## Key URLs

- Home: ${absoluteUrl("/")}
- About: ${absoluteUrl("/about")}
- Bookings: ${absoluteUrl("/bookings")}
- Services: ${absoluteUrl("/services")}
- Live Events: ${absoluteUrl("/live-events")}
- Testimonials: ${absoluteUrl("/testimonials")}
- llms.txt: ${absoluteUrl("/llms.txt")}
- Sitemap: ${absoluteUrl("/sitemap.xml")}
`;
}

export function GET() {
  return new Response(buildLlmsFull(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
