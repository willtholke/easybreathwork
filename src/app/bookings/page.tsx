import Image from "next/image";
import { ContactCta } from "@/components/ContactCta";
import { createPageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Bookings",
  description:
    "Contact Tamara to book Easy Breathwork™ 1:1 or couples sessions (in person or remote) and Tuesday online intro classes. Email info@easybreathwork.com or text +1 323 532 9251.",
  path: "/bookings",
  image: "/images/session.webp",
});

export default function BookingsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <h1 className="font-display text-2xl tracking-[0.08em] text-navy uppercase md:text-3xl">
        Bookings
      </h1>
      <p className="mt-4 max-w-2xl text-navy-soft">
        To book a session or join a class, contact Tamara by form, email, or
        text. Pricing below is for reference.
      </p>

      <div className="mt-14 grid gap-14 md:grid-cols-2">
        <article>
          <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/session.webp"
              alt="1:1 or couple session"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <h2 className="text-xl font-semibold text-navy">
            1:1 or couple session (In-Person or Remote)
          </h2>
          <p className="mt-2 text-sm text-navy-muted">From $150</p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-navy-soft">
            <li>40 min remote</li>
            <li>60 min remote</li>
            <li>40 min in person</li>
            <li>60 min in person</li>
            <li>90 min in person</li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-navy-soft">
            Sessions begin by meeting you where you are–guided meditation and
            body scan, conversation about what needs care, Easy Breathwork and
            somatic release tailored to your focus, then integration for the
            journey ahead. Themes may include stress, emotional balance, past
            trauma, pain management, self-discovery, or personal growth.
          </p>
          <p className="mt-4 text-sm text-navy-soft">
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
          <div className="mt-6">
            <ContactCta href="/?subject=Book%20a%201%3A1%20or%20couple%20session#contact">
              Contact to book
            </ContactCta>
          </div>
        </article>

        <article>
          <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/online-class.webp"
              alt="Intro to Easy Breathwork online"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <h2 className="text-xl font-semibold text-navy">
            Intro to Easy Breathwork™ (online)
          </h2>
          <p className="mt-2 text-sm text-navy-muted">
            $30 / class · First class free
          </p>
          <p className="mt-4 text-sm text-navy-soft">
            Tuesdays, 6:00–6:45pm PT via Zoom
          </p>
          <p className="mt-4 text-sm leading-relaxed text-navy-soft">
            From the comfort of your own home, gain tools for regulating your
            nervous system, destressing, calming your mind, relieving anxiety,
            and increasing your capacity to thrive. Weekly practice builds the
            ability to clear stressors and emotional holding patterns in real
            time.
          </p>
          <div className="mt-6">
            <ContactCta href="/?subject=Join%20online%20Easy%20Breathwork%20class#contact">
              Contact to join
            </ContactCta>
          </div>
        </article>
      </div>
    </div>
  );
}
