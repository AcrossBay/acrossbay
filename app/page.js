"use client";

import Link from "next/link";

export default function HomePage() {
  const cards = [
    {
      title: "Recupero & cura personale",
      desc: "Strumenti seri, spiegati bene. Non gadget.",
      img: "/images/recovery-care.jpg",
    },
    {
      title: "Grounding & decompressione",
      desc: "Oggetti di presenza: gesto lento, materiali essenziali.",
      img: "/images/grounding-decompression.jpg",
    },
    {
      title: "Linee erboristiche selezionate",
      desc: "Filiera chiara, uso consapevole. Zero “miracoli”.",
      img: "/images/herbal-selection.jpg",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      {/* HERO */}
      <section className="text-center">
        <h1 className="mx-auto max-w-3xl text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
          Strumenti e prodotti che richiedono conoscenza, non acquisto impulsivo.
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-gray-600">
          AcrossBay seleziona prodotti di alta qualità legati al benessere,
          alla cura personale e alla vita quotidiana.
          Pochi elementi, scelti e spiegati.
        </p>

        <div className="mt-7 flex items-center justify-center gap-3">
          <Link
            href="/health"
            className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
          >
            Scopri la selezione
          </Link>

          <Link
            href="/about"
            className="rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Approccio
          </Link>
        </div>
      </section>

      {/* CARDS – SOLO VETRINA */}
      <section className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
        {cards.map((c) => (
          <article
            key={c.title}
            className="rounded-2xl border border-gray-200 bg-white p-5"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-gray-100">
              <img
                src={c.img}
                alt={c.title}
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              {c.title}
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              {c.desc}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
