export const SITE = {
  name: "Easy Breathwork",
  legalName: "Easy Breathwork™",
  tagline: "Easy Breathwork™",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://easybreathwork.com",
  description:
    "Easy Breathwork™ is a simple, easy, and safe breathing method to facilitate healing, unwind stress, tension, and trauma from the body, and restore a multi-layered sense of well-being.",
  shortDescription:
    "Gentle, safe breathwork with Tamara Edwards–1:1 sessions, online classes, corporate training, and live events in Marin and online.",
  email: "info@easybreathwork.com",
  phone: "+1 323 532 9251",
  phoneHref: "tel:+13235329251",
  emailHref: "mailto:info@easybreathwork.com",
  instagram: "https://www.instagram.com/easybreathwork/",
  founder: {
    name: "Tamara Edwards",
    jobTitle: "Founder, Easy Breathwork™ facilitator",
    description:
      "Tamara Edwards developed Easy Breathwork™ through 20 years of training in meditation, breathwork, somatic therapy, energy work, eastern medicine systems, shamanism, and surfing.",
  },
  location: {
    areaServed: ["Marin County", "San Francisco Bay Area", "Remote / Online"],
    addressRegion: "CA",
    addressCountry: "US",
  },
  sameAs: ["https://www.instagram.com/easybreathwork/"] as string[],
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/bookings", label: "Bookings" },
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/live-events", label: "Live Events" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/#faq", label: "FAQ" },
] as const;

export const FAQ = [
  {
    question: "What is Easy Breathwork™?",
    answer:
      "Easy Breathwork™ is a gentle, nourishing, and safe circular breathing method created by Tamara Edwards. It helps unwind stress, tension, and trauma from the body and restore a multi-layered sense of well-being–without forceful or controlled techniques.",
  },
  {
    question: "Who is Easy Breathwork for?",
    answer:
      "It is for individuals, couples, groups, and organizations seeking nervous-system regulation, stress relief, trauma-informed somatic support, psychedelic preparation and integration, or a calmer daily practice. Sessions are available in person in the Bay Area and remotely worldwide.",
  },
  {
    question: "How do I book a session or class?",
    answer:
      "Contact Tamara at info@easybreathwork.com or text +1 323 532 9251, or use the contact form on easybreathwork.com. Offerings include 1:1 and couples sessions, Tuesday online intro classes, corporate and group training, and seasonal live events.",
  },
  {
    question: "Is Easy Breathwork safe?",
    answer:
      "Yes. Easy Breathwork™ was developed as a gentler alternative to intense breathwork styles. It is not a controlled or forceful technique. It unfolds only what you are ready to meet, in a supportive container that may include meditation, somatic integration, and sound.",
  },
  {
    question: "Where are live events held?",
    answer:
      "Live gatherings are typically held outdoors in nature in Marin County, California (including Tiburon, Mill Valley, and nearby). Exact locations are shared with participants before each event. Upcoming events are by inquiry.",
  },
] as const;

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalized === "/" ? "" : normalized}`;
}
