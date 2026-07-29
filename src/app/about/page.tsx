import type { Metadata } from "next";
import Image from "next/image";
import { ContactCta } from "@/components/ContactCta";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <h1 className="font-display text-2xl tracking-[0.12em] text-navy uppercase md:text-3xl">
        A statement from Founder:
      </h1>

      <div className="mt-10 space-y-6 text-base leading-relaxed text-navy-soft md:text-lg">
        <p>
          Easy Breathwork™ is a method I developed through my 20 years of
          training in meditation, breathwork, somatic therapy, energy work,
          eastern medicine systems, shamanism and surfing.
        </p>
        <p>
          I honor one of my many teachers, Jesse Torgerson, who I studied with
          for 5 years in a technique in which this is inspired by. She showed me
          a natural and integrative way to self heal through the simple practice
          of breathing.
        </p>
        <p>
          I resisted breathwork for years because the types that I tried felt
          intense and unsafe. I often found warnings for trainings that
          mentioned mental health risks. I had put myself through enough
          intensity and forceful ways to better myself and felt the need for
          more gentle and nourishing ways to heal and grow. I&apos;ve had many
          experiences with plant medicine that left me feeling more fragmented
          and ungrounded than before. I&apos;ve worked with many healers that
          were helpful yet in some ways disempowering to feel I what I needed
          was outside of myself. Being able to heal oneself with one&apos;s own
          breath is empowering and liberating and is something innate in all
          human beings. May this help you awaken your own inner healer.
        </p>
        <p>
          Through practice, this breath technique has become a natural way of
          breathing for me and it can be easily for you as well. I&apos;ve
          combined this breathing technique with meditation, visualization,
          memory recall, trauma release, somatic therapy, sound healing,
          restorative postures, and intuitive healing to create a safe container
          for participants to fully meet themselves and learn to be.
        </p>
        <p>
          I have been working with hundreds of clients around the world sharing
          this gift, and a complementary meditation technique, for which I am
          deeply grateful.
        </p>
        <p>
          I am now focused on training practitioners, nurses and other
          individuals in facilitating Easy Breathwork™ as well as writing a book
          on Easy Breathwork™ to share this life changing practice with as many
          as possible.
        </p>
      </div>

      <div className="relative mt-14 aspect-[3/4] overflow-hidden rounded-xl">
        <Image
          src="/images/about-portrait.webp"
          alt="Tamara Edwards"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>

      <div className="mt-10">
        <ContactCta href="/?subject=Say%20hi#contact">Say Hi!</ContactCta>
      </div>
    </div>
  );
}
