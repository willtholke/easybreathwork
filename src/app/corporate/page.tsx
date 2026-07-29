import { ServiceLanding } from "@/components/ServiceLanding";
import { createPageMetadata } from "@/lib/seo";
import { getSeoService } from "@/lib/seo-services";

const service = getSeoService("corporate")!;

export const metadata = createPageMetadata({
  title: service.title,
  description: service.description,
  path: service.path,
});

export default function CorporatePage() {
  return <ServiceLanding service={service} />;
}
