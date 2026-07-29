export const SITE = {
  name: "Easy Breathwork",
  tagline: "Easy Breathwork™",
  email: "info@easybreathwork.com",
  phone: "+1 323 532 9251",
  phoneHref: "tel:+13235329251",
  emailHref: "mailto:info@easybreathwork.com",
  instagram: "https://www.instagram.com/easybreathwork/",
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/bookings", label: "Bookings" },
  { href: "/services", label: "Services" },
  { href: "/live-events", label: "Live Events" },
  { href: "/testimonials", label: "Testimonials" },
] as const;
