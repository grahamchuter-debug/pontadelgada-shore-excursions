import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { PontaDelgadaCruisePlanner } from "@/components/PontaDelgadaCruisePlanner";

const path = "/cruise-planner";
const description =
  "Build a personalised Ponta Delgada cruise plan. Enter your port times, party size, interests, mobility, budget and travel style for tailored São Miguel recommendations.";

export const metadata = buildMetadata({
  title: "Ponta Delgada Cruise Planner — São Miguel Port Day Itinerary",
  description,
  path,
  keywords: ["Ponta Delgada cruise planner", "São Miguel cruise day plan", "Ponta Delgada port day itinerary", "Sete Cidades planner"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Ponta Delgada Cruise Planner", path },
];

export default function CruisePlannerPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Ponta Delgada Cruise Planner", description, path })]} />
      <PageHero
        title="Ponta Delgada Cruise Planner"
        subtitle="Tell us your ship's hours ashore, who is travelling and what you enjoy — get editorial recommendations for Sete Cidades, Lagoa do Fogo, whale watching, Ponta Delgada and independent days."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <PontaDelgadaCruisePlanner />
        </div>
      </section>
    </>
  );
}
