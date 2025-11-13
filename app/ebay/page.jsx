"use client";
import Image from "next/image";
import { getEbayLink } from "../lib/links";

function ItemCard({ title, img, href }) {
  return (
    <div className="border rounded-2xl p-4 shadow-sm">
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <h2 className="mt-3 font-semibold">{title}</h2>
      <a href={href} target="_blank" rel="nofollow noopener noreferrer" className="text-teal-600 font-medium mt-1 inline-block">
        View on eBay →
      </a>
    </div>
  );
}

export default function Page() {
  const items = [
    { title: "Retro Console", img: "/retro-console.webp", url: "https://www.ebay.co.uk/itm/155555555555" },
    { title: "LED Strip Set", img: "/led-strip.webp", url: "https://www.ebay.co.uk/itm/166666666666" },
    { title: "Linen Shirt", img: "/linen-shirt.webp", url: "https://www.ebay.co.uk/itm/177777777777" },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold">eBay · AcrossBay</h1>
      <p className="text-gray-600">Selected deals via eBay Partner Network.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <ItemCard key={it.title} title={it.title} img={it.img} href={getEbayLink(it.url)} />
        ))}
      </div>
    </main>
  );
}
