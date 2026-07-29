export type LiveEvent = {
  slug: string;
  title: string;
  shortTitle: string;
  date: string;
  time: string;
  location: string;
  image: string;
  summary: string;
  body: string[];
  status: "past" | "upcoming";
};

export const LIVE_EVENTS: LiveEvent[] = [
  {
    slug: "a-heart-happening",
    title: "A Heart Happening: A monthly series attuned to the seasons",
    shortTitle: "A Heart Happening",
    date: "Sunday, August 6, 2023",
    time: "10:00 AM – 12:00 PM",
    location: "Outside in nature in Marin (Tiburon or Mill Valley)",
    image: "/images/event-heart.webp",
    summary:
      "Harness the abundant energies of summer as Tamara Edwards guides you through Easy Breathwork™ with cacao, sound therapy, and somatic integration.",
    body: [
      "Harness the abundant energies of summer as Tamara Edwards guides you through Easy Breathwork™ with cacao, sound therapy, and somatic integration. Cacao opens the heart; circular breath unwinds stress and restores well-being; somatic integration with sound helps the body land.",
      "Easy Breathwork™ is a simple, easy, and safe breathing technique to facilitate healing, unwind stress, tension, and trauma from the body, and restore a sense of well-being.",
      "The cacao is harvested from a remote location in Costa Rica. It assists in activation, opening of the heart, and grounding. A ceremonial dose is served for therapeutic effect.",
      "Somatic integration with sound invites you to lay down in a restorative posture while vibration healing and hands-on assistance help changes settle. Before closing, there is space to draw, write, share, and commune with nature.",
    ],
    status: "past",
  },
  {
    slug: "solstice-ceremony",
    title: "Solstice Ceremony",
    shortTitle: "Solstice Ceremony",
    date: "Saturday, June 17, 2023",
    time: "4:00 PM – 6:00 PM",
    location: "Mountain top in Marin",
    image: "/images/event-solstice.webp",
    summary:
      "Ceremony and celebration to honor the Summer Solstice with cacao, Easy Breathwork™, sound healing, music, and somatic release.",
    body: [
      "We gather in ceremony and celebration to honor the Summer Solstice on the mountain top in Marin. Bring your family and friends or bring yourself. All ages and genders are welcome.",
      "We open our hearts through cacao, Easy Breathwork™, sound healing, music, and somatic release with hands-on assistance. This gathering includes more music, sound, and meditation with less vocal instruction.",
      "If you have not had an intro to Easy Breathwork™ yet, joining a Monday or Tuesday online class beforehand helps you settle into the technique.",
      "This is part of an ongoing monthly series in harmony with the seasons. Exact coordinates are emailed the day before. Pricing was $40; youth 10–18 $15; children 10 and under free. Includes cacao, group sessions, and supplies.",
    ],
    status: "past",
  },
  {
    slug: "super-bloom",
    title: "SUPER BLOOM: Blossom into your own nature",
    shortTitle: "SUPER BLOOM",
    date: "Saturday, May 20, 2023",
    time: "4:00 PM – 6:00 PM",
    location: "Marin County",
    image: "/images/event-bloom.webp",
    summary:
      "A complete somatic Easy Breathwork™ experience with cacao and sound–to leave you lighter, clear, centered, and inspired.",
    body: [
      "Join Tamara Edwards and friends for Super Bloom, part of the monthly series of group practice in harmony with the seasons.",
      "Be guided into your senses, down-regulate, unwind, and regenerate your nervous system. Receive insight as your mind clears and body restores. Learn simple tools to practice daily for managing stress.",
      "This is an opportunity to really let yourself go in a safe, well-protected outdoor container–you may move or not, shake, sigh, cry, laugh, shed, tingle, expand, and deeply relax.",
      "Cacao opens the heart. Easy Breathwork with cacao, somatic integration, and sound therapy completes the activation and integration cycle.",
    ],
    status: "past",
  },
  {
    slug: "spring-renewal",
    title: "Spring Renewal: Easy Breathwork, cacao, somatic integration",
    shortTitle: "Spring Renewal",
    date: "Saturday, April 15, 2023",
    time: "4:00 PM – 6:00 PM",
    location: "Mill Valley, CA",
    image: "/images/event-spring.webp",
    summary:
      "Welcome the new energies of spring through Easy Breathwork™ with cacao, sound therapy, and somatic integration in Mill Valley.",
    body: [
      "Welcome the new energies of spring as Tamara Edwards guides you through Easy Breathwork with cacao, sound therapy, and somatic integration.",
      "Cacao opens the heart so you can access the body's innate gifts of healing and balance and reconnect to the flow that makes life fun and inspiring.",
      "Let it be easy. Enjoy the yin and yang style practice of breathwork with cacao, somatic integration, and sound therapy–then draw, write, share, and commune with nature before closing.",
    ],
    status: "past",
  },
  {
    slug: "breathe-easy",
    title: "Breathe Easy: Breathwork & Cacao",
    shortTitle: "Breathe Easy",
    date: "Sunday, August 7, 2022",
    time: "6:00 PM – 8:00 PM",
    location: "The New Paradome Farm",
    image: "/images/event-breathe.webp",
    summary:
      "Breathwork and cacao at The New Paradome Farm–rooted in years of relationship with cacao in Costa Rica and healing through breath practice.",
    body: [
      "Tamara's offering comes from years deep in the jungle cultivating an intimate relationship with cacao harvested from the remote area in which she lived, and healing through her breathwork practice.",
      "Leave feeling in your body, calm in the mind, and inspired for the week ahead.",
    ],
    status: "past",
  },
];

export function getEventBySlug(slug: string) {
  return LIVE_EVENTS.find((event) => event.slug === slug);
}

export function getEventPath(slug: string) {
  return `/live-events/${slug}`;
}
