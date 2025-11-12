import { getTikTokLink } from "../../lib/links";

export default function Page() {
  const items = [
    { title: "Ring Light Portable", img: "/images/makeup-light.webp", url: "https://www.tiktok.com/@shop/XYZ123", price: "£19.90", desc: "Illuminazione perfetta per video e selfie." },
    { title: "Mini Fan Wireless", img: "/images/mini-fan.webp", url: "https://www.tiktok.com/@shop/ABC456", price: "£14.90", desc: "Compatto e ricaricabile per l'estate." },
    { title: "LED Strip RGB", img: "/images/led-strip.webp", url: "https://www.tiktok.com/@shop/DEF789", price: "£12.50", desc: "Atmosfera colorata per ogni stanza." },
  ];

  return (
    <main className="p-8 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-6">TikTok Trends · AcrossBay</h1>
      <p className="mb-8 text-gray-600">I gadget virali più popolari su TikTok: smart, utili e fotogenici.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((it, i) => (
          <div key={i} className="border rounded-2xl p-4 shadow-sm">
            <img src={it.img} alt={it.title} className="rounded-xl mb-3" />
            <h2 className="font-semibold text-lg mb-1">{it.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{it.desc}</p>
            <p className="text-sm mb-4">{it.price}</p>
            <a href={getTikTokLink(it.url)} className="text-teal-600 font-semibold" target="_blank" rel="noreferrer">View on TikTok →</a>
          </div>
        ))}
      </div>
    </main>
  );
}
