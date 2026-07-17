import { subjectImages } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";

export function SpiritOfSaoMiguel() {
  const image = subjectImages["lagoa-do-fogo"];

  return (
    <section className="section-padding bg-gradient-to-b from-coastal-50 via-white to-white border-b border-coastal-100">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-eyebrow">The Azores revealed</p>
            <h2 className="section-title mt-2 max-w-xl">The Spirit of São Miguel</h2>
            <p className="mt-6 text-base leading-relaxed text-gray-700">
              São Miguel is the largest island in the Azores, built entirely from volcanoes still
              visible in its landscape: crater lakes filling old calderas, fumaroles steaming beside
              geothermal gardens, and a deep Atlantic shelf close enough to shore to bring dolphins and
              whales within sight of a day boat.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              A cruise day here could mean standing above Sete Cidades&apos; twin lakes at Vista do Rei,
              walking down towards the wild, higher waters of Lagoa do Fogo, or staying close to the
              ship in Ponta Delgada&apos;s basalt-paved historic centre, where Portuguese-Azorean
              architecture meets the harbour.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              This is Wild Atlantic Nature rather than a Mediterranean sun-lounger — the weather is
              genuinely changeable, especially at altitude, and every good day here is planned with
              that honestly in mind.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Crater lakes" },
                { label: "Atlantic whales & dolphins" },
                { label: "Historic Ponta Delgada" },
              ].map((item) => (
                <div key={item.label} className="card-feature text-center">
                  <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <ResponsiveImage image={image} role="card" imgClassName="h-full w-full object-cover" />
            <div
              className="absolute inset-0 bg-gradient-to-t from-coastal-900/30 to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
