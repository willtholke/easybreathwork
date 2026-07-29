import type { MetadataRoute } from "next";
import { LIVE_EVENTS, getEventPath } from "@/lib/events";
import { SITE } from "@/lib/site";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/bookings", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/live-events", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/testimonials", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/llms.txt", priority: 0.5, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages = routes.map((route) => ({
    url: `${SITE.url}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const events = LIVE_EVENTS.map((event) => ({
    url: `${SITE.url}${getEventPath(event.slug)}`,
    lastModified,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...pages, ...events];
}
