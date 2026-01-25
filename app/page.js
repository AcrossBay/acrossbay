import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">
          Strumenti e prodotti che richiedono conoscenza, non acquisto impulsivo.
        </h1>

        <p className="mt-6 max-w-3xl text-base md:text-lg text-gray-600">
          AcrossBay seleziona prodotti di alta qualità legati al benessere, alla cura personale e alla vita
          quotidiana. Pochi elementi, scelti e spiegati.
        </p>

        <div className="mt-8 flex gap-3">
          <Link
            href="/health"
            className="inline-flex items-center rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
          >
            Scopri la selezione
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
          >
            Approccio
          </Link>
        </div>
      </section>

      {/* 3 CARDS */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* CARD 1 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="h-44 overflow-hidden rounded-xl bg-gray-100">
              <img
                src="/images/recovery-care.jpg"
                alt="Recupero e cura personale"
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              Recupero & cura personale
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Strumenti seri, spiegati bene. Non gadget.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="h-44 overflow-hidden rounded-xl bg-gray-100">
              <img
                src="/images/grounding-decompression.jpg"
                alt="Grounding e decompressione"
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              Grounding & decompressione
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Oggetti di presenza: gesto lento, materiali essenziali.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="h-44 overflow-hidden rounded-xl bg-gray-100">
              <img
                src="/images/herbal-selection.jpg"
                alt="Linee erboristiche selezionate"
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              Linee erboristiche selezionate
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Filiera chiara, uso consapevole. Zero “miracoli”.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
