import { notFound } from "next/navigation";
import { RegionLanding } from "@/components/LocationLandings";
import { LOCATION_REGIONS, getRegion, regionPath } from "@/lib/locations";
import { createPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ region: string }>;
};

export function generateStaticParams() {
  return LOCATION_REGIONS.map((region) => ({ region: region.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { region: regionSlug } = await params;
  const region = getRegion(regionSlug);
  if (!region) return {};

  return createPageMetadata({
    title: `Breathwork in ${region.shortName}`,
    description: region.description,
    path: regionPath(region.slug),
  });
}

export default async function RegionPage({ params }: PageProps) {
  const { region: regionSlug } = await params;
  const region = getRegion(regionSlug);
  if (!region) notFound();

  return <RegionLanding region={region} />;
}
