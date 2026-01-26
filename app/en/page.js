"use client";

import Link from "next/link";

export default function HomePage() {
  const cards = [
    {
      title: "Recovery & self-care",
      desc: "Serious tools, clearly explained. No gadgets.",
      img: "/images/recovery-care.jpg",
    },
    {
      title: "Grounding & decompression",
      desc: "Presence objects: materials, calm gestures, meaning.",
      img: "/images/grounding-decompression.jpg",
    },
    {
      title: "Selected herbal lines",
      desc: "Supply chain, logic, conscious use. No “miracles”.",
      img: "/images/herbal-selection.jpg",
    },
  ];

  return (
    <main className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-semibold mb-4 text-center">
        Products that require understanding, not impulse buying.
      </h1>

      <p className="text-center text-gray-600 mb-10">
        AcrossBay curates high-quality items for wellness and everyday life.
        Few elements, chosen and explained.
      </p>

      <div className="flex justify-center gap-4 mb-16">
        <Link
          href="/en/selection"
          className="px-6 py-3 rounded-full bg-black text-white"
        >
          Explore selection
        </Link>
        <Link
          href="/en/about"
          className="px-6 py-3 rounded-full border"
        >
          Approach
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
