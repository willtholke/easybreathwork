import { FAQ } from "@/lib/site";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="scroll-mt-28 border-y border-line bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <h2
          id="faq-heading"
          className="font-display text-2xl tracking-[0.08em] text-navy uppercase md:text-3xl"
        >
          Frequently asked questions
        </h2>
        <p className="mt-4 text-navy-soft">
          Straight answers about Easy Breathwork™, safety, and how to book with
          Tamara Edwards.
        </p>
        <dl className="mt-10 space-y-8">
          {FAQ.map((item) => (
            <div key={item.question} className="border-b border-line pb-8 last:border-0">
              <dt className="text-lg font-semibold text-navy">{item.question}</dt>
              <dd className="mt-3 leading-relaxed text-navy-soft">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
