"use client";

import Link from "next/link";

export default function HomePage() {
  const cards = [
    {
      title: "Recupero & cura personale",
      desc: "Strumenti seri, spiegati bene. Nessun gadget.",
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
    <main className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-semibold mb-4 text-center">
        Strumenti e prodotti che richiedono conoscenza, non acquisto impulsivo.
      </h1>

      <p className="text-center text-gray-600 mb-10">
        AcrossBay seleziona prodotti di alta qualità legati al benessere e alla
        vita quotidiana. Pochi elementi, scelti e spiegati.
      </p>

      <div className="flex justify-center gap-4 mb-16">
        <Link
          href="/selezione"
          className="px-6 py-3 rounded-full bg-black text-white"
        >
          Scopri la selezione
        </Link>
        <Link
          href="/about"
          className="px-6 py-3 rounded-full border"
        >
          Approccio
        </Link>
      </div>

      <section className="grid md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.title}
            className="border rounded-2xl overflow-hidden bg-white"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium mb-1">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
