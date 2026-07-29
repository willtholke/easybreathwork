import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactCta } from "@/components/ContactCta";
import {
  LIVE_EVENTS,
  getEventBySlug,
  getEventPath,
} from "@/lib/events";
import { createPageMetadata } from "@/lib/seo";
import { SITE, absoluteUrl } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return LIVE_EVENTS.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};

  return createPageMetadata({
    title: event.shortTitle,
    description: event.summary,
    path: getEventPath(event.slug),
    image: event.image,
  });
}

export default async function LiveEventPage({ params }: PageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.summary,
    image: absoluteUrl(event.image),
    url: absoluteUrl(getEventPath(event.slug)),
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: event.location,
      address: {
        "@type": "PostalAddress",
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
    organizer: {
      "@type": "Organization",
      name: SITE.legalName,
      url: SITE.url,
      email: SITE.email,
      telephone: SITE.phone,
    },
    performer: {
      "@type": "Person",
      name: SITE.founder.name,
    },
    offers: {
      "@type": "Offer",
      url: absoluteUrl(getEventPath(event.slug)),
      availability: "https://schema.org/SoldOut",
      description: `This gathering has passed. Contact ${SITE.email} to inquire about similar upcoming events.`,
    },
  };

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />

      <p className="text-sm text-navy-muted">
        <Link href="/live-events" className="underline underline-offset-2">
          Live Events
        </Link>
        <span className="mx-2">·</span>
        <span>{event.status === "past" ? "Past gathering" : "Upcoming"}</span>
      </p>

      <h1 className="mt-4 text-3xl font-semibold leading-tight text-navy md:text-4xl">
        {event.title}
      </h1>

      <ul className="mt-6 space-y-1 text-sm text-navy-muted">
        <li>{event.date}</li>
        <li>{event.time}</li>
        <li>{event.location}</li>
      </ul>

      <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-xl">
        <Image
          src={event.image}
          alt={event.title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      <div className="mt-10 space-y-5 text-base leading-relaxed text-navy-soft md:text-lg">
        {event.body.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-line bg-white px-6 py-8">
        <h2 className="text-xl font-semibold text-navy">
          Interested in a gathering like this?
        </h2>
        <p className="mt-3 text-navy-soft">
          Upcoming Easy Breathwork™ events in Marin are by inquiry. Reach out
          to join the next seasonal series or host a private group.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ContactCta
            href={`/?subject=${encodeURIComponent(`Inquire about ${event.shortTitle}`)}#contact`}
          >
            Inquire about upcoming events
          </ContactCta>
          <ContactCta href="/live-events" variant="secondary">
            All live events
          </ContactCta>
        </div>
      </div>
    </article>
  );
}
