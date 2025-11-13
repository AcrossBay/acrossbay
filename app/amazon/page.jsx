import Image from "next/image";
import { getAmazonLink } from "../lib/links";

export const metadata = {
  title: "Amazon Finds · AcrossBay",
  description: "Curated tech & lifestyle picks from Amazon.",
};

export default function Page() {
  const items = [
    { title: "Smart Lamp Minimal", img: "/lamp-smart.webp", asin: "B08BBBBBBB" },
    { title: "Mini Projector 1080p", img: "/projector-mini.webp", asin: "B09CCCCCCC" },
    { title: "Desk Organizer Set", img: "/desk-organizer.webp", asin: "B07DDDDDDD" },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold">Amazon · AcrossBay</h1>
      <p className="text-gray-600">Our minimal, accessible picks from Amazon.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="border rounded-2xl p-4 shadow-sm">
            <Image src={it.img} alt={it.title} width={800} height={600} className="rounded-xl" />
            <h2 className="mt-3 font-semibold">{it.title}</h2>
            <a
              href={getAmazonLink(it.asin)}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-teal-600 font-medium mt-1 inline-block"
            >
              View on Amazon →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
