import { ContactCta } from "@/components/ContactCta";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Corporate and group Easy Breathwork™ training, 1:1 and couples sessions, and multi-modality breath, soma, and energy healing with Tamara Edwards.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <h1 className="font-display text-2xl tracking-[0.08em] text-navy uppercase md:text-3xl">
        Services
      </h1>

      <section className="mt-14 border-b border-line pb-14">
        <h2 className="text-2xl font-semibold text-navy">
          Corporate &amp; Groups training
        </h2>
        <p className="mt-2 text-sm text-navy-muted">
          Remote and In-Person programs available
        </p>
        <div className="mt-6 space-y-4 text-navy-soft">
          <p>
            Training programs for medical staff, health practitioners,
            facilitators, and therapists.
          </p>
          <p>
            Customized program for companies and organizations to facilitate
            connection and well-being in the company culture.
          </p>
          <p>Multiple options for length, frequency, and focus.</p>
          <p className="text-sm text-navy-muted">
            Have worked with: Beond, Califia, Mountain, Paradigm Talent Agency,
            Gobbler.
          </p>
        </div>
        <div className="mt-8">
          <ContactCta href="/?subject=Corporate%20%26%20group%20training%20info%20call#contact">
            Schedule a free 15 min info call
          </ContactCta>
        </div>
      </section>

      <section className="border-b border-line py-14">
        <h2 className="text-2xl font-semibold text-navy">1:1 &amp; Couples</h2>
        <p className="mt-2 text-sm text-navy-muted">
          Remote and In-Person sessions available
        </p>
        <p className="mt-6 text-navy-soft">
          Breathwork sessions meet you where you are. For those with acute
          situations to be addressed, sessions can be tailored to your needs.
        </p>
        <ul className="mt-6 list-disc space-y-2 pl-5 text-navy-soft">
          <li>Trauma, PTSD and Anxiety</li>
          <li>Psychedelic preparation and integration</li>
          <li>Injury</li>
          <li>Addiction recovery</li>
          <li>and more</li>
        </ul>
        <div className="mt-8">
          <ContactCta href="/?subject=1%3A1%20or%20couples%20info%20call#contact">
            Schedule a free 15 minute info call
          </ContactCta>
        </div>
      </section>

      <section className="pt-14">
        <h2 className="text-2xl font-semibold text-navy">
          Private 1:1 Multi Modality Healing Sessions
        </h2>
        <p className="mt-2 text-sm text-navy-muted">
          In-Person, Bay Area only &amp; Remote
        </p>
        <p className="mt-6 font-medium text-navy">
          Tune Up: Breath, Soma, Energy
        </p>
        <p className="mt-4 text-navy-soft">
          A multi-modality approach to healing developed to re-align the
          physical and electrical structures of the body. Together, we unwind
          your system of stored stress, undigested emotions, past trauma and
          injury. This is a combination of breathwork with bodywork and energy
          healing.
        </p>
        <p className="mt-4 text-navy-soft">
          Sessions are offered both in-person and remote.
        </p>
        <div className="mt-8">
          <ContactCta href="/?subject=Book%20multi-modality%20healing%20session#contact">
            Contact to book a session
          </ContactCta>
        </div>
      </section>
    </div>
  );
}
