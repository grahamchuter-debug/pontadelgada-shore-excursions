import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PhotoHeroBand } from "@/components/PhotoHeroBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import { siteImages } from "@/lib/images";
import { portGuideContent, portGuideFaqs } from "@/data/port-guide";

/**
 * Legacy alias — canonical page is /ponta-delgada-cruise-port.
 * public/_redirects 301s this path at the edge; this page renders the same
 * content and points crawlers/canonical at the new URL as a fallback.
 */
const path = "/ponta-delgada-cruise-port";
const image = siteImages.port;
const description =
  "The complete Ponta Delgada cruise port guide — terminal layout, walking routes, shuttles, historic-centre highlights and honest return-to-ship timing.";

export const metadata = buildMetadata({
  title: "Ponta Delgada Cruise Port Guide",
  description,
  path,
  image: image.src,
  imageAlt: image.alt,
  noindex: true,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Ponta Delgada Cruise Port Guide", path: "/ponta-delgada-cruise-port" },
];

export default function CruisePortGuidePage() {
  const { terminals, sections } = portGuideContent;

  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(portGuideFaqs), articleSchema({ title: "Ponta Delgada Cruise Port Guide", description, path, image: image.src })]} />
      <PhotoHeroBand image={image} eyebrow="Terminal guidance" title="Ponta Delgada Cruise Port Guide" subtitle="Where ships dock, how to walk into the historic centre and return-to-ship timing for Portas do Mar." compact />
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-sm text-gray-500">
            This guide has moved to{" "}
            <Link href="/ponta-delgada-cruise-port" className="font-semibold text-coastal-700 hover:underline">
              /ponta-delgada-cruise-port
            </Link>
            .
          </p>

          <h2 className="section-title text-2xl mb-4 mt-6">Ponta Delgada cruise terminals at a glance</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-coastal-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Terminal</th>
                  <th className="px-4 py-3 text-left font-semibold">Quay</th>
                  <th className="px-4 py-3 text-left font-semibold">Used by</th>
                  <th className="px-4 py-3 text-left font-semibold">City access</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {terminals.map((t) => (
                  <tr key={t.name}>
                    <td className="px-4 py-3 font-medium text-gray-900">{t.name}</td>
                    <td className="px-4 py-3 text-gray-600">{t.quay}</td>
                    <td className="px-4 py-3 text-gray-600">{t.usedBy}</td>
                    <td className="px-4 py-3 text-gray-600">{t.cityAccess}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="prose-body mt-4">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2>{s.heading}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Link href="/shore-excursions" className="nav-card"><h3 className="font-display text-base font-bold text-gray-900">Shore excursions</h3><p className="mt-1 text-sm text-gray-600">Browse Sete Cidades, Lagoa do Fogo and more.</p></Link>
            <Link href="/things-to-do-in-ponta-delgada-from-a-cruise-ship" className="nav-card"><h3 className="font-display text-base font-bold text-gray-900">Things to do</h3><p className="mt-1 text-sm text-gray-600">A full editorial guide to your day ashore.</p></Link>
            <Link href="/ponta-delgada-cruise-ship-schedule" className="nav-card"><h3 className="font-display text-base font-bold text-gray-900">Ship schedule</h3><p className="mt-1 text-sm text-gray-600">See who&apos;s in port before you book.</p></Link>
          </div>

          <div className="mt-12"><FAQSection faqs={portGuideFaqs} title="Ponta Delgada Cruise Port — FAQs" /></div>
          <div className="mt-12"><PlanningLinks /></div>
        </div>
      </section>
    </>
  );
}
