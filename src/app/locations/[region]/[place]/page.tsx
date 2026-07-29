import { notFound } from "next/navigation";
import { PlaceLanding } from "@/components/LocationLandings";
import {
  LOCATION_REGIONS,
  getPlace,
  placePath,
} from "@/lib/locations";
import { createPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ region: string; place: string }>;
};

export function generateStaticParams() {
  return LOCATION_REGIONS.flatMap((region) =>
    region.places.map((place) => ({
      region: region.slug,
      place: place.slug,
    })),
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { region: regionSlug, place: placeSlug } = await params;
  const match = getPlace(regionSlug, placeSlug);
  if (!match) return {};

  return createPageMetadata({
    title: `Breathwork in ${match.place.name}`,
    description: match.place.blurb,
    path: placePath(match.region.slug, match.place.slug),
  });
}

export default async function PlacePage({ params }: PageProps) {
  const { region: regionSlug, place: placeSlug } = await params;
  const match = getPlace(regionSlug, placeSlug);
  if (!match) notFound();

  return <PlaceLanding region={match.region} place={match.place} />;
}
