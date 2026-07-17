import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { ChooseYourSaoMiguel } from "@/components/ChooseYourSaoMiguel";
import { SpiritOfSaoMiguel } from "@/components/SpiritOfSaoMiguel";
import { WowCollectionFeature } from "@/components/WowCollectionFeature";
import { SignatureSaoMiguelFeature } from "@/components/SignatureSaoMiguelFeature";
import { EditorsCollection } from "@/components/EditorsCollection";
import { HonestAdvice } from "@/components/HonestAdvice";
import { ExperienceSelector } from "@/components/ExperienceSelector";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";
import {
  coreSections,
  getHomepageFaqs,
  homepageSubtitle,
  homepageTagline,
  weatherPlanningNotes,
  trustMessages,
} from "@/data/homepage";
import { cruiseTrustLine } from "@/data/cruise-positioning";
import { getFeaturedExcursions, getExcursionBySlug, excursions } from "@/data/excursions";
import { siteImages, getExcursionImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { PreloadImage } from "@/components/PreloadImage";
import { SaoMiguelLinks } from "@/components/SaoMiguelLinks";
import { CruiseHeroTrust } from "@/components/CruiseHeroTrust";
import { YourDayAshore } from "@/components/YourDayAshore";
import { EditorialBadge } from "@/components/EditorialBadge";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Ponta Delgada Shore Excursions | São Miguel Tours",
  description: SITE.description,
  path: "/",
  keywords: [
    "Ponta Delgada shore excursions",
    "Ponta Delgada cruise excursions",
    "São Miguel shore excursions",
    "Sao Miguel shore excursions",
    "Azores shore excursions",
    "Sete Cidades shore excursion",
    "Ponta Delgada whale watching",
  ],
});

const SITE_DESCRIPTION = SITE.description;

const COMPARISON_SLUGS = [
  "sete-cidades-island-tour",
  "sete-cidades-lagoa-do-fogo",
  "whale-watching-catamaran",
  "azorean-flavours-food-walk",
  "lagoa-do-fogo-hike",
  "sete-cidades-e-bike",
  "private-sete-cidades",
] as const;

