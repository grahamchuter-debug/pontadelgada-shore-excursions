import Link from "next/link";
import { notFound } from "next/navigation";
import { excursions, getAllExcursionSlugs, getExcursionBySlug } from "@/data/excursions";
import { excursionPageMetadata } from "@/lib/seo";
import { getExcursionImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { EditorialBadge } from "@/components/EditorialBadge";
import { FAQSection } from "@/components/FAQSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return getAllExcursionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ex = getExcursionBySlug(slug);
  if (!ex) return {};
  return excursionPageMetadata(slug, ex.seoTitle, ex.metaDescription);
}

function staysNearPort(ex: NonNullable<ReturnType<typeof getExcursionBySlug>>): string {
  const locs = (ex.locations ?? []).join(" ").toLowerCase();
  if (locs.includes("ponta delgada") && !locs.includes("sete") && !locs.includes("fogo") && !locs.includes("atlantic")) {
    return "Yes — mainly within Ponta Delgada";
  }
  if (locs.includes("atlantic") || locs.includes("southern coast")) {
    return "No — marine / coastal departure from the Ponta Delgada area";
  }
  return "No — travels into São Miguel beyond the city";
}

export default async function ExcursionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ex = getExcursionBySlug(slug);
  if (!ex) notFound();

  const image = getExcursionImage(slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Shore excursions", path: "/shore-excursions" },
    { name: ex.title, path: `/shore-excursions/${slug}` },
  ];
  const related = ex.relatedExcursionSlugs
    .map((s) => getExcursionBySlug(s))
    .filter(Boolean);
  const isWildlife =
    slug.includes("whale") ||
    (ex.locations ?? []).some((l) => l.toLowerCase().includes("atlantic"));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          faqSchema(ex.faqs),
          articleSchema({
            title: ex.title,
            description: ex.metaDescription,
            path: `/shore-excursions/${slug}`,
            image: image.src,
          }),
        ]}
      />

      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <ResponsiveImage
            image={image}
            role="hero"
            priority
            className="absolute inset-0 block h-full w-full"
            imgClassName="absolute inset-0 h-full w-full object-cover"
          />
          <div className="hero-overlay" aria-hidden="true" />
        </div>
        <div className="container-wide relative z-10 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Breadcrumbs items={crumbs} />
          {ex.badge ? (
            <div className="mt-4">
              <EditorialBadge badge={ex.badge} />
            </div>
          ) : null}
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            {ex.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-white/90">{ex.tagline}</p>
        </div>
      </section>

      <article className="section-padding">
        <div className="container-wide grid gap-12 lg:grid-cols-[1.4fr_0.75fr]">
          <div className="prose-body max-w-3xl">
            <p className="text-lg text-gray-800">{ex.overview}</p>
            {ex.body.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}

            <h2>Why cruise passengers choose this excursion</h2>
            <p>{ex.whyRecommend}</p>
            <ul>
              {ex.highlights.slice(0, 4).map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <h2>Cruise passenger snapshot</h2>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2 not-prose">
              <div className="rounded-xl border border-coastal-100 bg-coastal-50/50 p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-coastal-700">
                  Duration
                </dt>
                <dd className="mt-1 text-sm text-gray-800">{ex.duration}</dd>
              </div>
              <div className="rounded-xl border border-coastal-100 bg-coastal-50/50 p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-coastal-700">
                  Best for
                </dt>
                <dd className="mt-1 text-sm text-gray-800">{ex.bestFor}</dd>
              </div>
              <div className="rounded-xl border border-coastal-100 bg-coastal-50/50 p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-coastal-700">
                  Region
                </dt>
                <dd className="mt-1 text-sm text-gray-800">
                  {ex.locations?.join(", ") ?? "São Miguel"}
                </dd>
              </div>
              <div className="rounded-xl border border-coastal-100 bg-coastal-50/50 p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-coastal-700">
                  Pace
                </dt>
                <dd className="mt-1 text-sm text-gray-800">
                  {ex.activityLevel ?? ex.pace}
                </dd>
              </div>
              <div className="rounded-xl border border-coastal-100 bg-coastal-50/50 p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-coastal-700">
                  Stays near Ponta Delgada
                </dt>
                <dd className="mt-1 text-sm text-gray-800">{staysNearPort(ex)}</dd>
              </div>
              <div className="rounded-xl border border-coastal-100 bg-coastal-50/50 p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-coastal-700">
                  Weather considerations
                </dt>
                <dd className="mt-1 text-sm text-gray-800">
                  {isWildlife
                    ? "Marine conditions apply; Atlantic weather can affect comfort and sailing"
                    : "Visibility at volcanic viewpoints can vary — check the day's forecast"}
                </dd>
              </div>
            </dl>
            <p className="mt-4 text-sm text-gray-600">
              Meeting instructions and return arrangements are confirmed by the excursion provider.
            </p>

            <h2>Highlights</h2>
            <ul>
              {ex.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <h2>Included</h2>
            <ul>
              {ex.included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>Planning notes</h2>
            <p>{ex.planningCaveat}</p>
            <p>{ex.portLogistics}</p>
            {ex.cruiseSuitability ? (
              <p>
                <strong>Cruise suitability:</strong> {ex.cruiseSuitability}
              </p>
            ) : null}
            {isWildlife ? (
              <p>
                Wildlife sightings cannot be guaranteed because the animals are in their natural
                environment.
              </p>
            ) : null}

            <h2>Tips</h2>
            <ul>
              {ex.tips.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            {related.length > 0 ? (
              <>
                <h2>Related excursions</h2>
                <ul>
                  {related.map((r) =>
                    r ? (
                      <li key={r.slug}>
                        <Link href={`/shore-excursions/${r.slug}`}>{r.title}</Link>
                      </li>
                    ) : null,
                  )}
                </ul>
              </>
            ) : null}

            <p className="mt-8">
              <Link href="/shore-excursions">All Ponta Delgada shore excursions</Link>
            </p>
          </div>

          <aside className="space-y-6">
            <div className="card-feature">
              <h2 className="font-display text-xl font-semibold">At a glance</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold">Duration</dt>
                  <dd>{ex.duration}</dd>
                </div>
                {ex.groupType ? (
                  <div>
                    <dt className="font-semibold">Group format</dt>
                    <dd>{ex.groupType}</dd>
                  </div>
                ) : null}
                {ex.activityLevel ? (
                  <div>
                    <dt className="font-semibold">Activity</dt>
                    <dd>{ex.activityLevel}</dd>
                  </div>
                ) : null}
                {ex.foodBeverage ? (
                  <div>
                    <dt className="font-semibold">Food & beverage</dt>
                    <dd>{ex.foodBeverage}</dd>
                  </div>
                ) : null}
                {ex.locations?.length ? (
                  <div>
                    <dt className="font-semibold">Locations</dt>
                    <dd>{ex.locations.join(", ")}</dd>
                  </div>
                ) : null}
                {ex.experienceStyle ? (
                  <div>
                    <dt className="font-semibold">Experience type</dt>
                    <dd>{ex.experienceStyle}</dd>
                  </div>
                ) : null}
                {ex.supplier ? (
                  <div>
                    <dt className="font-semibold">Booking partner</dt>
                    <dd>{ex.supplier.name}</dd>
                  </div>
                ) : null}
              </dl>
              {ex.supplier?.url ? (
                <a
                  href={ex.supplier.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="btn-accent mt-6 w-full"
                >
                  {ex.ctaLabel ?? "View Excursion"}
                </a>
              ) : (
                <Link href="/enquire" className="btn-accent mt-6 w-full">
                  Enquire
                </Link>
              )}
              <p className="mt-3 text-xs text-gray-500">
                Availability and current pricing are confirmed on the partner website. We may earn a
                commission from qualifying bookings, at no additional cost to you.
              </p>
            </div>
          </aside>
        </div>
      </article>

      <FAQSection faqs={ex.faqs} title={`${ex.title} FAQs`} />

      <section className="section-padding pt-0">
        <div className="container-wide">
          <h2 className="section-title">More Ponta Delgada options</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {excursions
              .filter((e) => e.slug !== slug)
              .slice(0, 8)
              .map((e) => (
                <Link key={e.slug} href={`/shore-excursions/${e.slug}`} className="pill">
                  {e.title}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
