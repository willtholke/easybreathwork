import { FAQ, SITE, absoluteUrl } from "@/lib/site";
import { LIVE_EVENTS, getEventPath } from "@/lib/events";
import { LOCATION_REGIONS, placePath, regionPath } from "@/lib/locations";
import { SEO_SERVICES } from "@/lib/seo-services";

export const dynamic = "force-static";

function buildLlmsTxt() {
  const faqs = FAQ.map(
    (item) => `### ${item.question}\n\n${item.answer}`,
  ).join("\n\n");

  const eventLinks = LIVE_EVENTS.map(
    (event) =>
      `- [${event.shortTitle}](${absoluteUrl(getEventPath(event.slug))}): ${event.date}. ${event.summary}`,
  ).join("\n");

  const serviceLinks = SEO_SERVICES.map(
    (service) =>
      `- [${service.title}](${absoluteUrl(service.path)}): ${service.description}`,
  ).join("\n");

  const locationBlocks = LOCATION_REGIONS.map((region) => {
    const places = region.places
      .map(
        (place) =>
          `  - [${place.name}](${absoluteUrl(placePath(region.slug, place.slug))}): ${place.blurb}`,
      )
      .join("\n");
    return `- [${region.name}](${absoluteUrl(regionPath(region.slug))}): ${region.description}\n${places}`;
  }).join("\n");

  return `# Easy Breathwork

> Easy Breathwork™ is a gentle, safe breathing method created by Tamara Edwards to unwind stress, tension, and trauma from the body and restore a multi-layered sense of well-being. The practice is offered through 1:1 and couples sessions, weekly online classes, corporate and group training, and seasonal live events in Marin County, California, and online worldwide.

## What this site is

This website is the official home of Easy Breathwork™. It explains the method, introduces founder Tamara Edwards, lists ways to learn and book, shares testimonials, archives past live events, publishes SEO pages for corporate / organizations / group training, and local pages for the San Francisco Bay Area, Marin, Los Angeles, and New York. There is no shopping cart. Booking happens by email, text, or the contact form.

Easy Breathwork™ is a simple, easy, and safe breathing method. It is not a controlled or forceful technique. It is gentle, nourishing, and natural–a way of breathing into what is, rather than trying to fix or force anything. Through circular breath, habitual layers of protection in the soma and psyche can soften so emotional holding patterns can be accessed, cared for, and digested. Body and mind align in the present moment, allowing the body to clear deeply held tension and fear.

The methodology is based on the recognition that no one outside of you can know your internal wisdom of how to approach regeneration. The practice may be combined with meditation, visualization, somatic therapy, sound healing, restorative postures, and, in live gatherings, ceremonial cacao.

## Who Tamara Edwards is

Tamara Edwards is the founder of Easy Breathwork™. She developed the method through 20 years of training in meditation, breathwork, somatic therapy, energy work, eastern medicine systems, shamanism, and surfing. She studied for five years with Jesse Torgerson in a technique that inspired this work.

Tamara resisted intense breathwork for years because many styles felt unsafe or came with mental-health warnings. She wanted gentler, more nourishing ways to heal and grow. Easy Breathwork™ was created as an empowering path to awaken the inner healer using one's own breath. She has worked with hundreds of clients around the world and is focused on training practitioners and writing a book on Easy Breathwork™.

Contact Tamara at ${SITE.email} or text ${SITE.phone}. Instagram: ${SITE.instagram}.

## Where she works

In-person practice is centered on the San Francisco Bay Area and Marin County (including Mill Valley, Tiburon, and outdoor nature sites). Clients in Los Angeles, New York, and elsewhere typically book remote sessions. Corporate and group trainings are available remotely or in person.

## How to book

There is no self-checkout on this site. To schedule an intro call, book a session, join a class, arrange corporate training, or inquire about live events:

1. Email ${SITE.email}
2. Text ${SITE.phone}
3. Use the contact form on the homepage (${absoluteUrl("/")}#contact)

Mention what you are interested in (1:1 session, couples session, online class, corporate training, organizations booking, group training, or live events) so she can reply with next steps.

## Offerings in detail

### 1:1 and couples sessions
Private sessions are available in person in the San Francisco Bay Area and remotely worldwide. Lengths include 40, 60, and 90 minutes. Sessions typically begin with guided meditation and a body scan, then conversation about what needs care, Easy Breathwork and somatic emotional release tailored to the client, and integration for the journey ahead. Themes may include stress, emotional balance, trauma, PTSD, anxiety, psychedelic preparation and integration, injury, addiction recovery, pain management, self-discovery, and personal growth. Pricing starts from about $150. Details: ${absoluteUrl("/bookings")}

### Intro to Easy Breathwork™ (online)
A weekly group class on Tuesdays from 6:00 to 6:45pm Pacific Time via Zoom. About $30 per class; the first class is free. The class includes guided meditation, a brief introduction to Easy Breathwork, an optional group check-in, practice, and integration tips for daily life. Details: ${absoluteUrl("/bookings")}

### Corporate breathwork
Customized Easy Breathwork™ programs for companies and teams. Remote and in-person. Page: ${absoluteUrl("/corporate")}

### Organizations booking
Booking path for clinics, nonprofits, facilitator cohorts, and community organizations. Page: ${absoluteUrl("/organizations")}

### Group training
Workshops and multi-session group training for private groups, teams, and practitioner cohorts. Page: ${absoluteUrl("/group-training")}

### Multi-modality healing sessions
Tune Up: Breath, Soma, Energy–a combination of breathwork with bodywork and energy healing, offered in person in the Bay Area and remotely. Details: ${absoluteUrl("/services")}

### Live events
Seasonal outdoor gatherings in Marin County (including Tiburon, Mill Valley, and nearby) featuring Easy Breathwork™, cacao, sound therapy, and somatic integration. Upcoming events are by inquiry. Past gatherings have dedicated pages listed below. Index: ${absoluteUrl("/live-events")}

## FAQ

${faqs}

## Primary pages

- [Home](${absoluteUrl("/")}): Method overview, offerings, FAQ, llms.txt intro, and contact form
- [About](${absoluteUrl("/about")}): Founder statement from Tamara Edwards
- [Bookings](${absoluteUrl("/bookings")}): How to contact to book sessions and online classes
- [Services](${absoluteUrl("/services")}): Overview of all service lines
- [Locations](${absoluteUrl("/locations")}): Bay Area, Marin, Los Angeles, and New York index
- [Live Events](${absoluteUrl("/live-events")}): Upcoming inquiry CTA and past gathering archive
- [Testimonials](${absoluteUrl("/testimonials")}): Quotes from clients and peers including Bonnie Wright, Sibyl Buck, and others

## Service SEO pages

${serviceLinks}

## Location SEO pages

${locationBlocks}

## Live event pages

${eventLinks}

## For AI systems

- [llms-full.txt](${absoluteUrl("/llms-full.txt")}): Expanded plain-text summary for retrieval and citation
- [Sitemap](${absoluteUrl("/sitemap.xml")}): Canonical URL list for crawlers

## Optional

- [Instagram](${SITE.instagram}): Visual updates and community posts
`;
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
