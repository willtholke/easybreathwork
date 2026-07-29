import Image from "next/image";
import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import { LIVE_EVENTS, getEventPath } from "@/lib/events";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Live Events",
  description:
    "Seasonal Easy Breathwork™ live events in Marin County with cacao, sound therapy, and somatic integration. Inquire about upcoming gatherings.",
  path: "/live-events",
  image: "/images/event-heart.webp",
});

export default function LiveEventsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <h1 className="font-display text-2xl tracking-[0.08em] text-navy uppercase md:text-3xl">
        Live Events
      </h1>

      <div className="mt-8 rounded-xl border border-line bg-white px-6 py-8">
        <p className="text-navy-soft">
          Upcoming gatherings are by inquiry. Reach out to learn about the next
          seasonal series in Marin or to host a private group.
        </p>
        <div className="mt-6">
          <ContactCta href="/?subject=Inquire%20about%20upcoming%20live%20events#contact">
            Inquire about upcoming events
          </ContactCta>
        </div>
      </div>

      <h2 className="mt-16 font-display text-xl tracking-[0.08em] text-navy uppercase">
        Past gatherings
      </h2>

      <div className="mt-10 space-y-16">
        {LIVE_EVENTS.map((event) => (
          <article
            key={event.slug}
            className="grid gap-8 border-b border-line pb-16 md:grid-cols-[280px_1fr] last:border-0"
          >
            <Link
              href={getEventPath(event.slug)}
              className="relative aspect-[4/5] overflow-hidden rounded-xl md:aspect-square"
            >
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover transition duration-300 hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 280px"
              />
            </Link>
            <div>
              <h3 className="text-xl font-semibold text-navy md:text-2xl">
                <Link
                  href={getEventPath(event.slug)}
                  className="hover:opacity-80"
                >
                  {event.title}
                </Link>
              </h3>
              <ul className="mt-4 space-y-1 text-sm text-navy-muted">
                <li>{event.date}</li>
                <li>{event.time}</li>
                <li>{event.location}</li>
              </ul>
              <p className="mt-5 leading-relaxed text-navy-soft">
                {event.summary}
              </p>
              <Link
                href={getEventPath(event.slug)}
                className="mt-5 inline-block text-sm font-medium text-navy underline underline-offset-2"
              >
                View event details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
