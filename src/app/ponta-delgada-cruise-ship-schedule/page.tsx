import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShipScheduleHubView } from "@/components/ShipScheduleHubView";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { notFound } from "next/navigation";
import { getSchedulePortBySlug } from "@/data/schedules";

const path = "/ponta-delgada-cruise-ship-schedule";
const PORT_SLUG = "ponta-delgada";

export const metadata = buildMetadata({
  title: "Ponta Delgada Cruise Ship Schedule — São Miguel Port Calls",
  description:
    "Ponta Delgada cruise ship schedule and arrivals for São Miguel, the Azores. Verified port calls only — no invented ships or dates.",
  path,
  keywords: [
    "Ponta Delgada cruise ship schedule",
    "Ponta Delgada cruise ship arrivals",
    "Ponta Delgada port calendar",
    "Sao Miguel cruise ship schedule",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Ponta Delgada Cruise Ship Schedule", path },
];

export default function PontaDelgadaCruiseShipSchedulePage() {
  const port = getSchedulePortBySlug(PORT_SLUG);
  if (!port) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({ title: port.seoTitle, description: port.intro, path }),
          ...(port.faqs ? [faqSchema(port.faqs)] : []),
        ]}
      />
      <PageHero title="Ponta Delgada Cruise Ship Schedule" subtitle={port.description} compact />
      <section className="section-padding">
        <div className="container-wide max-w-5xl">
          <Breadcrumbs items={breadcrumbs} />
          <ShipScheduleHubView port={port} />
        </div>
      </section>
    </>
  );
}
