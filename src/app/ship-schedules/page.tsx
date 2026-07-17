import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { schedulePorts, getScheduleEntryCount } from "@/data/schedules";
import { SCHEDULE_YEARS, portYearPath } from "@/lib/schedule-utils";

/**
 * Legacy alias — canonical page is /ponta-delgada-cruise-ship-schedule.
 * public/_redirects 301s this path at the edge.
 */
const path = "/ponta-delgada-cruise-ship-schedule";

export const metadata = buildMetadata({
  title: "Ponta Delgada Cruise Ship Schedule",
  description:
    "Ponta Delgada cruise ship schedule by year and month. See which ships call before booking Sete Cidades, Lagoa do Fogo or historic-centre excursions.",
  path,
  noindex: true,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Ship Schedules", path },
];

export default function ShipSchedulesPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Ponta Delgada Cruise Ship Schedule", description: "Ponta Delgada cruise ship schedule by year and month.", path })]} />
      <PageHero title="Ponta Delgada Cruise Ship Schedule" subtitle="See which ships are in port before you book São Miguel excursions. Times and berths are indicative — always confirm with your cruise line." compact />
      <section className="section-padding">
        <div className="container-wide max-w-5xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-sm text-gray-500">
            This page has moved to{" "}
            <Link href="/ponta-delgada-cruise-ship-schedule" className="font-semibold text-coastal-700 hover:underline">
              /ponta-delgada-cruise-ship-schedule
            </Link>
            .
          </p>
          {schedulePorts.map((port) => {
            const count = getScheduleEntryCount(port.slug);
            return (
              <div key={port.slug} className="card-editorial p-6 sm:p-8 mt-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-gray-900">{port.name}</h2>
                    <p className="mt-2 text-gray-600">{port.scheduleOverview}</p>
                  </div>
                  {count > 0 && <span className="pill">{count} sample entries</span>}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/ponta-delgada-cruise-ship-schedule" className="btn-primary text-sm">Full schedule hub</Link>
                  {SCHEDULE_YEARS.map((y) => (
                    <Link key={y} href={portYearPath(port.slug, y)} className="btn-secondary text-sm">{y}</Link>
                  ))}
                </div>
              </div>
            );
          })}
          <div className="mt-12">
            <PlanningLinks />
          </div>
        </div>
      </section>
    </>
  );
}
