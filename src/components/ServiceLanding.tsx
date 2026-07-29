import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import type { SeoServicePage } from "@/lib/seo-services";
import { SEO_SERVICES } from "@/lib/seo-services";
import { SITE } from "@/lib/site";

export function ServiceLanding({ service }: { service: SeoServicePage }) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-sm text-navy-muted">
        <Link href="/services" className="underline underline-offset-2">
          Services
        </Link>
        <span className="mx-2">·</span>
        <span>{service.navLabel}</span>
      </p>

      <h1 className="mt-4 text-3xl font-semibold leading-tight text-navy md:text-4xl">
        {service.headline}
      </h1>

      <div className="mt-8 space-y-5 text-base leading-relaxed text-navy-soft md:text-lg">
        {service.intro.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-navy">What is included</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-navy-soft">
          {service.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-navy">Who it is for</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-navy-soft">
          {service.whoFor.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-navy">How booking works</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-navy-soft">
          {service.howItWorks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-navy-muted">
          Email{" "}
          <a href={SITE.emailHref} className="underline underline-offset-2">
            {SITE.email}
          </a>{" "}
          or text{" "}
          <a href={SITE.phoneHref} className="underline underline-offset-2">
            {SITE.phone}
          </a>
          .
        </p>
      </section>

      <div className="mt-12 flex flex-wrap gap-3">
        <ContactCta
          href={`/?subject=${encodeURIComponent(service.ctaSubject)}#contact`}
        >
          {service.ctaLabel}
        </ContactCta>
        <ContactCta href="/bookings" variant="secondary">
          All bookings
        </ContactCta>
      </div>

      <section className="mt-16 border-t border-line pt-10">
        <h2 className="text-lg font-semibold text-navy">Related</h2>
        <ul className="mt-4 space-y-2 text-navy-soft">
          {SEO_SERVICES.filter((item) => item.slug !== service.slug).map(
            (item) => (
              <li key={item.slug}>
                <Link href={item.path} className="underline underline-offset-2">
                  {item.title}
                </Link>
              </li>
            ),
          )}
          <li>
            <Link href="/locations" className="underline underline-offset-2">
              Locations
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