export default function HomePage() {
  const faqs = getHomepageFaqs();
  const featured = getFeaturedExcursions();
  const editorsChoice = getExcursionBySlug("sete-cidades-island-tour");
  const comparisonRows = COMPARISON_SLUGS.map((slug) => getExcursionBySlug(slug)).filter(Boolean);
  const listing = excursions.slice(0, 8);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          faqSchema(faqs),
          travelGuideSchema({
            title: "Ponta Delgada Shore Excursions",
            description: SITE_DESCRIPTION,
            path: "/",
          }),
        ]}
      />

      <PreloadImage base={siteImages.hero.base} role="hero" />

      <section className="home-hero">
        <ResponsiveImage
          image={siteImages.hero}
          role="hero"
          priority
          className="absolute inset-0 block h-full w-full"
          imgClassName="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
          <p className="section-eyebrow mb-2 text-coastal-100 animate-fade-up">
            São Miguel for Cruise Passengers
          </p>
          <h1 className="home-hero-heading animate-fade-up-delay">{homepageTagline}</h1>
          <CruiseHeroTrust />
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg animate-fade-up-delay">
            {homepageSubtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up-delay-2">
            <Link href="/shore-excursions#excursions" className="btn-accent">
              Explore Shore Excursions
            </Link>
            <Link
              href="/things-to-do-in-ponta-delgada-from-a-cruise-ship"
              className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              Plan Your Day in São Miguel
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/80 animate-fade-up-delay-2">{cruiseTrustLine}</p>
        </div>
      </section>

      <YourDayAshore />
      <ChooseYourSaoMiguel />

      {editorsChoice ? (
        <section className="section-padding bg-coastal-50 border-y border-coastal-100">
          <div className="container-wide grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="section-eyebrow">Editor&apos;s Choice</p>
              <h2 className="section-title mt-2">Our Pick for a Classic Azores Day</h2>
              <div className="mt-4">
                <EditorialBadge badge="editors-choice" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-gray-900">
                {editorsChoice.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-gray-700">{editorsChoice.overview}</p>
              <div className="mt-6 card-feature">
                <h4 className="font-display text-lg font-semibold text-gray-900">Why we chose it</h4>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li>Visits São Miguel&apos;s most recognisable volcanic landscape</li>
                  <li>Half-day format can suit a wider range of cruise calls</li>
                  <li>
                    Combines crater views with an introduction to the island&apos;s western region
                  </li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  Always compare the excursion duration and meeting time with your cruise line&apos;s
                  all-aboard time.
                </p>
              </div>
              <Link
                href={`/shore-excursions/${editorsChoice.slug}`}
                className="btn-accent mt-6 inline-flex"
              >
                View Editor&apos;s Choice
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <ResponsiveImage
                image={getExcursionImage(editorsChoice.slug)}
                role="card"
                imgClassName="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
      ) : null}

      <section id="excursions" className="section-padding bg-coastal-900 text-white">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="section-eyebrow text-coastal-200">When you&apos;re ready</p>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
              Featured Ponta Delgada shore excursions
            </h2>
            <p className="mt-4 text-coastal-100/80">
              Experiences selected with cruise schedules in mind — compare durations, activity level
              and island region before you choose.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(featured.length ? featured : listing).map((ex) => (
              <Link
                key={ex.slug}
                href={`/shore-excursions/${ex.slug}`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10"
              >
                <div className="relative aspect-[16/10]">
                  <ResponsiveImage
                    image={getExcursionImage(ex.slug)}
                    role="card"
                    imgClassName="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  {ex.badge ? (
                    <div className="mb-2">
                      <EditorialBadge badge={ex.badge} />
                    </div>
                  ) : null}
                  <h3 className="font-display text-xl font-semibold">{ex.title}</h3>
                  <p className="mt-2 text-sm text-coastal-100/75">{ex.duration} · {ex.pace}</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/80 line-clamp-3">
                    {ex.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/shore-excursions" className="btn-secondary border-white/30 bg-white/10 text-white">
              View all shore excursions
            </Link>
          </div>
        </div>
      </section>

      <EditorsCollection />

      <section className="section-padding">
        <div className="container-wide">
          <p className="section-eyebrow">Compare</p>
          <h2 className="section-title mt-2">Which Ponta Delgada shore excursion is right for you?</h2>
          <p className="section-subtitle">
            A practical decision table for the most useful cruise-day options — use verified
            durations and activity levels, then check live partner details before booking.
          </p>

          <div className="mt-8 hidden overflow-x-auto lg:block">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-coastal-200 text-coastal-800">
                  <th className="py-3 pr-4 font-semibold">Excursion</th>
                  <th className="py-3 pr-4 font-semibold">Best for</th>
                  <th className="py-3 pr-4 font-semibold">Duration</th>
                  <th className="py-3 pr-4 font-semibold">Activity</th>
                  <th className="py-3 pr-4 font-semibold">Region</th>
                  <th className="py-3 font-semibold">Shared / private</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((ex) =>
                  ex ? (
                    <tr key={ex.slug} className="border-b border-gray-100 align-top">
                      <td className="py-4 pr-4">
                        <Link
                          href={`/shore-excursions/${ex.slug}`}
                          className="font-semibold text-coastal-800 hover:text-maple-600"
                        >
                          {ex.title}
                        </Link>
                      </td>
                      <td className="py-4 pr-4 text-gray-700">{ex.bestFor}</td>
                      <td className="py-4 pr-4 text-gray-700">{ex.duration}</td>
                      <td className="py-4 pr-4 text-gray-700">{ex.activityLevel ?? ex.pace}</td>
                      <td className="py-4 pr-4 text-gray-700">
                        {ex.locations?.slice(0, 2).join(", ") ?? "São Miguel"}
                      </td>
                      <td className="py-4 text-gray-700">{ex.groupType ?? "Shared"}</td>
                    </tr>
                  ) : null,
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-4 lg:hidden">
            {comparisonRows.map((ex) =>
              ex ? (
                <Link
                  key={ex.slug}
                  href={`/shore-excursions/${ex.slug}`}
                  className="card-feature block"
                >
                  <h3 className="font-display text-lg font-semibold text-gray-900">{ex.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{ex.bestFor}</p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-wide text-coastal-700">
                    {ex.duration} · {ex.activityLevel ?? ex.pace} · {ex.groupType ?? "Shared"}
                  </p>
                </Link>
              ) : null,
            )}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-accent">
              <h3 className="font-display text-lg font-semibold">Choose Sete Cidades by van if</h3>
              <p className="mt-2 text-sm text-gray-700">
                You want São Miguel&apos;s signature scenery in a shorter format.
              </p>
            </div>
            <div className="card-accent">
              <h3 className="font-display text-lg font-semibold">Choose the full-day exploration if</h3>
              <p className="mt-2 text-sm text-gray-700">
                Your ship has a long call and you want two major volcanic landscapes.
              </p>
            </div>
            <div className="card-accent">
              <h3 className="font-display text-lg font-semibold">Choose whale watching if</h3>
              <p className="mt-2 text-sm text-gray-700">
                Your priority is the Atlantic and marine wildlife rather than inland sightseeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-coastal-50 border-y border-coastal-100">
        <div className="container-wide">
          <p className="section-eyebrow">Practical planning</p>
          <h2 className="section-title mt-2">Planning around Azores weather</h2>
          <p className="section-subtitle">
            São Miguel&apos;s weather can change quickly, and visibility at high volcanic viewpoints
            may differ from conditions in Ponta Delgada. Marine excursions are also subject to
            Atlantic conditions.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {weatherPlanningNotes.map((note) => (
              <div key={note.title} className="card-feature">
                <h3 className="font-display text-lg font-semibold text-gray-900">{note.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">{note.body}</p>
              </div>
            ))}
          </div>
          <ul className="mt-8 grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
            <li>Bring a light waterproof layer</li>
            <li>Wear suitable footwear for viewpoints and boats</li>
            <li>Use sun protection even on cloudy days</li>
            <li>Expect cooler air at exposed crater rims</li>
            <li>Check provider messages before departure</li>
            <li>Do not rely only on the weather visible from the ship</li>
          </ul>
        </div>
      </section>

      <SpiritOfSaoMiguel />
      <SignatureSaoMiguelFeature />
      <WowCollectionFeature />
      <HonestAdvice />
      <ExperienceSelector />

      <section className="section-padding">
        <div className="container-wide">
          <p className="section-eyebrow">Plan your port day</p>
          <h2 className="section-title mt-2">Useful Ponta Delgada planning guides</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreSections.slice(0, 8).map((section) => (
              <Link key={section.slug} href={section.href} className="nav-card">
                <p className="text-xs font-semibold uppercase tracking-wider text-coastal-600">
                  {section.number}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold">{section.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{section.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-maple-600">
                  {section.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-coastal-900 text-white">
        <div className="container-wide flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="section-eyebrow text-coastal-200">Ship arrivals</p>
            <h2 className="mt-2 font-display text-3xl font-semibold">
              Ponta Delgada cruise ship schedule
            </h2>
            <p className="mt-4 text-coastal-100/80">
              Check published arrivals before committing to an eight-hour island day. Schedule data
              is added only when verified — we do not invent cruise calls.
            </p>
          </div>
          <Link
            href="/ponta-delgada-cruise-ship-schedule"
            className="btn-accent shrink-0"
          >
            View cruise arrivals
          </Link>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Ponta Delgada shore excursion FAQs" />
      <SaoMiguelLinks />

      <section className="section-padding pt-0">
        <div className="container-wide flex flex-wrap gap-3">
          {trustMessages.map((msg) => (
            <span key={msg} className="pill">
              {msg}
            </span>
          ))}
          <span className="pill">Secure booking through established tour partners</span>
        </div>
        <p className="container-wide mt-6 max-w-3xl text-sm text-gray-600">
          Some excursion links lead to established booking partners. We may earn a commission if you
          make a booking, at no additional cost to you.{" "}
          <Link href="/affiliate-disclosure" className="font-semibold text-coastal-800">
            Affiliate disclosure
          </Link>
          .
        </p>
      </section>
    </>
  );
}
