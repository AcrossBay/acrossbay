"use client";

import Link from "next/link";

export default function HomePageEn() {
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
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Products that require understanding, not impulse buying.
        </h1>
        <p className="mt-4 text-gray-600">
          AcrossBay curates high-quality items for wellness and everyday life. Few elements, chosen and explained.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/en/health"
            className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-white font-medium"
          >
            Explore selection
          </Link>

          <Link
            href="/en/about"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-gray-800 font-medium"
          >
            Approach
          </Link>
        </div>
      </section>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <Link key={c.title} href="/en/health" className="block rounded-2xl border border-gray-200 overflow-hidden">
            <div className="aspect-[4/3] bg-gray-100">
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
