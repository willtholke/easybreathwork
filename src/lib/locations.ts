export type LocationPlace = {
  slug: string;
  name: string;
  type: "city" | "neighborhood" | "area" | "borough";
  blurb: string;
};

export type LocationRegion = {
  slug: string;
  name: string;
  shortName: string;
  state: string;
  mode: "in-person-primary" | "remote-primary";
  description: string;
  intro: string[];
  places: LocationPlace[];
};

export const LOCATION_REGIONS: LocationRegion[] = [
  {
    slug: "san-francisco-bay-area",
    name: "San Francisco Bay Area",
    shortName: "Bay Area",
    state: "CA",
    mode: "in-person-primary",
    description:
      "Easy Breathwork™ with Tamara Edwards in the San Francisco Bay Area–in-person and remote sessions, group training, and nearby Marin live events.",
    intro: [
      "The San Francisco Bay Area is a primary in-person region for Easy Breathwork™. Tamara offers private sessions, couples work, group training, and corporate programs across the Bay, with outdoor seasonal gatherings nearby in Marin.",
      "Whether you are in the city, East Bay, Peninsula, or South Bay, you can book in person when geography allows or join remotely from home.",
    ],
    places: [
      {
        slug: "san-francisco",
        name: "San Francisco",
        type: "city",
        blurb:
          "Private and remote Easy Breathwork™ for San Francisco clients–stress, nervous-system regulation, and somatic support in the city.",
      },
      {
        slug: "oakland",
        name: "Oakland",
        type: "city",
        blurb:
          "Easy Breathwork™ for Oakland and East Bay clients, with in-person and remote options for individuals, couples, and groups.",
      },
      {
        slug: "berkeley",
        name: "Berkeley",
        type: "city",
        blurb:
          "Gentle Easy Breathwork™ sessions for Berkeley–ideal for students, practitioners, and anyone seeking a safer breath practice.",
      },
      {
        slug: "palo-alto",
        name: "Palo Alto",
        type: "city",
        blurb:
          "Easy Breathwork™ for Palo Alto and Peninsula professionals seeking calm, clarity, and sustainable nervous-system tools.",
      },
      {
        slug: "san-jose",
        name: "San Jose",
        type: "city",
        blurb:
          "Easy Breathwork™ for San Jose and South Bay–remote-friendly and available in person by arrangement in the Bay Area.",
      },
      {
        slug: "sausalito",
        name: "Sausalito",
        type: "city",
        blurb:
          "Easy Breathwork™ near Sausalito–gateway to Marin outdoor gatherings and Bay Area private sessions.",
      },
      {
        slug: "richmond",
        name: "Richmond",
        type: "city",
        blurb:
          "Easy Breathwork™ support for Richmond and nearby East Bay communities via remote or Bay Area in-person sessions.",
      },
      {
        slug: "walnut-creek",
        name: "Walnut Creek",
        type: "city",
        blurb:
          "Easy Breathwork™ for Walnut Creek and Contra Costa–book remote sessions or Bay Area in-person work.",
      },
    ],
  },
  {
    slug: "marin",
    name: "Marin County",
    shortName: "Marin",
    state: "CA",
    mode: "in-person-primary",
    description:
      "Easy Breathwork™ in Marin County–Mill Valley, Tiburon, and outdoor seasonal live events with cacao, sound, and somatic integration.",
    intro: [
      "Marin is central to Easy Breathwork™ live events and in-person practice. Past gatherings have been held outdoors in nature around Tiburon, Mill Valley, and mountain-top locations when weather allows.",
      "Locals can book private sessions and inquire about the next seasonal series. Exact outdoor coordinates are typically shared with participants before each event.",
    ],
    places: [
      {
        slug: "mill-valley",
        name: "Mill Valley",
        type: "city",
        blurb:
          "Easy Breathwork™ in Mill Valley–private sessions and a frequent home base for spring and seasonal outdoor gatherings.",
      },
      {
        slug: "tiburon",
        name: "Tiburon",
        type: "city",
        blurb:
          "Easy Breathwork™ near Tiburon–outdoor nature gatherings and Bay Area private practice with Tamara Edwards.",
      },
      {
        slug: "san-rafael",
        name: "San Rafael",
        type: "city",
        blurb:
          "Easy Breathwork™ for San Rafael residents–in-person Marin sessions and remote options for busy weeks.",
      },
      {
        slug: "corte-madera",
        name: "Corte Madera",
        type: "city",
        blurb:
          "Easy Breathwork™ for Corte Madera–gentle breath practice close to Marin live-event locations.",
      },
      {
        slug: "larkspur",
        name: "Larkspur",
        type: "city",
        blurb:
          "Easy Breathwork™ in Larkspur–book private work or ask about upcoming Marin outdoor ceremonies.",
      },
      {
        slug: "fairfax",
        name: "Fairfax",
        type: "city",
        blurb:
          "Easy Breathwork™ for Fairfax and West Marin–somatic breath practice rooted in nature and ease.",
      },
      {
        slug: "san-anselmo",
        name: "San Anselmo",
        type: "city",
        blurb:
          "Easy Breathwork™ for San Anselmo–local Marin access to private sessions and seasonal events.",
      },
      {
        slug: "novato",
        name: "Novato",
        type: "city",
        blurb:
          "Easy Breathwork™ for Novato–North Marin clients welcome for in-person and remote sessions.",
      },
    ],
  },
  {
    slug: "los-angeles",
    name: "Los Angeles",
    shortName: "Los Angeles",
    state: "CA",
    mode: "remote-primary",
    description:
      "Easy Breathwork™ for Los Angeles–remote sessions with Tamara Edwards for LA, Santa Monica, Hollywood, and Greater Los Angeles clients.",
    intro: [
      "Los Angeles clients work with Easy Breathwork™ primarily online, with the same gentle method used in Bay Area private sessions. Remote sessions are available for individuals and couples across Greater LA.",
      "If you are organizing a group, corporate team, or private gathering in Los Angeles, contact Tamara to discuss remote facilitation or in-person availability when travel allows.",
    ],
    places: [
      {
        slug: "downtown-los-angeles",
        name: "Downtown Los Angeles",
        type: "neighborhood",
        blurb:
          "Remote Easy Breathwork™ for Downtown LA professionals seeking a calm, non-forceful breath practice from home or office.",
      },
      {
        slug: "santa-monica",
        name: "Santa Monica",
        type: "city",
        blurb:
          "Easy Breathwork™ for Santa Monica–book remote 1:1 or couples sessions with Tamara Edwards.",
      },
      {
        slug: "venice",
        name: "Venice",
        type: "neighborhood",
        blurb:
          "Gentle Easy Breathwork™ for Venice and Westside LA via Zoom, with integration tools for daily life.",
      },
      {
        slug: "hollywood",
        name: "Hollywood",
        type: "neighborhood",
        blurb:
          "Easy Breathwork™ for Hollywood creatives and teams–remote sessions focused on regulation and ease.",
      },
      {
        slug: "silver-lake",
        name: "Silver Lake",
        type: "neighborhood",
        blurb:
          "Easy Breathwork™ for Silver Lake–online private sessions and group training by inquiry.",
      },
      {
        slug: "pasadena",
        name: "Pasadena",
        type: "city",
        blurb:
          "Easy Breathwork™ for Pasadena and the San Gabriel Valley through remote sessions with Tamara.",
      },
      {
        slug: "malibu",
        name: "Malibu",
        type: "city",
        blurb:
          "Easy Breathwork™ for Malibu–remote breathwork and somatic support with optional group inquiries.",
      },
      {
        slug: "culver-city",
        name: "Culver City",
        type: "city",
        blurb:
          "Easy Breathwork™ for Culver City–book online sessions for stress relief and nervous-system care.",
      },
    ],
  },
  {
    slug: "new-york",
    name: "New York",
    shortName: "New York",
    state: "NY",
    mode: "remote-primary",
    description:
      "Easy Breathwork™ for New York–remote sessions with Tamara Edwards for Manhattan, Brooklyn, Queens, and Greater NYC clients.",
    intro: [
      "New York clients practice Easy Breathwork™ remotely with Tamara, from the same trauma-informed, gentle approach used on the West Coast. Sessions fit apartment life, hybrid work, and high-stimulus city rhythms.",
      "Organizations and private groups in New York can inquire about Zoom trainings or special in-person arrangements when travel is possible.",
    ],
    places: [
      {
        slug: "manhattan",
        name: "Manhattan",
        type: "borough",
        blurb:
          "Easy Breathwork™ for Manhattan–remote 1:1 and couples sessions for a calmer nervous system in the city.",
      },
      {
        slug: "brooklyn",
        name: "Brooklyn",
        type: "borough",
        blurb:
          "Easy Breathwork™ for Brooklyn–online private practice and group training by inquiry.",
      },
      {
        slug: "queens",
        name: "Queens",
        type: "borough",
        blurb:
          "Easy Breathwork™ for Queens–gentle remote breathwork with Tamara Edwards.",
      },
      {
        slug: "williamsburg",
        name: "Williamsburg",
        type: "neighborhood",
        blurb:
          "Easy Breathwork™ for Williamsburg–book Zoom sessions for stress, creativity, and somatic reset.",
      },
      {
        slug: "upper-west-side",
        name: "Upper West Side",
        type: "neighborhood",
        blurb:
          "Easy Breathwork™ for the Upper West Side–remote sessions from home with clear integration tools.",
      },
      {
        slug: "downtown-manhattan",
        name: "Downtown Manhattan",
        type: "neighborhood",
        blurb:
          "Easy Breathwork™ for Downtown Manhattan professionals–short, safe practices for real-time stress.",
      },
      {
        slug: "astoria",
        name: "Astoria",
        type: "neighborhood",
        blurb:
          "Easy Breathwork™ for Astoria–online sessions for individuals and couples across Queens.",
      },
      {
        slug: "park-slope",
        name: "Park Slope",
        type: "neighborhood",
        blurb:
          "Easy Breathwork™ for Park Slope–remote breathwork support for parents, partners, and professionals.",
      },
    ],
  },
];

export function getRegion(slug: string) {
  return LOCATION_REGIONS.find((region) => region.slug === slug);
}

export function getPlace(regionSlug: string, placeSlug: string) {
  const region = getRegion(regionSlug);
  if (!region) return null;
  const place = region.places.find((item) => item.slug === placeSlug);
  if (!place) return null;
  return { region, place };
}

export function regionPath(slug: string) {
  return `/locations/${slug}`;
}

export function placePath(regionSlug: string, placeSlug: string) {
  return `/locations/${regionSlug}/${placeSlug}`;
}

export function allLocationPaths() {
  return LOCATION_REGIONS.flatMap((region) => [
    regionPath(region.slug),
    ...region.places.map((place) => placePath(region.slug, place.slug)),
  ]);
}
