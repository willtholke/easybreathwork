"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { FAQ } from "@/lib/site";

export function FaqSection() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

        <div className="mt-10 divide-y divide-line border-y border-line">
          {FAQ.map((item, index) => {
            const open = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;

            return (
              <div key={item.question}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() =>
                      setOpenIndex((current) =>
                        current === index ? null : index,
                      )
                    }
                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-navy-soft"
                  >
                    <span className="text-lg font-semibold text-navy">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={20}
                      aria-hidden
                      className={`shrink-0 text-navy transition-transform duration-300 ease-out ${
                        open ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`pb-5 leading-relaxed text-navy-soft transition-opacity duration-300 ${
                        open ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
