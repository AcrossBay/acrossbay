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
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Strumenti e prodotti che richiedono conoscenza, non acquisto impulsivo.
        </h1>
        <p className="mt-4 text-gray-600">
          AcrossBay seleziona prodotti di alta qualità legati al benessere, alla cura personale e alla vita quotidiana. Pochi elementi, scelti e spiegati.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/health"
            className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-white font-medium"
          >
            Scopri la selezione
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-gray-800 font-medium"
          >
            Approccio
          </Link>
        </div>
      </section>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <Link key={c.title} href="/health" className="block rounded-2xl border border-gray-200 overflow-hidden">
            <div className="aspect-[4/3] bg-gray-100">
              {/* img classica per non complicare */}
              <img src={c.img} alt={c.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-4">
              <div className="font-semibold">{c.title}</div>
              <div className="mt-1 text-sm text-gray-600">{c.desc}</div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
