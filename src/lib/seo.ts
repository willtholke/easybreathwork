import type { Metadata } from "next";
import { SITE, absoluteUrl } from "@/lib/site";

type PageMetaInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description = SITE.description,
  path = "/",
  image = "/images/hero-whale.webp",
  noIndex = false,
}: PageMetaInput = {}): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title ? `${title} · ${SITE.name}` : SITE.name;
  const ogImage = absoluteUrl(image);

  return {
    title: title ? { absolute: fullTitle } : undefined,
    description,
    alternates: {
      canonical: url,
      types: {
        "text/plain": absoluteUrl("/llms.txt"),
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: SITE.name,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 2500,
          height: 1666,
          alt: "Whale breath forming a rainbow over the ocean – Easy Breathwork",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
