import Link from "next/link";
import { subjectImages } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { WOW_COLLECTION_PATH } from "@/data/wow-collection";
import { SIGNATURE_EXPERIENCE_PATH } from "@/data/signature-experience";

export function WowCollectionFeature() {
  const image = subjectImages["lagoa-do-fogo"];

  return (
    <section className="section-padding bg-coastal-900 text-white">
      <div className="container-wide">
        <div className="card-signature grid gap-0 overflow-hidden border-white/10 bg-white/5 lg:grid-cols-2">
          <div className="relative min-h-[280px] lg:min-h-full">
            <ResponsiveImage
              image={image}
              role="card"
              className="absolute inset-0 block h-full w-full"
              imgClassName="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-coastal-900/80 via-coastal-900/40 to-transparent lg:bg-gradient-to-t lg:from-coastal-900/70 lg:via-transparent lg:to-transparent"
              aria-hidden="true"
            />
            <span className="absolute left-6 top-6 inline-flex items-center gap-1.5 rounded-full border border-amber-400/50 bg-amber-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-amber-300">
              ✨ In preparation
            </span>
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
            <p className="section-eyebrow text-coastal-200">Future São Miguel exclusives</p>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl mt-1">
              The Wow Collection
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/85 italic">
              &ldquo;A future collection of distinctive small-group São Miguel days, developed around
              local expertise, thoughtful pacing and the realities of a cruise call.&rdquo;
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              The collection is still in preparation. Proposed experiences include an Exclusive Sete
              Cidades Day, a carefully managed Lagoa do Fogo hiking experience and private São Miguel
              routes. None should be treated as currently bookable until partners, access and
              sailing-specific logistics are confirmed.
            </p>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {[
                { text: "Future Exclusive Sete Cidades experience" },
                { text: "Future Lagoa do Fogo hiking concept" },
                { text: "Future private São Miguel routes" },
                { text: "Cruise-first timing and return buffers" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-2 text-sm text-white/80">
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={WOW_COLLECTION_PATH} className="btn-accent">
                Explore The Wow Collection →
              </Link>
              <Link href={SIGNATURE_EXPERIENCE_PATH} className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20">
                Signature São Miguel Discovery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
