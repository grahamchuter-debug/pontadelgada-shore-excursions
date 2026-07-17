import Link from "next/link";

export function HonestAdvice() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide max-w-4xl">
        <p className="section-eyebrow">Honest advice</p>
        <h2 className="section-title mt-2">Do You Need a Shore Excursion in Ponta Delgada?</h2>
        <p className="section-subtitle">
          The honest answer: you can enjoy Ponta Delgada independently. An excursion becomes worthwhile
          when you want to reach São Miguel&apos;s crater lakes, wildlife-watching waters or wilder landscapes.
        </p>

        <div className="mt-10 space-y-8">
          <div className="card-feature">
            <h3 className="font-display text-xl font-bold text-gray-900">
              You can explore Ponta Delgada independently — and many passengers do
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Ponta Delgada&apos;s historic centre is compact and close to the port, making an independent
              day realistic for most passengers:
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-coastal-600">✓</span> Portas da Cidade and the main square
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coastal-600">✓</span> Igreja Matriz de São Sebastião
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coastal-600">✓</span> Forte de São Brás and the waterfront
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coastal-600">✓</span> Local market and historic-centre restaurants
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Set a 60–90 minute return buffer and confirm your all-aboard time. The ship will not wait.
            </p>
          </div>

          <div className="card-accent">
            <h3 className="font-display text-xl font-bold text-gray-900">
              The wider island needs more planning
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              São Miguel&apos;s great landscape sights are too far from the terminal for casual exploration.
              Organised transport and disciplined timing matter for:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span>
                  <strong>Sete Cidades</strong> — road time to the crater and a genuinely high cloud-risk profile
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span>
                  <strong>Lagoa do Fogo</strong> — altitude, changeable weather and, for the trail, real walking terrain
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span>
                  <strong>Whale and dolphin watching</strong> — marina departure timing and sea-condition honesty
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span>
                  <strong>Furnas</strong> — the longest drive on the island, best kept for a genuinely long call
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/compare/sete-cidades-or-lagoa-do-fogo" className="btn-secondary text-sm">
            Sete Cidades or Lagoa do Fogo?
          </Link>
          <Link href="/compare/can-you-explore-ponta-delgada-independently" className="btn-secondary text-sm">
            Explore independently?
          </Link>
          <Link href="/guides/independent-ponta-delgada-guide" className="btn-secondary text-sm">
            Independent Ponta Delgada guide
          </Link>
        </div>
      </div>
    </section>
  );
}
