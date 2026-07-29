"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroWhale() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Cached images can finish before onLoad attaches; fail-safe show.
    const id = window.setTimeout(() => setLoaded(true), 1200);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <section className="sticky top-16 z-0 h-[72dvh] w-full overflow-hidden bg-navy md:top-20 md:h-[75dvh]">
      <Image
        src="/images/hero-whale.webp"
        alt="Whale breath forming a rainbow over the ocean – Easy Breathwork™ by Tamara Edwards"
        fill
        priority
        className={`object-cover object-center transition-opacity duration-700 ease-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        sizes="100vw"
        onLoad={() => setLoaded(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" />
    </section>
  );
}
