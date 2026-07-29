import { ContactCta } from "@/components/ContactCta";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Testimonials",
  description:
    "What clients and peers say about Easy Breathwork™ and Tamara Edwards–from nervous-system calm to lasting daily practice.",
  path: "/testimonials",
});

const testimonials = [
  {
    quote:
      "The first time I was ever lead in meditation was with Tamara five years ago. At the time I was terrified to try anything that I didn’t fully understand but her approachable and encouraging nature enabled me to step into the unknown. She introduced me to different techniques and helped me find one that resonated with me. She empowered me to explore that further on my own and with other teachers. This is a practice I have been in love with ever since.",
    name: "Bonnie Wright",
    role: "Film Actress, Director, Activist",
  },
  {
    quote:
      "It was amazing. My nervous system totally relaxed. Thank you so much.",
    name: "Marin resident",
  },
  {
    quote:
      "I love Easy Breathwork and can feel myself integrating it regularly during stressful moments or just sitting with my toddler.",
    name: "T",
    role: "Mother / entrepreneur",
  },
  {
    quote:
      "I’ve known Tamara Edwards for over a decade, during which time I’ve seen her be a catalyst for community connection across the country and even internationally, starting a nomadic meditation gathering, the Be Society in LA, San Francisco, NY and London. Tamara is someone who no matter what the setting is constantly creating connection between people. With a playful smile she suggests a game, or a collaborative effort or a communal meal, and before you know it, strangers are friends.",
    name: "Sibyl Buck",
    role: "Model, Musician, Yoga Teacher",
  },
  {
    quote:
      "Thank you for the part you played in helping me process and release some of those final (and deepest) remaining tentacles that were holding me back when we did the breath work. I am so grateful for that session.",
    name: "Costa Rica",
  },
  {
    quote:
      "I want to reach out this morning and tell you how amazing last night's class was and tell you truly spoke to me on multiple levels. I found myself shaking and sighing today already.",
    name: "FL",
  },
  {
    quote: "Very powerful and well done.",
    name: "CEO, California",
  },
  {
    quote:
      "Thank you so much for last night's session. I seriously left feeling so calm and so OK, and I really appreciate you making space for me to breathe and to talk to me about letting go a bit. I'm starting, as you recommended by trying to make space to breathe every day as a start. I took 15 minutes to lay this morning and breathe, then an additional 10 minutes to journal before starting the day, and it made a huge difference in how I handled any stress during the work day.",
    name: "LA",
  },
  {
    quote:
      "Tamara has a unique talent and intuition for being able to thread together all aspects of being human–starting with the breath. Because of her own genuine curiosity for life; she listens like a new student, and guides like a master teacher. She helps you cultivate the space within your schedule and within your human body to find stillness–and helps you guide the questions to yourself, the old “woman or man” within you, for guidance. I truly enjoyed working with Tamara weekly, and found myself full from a healthy dose of laughs, sentiment, new tools, and a calm space in my heart and mind.",
    name: "Kari Hendrick",
    role: "Director of Operations – Butcher’s Daughter, Los Angeles",
  },
  {
    quote:
      "Tamara is a beautiful soul and seeker who can see deeply, and listen even deeper. She asks important questions and reminds us all that anything is possible and that life is precious. Through deep reverence Tamara shows us how to calm our spirit while inspiring us to take a bite out of life and live full throttle without fear.",
    name: "Talia Eisenberg",
    role: "Entrepreneur",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <h1 className="font-display text-2xl tracking-[0.08em] text-navy uppercase md:text-3xl">
        Testimonials
      </h1>

      <div className="mt-14 space-y-14">
        {testimonials.map((t) => (
          <blockquote key={t.quote.slice(0, 40)} className="border-b border-line pb-14 last:border-0">
            <p className="font-serif text-xl leading-relaxed text-navy md:text-2xl">
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="mt-6">
              <p className="text-sm tracking-wide text-navy-muted uppercase">
                {t.name}
              </p>
              {t.role ? (
                <p className="mt-1 text-sm text-navy-soft">{t.role}</p>
              ) : null}
            </footer>
          </blockquote>
        ))}
      </div>

      <div className="mt-4">
        <ContactCta href="/?subject=Schedule%20an%20intro%20call#contact">
          Schedule an Intro Call
        </ContactCta>
      </div>
    </div>
  );
}
