import type { Metadata } from "next";
import { EB_Garamond, Julius_Sans_One, Montserrat } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SITE, absoluteUrl } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  display: "swap",
});

const julius = Julius_Sans_One({
  variable: "--font-julius",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name}™ | Gentle Breathwork with Tamara Edwards`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.founder.name, url: absoluteUrl("/about") }],
  creator: SITE.founder.name,
  publisher: SITE.name,
  keywords: [
    "Easy Breathwork",
    "breathwork",
    "Tamara Edwards",
    "somatic breathwork",
    "gentle breathwork",
    "trauma informed breathwork",
    "online breathwork class",
    "Marin breathwork",
    "Bay Area breathwork",
    "corporate breathwork",
    "cacao ceremony",
    "nervous system regulation",
  ],
  category: "health",
  alternates: {
    canonical: SITE.url,
    types: {
      "text/plain": [
        { url: absoluteUrl("/llms.txt"), title: "llms.txt" },
        { url: absoluteUrl("/llms-full.txt"), title: "llms-full.txt" },
      ],
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name}™ | Gentle Breathwork with Tamara Edwards`,
    description: SITE.shortDescription,
    images: [
      {
        url: absoluteUrl("/images/hero-whale.webp"),
        width: 2500,
        height: 1666,
        alt: "Whale breath forming a rainbow over the ocean",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name}™ | Gentle Breathwork with Tamara Edwards`,
    description: SITE.shortDescription,
    images: [absoluteUrl("/images/hero-whale.webp")],
  },
  robots: {
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  other: {
    "llms-txt": absoluteUrl("/llms.txt"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${garamond.variable} ${julius.variable} h-full overscroll-none antialiased`}
      style={{ scrollBehavior: "auto" }}
    >
      <body className="relative overscroll-none bg-cream text-navy">
        <JsonLd />
        <SmoothScroll>
          <div className="flex min-h-full flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
