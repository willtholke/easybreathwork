import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { ContactCta } from "@/components/ContactCta";
import { ContactForm } from "@/components/ContactForm";
import { FaqSection } from "@/components/FaqSection";
import { HeroWhale } from "@/components/HeroWhale";
import { Reveal } from "@/components/Reveal";
import { createPageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = createPageMetadata({
  description: SITE.description,
  path: "/",
});

const INTRO = [
  "Easy Breathwork™ is a simple, easy, and safe breathing method to facilitate healing, unwind stress, tension, and trauma from the body, and to restore a multi-layered sense of well-being.",
  "In fact, you might not even know the power of this birthright wisdom if you've never given it the space to show itself.",
  "With an attitude of ease, meeting the moment without making it wrong, something amazing opens up: something perhaps covered up by the compulsive efforting that we have learned to approach everything else in our lives.",
  "Easy Breathwork™ is a space outside of all that doing. It's the opposite of effort, or trying to fix anything.",
  "It's learning to be, by breathing into what is.",
  "Through breath, we are able to peel back habitual layers of protection in our soma and psyche, in order to access, care for, and digest emotional holding patterns. Body and mind align in the present moment allowing the body to clear itself of deeply held tension and fear.",
  "Easy Breathwork™ is not a controlled nor forceful technique. It is gentle, nourishing, and safe, and is a natural way of breathing and releasing tension.",
  "The methodology is based upon the recognition that no one outside of you can know your internal wisdom of how to approach regeneration.",
] as const;

export default function HomePage() {
  return (
    <div>
      <HeroWhale />

      <div className="relative z-10 bg-cream">
        <section className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <h1 className="font-display text-2xl tracking-[0.08em] text-navy uppercase md:text-3xl">
              What is Easy Breathwork™
            </h1>
          </Reveal>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-navy-soft md:text-lg">
            {INTRO.map((text, i) => (
              <Reveal key={text.slice(0, 32)} delay={Math.min(i * 60, 360)}>
                <p
                  className={
                    i === 4
                      ? "font-serif text-xl text-navy md:text-2xl"
                      : undefined
                  }
                >
                  {text}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10" delay={120}>
            <ContactCta href="/?subject=Schedule%20an%20intro%20call#contact">
              Schedule an Intro Call
            </ContactCta>
          </Reveal>
        </section>

        <section className="border-y border-line bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:px-8 md:py-24">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src="/images/breathe.webp"
                  alt="Breathwork practice"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <h2 className="font-display text-2xl tracking-[0.08em] text-navy uppercase md:text-3xl">
                  Learn Easy Breathwork™
                </h2>
                <p className="mt-6 text-lg font-medium text-navy">
                  Corporate, Organizations &amp; Group training
                </p>
                <p className="mt-2 text-sm text-navy-muted">
                  Remote and In-Person programs available
                </p>
                <ul className="mt-6 space-y-3 text-navy-soft">
                  <li>
                    Training programs for medical staff, health practitioners,
                    facilitators, and therapists.
                  </li>
                  <li>Customized program for companies and organizations</li>
                  <li>Multiple options for length, frequency, and focus.</li>
                </ul>
                <p className="mt-6 text-sm text-navy-muted">
                  Clients: Beond, Califia, Mountain, Paradigm Talent Agency,
                  Gobbler, Nue.Life
                </p>
                <div className="mt-8">
                  <ContactCta href="/?subject=Corporate%20%26%20group%20training%20info%20call#contact">
                    Email to schedule an info call
                  </ContactCta>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <h2 className="font-display text-2xl tracking-[0.08em] text-navy uppercase md:text-3xl">
              More ways to Learn Easy Breathwork™
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <Reveal>
              <article className="flex flex-col">
                <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src="/images/session.webp"
                    alt="1:1 or couple session"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3 className="text-xl font-semibold text-navy">
                  1:1 or couple session (In-Person or Remote)
                </h3>
                <p className="mt-2 text-sm text-navy-muted">
                  From $150 · 40, 60, or 90 min sessions
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-navy-soft">
                  Our session begins by meeting you where you are. We start with
                  a brief guided meditation and body scan, then talk about what
                  is on your mind and in your body. Easy Breathwork and somatic
                  emotional release techniques are tailored to your needs,
                  followed by integration to support your continued journey.
                </p>
                <p className="mt-4 text-sm text-navy-soft">
                  Email{" "}
                  <a
                    href={SITE.emailHref}
                    className="underline underline-offset-2"
                  >
                    {SITE.email}
                  </a>{" "}
                  or text{" "}
                  <a
                    href={SITE.phoneHref}
                    className="underline underline-offset-2"
                  >
                    {SITE.phone}
                  </a>{" "}
                  to schedule an intro call.
                </p>
                <div className="mt-6">
                  <ContactCta href="/?subject=Book%20a%201%3A1%20or%20couple%20session#contact">
                    Contact to book
                  </ContactCta>
                </div>
              </article>
            </Reveal>

            <Reveal delay={100}>
              <article className="flex flex-col">
                <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src="/images/online-class.webp"
                    alt="Intro to Easy Breathwork online"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3 className="text-xl font-semibold text-navy">
                  Intro to Easy Breathwork™ (online)
                </h3>
                <p className="mt-2 text-sm text-navy-muted">
                  $30 · Tuesdays, 6:00–6:45pm PT via Zoom
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-navy-soft">
                  Learn short, easy practices to unwind, release tension, manage
                  stress, and cope with life&apos;s challenges in real time. We
                  begin with guided meditation, a brief introduction to Easy
                  Breathwork, optional group check-in, practice, and integration
                  tips for daily life. First class is free.
                </p>
                <div className="mt-6">
                  <ContactCta href="/?subject=Join%20online%20Easy%20Breathwork%20class#contact">
                    Contact to join a class
                  </ContactCta>
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-line bg-white">
          <Reveal>
            <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 md:py-24">
              <blockquote className="font-serif text-xl leading-relaxed text-navy md:text-2xl">
                &ldquo;Easy Breathwork™ is a truly magical experience, whether
                you are working one on one, with your family or a larger group
                of friends or colleagues. More individualized sessions are truly
                tailored to exactly what you need to go deeper and to feel more
                held and released. Group sessions are extraordinary too, each
                person&apos;s presence adding to the whole while each individual
                still feels tended to.&rdquo;
              </blockquote>
              <p className="mt-8 text-sm tracking-wide text-navy-muted uppercase">
                Tara Meehan
              </p>
              <p className="mt-1 text-sm text-navy-soft">
                Board member, Project Regeneration &amp; Enneagram Prison Project
              </p>
            </div>
          </Reveal>
        </section>

        <Reveal>
          <FaqSection />
        </Reveal>

        <Reveal>
          <section
            id="llms-txt"
            className="scroll-mt-28 mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20"
            aria-labelledby="llms-heading"
          >
            <h2
              id="llms-heading"
              className="font-display text-2xl tracking-[0.08em] text-navy uppercase md:text-3xl"
            >
              For AI assistants
            </h2>
            <p className="mt-4 leading-relaxed text-navy-soft">
              This site publishes an{" "}
              <Link
                href="/llms.txt"
                className="font-medium text-navy underline underline-offset-2"
              >
                llms.txt
              </Link>{" "}
              file–a curated map of Easy Breathwork™ for language models and
              answer engines–plus a fuller{" "}
              <Link
                href="/llms-full.txt"
                className="font-medium text-navy underline underline-offset-2"
              >
                llms-full.txt
              </Link>{" "}
              summary. Humans are welcome to read them too.
            </p>
            <p className="mt-3 text-sm text-navy-muted">
              Canonical URLs:{" "}
              <a href="/llms.txt" className="underline underline-offset-2">
                {SITE.url}/llms.txt
              </a>
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
            <Suspense
              fallback={<div className="text-navy-soft">Loading form…</div>}
            >
              <ContactForm />
            </Suspense>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
