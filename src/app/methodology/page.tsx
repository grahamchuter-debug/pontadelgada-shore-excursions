import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "How We Recommend Ponta Delgada Shore Excursions",
  description:
    "Our methodology for Ponta Delgada recommendations — cruise-day suitability, itinerary balance, group format, road time and editorial criteria.",
  path: "/methodology",
});

export default function MethodologyPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Methodology", path: "/methodology" },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs)]} />
      <section className="section-padding">
        <div className="container-wide max-w-3xl prose-body">
          <Breadcrumbs items={crumbs} />
          <h1 className="section-title">Methodology</h1>
          <p>
            Recommendations on this site consider cruise-day suitability, duration, itinerary
            balance, group format, vehicle size where known, travel time, activity level, free time,
            supplier information, customer feedback where available, return-to-ship practicality,
            value and distinctiveness.
          </p>
          <h2>Road time and honest caveats</h2>
          <p>
            São Miguel is surrounded by genuinely exceptional landscapes — but road time and crater-rim
            weather are real. Sete Cidades, Lagoa do Fogo and Furnas all carry significant timing and
            cloud-risk factors. We include road time, weather and traffic caveats in every relevant
            recommendation and do not present optimistic journey times as typical.
          </p>
          <h2>What we do not invent</h2>
          <p>
            We do not publish unverified prices, live availability, admissions, guaranteed returns,
            summit access or group maxima. Where a fact is unconfirmed it stays off the
            customer-facing page or is clearly framed as typical supplier information.
          </p>
          <p>
            See also our <Link href="/affiliate-disclosure">affiliate disclosure</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
