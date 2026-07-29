import type { Metadata } from "next";
import Image from "next/image";
import { ContactCta } from "@/components/ContactCta";

export const metadata: Metadata = {
  title: "Live Events",
};

const events = [
  {
    title: "A Heart Happening: A monthly series attuned to the seasons",
    date: "Sunday, August 6, 2023",
    time: "10:00 AM – 12:00 PM",
    location: "Outside in nature in Marin (Tiburon or Mill Valley)",
    image: "/images/event-heart.webp",
    summary:
      "Harness the abundant energies of summer as Tamara Edwards guides you through Easy Breathwork™ with cacao, sound therapy, and somatic integration. Cacao opens the heart; circular breath unwinds stress and restores well-being; somatic integration with sound helps the body land.",
  },
  {
    title: "Solstice Ceremony",
    date: "Saturday, June 17, 2023",
    time: "4:00 PM – 6:00 PM",
    location: "Mountain top in Marin",
    image: "/images/event-solstice.webp",
    summary:
      "Ceremony and celebration to honor the Summer Solstice. All ages and genders welcome. Hearts open through cacao, Easy Breathwork™, sound healing, music, and somatic release. Pricing was $40; youth 10–18 $15; children 10 & under free.",
  },
  {
    title: "SUPER BLOOM: Blossom into your own nature",
    date: "Saturday, May 20, 2023",
    time: "4:00 PM – 6:00 PM",
    location: "Marin County",
    image: "/images/event-bloom.webp",
    summary:
      "Part of the monthly seasonal series. A complete somatic experience to leave you lighter, clear, centered, and inspired–with simple practices to continue at home.",
  },
  {
    title: "Spring Renewal: Easy Breathwork, cacao, somatic integration",
    date: "Saturday, April 15, 2023",
    time: "4:00 PM – 6:00 PM",
    location: "Mill Valley, CA",
    image: "/images/event-spring.webp",
    summary:
      "Welcome the new energies of spring through Easy Breathwork with cacao, sound therapy, and somatic integration.",
  },
  {
    title: "Breathe Easy: Breathwork & Cacao",
    date: "Sunday, August 7, 2022",
    time: "6:00 PM – 8:00 PM",
    location: "The New Paradome Farm",
    image: "/images/event-breathe.webp",
    summary:
      "An offering rooted in years cultivating relationship with cacao in Costa Rica and healing through breathwork practice. Leave feeling in your body, calm in the mind, and inspired for the week ahead.",
  },
];

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
        {events.map((event) => (
          <article
            key={event.title}
            className="grid gap-8 border-b border-line pb-16 md:grid-cols-[280px_1fr] last:border-0"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl md:aspect-square">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 280px"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy md:text-2xl">
                {event.title}
              </h3>
              <ul className="mt-4 space-y-1 text-sm text-navy-muted">
                <li>{event.date}</li>
                <li>{event.time}</li>
                <li>{event.location}</li>
              </ul>
              <p className="mt-5 leading-relaxed text-navy-soft">
                {event.summary}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
