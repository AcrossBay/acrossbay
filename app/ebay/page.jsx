import Image from "next/image";
import { getEbayLink } from "../lib/links";

export const metadata = {
  title: "eBay Deals · AcrossBay",
  description: "Curated eBay tech & lifestyle deals.",
};

export default function Page() {
  const items = [
    { title: "Retro Console", img: "/retro-console.webp", url: "https://www.ebay.co.uk/itm/1234567890" },
    { title: "LED Strip Set", img: "/led-strip.webp", url: "https://www.ebay.co.uk/itm/2345678901" },
    { title: "Linen Shirt", img: "/linen-shirt.webp", url: "https://www.ebay.co.uk/itm/3456789012" },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold">eBay · AcrossBay</h1>
      <p className="text-gray-600">Selected deals via eBay Partner Network.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="border rounded-2xl p-4 shadow-sm">
            <Image src={it.img} alt={it.title} width={800} height={600} className="rounded-xl" />
            <h2 className="mt-3 font-semibold">{it.title}</h2>
            <a
              href={getEbayLink(it.url)}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-teal-600 font-medium mt-1 inline-block"
            >
              View on eBay →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
