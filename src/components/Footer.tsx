import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-14 md:flex-row md:items-start md:justify-between md:px-8">
        <div className="max-w-md">
          <h2 className="font-display text-xl tracking-[0.12em] text-navy uppercase">
            Easy Breathwork™
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-navy-soft">
            Gentle, safe breathwork with Tamara Edwards–sessions, classes,
            corporate training, and live events. Email{" "}
            <a
              href={SITE.emailHref}
              className="underline underline-offset-2 hover:opacity-70"
            >
              {SITE.email}
            </a>{" "}
            to stay in touch.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-navy-soft">
          <a href={SITE.emailHref} className="hover:text-navy">
            {SITE.email}
          </a>
          <a href={SITE.phoneHref} className="hover:text-navy">
            {SITE.phone}
          </a>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-navy"
          >
            Instagram
          </a>
          <Link href="/locations" className="hover:text-navy">
            Locations
          </Link>
          <Link href="/corporate" className="hover:text-navy">
            Corporate
          </Link>
          <Link href="/#contact" className="hover:text-navy">
            Contact
          </Link>
          <Link href="/#faq" className="hover:text-navy">
            FAQ
          </Link>
          <Link href="/llms.txt" className="hover:text-navy">
            llms.txt
          </Link>
          <Link href="/sitemap.xml" className="hover:text-navy">
            Sitemap
          </Link>
        </div>
      </div>
      <div className="border-t border-line py-4 text-center text-xs text-navy-muted">
        © {new Date().getFullYear()} Easy Breathwork™
      </div>
    </footer>
  );
}
