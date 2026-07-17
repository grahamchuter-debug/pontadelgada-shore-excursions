import Link from "next/link";
import { experienceCards } from "@/data/homepage";
import { subjectImages } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";

export function ExperienceSelector() {
  return (
    <section className="section-padding bg-coastal-50 border-b border-coastal-100">
      <div className="container-wide">
        <p className="section-eyebrow">Featured experience types</p>
        <h2 className="section-title mt-2">Browse São Miguel by the day you want</h2>
        <p className="section-subtitle">
          Sete Cidades, Lagoa do Fogo, whale and dolphin watching, active trails, historic Ponta Delgada
          and Azorean flavours — with the practical detail a cruise day requires.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {experienceCards.map((card) => {
            const image = subjectImages[card.imageKey] ?? subjectImages["sete-cidades"];
            return (
              <Link
                key={card.slug}
                href={card.href}
                className="card-editorial group flex h-full flex-col overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ResponsiveImage
                    image={image}
                    role="card"
                    imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coastal-900/60 via-transparent to-transparent" aria-hidden="true" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                    {card.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{card.description}</p>
                  <span className="mt-4 text-sm font-semibold text-maple-600">{card.cta} →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
