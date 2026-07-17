import Link from "next/link";

const SAO_MIGUEL_LINKS = [
  {
    title: "Sete Cidades or Lagoa do Fogo?",
    description:
      "Compare São Miguel's two great crater lakes — road time, walking demand and honest cloud-risk odds.",
    href: "/compare/sete-cidades-or-lagoa-do-fogo",
  },
  {
    title: "Is the Lagoa do Fogo hike worth it?",
    description: "Honest guidance on the trail, fitness level and who should stick to the viewpoint.",
    href: "/compare/is-lagoa-do-fogo-hike-worth-it",
  },
  {
    title: "Independent Ponta Delgada guide",
    description: "Walk the historic centre, Portas da Cidade and waterfront with a realistic ship-return plan.",
    href: "/guides/independent-ponta-delgada-guide",
  },
  {
    title: "Compare São Miguel experiences",
    description: "Choose between Sete Cidades, Lagoa do Fogo, whale watching and Ponta Delgada with candid trade-offs.",
    href: "/compare",
  },
  {
    title: "Private or group tour",
    description: "Compare private vs group pacing and short-call realism before booking a São Miguel day.",
    href: "/compare/private-tour-vs-group-tour-sao-miguel",
  },
  {
    title: "Ponta Delgada cruise ship schedule",
    description: "Check your published port hours before committing to Sete Cidades, Lagoa do Fogo or Furnas.",
    href: "/ponta-delgada-cruise-ship-schedule",
  },
];

export function SaoMiguelLinks() {
  return (
    <section className="section-padding bg-coastal-50 border-t border-coastal-100">
      <div className="container-wide">
        <p className="section-eyebrow">Keep planning</p>
        <h2 className="section-title mt-2">Your São Miguel planning hub</h2>
        <p className="section-subtitle">
          Use these guides and comparisons to shape a port day that matches your ship hours, energy and
          curiosity — whether you stay in Ponta Delgada or travel across the island.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SAO_MIGUEL_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="card-feature group">
              <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                {link.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{link.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/guides" className="btn-secondary text-sm">
            All Ponta Delgada planning guides
          </Link>
        </div>
      </div>
    </section>
  );
}
