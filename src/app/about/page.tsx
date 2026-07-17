import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const path = "/about";

export const metadata = buildMetadata({
  title: "About Ponta Delgada Shore Excursions",
  description:
    "About Ponta Delgada Shore Excursions — an independent São Miguel cruise planning resource for passengers arriving at the Port of Ponta Delgada.",
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "About", path },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "About Ponta Delgada Shore Excursions", description: "About Ponta Delgada Shore Excursions.", path })]} />
      <PageHero title="About Ponta Delgada Shore Excursions" subtitle="An independent planning resource built for cruise passengers — your gateway to São Miguel from the Port of Ponta Delgada." compact />
      <section className="section-padding">
        <div className="container-wide max-w-3xl prose prose-gray">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
            <p>
              {SITE.name} is an independent planning resource for cruise passengers calling at Ponta Delgada. Whether you have one day ashore or want to understand Sete Cidades, Lagoa do Fogo, Furnas and the historic city before you sail, our goal is to help you choose the best version of São Miguel — not just browse a catalogue of tours.
            </p>
            <p>
              We focus on the practical decisions that shape a good Ponta Delgada cruise day: Sete Cidades or Lagoa do Fogo, whether independent exploring suits your hours, when a small-group tour beats a large coach, and how to build a realistic return-to-ship buffer for crater-road weather and traffic.
            </p>
            <p>
              Our guides are written for real cruise timings, not generic tourism. We highlight honest editorial comparisons, Editor&apos;s Collection recommendations for different traveller types, and future concepts such as The Wow Collection and Signature São Miguel Discovery. Ship schedules and transfer times are indicative — always confirm all-aboard times with your cruise line.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
