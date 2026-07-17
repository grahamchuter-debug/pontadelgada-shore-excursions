"use client";

import Link from "next/link";
import { experienceCards } from "@/data/homepage";
import { subjectImages } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";

const WIDE_SLUGS = new Set(["sete-cidades-and-the-west", "lagoa-do-fogo-and-central-sao-miguel"]);

export function ChooseYourSaoMiguel() {
  return (
    <section id="choose" className="section-padding bg-white">
      <div className="container-wide">
        <p className="section-eyebrow">Choose Your São Miguel</p>
        <h2 className="section-title mt-2 max-w-3xl">How Would You Like to Experience São Miguel?</h2>
        <p className="section-subtitle">
          From crater lakes and Atlantic wildlife to active trails, the historic capital and Azorean
          flavours, choose the path that best fits your interests and time ashore.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {experienceCards.map((card) => {
            const image = subjectImages[card.imageKey] ?? subjectImages["sete-cidades"];
            const wide = WIDE_SLUGS.has(card.slug);
            return (
              <Link
                key={card.slug}
                href={card.href}
                className={`card-editorial group flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                  wide ? "md:col-span-2" : ""
                }`}
              >
                <div className={`relative overflow-hidden ${wide ? "aspect-[21/9]" : "aspect-[16/10]"}`}>
                  <ResponsiveImage
                    image={image}
                    role="card"
                    imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-coastal-900/80 via-coastal-900/25 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                    <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <p className="text-base leading-relaxed text-gray-600 italic">&ldquo;{card.description}&rdquo;</p>
                  <span className="mt-6 text-sm font-semibold tracking-wide text-maple-600 group-hover:text-maple-500">
                    {card.cta} →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
