import { FAQ, SITE, absoluteUrl } from "@/lib/site";

export function JsonLd() {
  const organization = {
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.legalName,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    logo: absoluteUrl("/images/logo.webp"),
    image: absoluteUrl("/images/hero-whale.webp"),
    description: SITE.description,
    sameAs: SITE.sameAs,
    founder: { "@id": `${SITE.url}/#person` },
  };

  const person = {
    "@type": "Person",
    "@id": `${SITE.url}/#person`,
    name: SITE.founder.name,
    jobTitle: SITE.founder.jobTitle,
    description: SITE.founder.description,
    email: SITE.email,
    telephone: SITE.phone,
    url: absoluteUrl("/about"),
    worksFor: { "@id": `${SITE.url}/#organization` },
    sameAs: SITE.sameAs,
  };

  const professionalService = {
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/#service`,
    name: SITE.legalName,
    url: SITE.url,
    image: absoluteUrl("/images/hero-whale.webp"),
    description: SITE.shortDescription,
    email: SITE.email,
    telephone: SITE.phone,
    priceRange: "$$",
    areaServed: SITE.location.areaServed.map((name) => ({
      "@type": "Place",
      name,
    })),
    address: {
      "@type": "PostalAddress",
      addressRegion: SITE.location.addressRegion,
      addressCountry: SITE.location.addressCountry,
    },
    founder: { "@id": `${SITE.url}/#person` },
    provider: { "@id": `${SITE.url}/#organization` },
    knowsAbout: [
      "Breathwork",
      "Somatic therapy",
      "Nervous system regulation",
      "Trauma-informed healing",
      "Meditation",
      "Cacao ceremony",
      "Corporate wellness",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Easy Breathwork offerings",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "1:1 or couples Easy Breathwork session",
            description:
              "Private in-person or remote breathwork sessions (40, 60, or 90 minutes).",
            url: absoluteUrl("/bookings"),
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Intro to Easy Breathwork™ (online)",
            description:
              "Weekly Tuesday Zoom class teaching short, easy breathwork practices.",
            url: absoluteUrl("/bookings"),
            provider: { "@id": `${SITE.url}/#organization` },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Corporate and group Easy Breathwork training",
            description:
              "Custom remote and in-person programs for companies, medical staff, and facilitators.",
            url: absoluteUrl("/services"),
          },
        },
      ],
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: "en-US",
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${SITE.url}/#faq`,
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, person, professionalService, website, faqPage],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
