import { LocationsIndex } from "@/components/LocationLandings";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Locations",
  description:
    "Easy Breathwork™ locations–San Francisco Bay Area and Marin in person, plus remote sessions for Los Angeles, New York, and worldwide.",
  path: "/locations",
});

export default function LocationsPage() {
  return <LocationsIndex />;
}
