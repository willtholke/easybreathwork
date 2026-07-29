import { ServiceLanding } from "@/components/ServiceLanding";
import { createPageMetadata } from "@/lib/seo";
import { getSeoService } from "@/lib/seo-services";

const service = getSeoService("group-training")!;

export const metadata = createPageMetadata({
  title: service.title,
  description: service.description,
  path: service.path,
});

export default function GroupTrainingPage() {
  return <ServiceLanding service={service} />;
}
