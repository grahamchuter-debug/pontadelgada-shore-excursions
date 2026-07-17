import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { excursions } from "@/data/excursions";
import { getExcursionImage, excursionsHubImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SignatureSaoMiguelFeature } from "@/components/SignatureSaoMiguelFeature";

export const metadata = buildMetadata({
  title: "Ponta Delgada Shore Excursions — São Miguel from Your Cruise Ship",
  description:
    "Carefully selected Ponta Delgada shore excursions to Sete Cidades, Lagoa do Fogo, whale watching and the historic city, with cruise-aware timing.",
  path: "/shore-excursions",
  image: excursionsHubImage.src,
  imageAlt: excursionsHubImage.alt,
  keywords: [
    "Ponta Delgada shore excursions",
    "Sete Cidades from Ponta Delgada cruise",
    "Ponta Delgada cruise excursions",
    "São Miguel shore excursions",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Shore Excursions", path: "/shore-excursions" },
];

export default function ShoreExcursionsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            title: "Ponta Delgada Shore Excursions",
            description: "Carefully selected São Miguel shore excursions from Ponta Delgada cruise port.",
            path: "/shore-excursions",
          }),
        ]}
      />
      <PageHero
        image={excursionsHubImage}
        title="Ponta Delgada Shore Excursions"
        subtitle="Cruise-timed tours across São Miguel — Sete Cidades, Lagoa do Fogo, whale watching, Ponta Delgada and food experiences with reliable return-to-ship planning."
        compact
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={breadcrumbs} />
          <p className="mt-6 text-gray-600">
            Not sure which excursion? Start with our{" "}
            <Link href="/compare/sete-cidades-or-lagoa-do-fogo" className="font-semibold text-coastal-700 hover:underline">
              Sete Cidades or Lagoa do Fogo comparison
            </Link>{" "}
            or the{" "}
            <Link href="/compare" className="font-semibold text-coastal-700 hover:underline">
              full comparison hub
            </Link>
            .
          </p>
          <div className="mt-8">
            <SignatureSaoMiguelFeature embedded />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {excursions.map((e) => {
              const image = getExcursionImage(e.slug);
              const isEditorsChoice = e.badge === "editors-choice";
              return (
                <Link key={e.slug} href={`/shore-excursions/${e.slug}`} className="card-editorial group overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <ResponsiveImage
                      image={image}
                      role="card"
                      imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-coastal-900/55 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    {isEditorsChoice ? (
                      <span className="absolute left-3 top-3 badge-editors-choice">⭐ Editor&apos;s Choice</span>
                    ) : (
                      <span className="absolute left-3 top-3 pill bg-white/90">{e.category}</span>
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                      {e.title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">{e.tagline}</p>
                    <p className="mt-3 text-xs font-medium text-coastal-700">
                      {e.duration} · {e.pace}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
