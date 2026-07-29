"use client";

import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SITE } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm({
  defaultSubject = "",
  heading = "Contact Us",
}: {
  defaultSubject?: string;
  heading?: string;
}) {
  const searchParams = useSearchParams();
  const subjectFromQuery = searchParams.get("subject") ?? "";
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [subject, setSubject] = useState(defaultSubject || subjectFromQuery);

  useEffect(() => {
    const next = subjectFromQuery || defaultSubject;
    if (next) setSubject(next);
  }, [subjectFromQuery, defaultSubject]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });

      const json = (await res.json()) as { error?: string };
      if (!res.ok) {
        throw new Error(json.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
      setSubject("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="scroll-mt-28">
      <h2 className="font-display text-2xl tracking-[0.08em] text-navy uppercase md:text-3xl">
        {heading}
      </h2>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-navy-soft">
        Prefer to reach out directly? Email{" "}
        <a href={SITE.emailHref} className="underline underline-offset-2">
          {SITE.email}
        </a>{" "}
        or text{" "}
        <a href={SITE.phoneHref} className="underline underline-offset-2">
          {SITE.phone}
        </a>
        .
      </p>

      {status === "success" ? (
        <p className="mt-8 rounded-xl border border-line bg-white px-5 py-4 text-navy">
          Thank you. Your message was sent. Tamara will get back to you soon.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-8 grid max-w-2xl gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1.5 text-sm text-navy-soft">
              First Name
              <input
                required
                name="firstName"
                className="rounded-xl border border-line bg-white px-3 py-2.5 text-navy outline-none focus:border-navy"
              />
            </label>
            <label className="grid gap-1.5 text-sm text-navy-soft">
              Last Name
              <input
                required
                name="lastName"
                className="rounded-xl border border-line bg-white px-3 py-2.5 text-navy outline-none focus:border-navy"
              />
            </label>
          </div>
          <label className="grid gap-1.5 text-sm text-navy-soft">
            Email
            <input
              required
              type="email"
              name="email"
              className="rounded-xl border border-line bg-white px-3 py-2.5 text-navy outline-none focus:border-navy"
            />
          </label>
          <label className="grid gap-1.5 text-sm text-navy-soft">
            Subject
            <input
              required
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="rounded-xl border border-line bg-white px-3 py-2.5 text-navy outline-none focus:border-navy"
            />
          </label>
          <label className="grid gap-1.5 text-sm text-navy-soft">
            Message
            <textarea
              required
              name="message"
              rows={5}
              className="rounded-xl border border-line bg-white px-3 py-2.5 text-navy outline-none focus:border-navy"
            />
          </label>

          {status === "error" ? (
            <p className="text-sm text-red-700">{error}</p>
          ) : null}

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-2 inline-flex w-fit items-center justify-center rounded-xl border border-navy bg-navy px-6 py-3 text-sm font-medium tracking-wide text-cream transition hover:bg-transparent hover:text-navy disabled:opacity-60"
          >
            {status === "loading" ? "Sending…" : "Submit"}
          </button>
        </form>
      )}
    </section>
  );
}
