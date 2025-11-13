import Image from "next/image";
import { getTikTokLink } from "../lib/links";

export const metadata = {
  title: "TikTok Picks · AcrossBay",
  description: "Trending finds from TikTok Shop and creators.",
};

export default function Page() {
  const items = [
    { title: "Ceramic Diffuser", img: "/diffuser.jpg", url: "https://www.tiktok.com/@shop/product/12345" },
    { title: "Compact Projector", img: "/projector.jpg", url: "https://www.tiktok.com/@shop/product/67890" },
    { title: "Smart Console", img: "/retro-console.webp", url: "https://www.tiktok.com/@shop/product/24680" },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold">TikTok · AcrossBay</h1>
      <p className="text-gray-600">Trending products, creator-friendly.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="border rounded-2xl p-4 shadow-sm">
            <Image src={it.img} alt={it.title} width={800} height={600} className="rounded-xl" />
            <h2 className="mt-3 font-semibold">{it.title}</h2>
            <a
              href={getTikTokLink(it.url)}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-teal-600 font-medium mt-1 inline-block"
            >
              View on TikTok →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
