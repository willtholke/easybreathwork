import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import {
  LOCATION_REGIONS,
  type LocationPlace,
  type LocationRegion,
  placePath,
  regionPath,
} from "@/lib/locations";
import { SITE } from "@/lib/site";

function ModeNote({ region }: { region: LocationRegion }) {
  if (region.mode === "in-person-primary") {
    return (
      <p className="mt-4 rounded-xl border border-line bg-white px-4 py-3 text-sm text-navy-soft">
        In-person sessions are commonly available in {region.shortName}, with
        remote sessions anytime. Live outdoor events are most often in Marin /
        nearby Bay Area nature sites.
      </p>
    );
  }

  return (
    <p className="mt-4 rounded-xl border border-line bg-white px-4 py-3 text-sm text-navy-soft">
      {region.shortName} clients primarily book remote Easy Breathwork™ sessions.
      Group or in-person visits can be discussed when travel or hosting allows.
    </p>
  );
}

export function LocationsIndex() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <h1 className="font-display text-2xl tracking-[0.08em] text-navy uppercase md:text-3xl">
        Locations
      </h1>
      <p className="mt-6 text-base leading-relaxed text-navy-soft md:text-lg">
        Easy Breathwork™ is available in person across the San Francisco Bay
        Area and Marin, and remotely for clients in Los Angeles, New York, and
        worldwide. Choose a region to find local pages and booking details.
      </p>

      <div className="mt-12 space-y-10">
        {LOCATION_REGIONS.map((region) => (
          <section key={region.slug} className="border-b border-line pb-10">
            <h2 className="text-2xl font-semibold text-navy">
              <Link
                href={regionPath(region.slug)}
                className="hover:opacity-80"
              >
                {region.name}
              </Link>
            </h2>
            <p className="mt-3 text-navy-soft">{region.description}</p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-navy-muted">
              {region.places.map((place) => (
                <li key={place.slug}>
                  <Link
                    href={placePath(region.slug, place.slug)}
                    className="underline underline-offset-2"
                  >
                    {place.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

export function RegionLanding({ region }: { region: LocationRegion }) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-sm text-navy-muted">
        <Link href="/locations" className="underline underline-offset-2">
          Locations
        </Link>
        <span className="mx-2">·</span>
        <span>{region.shortName}</span>
      </p>

      <h1 className="mt-4 text-3xl font-semibold leading-tight text-navy md:text-4xl">
        Easy Breathwork™ in {region.name}
      </h1>

      <ModeNote region={region} />

      <div className="mt-8 space-y-5 text-base leading-relaxed text-navy-soft md:text-lg">
        {region.intro.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-navy">
          Areas within {region.shortName}
        </h2>
        <ul className="mt-6 space-y-4">
          {region.places.map((place) => (
            <li key={place.slug} className="border-b border-line pb-4">
              <Link
                href={placePath(region.slug, place.slug)}
                className="text-lg font-medium text-navy underline underline-offset-2"
              >
                {place.name}
              </Link>
              <p className="mt-2 text-sm text-navy-soft">{place.blurb}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-12 flex flex-wrap gap-3">
        <ContactCta
          href={`/?subject=${encodeURIComponent(`Easy Breathwork in ${region.name}`)}#contact`}
        >
          Contact for {region.shortName}
        </ContactCta>
        <ContactCta href="/bookings" variant="secondary">
          Bookings
        </ContactCta>
      </div>
    </div>
  );
}

export function PlaceLanding({
  region,
  place,
}: {
  region: LocationRegion;
  place: LocationPlace;
}) {
  const inPerson =
    region.mode === "in-person-primary"
      ? `Clients in ${place.name} can inquire about in-person Easy Breathwork™ in ${region.shortName}, or book remotely when that is easier.`
      : `Clients in ${place.name} typically book Easy Breathwork™ remotely with Tamara. In-person options in ${region.shortName} can be discussed when travel or hosting is available.`;

  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-sm text-navy-muted">
        <Link href="/locations" className="underline underline-offset-2">
          Locations
        </Link>
        <span className="mx-2">·</span>
        <Link
          href={regionPath(region.slug)}
          className="underline underline-offset-2"
        >
          {region.shortName}
        </Link>
        <span className="mx-2">·</span>
        <span>{place.name}</span>
      </p>

      <h1 className="mt-4 text-3xl font-semibold leading-tight text-navy md:text-4xl">
        Easy Breathwork™ in {place.name}
      </h1>

      <p className="mt-6 text-base leading-relaxed text-navy-soft md:text-lg">
        {place.blurb}
      </p>

      <div className="mt-8 space-y-5 text-base leading-relaxed text-navy-soft md:text-lg">
        <p>{inPerson}</p>
        <p>
          Easy Breathwork™ is a gentle, safe breathing method–not forceful or
          extreme. Sessions may include guided meditation, circular breath,
          somatic emotional release, and integration tools you can use in daily
          life in {place.name}.
        </p>
        <p>
          Popular bookings from {place.name} include 1:1 sessions, couples
          sessions, Tuesday online intro classes, corporate or group training,
          and inquiries about Marin live events.
        </p>
      </div>

      <section className="mt-12 rounded-xl border border-line bg-white px-6 py-8">
        <h2 className="text-xl font-semibold text-navy">
          Book from {place.name}
        </h2>
        <p className="mt-3 text-navy-soft">
          Email{" "}
          <a href={SITE.emailHref} className="underline underline-offset-2">
            {SITE.email}
          </a>{" "}
          or text{" "}
          <a href={SITE.phoneHref} className="underline underline-offset-2">
            {SITE.phone}
          </a>
          . Mention that you are in {place.name}, {region.state}.
        </p>
        <div className="mt-6">
          <ContactCta
            href={`/?subject=${encodeURIComponent(`Book Easy Breathwork in ${place.name}`)}#contact`}
          >
            Contact to book
          </ContactCta>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold text-navy">
          More in {region.shortName}
        </h2>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-navy-muted">
          {region.places
            .filter((item) => item.slug !== place.slug)
            .map((item) => (
              <li key={item.slug}>
                <Link
                  href={placePath(region.slug, item.slug)}
                  className="underline underline-offset-2"
                >
                  {item.name}
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}
