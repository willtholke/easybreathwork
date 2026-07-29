export type SeoServicePage = {
  slug: "corporate" | "organizations" | "group-training";
  path: string;
  title: string;
  navLabel: string;
  headline: string;
  description: string;
  intro: string[];
  bullets: string[];
  whoFor: string[];
  howItWorks: string[];
  ctaSubject: string;
  ctaLabel: string;
};

export const SEO_SERVICES: SeoServicePage[] = [
  {
    slug: "corporate",
    path: "/corporate",
    title: "Corporate Breathwork",
    navLabel: "Corporate",
    headline: "Corporate Easy Breathwork™ training",
    description:
      "Corporate Easy Breathwork™ programs with Tamara Edwards–remote and in-person training for teams, leadership, and workplace well-being.",
    intro: [
      "Easy Breathwork™ helps companies give people a simple, safe tool for nervous-system regulation at work. Sessions are gentle and non-forceful–built for real workplaces, not extreme breathwork culture.",
      "Programs can be delivered remotely or in person, with options for one-off workshops, multi-session series, leadership offsites, and ongoing wellness calendars.",
    ],
    bullets: [
      "Custom length, frequency, and focus for your team",
      "Remote and in-person formats",
      "Practical tools people can use between meetings and high-stress moments",
      "Supportive of mental health, resilience, and culture–without intensity theater",
    ],
    whoFor: [
      "Leadership teams and people ops",
      "Creative agencies and talent organizations",
      "Health, wellness, and recovery-adjacent companies",
      "Distributed teams that need a shared regulation practice",
    ],
    howItWorks: [
      "Schedule a free 15-minute info call by email or the contact form.",
      "Share your goals, team size, and whether you prefer remote or in-person.",
      "Receive a customized Easy Breathwork™ program outline and next steps.",
    ],
    ctaSubject: "Corporate Easy Breathwork training info call",
    ctaLabel: "Schedule a corporate info call",
  },
  {
    slug: "organizations",
    path: "/organizations",
    title: "Organizations Booking",
    navLabel: "Organizations",
    headline: "Book Easy Breathwork™ for your organization",
    description:
      "Book Easy Breathwork™ for organizations–nonprofits, clinics, facilitators, medical staff, and community groups. Remote and in-person options with Tamara Edwards.",
    intro: [
      "Organizations book Easy Breathwork™ when they want a gentle, trauma-informed breath practice that staff and communities can actually use. Tamara works with medical staff, health practitioners, facilitators, therapists, and mission-driven teams.",
      "Booking is by inquiry–there is no self-serve checkout. Reach out with your audience, dates, and whether you need remote or in-person delivery.",
    ],
    bullets: [
      "Training for medical staff, practitioners, facilitators, and therapists",
      "Programs for nonprofits, clinics, and community organizations",
      "Remote and in-person delivery",
      "Clear booking path via email, text, or contact form",
    ],
    whoFor: [
      "Clinics and recovery programs",
      "Facilitator and practitioner cohorts",
      "Nonprofit and community wellness teams",
      "Organizations seeking a shared somatic practice",
    ],
    howItWorks: [
      "Email info@easybreathwork.com or use the organizations booking contact form path on the site.",
      "Share who the session is for, group size, and preferred format.",
      "Confirm timing, pricing, and facilitation details directly with Tamara.",
    ],
    ctaSubject: "Organizations Easy Breathwork booking",
    ctaLabel: "Book for your organization",
  },
  {
    slug: "group-training",
    path: "/group-training",
    title: "Group Training",
    navLabel: "Group Training",
    headline: "Group Easy Breathwork™ training",
    description:
      "Group Easy Breathwork™ training with Tamara Edwards–team workshops, facilitator cohorts, and customized group practice online or in person.",
    intro: [
      "Group training introduces Easy Breathwork™ in a shared container so people learn together, regulate together, and leave with practices they can continue on their own.",
      "Groups may be corporate teams, friend circles, practitioner cohorts, or private gatherings. Format and length are customized.",
    ],
    bullets: [
      "Guided Easy Breathwork™ with integration",
      "Options for short workshops or multi-session training",
      "Online Zoom groups and in-person gatherings",
      "Can include somatic integration and sound where appropriate",
    ],
    whoFor: [
      "Private groups and communities",
      "Teams seeking a shared nervous-system practice",
      "Facilitators learning to hold Easy Breathwork™",
      "Retreats and seasonal gatherings",
    ],
    howItWorks: [
      "Tell Tamara about your group size, intention, and location or Zoom preference.",
      "Choose a single session or a short series.",
      "Receive confirmation and prep notes before the training.",
    ],
    ctaSubject: "Group Easy Breathwork training",
    ctaLabel: "Inquire about group training",
  },
];

export function getSeoService(slug: string) {
  return SEO_SERVICES.find((service) => service.slug === slug);
}
