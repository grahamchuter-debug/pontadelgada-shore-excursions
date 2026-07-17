import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Affiliate Disclosure",
  description:
    "How Ponta Delgada Shore Excursions earns from affiliate excursion links, and how that relates to editorial recommendations.",
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosurePage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Affiliate disclosure", path: "/affiliate-disclosure" },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs)]} />
      <section className="section-padding">
        <div className="container-wide max-w-3xl prose-body">
          <Breadcrumbs items={crumbs} />
          <h1 className="section-title">Affiliate disclosure</h1>
          <p>
            Some links on this website are affiliate or partner links. If you book through them, we
            may earn a commission at no additional cost to you.
          </p>
          <p>
            Ponta Delgada excursions are typically offered via Shore Excursions Group and similar partners.
            Editorial pages present the options that best fit the passenger&apos;s time ashore, mobility
            and interests — not the options with the highest commission.
          </p>
          <p>
            We disclose commercial relationships transparently and do not invent prices, admissions
            or guarantees on any customer-facing page.
          </p>
          <p>
            Read more in our <Link href="/methodology">methodology</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
