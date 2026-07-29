import type { Metadata } from "next";
import { EB_Garamond, Julius_Sans_One, Montserrat } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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
  title: {
    default: "Easy Breathwork",
    template: "%s — Easy Breathwork",
  },
  description:
    "Easy Breathwork™ is a simple, easy, and safe breathing method to facilitate healing, unwind stress, tension, and trauma from the body, and restore a multi-layered sense of well-being.",
  metadataBase: new URL("https://www.easybreathwork.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${garamond.variable} ${julius.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-navy">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
