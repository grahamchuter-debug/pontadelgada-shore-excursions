import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PhotoHeroBand } from "@/components/PhotoHeroBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import { siteImages } from "@/lib/images";
import type { FAQ } from "@/data/types";

const path = "/things-to-do-in-ponta-delgada-from-a-cruise-ship";
const image = siteImages.hero;
const description =
  "A complete editorial guide to the best things to do in Ponta Delgada from a cruise ship — Sete Cidades, Lagoa do Fogo, whale watching, historic Ponta Delgada and realistic one-day planning.";

export const metadata = buildMetadata({
  title: "Best Things to Do in Ponta Delgada from a Cruise Ship",
  description,
  path,
  image: image.src,
  imageAlt: image.alt,
  keywords: [
    "things to do in Ponta Delgada",
    "Ponta Delgada shore excursions",
    "Ponta Delgada cruise ship day",
    "Sete Cidades from cruise port",
    "Sao Miguel cruise excursions",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Things to Do in Ponta Delgada", path },
];

const pageFaqs: FAQ[] = [
  {
    question: "What is the single best thing to do in Ponta Delgada from a cruise ship?",
    answer:
      "For most first-time visitors, a half-day Sete Cidades excursion is the most efficient way to see São Miguel's signature crater-lake view without committing your whole day ashore. Whale watching and the historic centre are strong alternatives depending on your interests and hours in port.",
  },
  {
    question: "Can I see Sete Cidades, Lagoa do Fogo and Furnas in one day?",
    answer:
      "Not comfortably. Sete Cidades and Lagoa do Fogo can be combined on a long call with a dedicated itinerary, but Furnas lies in the opposite direction and deserves its own visit. Attempting all three in a single port call usually means rushing every one of them.",
  },
  {
    question: "Is whale watching guaranteed to see whales or dolphins?",
    answer:
      "No responsible operator can guarantee a sighting. São Miguel's deep coastal waters make it one of the Azores' best-placed departure points for cetacean watching, but wildlife behaviour depends on the season, the sea and the animals themselves.",
  },
  {
    question: "Is Ponta Delgada worth exploring independently?",
    answer:
      "Yes. The historic centre is compact, close to the terminal and easy to navigate on foot. Sete Cidades, Lagoa do Fogo and Furnas are a different proposition and generally suit an organised excursion or a carefully planned private itinerary instead.",
  },
  {
    question: "How much time should I keep for returning to the ship?",
    answer:
      "Reach the terminal 60–90 minutes before all-aboard for a city day, with a larger contingency for Sete Cidades, Lagoa do Fogo or Furnas excursions, since road time and crater-rim weather can both add delay.",
  },
];

export default function ThingsToDoPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(pageFaqs),
          articleSchema({ title: "Best Things to Do in Ponta Delgada from a Cruise Ship", description, path, image: image.src }),
        ]}
      />
      <PhotoHeroBand
        image={image}
        eyebrow="Editorial guide"
        title="Best Things to Do in Ponta Delgada from a Cruise Ship"
        subtitle="Volcanic crater lakes, deep-water whales and a walkable Azorean capital — an honest guide to matching São Miguel to your hours ashore."
        compact
      />

      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          <div className="prose-body">
            <p>
              São Miguel packs a surprising range of experiences into a single Atlantic island: volcanic
              crater lakes that shift from blue to green depending on the light, a compact capital city you
              can walk from the gangway, and some of the best-placed whale-watching waters in the Azores.
              What it does not offer is unlimited time. Almost every worthwhile excursion involves either a
              road journey into the interior or a boat trip out to sea, so the real skill in planning a
              Ponta Delgada port day is matching your ambitions honestly to the hours you actually have.
            </p>
            <p>
              This guide groups São Miguel&apos;s best-known sights and activities by theme, with an honest
              look at what a single cruise call can realistically fit. For terminal logistics, walking times
              and berth information, see our{" "}
              <Link href="/ponta-delgada-cruise-port" className="font-semibold text-coastal-700 hover:underline">
                Ponta Delgada Cruise Port Guide
              </Link>
              .
            </p>
          </div>

          <h2 className="section-title text-2xl mt-12 mb-4">Sete Cidades and the Volcanic West</h2>
          <div className="prose-body">
            <p>
              Sete Cidades is São Miguel&apos;s headline sight: two lakes, popularly described as one blue
              and one green, sitting side by side inside a single vast caldera roughly 40–45 minutes west of
              Ponta Delgada. Vista do Rei, beside the abandoned Monte Palace hotel, is the best-known
              viewpoint and the one that appears on almost every Azores postcard, but the smaller Boca do
              Inferno viewpoint on the descent road offers a closer, different angle worth the short stop.
            </p>
            <p>
              Down inside the caldera itself, Sete Cidades village is a scattering of houses, a small church
              and pasture around the lake edge — a genuinely different pace from the rim above. Many
              itineraries also include a brief stop connected to one of the island&apos;s pineapple growers,
              a curiosity for passengers who associate the Azores purely with volcanic scenery and the sea;
              São Miguel&apos;s greenhouse-grown pineapples are a distinctive local product worth a look even
              on a short stop.
            </p>
            <p>
              Because the crater rim sits at real altitude, cloud and mist settle over it more often than
              over the coast, so treat a clear view as likely rather than guaranteed and consider an early
              departure if photography matters to you. Our{" "}
              <Link href="/shore-excursions/sete-cidades-island-tour" className="font-semibold text-coastal-700 hover:underline">
                Sete Cidades Island Tour by Van
              </Link>{" "}
              is the most time-efficient way to see the viewpoints on a half-day, while the{" "}
              <Link href="/shore-excursions/sete-cidades-nature-walk" className="font-semibold text-coastal-700 hover:underline">
                Sete Cidades Nature Walk
              </Link>{" "}
              goes further on foot into the crater floor for those who want more than a viewpoint stop.
            </p>
          </div>

          <h2 className="section-title text-2xl mt-12 mb-4">Lagoa do Fogo and the Island&apos;s Wild Centre</h2>
          <div className="prose-body">
            <p>
              Lagoa do Fogo sits inside the Água de Pau volcano roughly 30–40 minutes from Ponta Delgada, at
              around 575 metres above sea level — São Miguel&apos;s highest lake and, with no permanent
              village on its shore, a noticeably wilder counterpart to Sete Cidades. A roadside viewpoint on
              the crater rim gives a clear view without any walking required, while a marked trail descends
              towards the water itself for those who want to go further.
            </p>
            <p>
              The descent involves loose volcanic ground, some steps and a genuine climb back out, so it
              suits reasonably fit walkers rather than a casual stop. This crater carries a cloud-risk
              profile similar to Sete Cidades and, because it sits towards the island&apos;s centre, weather
              here can differ noticeably from a sunny morning at sea level in Ponta Delgada.
            </p>
            <p>
              Our dedicated{" "}
              <Link href="/shore-excursions/lagoa-do-fogo-hike" className="font-semibold text-coastal-700 hover:underline">
                Lagoa do Fogo Hike
              </Link>{" "}
              is built for passengers who want the trail rather than just the viewpoint, while the{" "}
              <Link href="/shore-excursions/sete-cidades-lagoa-do-fogo" className="font-semibold text-coastal-700 hover:underline">
                Sete Cidades &amp; Lagoa do Fogo combination
              </Link>{" "}
              pairs both craters into a single long excursion for calls with genuinely generous hours ashore.
            </p>
          </div>

          <h2 className="section-title text-2xl mt-12 mb-4">Historic Ponta Delgada on Foot</h2>
          <div className="prose-body">
            <p>
              Ponta Delgada&apos;s historic centre begins almost immediately beyond the Portas do Mar
              terminal, making it one of the more walkable Azorean ports. Portas da Cidade, the
              three-arched city gates on Praça Gonçalo Velho Cabral, is the natural starting point and the
              city&apos;s best-known landmark. From there, Igreja Matriz de São Sebastião anchors the square
              with a striking facade, and the surrounding lanes reveal the distinctive black-and-white
              basalt paving found throughout the old town.
            </p>
            <p>
              Forte de São Brás, a star-shaped fortification on the waterfront, once defended the harbour
              and now offers views back across the bay — check current opening hours before relying on an
              interior visit. Mercado da Graça, the city&apos;s produce and fish market, is worth a look when
              open for a genuine sense of island life beyond the main tourist streets, and the waterfront
              promenade along Avenida Infante Dom Henrique makes an easy, level route back towards the
              terminal at the end of a walk.
            </p>
            <p>
              Full terminal-to-centre walking times, berth information and shuttle details are covered in
              our{" "}
              <Link href="/ponta-delgada-cruise-port" className="font-semibold text-coastal-700 hover:underline">
                Ponta Delgada Cruise Port Guide
              </Link>
              .
            </p>
          </div>

          <h2 className="section-title text-2xl mt-12 mb-4">Azorean Food and Cooking Experiences</h2>
          <div className="prose-body">
            <p>
              Azorean food is reason enough to build in some independent or guided eating time. Local
              specialities include queijo (island cheese), bolo lêvedo (a griddle-cooked muffin bread), fresh
              fish and Azorean tea — São Miguel is home to Europe&apos;s only commercial tea plantations, a
              distinctive local industry worth knowing about even outside a dedicated tour itinerary.
            </p>
            <p>
              Our{" "}
              <Link href="/shore-excursions/azorean-flavours-food-walk" className="font-semibold text-coastal-700 hover:underline">
                Azorean Flavours Food Walk
              </Link>{" "}
              introduces several of these specialities on foot around the historic centre, while the{" "}
              <Link href="/shore-excursions/azorean-cooking-experience" className="font-semibold text-coastal-700 hover:underline">
                Azorean Cooking Experience
              </Link>{" "}
              goes further with hands-on preparation for passengers who want to do more than taste.
            </p>
          </div>

          <h2 className="section-title text-2xl mt-12 mb-4">Whales, Dolphins and the Southern Coast</h2>
          <div className="prose-body">
            <p>
              São Miguel&apos;s position above deep coastal water makes Ponta Delgada one of the
              best-placed departure points in the Azores for whale and dolphin watching, with trips leaving
              directly from the marina close to the cruise terminal. Sightings depend on season, sea state
              and the animals themselves, and no responsible operator can promise a specific encounter —
              treat a good sighting as likely on a well-run trip rather than certain on any given day.
            </p>
            <p>
              Sea conditions also affect comfort, so passengers prone to seasickness should take precautions
              in advance, and it is worth asking your operator about its policy for rough-sea cancellations
              before booking, particularly on a call with limited flexibility. Choose between our{" "}
              <Link href="/shore-excursions/whale-watching-catamaran" className="font-semibold text-coastal-700 hover:underline">
                Whale Watching Catamaran
              </Link>{" "}
              for a steadier, more social boat, the{" "}
              <Link href="/shore-excursions/whale-watching-speedboat" className="font-semibold text-coastal-700 hover:underline">
                Whale Watching Speedboat
              </Link>{" "}
              for a faster, more exposed ride, or a{" "}
              <Link href="/shore-excursions/private-whale-watching" className="font-semibold text-coastal-700 hover:underline">
                Private Whale Watching
              </Link>{" "}
              charter for your own group.
            </p>
            <p>
              Along the southern coast, boat trips beyond the immediate harbour reveal sea caves, cliffs and
              a different perspective on São Miguel&apos;s volcanic edges. Our{" "}
              <Link href="/shore-excursions/southern-coast-boat-trip" className="font-semibold text-coastal-700 hover:underline">
                Southern Coast Boat Trip
              </Link>{" "}
              is built around this stretch of coastline rather than open-water wildlife watching.
            </p>
          </div>

          <h2 className="section-title text-2xl mt-12 mb-4">Active Ways to Explore: Hiking, E-Bike and Private Touring</h2>
          <div className="prose-body">
            <p>
              Passengers who want to do more than look from a car park have several genuinely active
              options. The{" "}
              <Link href="/shore-excursions/sete-cidades-nature-walk" className="font-semibold text-coastal-700 hover:underline">
                Sete Cidades Nature Walk
              </Link>{" "}
              and{" "}
              <Link href="/shore-excursions/lagoa-do-fogo-hike" className="font-semibold text-coastal-700 hover:underline">
                Lagoa do Fogo Hike
              </Link>{" "}
              both involve real walking on volcanic terrain, while a{" "}
              <Link href="/shore-excursions/sete-cidades-e-bike" className="font-semibold text-coastal-700 hover:underline">
                São Miguel e-bike tour
              </Link>{" "}
              covers more ground along the coast and countryside with motor assistance absorbing most of the
              climbing effort — a useful middle option between a coach seat and a full hike.
            </p>
            <p>
              For parties who want flexible timing, a dedicated vehicle and routing shaped around their own
              pace, weather and the ship&apos;s schedule, a{" "}
              <Link href="/shore-excursions/private-sete-cidades" className="font-semibold text-coastal-700 hover:underline">
                private Sete Cidades tour
              </Link>{" "}
              offers more control than a fixed-departure group excursion, at a premium over the standard
              price.
            </p>
          </div>

          <h2 className="section-title text-2xl mt-12 mb-4">Furnas, Geothermal Landscapes and the Wider Island</h2>
          <div className="prose-body">
            <p>
              Furnas Valley, on the eastern side of São Miguel roughly 45 minutes from Ponta Delgada, is
              worth knowing about as part of the island&apos;s wider appeal even where it is not the focus of
              your specific cruise-day booking. Bubbling fumaroles, geothermal lakeside scenery and
              botanical gardens such as Terra Nostra Park make it feel entirely different from the west-side
              crater lakes — the traditional Azorean stew cozido is even slow-cooked underground there using
              geothermal heat.
            </p>
            <p>
              The distance is real, though, and Furnas lies in the opposite direction from Sete Cidades and
              Lagoa do Fogo, so a same-day combination with either is not realistic on a normal call.
              Whether a Furnas excursion is available and how long it runs depends on your specific sailing
              and season — check current availability and duration directly with your cruise line or
              excursion provider rather than assuming it will feature on every itinerary.
            </p>
            <p>
              São Miguel&apos;s tea plantations are a related point of wider island interest rather than a
              guaranteed stop on any particular tour: the island is home to Europe&apos;s only commercial
              tea estates, a distinctive piece of Azorean agricultural history worth knowing about even where
              a visit is not explicitly included in your booking.
            </p>
          </div>

          <h2 className="section-title text-2xl mt-12 mb-4">What Can You Realistically See in One Day?</h2>
          <div className="prose-body">
            <p>
              How much of this you can realistically fit into a single port call depends far more on your
              usable hours ashore than on ambition. Traffic on the roads to the interior, changeable
              crater-rim weather, sea conditions for boat trips, your ship&apos;s meeting time and its
              all-aboard deadline all eat into the headline hours printed on your cruise itinerary.
            </p>

            <h3>Short call — roughly 4–5 hours ashore</h3>
            <p>
              Stay close to Ponta Delgada. The historic centre on foot, or a half-day Sete Cidades tour by
              van, are the most time-efficient options — both leave a workable margin before all-aboard
              without gambling most of your day on road time. A short whale-watching trip can also work well
              if it departs promptly from the marina near the terminal.
            </p>

            <h3>Typical full call — roughly 6–8 hours ashore</h3>
            <p>
              Most cruise passengers fall into this bracket. A single landscape excursion — Sete Cidades,
              Lagoa do Fogo, or a whale-watching trip — combined with some independent time in the historic
              centre generally works comfortably. An eight-hour call is usually enough for one dedicated
              excursion plus a shorter city stop, but is rarely enough for two separate landscape excursions
              without a tight, higher-risk schedule.
            </p>

            <h3>Long call — 9 hours or more ashore</h3>
            <p>
              A full-day combination of Sete Cidades and Lagoa do Fogo, or a dedicated Furnas excursion,
              becomes realistic — but only with an honest calculation of usable hours after disembarkation
              and a conservative return buffer. Even on a long call, treat Furnas as an either/or choice
              against the west-side craters rather than something to add on top of them.
            </p>

            <p>
              Whatever your call length, build in a proper margin before all-aboard: aim to reach the
              terminal 60–90 minutes early for a city day, with a larger contingency for any excursion into
              the interior. Check the specific ships expected during your visit on our{" "}
              <Link href="/ponta-delgada-cruise-ship-schedule" className="font-semibold text-coastal-700 hover:underline">
                Ponta Delgada Cruise Ship Schedule
              </Link>
              , and see our{" "}
              <Link href="/faq" className="font-semibold text-coastal-700 hover:underline">
                FAQs
              </Link>{" "}
              for more on timing, weather and mobility questions.
            </p>
          </div>

          <div className="mt-12">
            <FAQSection faqs={pageFaqs} title="Things to Do in Ponta Delgada — FAQs" />
          </div>
          <div className="mt-12">
            <PlanningLinks />
          </div>
        </div>
      </section>
    </>
  );
}
